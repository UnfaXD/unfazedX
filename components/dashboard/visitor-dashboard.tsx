"use client";

import * as React from "react";
import type { AnalyticsData, NamedCount } from "@/lib/analytics-types";

const RANGES = [
  { key: "7d", label: "7 days" },
  { key: "28d", label: "28 days" },
  { key: "90d", label: "90 days" },
] as const;

function fmt(n: number) {
  return new Intl.NumberFormat("en-US").format(n);
}
function fmtDuration(sec: number) {
  const m = Math.floor(sec / 60);
  const s = Math.round(sec % 60);
  return `${m}m ${s}s`;
}

function AreaChart({ data }: { data: { date: string; visitors: number }[] }) {
  const W = 760;
  const H = 220;
  const pad = 8;
  if (data.length === 0) return null;
  const max = Math.max(...data.map((d) => d.visitors), 1);
  const stepX = (W - pad * 2) / Math.max(data.length - 1, 1);
  const pts = data.map((d, i) => {
    const x = pad + i * stepX;
    const y = pad + (1 - d.visitors / max) * (H - pad * 2);
    return [x, y] as const;
  });
  const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const area = `${line} L${pts[pts.length - 1][0].toFixed(1)},${H - pad} L${pts[0][0].toFixed(1)},${H - pad} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-56 w-full" preserveAspectRatio="none" role="img" aria-label="Visitors over time">
      <defs>
        <linearGradient id="vg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--lime)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--lime)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#vg)" />
      <path d={line} fill="none" stroke="var(--lime)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function BarList({ title, items }: { title: string; items: NamedCount[] }) {
  const max = Math.max(...items.map((i) => i.value), 1);
  return (
    <div className="border-border/60 bg-card rounded-2xl border p-6">
      <h2 className="text-muted-foreground mb-4 text-xs font-semibold uppercase tracking-wider">
        {title}
      </h2>
      <ul className="flex flex-col gap-3">
        {items.length === 0 ? (
          <li className="text-muted-foreground text-sm">No data yet.</li>
        ) : (
          items.map((it) => (
            <li key={it.label}>
              <div className="mb-1 flex items-center justify-between gap-3 text-sm">
                <span className="text-foreground/90 truncate">{it.label}</span>
                <span className="text-muted-foreground shrink-0 tabular-nums">
                  {fmt(it.value)}
                </span>
              </div>
              <div className="bg-secondary h-1.5 w-full overflow-hidden rounded-full">
                <div
                  className="bg-lime h-full rounded-full"
                  style={{ width: `${(it.value / max) * 100}%` }}
                />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-border/60 bg-card rounded-2xl border p-5">
      <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">
        {label}
      </p>
      <p className="mt-2 font-sans text-3xl font-bold tracking-tight">{value}</p>
    </div>
  );
}

export function VisitorDashboard() {
  const [range, setRange] = React.useState<(typeof RANGES)[number]["key"]>("28d");
  const [data, setData] = React.useState<AnalyticsData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    let active = true;
    fetch(`/api/analytics?range=${range}`)
      .then((r) => r.json())
      .then((d: AnalyticsData) => {
        if (active) {
          setData(d);
          setError(false);
        }
      })
      .catch(() => {
        if (active) setError(true);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [range]);

  function selectRange(key: (typeof RANGES)[number]["key"]) {
    if (key === range) return;
    setLoading(true);
    setRange(key);
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-sans text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Visitor analytics
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Traffic to unfazedx.com {data ? `· last ${data.rangeDays} days` : ""}
          </p>
        </div>
        <div className="flex gap-1 self-start rounded-full border border-border/60 bg-card p-1">
          {RANGES.map((r) => (
            <button
              key={r.key}
              type="button"
              onClick={() => selectRange(r.key)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                range === r.key
                  ? "bg-lime text-lime-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {data?.isDemo ? (
        <div className="border-lime/40 bg-lime/5 text-foreground/90 rounded-xl border px-4 py-3 text-sm">
          Showing <strong>sample data</strong>. Connect Google Analytics
          (add the env keys — see the setup guide) to see your real visitors.
        </div>
      ) : null}

      {loading ? (
        <p className="text-muted-foreground py-20 text-center text-sm">
          Loading analytics…
        </p>
      ) : error || !data ? (
        <p className="text-muted-foreground py-20 text-center text-sm">
          Couldn&apos;t load analytics. Try again shortly.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <Kpi label="Visitors" value={fmt(data.totals.visitors)} />
            <Kpi label="Page views" value={fmt(data.totals.pageviews)} />
            <Kpi label="Avg. engagement" value={fmtDuration(data.totals.avgEngagementSec)} />
            <Kpi label="Bounce rate" value={`${data.totals.bounceRatePct}%`} />
          </div>

          <div className="border-border/60 bg-card rounded-2xl border p-6">
            <h2 className="text-muted-foreground mb-4 text-xs font-semibold uppercase tracking-wider">
              Visitors over time
            </h2>
            <AreaChart data={data.timeseries} />
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <BarList title="Top pages" items={data.topPages} />
            <BarList title="Traffic sources" items={data.sources} />
            <BarList title="Top countries" items={data.countries} />
            <BarList title="Devices" items={data.devices} />
          </div>
        </>
      )}
    </div>
  );
}
