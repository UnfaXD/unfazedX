import { Container } from "@/components/site/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { portfolioShowcase } from "@/lib/brand";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative py-28 sm:py-40"
    >
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="text-lime mb-6 text-xs font-semibold uppercase tracking-[0.25em]">
                ● Portfolio showcase
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="portfolio-heading"
                className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Selected
                <br />
                <span className="text-muted-foreground italic font-light">
                  case
                </span>{" "}
                studies.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-md text-base sm:text-lg">
              Real products, real markets, real outcomes.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {portfolioShowcase.map((item, idx) => (
            <RevealItem
              key={item.title}
              className={`group relative isolate overflow-hidden rounded-3xl border border-border/60 bg-card transition-all duration-700 hover:-translate-y-1 hover:border-border ${
                idx === 0 || idx === 3 ? "lg:row-span-1" : ""
              }`}
            >
              <div className="grid h-full grid-rows-[1fr_auto]">
                <div className="relative h-72 overflow-hidden sm:h-80">
                  <div
                    aria-hidden="true"
                    className={`bg-gradient-to-br ${item.gradient} absolute inset-0 opacity-90 transition-transform duration-1000 group-hover:scale-110`}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 mix-blend-overlay grid-bg-sm opacity-40"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-8">
                    <span
                      className="font-sans text-7xl font-bold uppercase tracking-tighter text-black/80 sm:text-8xl"
                    >
                      {item.metric}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-6 border-t border-border/60 p-6 sm:p-8">
                  <div>
                    <h3 className="font-sans text-2xl font-bold uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {item.subtitle} · {item.metricLabel}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="bg-secondary text-muted-foreground group-hover:bg-lime group-hover:text-lime-foreground inline-flex size-11 shrink-0 items-center justify-center rounded-full text-xl transition-all duration-500 group-hover:rotate-45"
                  >
                    ↗
                  </span>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
