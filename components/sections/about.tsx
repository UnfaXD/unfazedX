import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { brand } from "@/lib/brand";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative py-20 sm:py-28"
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
                  built in
                </span>{" "}
                Kigali.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <Reveal delay={0.1}>
              <p className="text-foreground/90 text-balance text-xl leading-relaxed sm:text-2xl">
                We don&apos;t consult. We don&apos;t ship features. We{" "}
                <span className="text-lime">build, launch, grow, and scale</span>{" "}
                digital products — and our own ventures — from Kigali, Rwanda.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
                Founded in {brand.founded} by{" "}
                <span className="text-foreground">{brand.founder.shortName}</span>,
                UnfazedX Holdings operates as both a digital transformation partner
                for organizations and a creator of proprietary technology products.
                Engineering excellence, human-centered design, strategic marketing,
                and operational expertise — under one roof, delivering measurable
                business outcomes for SMEs and startups across Africa and Asia.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-12 grid grid-cols-3 gap-6 border-t border-border/60 pt-10">
              {[
                { label: "Founded", value: brand.founded },
                { label: "HQ", value: brand.city },
                { label: "Team", value: `${brand.team}+` },
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
