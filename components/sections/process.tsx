import { Container } from "@/components/site/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { processSteps } from "@/lib/brand";

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative border-y border-border/60 bg-card/50 py-20 sm:py-28"
    >
      <Container>
        <div className="mb-12 max-w-3xl">
          <Reveal>
            <p className="text-lime mb-6 text-xs font-semibold uppercase tracking-[0.25em]">
              ● Process
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="process-heading"
              className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl"
            >
              From thesis
              <br />
              <span className="text-muted-foreground italic font-light">to</span>{" "}
              category leader.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground mt-6 text-base sm:text-lg">
              A repeatable five-stage operating model proven across every venture
              we've launched.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="relative">
          <div
            aria-hidden="true"
            className="bg-border/60 absolute top-0 bottom-0 left-[1.65rem] hidden w-px sm:block"
          />
          {processSteps.map((step) => (
            <RevealItem
              key={step.step}
              className="group relative grid grid-cols-1 gap-4 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-8 sm:py-10"
            >
              <div className="relative z-10 flex sm:justify-center">
                <div className="border-border bg-background group-hover:border-lime group-hover:bg-lime group-hover:text-lime-foreground flex size-14 items-center justify-center rounded-full border-2 font-mono text-sm font-bold transition-all duration-500">
                  {step.step}
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:pt-2">
                <h3 className="font-sans text-3xl font-bold uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
                  {step.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
