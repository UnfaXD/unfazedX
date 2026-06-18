import { NextResponse } from "next/server";
import crypto from "crypto";
import {
  type AnalyticsData,
  type NamedCount,
  type TimePoint,
  demoAnalytics,
} from "@/lib/analytics-types";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function rangeToDays(range: string | null): number {
  if (range === "7d") return 7;
  if (range === "90d") return 90;
  return 28;
}

function base64url(input: string | Buffer): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function getAccessToken(
  clientEmail: string,
  privateKey: string,
): Promise<string | null> {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64url(
    JSON.stringify({
      iss: clientEmail,
      scope: "https://www.googleapis.com/auth/analytics.readonly",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    }),
  );
  const unsigned = `${header}.${claim}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(unsigned);
  signer.end();
  const signature = signer.sign(privateKey).toString("base64");
  const jwt = `${unsigned}.${signature
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  if (!res.ok) return null;
  const json = (await res.json()) as { access_token?: string };
  return json.access_token ?? null;
}

interface ReportRow {
  dimensionValues?: { value?: string }[];
  metricValues?: { value?: string }[];
}
interface ReportResponse {
  rows?: ReportRow[];
}

async function runReport(
  token: string,
  propertyId: string,
  body: Record<string, unknown>,
): Promise<ReportResponse> {
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  );
  if (!res.ok) throw new Error(`GA4 report failed: ${res.status}`);
  return (await res.json()) as ReportResponse;
}

function toNamed(resp: ReportResponse): NamedCount[] {
  return (resp.rows ?? []).map((r) => ({
    label: r.dimensionValues?.[0]?.value ?? "(unknown)",
    value: Number(r.metricValues?.[0]?.value ?? 0),
  }));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const days = rangeToDays(searchParams.get("range"));

  const propertyId = process.env.GA4_PROPERTY_ID;
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  // No credentials configured → return clearly-labelled demo data.
  if (!propertyId || !clientEmail || !privateKey) {
    return NextResponse.json(demoAnalytics(days));
  }

  try {
    const token = await getAccessToken(clientEmail, privateKey);
    if (!token) return NextResponse.json(demoAnalytics(days));

    const dateRanges = [{ startDate: `${days}daysAgo`, endDate: "today" }];

    const [totalsR, seriesR, pagesR, sourcesR, countriesR, devicesR] =
      await Promise.all([
        runReport(token, propertyId, {
          dateRanges,
          metrics: [
            { name: "totalUsers" },
            { name: "screenPageViews" },
            { name: "averageSessionDuration" },
            { name: "bounceRate" },
          ],
        }),
        runReport(token, propertyId, {
          dateRanges,
          dimensions: [{ name: "date" }],
          metrics: [{ name: "totalUsers" }],
          orderBys: [{ dimension: { dimensionName: "date" } }],
        }),
        runReport(token, propertyId, {
          dateRanges,
          dimensions: [{ name: "pagePath" }],
          metrics: [{ name: "screenPageViews" }],
          orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
          limit: 8,
        }),
        runReport(token, propertyId, {
          dateRanges,
          dimensions: [{ name: "sessionDefaultChannelGroup" }],
          metrics: [{ name: "totalUsers" }],
          orderBys: [{ metric: { metricName: "totalUsers" }, desc: true }],
          limit: 6,
        }),
        runReport(token, propertyId, {
          dateRanges,
          dimensions: [{ name: "country" }],
          metrics: [{ name: "totalUsers" }],
          orderBys: [{ metric: { metricName: "totalUsers" }, desc: true }],
          limit: 6,
        }),
        runReport(token, propertyId, {
          dateRanges,
          dimensions: [{ name: "deviceCategory" }],
          metrics: [{ name: "totalUsers" }],
          orderBys: [{ metric: { metricName: "totalUsers" }, desc: true }],
        }),
      ]);

    const tRow = totalsR.rows?.[0]?.metricValues ?? [];
    const timeseries: TimePoint[] = (seriesR.rows ?? []).map((r) => {
      const raw = r.dimensionValues?.[0]?.value ?? "";
      const date =
        raw.length === 8
          ? `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`
          : raw;
      return { date, visitors: Number(r.metricValues?.[0]?.value ?? 0) };
    });

    const data: AnalyticsData = {
      isDemo: false,
      rangeDays: days,
      totals: {
        visitors: Number(tRow[0]?.value ?? 0),
        pageviews: Number(tRow[1]?.value ?? 0),
        avgEngagementSec: Math.round(Number(tRow[2]?.value ?? 0)),
        bounceRatePct: Math.round(Number(tRow[3]?.value ?? 0) * 100),
      },
      timeseries,
      topPages: toNamed(pagesR),
      sources: toNamed(sourcesR),
      countries: toNamed(countriesR),
      devices: toNamed(devicesR),
    };
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(demoAnalytics(days));
  }
}
