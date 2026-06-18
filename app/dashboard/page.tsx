import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/site/container";
import { Logo } from "@/components/site/logo";
import { VisitorDashboard } from "@/components/dashboard/visitor-dashboard";

export const metadata: Metadata = {
  title: "Visitor Dashboard",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return (
    <div className="min-h-[100svh]">
      <header className="border-border/60 sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
        <Container className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-muted-foreground hidden text-xs font-semibold uppercase tracking-wider sm:inline">
              · Dashboard
            </span>
          </div>
          <Link
            href="/"
            className="border-border bg-secondary/40 text-foreground hover:bg-secondary inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
          >
            View site →
          </Link>
        </Container>
      </header>

      <main className="py-10 sm:py-14">
        <Container>
          <VisitorDashboard />
          <p className="text-muted-foreground/60 mt-10 text-center text-xs">
            Private dashboard · protect this route with host-level auth before
            deploying.
          </p>
        </Container>
      </main>
    </div>
  );
}
