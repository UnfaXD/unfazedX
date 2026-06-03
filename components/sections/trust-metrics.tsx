import { Container } from "@/components/site/container";
import { Counter } from "@/components/site/counter";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { trustMetrics } from "@/lib/brand";

export function TrustMetrics() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="border-y border-border/60 py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <h2
            id="trust-heading"
            className="text-muted-foreground mb-12 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            <span className="text-lime">●</span> Numbers, not narratives
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 lg:grid-cols-4">
          {trustMetrics.map((metric) => (
            <RevealItem
              key={metric.label}
              className="bg-background flex flex-col gap-3 p-6 sm:p-10"
            >
              <Counter
                to={metric.value}
                prefix={"prefix" in metric ? metric.prefix : ""}
                suffix={metric.suffix}
                className="font-sans text-5xl font-bold uppercase tracking-tight sm:text-6xl lg:text-7xl"
              />
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                {metric.label}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
