import { Container } from "@/components/site/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { coreValues } from "@/lib/brand";

export function CoreValues() {
  return (
    <section
      id="values"
      aria-labelledby="values-heading"
      className="relative border-y border-border/60 py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-bg radial-fade opacity-40"
      />
      <Container>
        <div className="mb-12 max-w-3xl">
          <Reveal>
            <p className="text-lime mb-6 text-xs font-semibold uppercase tracking-[0.25em]">
              ● Core values
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="values-heading"
              className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl"
            >
              What we
              <br />
              <span className="text-muted-foreground italic font-light">
                stand
              </span>{" "}
              for.
            </h2>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {coreValues.map((value, idx) => (
            <RevealItem
              key={value.title}
              className="group border-border bg-card hover:border-lime/50 relative flex flex-col gap-4 overflow-hidden rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground group-hover:text-lime font-mono text-xs transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden="true"
                  className="bg-lime size-2 rounded-full opacity-30 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <h3 className="font-sans text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {value.description}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
