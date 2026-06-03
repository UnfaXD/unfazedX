import { Container } from "@/components/site/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { ventures } from "@/lib/brand";

export function Ventures() {
  return (
    <section
      id="ventures"
      aria-labelledby="ventures-heading"
      className="relative py-28 sm:py-40"
    >
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="text-lime mb-6 text-xs font-semibold uppercase tracking-[0.25em]">
                ● Ventures portfolio
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="ventures-heading"
                className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Companies
                <br />
                <span className="text-muted-foreground italic font-light">
                  in our
                </span>{" "}
                stable.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href="#cta"
              className="border-border text-foreground hover:border-lime/60 hover:text-lime inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
            >
              View all ventures <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <RevealStagger className="divide-border/60 border-border/60 divide-y border-y">
          {ventures.map((venture) => (
            <RevealItem key={venture.name}>
              <a
                href="#cta"
                className="group hover:bg-card focus-visible:bg-card grid grid-cols-12 items-center gap-4 px-2 py-6 transition-colors duration-500 sm:px-4 sm:py-8"
              >
                <div className="col-span-9 flex items-baseline gap-4 sm:col-span-5">
                  <span className="text-muted-foreground hidden font-mono text-xs sm:inline">
                    {String(ventures.indexOf(venture) + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-balance font-sans text-3xl font-bold uppercase leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl lg:text-6xl">
                    {venture.name}
                  </h3>
                </div>
                <div className="hidden sm:col-span-3 sm:block">
                  <span className="text-muted-foreground text-sm uppercase tracking-wider">
                    {venture.sector}
                  </span>
                </div>
                <div className="hidden sm:col-span-3 sm:block">
                  <span className="border-border bg-secondary inline-flex rounded-full border px-2.5 py-1 text-xs font-medium">
                    {venture.stage}
                  </span>
                </div>
                <div className="col-span-3 flex justify-end sm:col-span-1">
                  <span
                    aria-hidden="true"
                    className="text-muted-foreground group-hover:text-lime text-2xl transition-all duration-500 group-hover:rotate-45"
                  >
                    ↗
                  </span>
                </div>
                <p className="text-muted-foreground col-span-12 max-w-2xl text-sm leading-relaxed sm:hidden">
                  {venture.description}
                </p>
              </a>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
