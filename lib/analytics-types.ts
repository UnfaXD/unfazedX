export type NamedCount = { label: string; value: number };
export type TimePoint = { date: string; visitors: number };

export type AnalyticsData = {
  isDemo: boolean;
  rangeDays: number;
  totals: {
    visitors: number;
    pageviews: number;
    avgEngagementSec: number;
    bounceRatePct: number;
  };
  timeseries: TimePoint[];
  topPages: NamedCount[];
  sources: NamedCount[];
  countries: NamedCount[];
  devices: NamedCount[];
};

// Deterministic-ish demo data so the dashboard renders before GA4 is connected.
export function demoAnalytics(rangeDays: number): AnalyticsData {
  const timeseries: TimePoint[] = [];
  let total = 0;
  for (let i = rangeDays - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const base = 18 + Math.round(14 * Math.sin(i / 3)) + (i % 7 < 2 ? -6 : 4);
    const visitors = Math.max(4, base + ((i * 7) % 11));
    total += visitors;
    timeseries.push({ date: d.toISOString().slice(0, 10), visitors });
  }
  return {
    isDemo: true,
    rangeDays,
    totals: {
      visitors: total,
      pageviews: Math.round(total * 2.6),
      avgEngagementSec: 74,
      bounceRatePct: 42,
    },
    timeseries,
    topPages: [
      { label: "/", value: Math.round(total * 0.9) },
      { label: "/newsletter", value: Math.round(total * 0.5) },
      { label: "/#pricing", value: Math.round(total * 0.34) },
      { label: "/#projects", value: Math.round(total * 0.27) },
      { label: "/newsletter/how-much-website-cost-rwanda", value: Math.round(total * 0.2) },
    ],
    sources: [
      { label: "Organic Search", value: Math.round(total * 0.41) },
      { label: "Direct", value: Math.round(total * 0.27) },
      { label: "Social", value: Math.round(total * 0.21) },
      { label: "Referral", value: Math.round(total * 0.11) },
    ],
    countries: [
      { label: "Rwanda", value: Math.round(total * 0.62) },
      { label: "Kenya", value: Math.round(total * 0.12) },
      { label: "Uganda", value: Math.round(total * 0.08) },
      { label: "United States", value: Math.round(total * 0.07) },
      { label: "United Kingdom", value: Math.round(total * 0.05) },
    ],
    devices: [
      { label: "Mobile", value: Math.round(total * 0.68) },
      { label: "Desktop", value: Math.round(total * 0.27) },
      { label: "Tablet", value: Math.round(total * 0.05) },
    ],
  };
}
