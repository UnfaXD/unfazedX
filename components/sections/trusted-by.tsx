import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { clients } from "@/lib/brand";

export function TrustedBy() {
  // Real clients & partners only — ventures are shown separately.
  const names = clients.filter((c) => c.status !== "Venture");

  return (
    <section
      aria-label="Trusted by"
      className="border-y border-border/60 bg-card/30 py-10"
    >
      <Container>
        <Reveal>
          <p className="text-muted-foreground mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em]">
            Trusted by teams at
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-14">
            {names.map((c) => (
              <li
                key={c.name}
                className="text-foreground/45 hover:text-foreground font-sans text-lg font-bold uppercase tracking-tight transition-colors duration-300 sm:text-2xl"
              >
                {c.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
