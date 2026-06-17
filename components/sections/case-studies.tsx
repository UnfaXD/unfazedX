import { Container } from "@/components/site/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { caseStudies } from "@/lib/brand";

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="relative border-y border-border/60 bg-card/40 py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-bg-sm opacity-30 radial-fade"
      />
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="text-lime mb-6 text-xs font-semibold uppercase tracking-[0.25em]">
                ● Case studies
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="case-studies-heading"
                className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Proof,
                <br />
                <span className="text-muted-foreground italic font-light">
                  not promises.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-md text-base sm:text-lg">
              A closer look at real engagements — the challenge, what we did, and
              the result.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="flex flex-col gap-5">
          {caseStudies.map((cs, idx) => (
            <RevealItem
              key={cs.client}
              className="group border-border/60 bg-background hover:border-lime/40 relative overflow-hidden rounded-3xl border p-7 transition-all duration-500 sm:p-9"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-4">
                  <span className="text-muted-foreground/60 font-mono text-xs">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-sans text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                    {cs.client}
                  </h3>
                  <p className="text-lime mt-1 text-xs font-semibold uppercase tracking-wider">
                    {cs.sector}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cs.tags.map((t) => (
                      <li
                        key={t}
                        className="border-border bg-secondary text-muted-foreground rounded-full border px-2.5 py-1 text-xs font-medium"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-5 sm:grid-cols-3 lg:col-span-8">
                  <div>
                    <p className="text-muted-foreground/70 mb-1.5 text-xs font-semibold uppercase tracking-wider">
                      Challenge
                    </p>
                    <p className="text-foreground/85 text-sm leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground/70 mb-1.5 text-xs font-semibold uppercase tracking-wider">
                      What we did
                    </p>
                    <p className="text-foreground/85 text-sm leading-relaxed">
                      {cs.approach}
                    </p>
                  </div>
                  <div>
                    <p className="text-lime/80 mb-1.5 text-xs font-semibold uppercase tracking-wider">
                      Result
                    </p>
                    <p className="text-foreground text-sm font-medium leading-relaxed">
                      {cs.result}
                    </p>
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.15}>
          <p className="text-muted-foreground mt-8 text-center text-sm">
            Want your project featured here next?{" "}
            <a
              href="#cta"
              className="text-foreground hover:text-lime font-semibold transition-colors"
            >
              Let&apos;s build it →
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
