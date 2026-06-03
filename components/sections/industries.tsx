import { Container } from "@/components/site/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { industries } from "@/lib/brand";

export function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-heading"
      className="relative py-28 sm:py-40"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-lime mb-6 text-xs font-semibold uppercase tracking-[0.25em]">
                ● Industries
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="industries-heading"
                className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Sectors
                <br />
                <span className="text-muted-foreground italic font-light">
                  we own.
                </span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="text-muted-foreground text-base sm:text-lg">
                Vertical depth across the markets shaping Africa's economic future.
                We don't dabble — we go deep.
              </p>
            </Reveal>
          </div>
        </div>

        <RevealStagger className="mt-16 flex flex-wrap gap-3 sm:gap-4">
          {industries.map((industry) => (
            <RevealItem key={industry}>
              <span className="border-border bg-card hover:border-lime hover:text-lime hover:bg-lime/5 inline-flex cursor-default items-center gap-2 rounded-full border px-5 py-3 font-sans text-base font-semibold uppercase tracking-tight transition-all duration-500 hover:-translate-y-0.5 sm:text-lg lg:text-xl">
                <span className="bg-lime size-1.5 rounded-full" aria-hidden />
                {industry}
              </span>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
