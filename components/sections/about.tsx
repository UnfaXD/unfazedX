import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-28 sm:py-40"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-lime mb-6 text-xs font-semibold uppercase tracking-[0.25em]">
                ● About UnfazedX
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="about-heading"
                className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl"
              >
                A venture studio
                <br />
                <span className="text-muted-foreground italic font-light">
                  engineered
                </span>{" "}
                for Africa.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <Reveal delay={0.1}>
              <p className="text-foreground/90 text-balance text-xl leading-relaxed sm:text-2xl">
                We don't consult. We don't ship features. We build, fund, and scale
                ventures from <span className="text-lime">zero to category leader</span>.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
                UnfazedX brings together world-class product strategists, designers,
                and engineers under one roof — operating with the discipline of a
                Fortune 500 product org and the velocity of a seed-stage startup.
                Every venture we touch is built to win, measured by markets, and
                engineered to last.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-10">
              {[
                { label: "Founded", value: "2023" },
                { label: "Studios", value: "4" },
                { label: "Operators", value: "60+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-sans text-3xl font-bold sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground mt-1 text-xs font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
