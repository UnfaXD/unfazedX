import { Container } from "@/components/site/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { ventures } from "@/lib/brand";

export function Ventures() {
  return (
    <section
      id="ventures"
      aria-labelledby="ventures-heading"
      className="relative py-20 sm:py-28"
    >
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
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
                  we're
                </span>{" "}
                building.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-md text-base sm:text-lg">
              Proprietary technology ventures designed to solve real-world
              problems and create long-term value across African markets.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="divide-border/60 border-border/60 divide-y border-y">
          {ventures.map((venture, idx) => (
            <RevealItem key={venture.name}>
              <article className="group hover:bg-card grid grid-cols-12 items-start gap-4 px-2 py-8 transition-colors duration-500 sm:px-4 sm:py-10">
                <div className="col-span-12 flex items-baseline gap-4 sm:col-span-5">
                  <span className="text-muted-foreground hidden font-mono text-xs sm:inline">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-balance font-sans text-3xl font-bold uppercase leading-none tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-5xl lg:text-6xl">
                    {venture.name}
                  </h3>
                </div>
                <div className="col-span-12 flex items-center gap-2 sm:col-span-3 sm:flex-col sm:items-start sm:gap-2">
                  <span className="text-muted-foreground text-xs uppercase tracking-wider sm:text-sm">
                    {venture.sector}
                  </span>
                  <span className="border-border bg-secondary inline-flex rounded-full border px-2.5 py-1 text-xs font-medium">
                    {venture.stage}
                  </span>
                </div>
                <p className="text-muted-foreground col-span-12 max-w-2xl text-sm leading-relaxed sm:col-span-4 sm:text-base">
                  {venture.description}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
