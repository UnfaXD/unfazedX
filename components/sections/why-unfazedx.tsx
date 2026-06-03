import { Container } from "@/components/site/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { whyUnfazedX } from "@/lib/brand";

export function WhyUnfazedX() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative border-y border-border/60 bg-card/50 py-28 sm:py-40"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-lime mb-6 text-xs font-semibold uppercase tracking-[0.25em]">
                ● Why UnfazedX
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="why-heading"
                className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Built different.
                <br />
                <span className="text-muted-foreground italic font-light">
                  By design.
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <RevealStagger className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2">
              {whyUnfazedX.map((item, idx) => (
                <RevealItem
                  key={item.title}
                  className="bg-card group relative flex flex-col gap-3 p-7 transition-colors duration-500 hover:bg-secondary/50 sm:p-9"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lime font-mono text-xs">0{idx + 1}</span>
                    <div className="bg-border h-px flex-1" />
                  </div>
                  <h3 className="font-sans text-2xl font-bold uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {item.description}
                  </p>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
