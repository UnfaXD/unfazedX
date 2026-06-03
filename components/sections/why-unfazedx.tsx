import { Container } from "@/components/site/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { whyUnfazedX } from "@/lib/brand";

export function WhyUnfazedX() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative border-y border-border/60 bg-card/50 py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
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
                Five reasons.
                <br />
                <span className="text-muted-foreground italic font-light">
                  Zero
                </span>{" "}
                excuses.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground mt-6 max-w-md text-base sm:text-lg">
                Bridging the gap between ambitious ideas and successful execution
                — for every business, regardless of size.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <RevealStagger className="divide-border/60 border-border/60 divide-y border-y">
              {whyUnfazedX.map((item, idx) => (
                <RevealItem
                  key={item.title}
                  className="group grid grid-cols-12 items-baseline gap-4 py-7 transition-colors sm:py-9"
                >
                  <span className="text-muted-foreground group-hover:text-lime col-span-2 font-mono text-xs transition-colors sm:col-span-1">
                    0{idx + 1}
                  </span>
                  <h3 className="text-balance col-span-10 font-sans text-3xl font-bold uppercase leading-[0.95] tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:col-span-5 sm:text-5xl lg:text-6xl">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground col-span-12 max-w-lg text-base leading-relaxed sm:col-span-6 sm:text-lg">
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
