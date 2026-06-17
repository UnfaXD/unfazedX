import { Container } from "@/components/site/container";
import { ExternalLinkIcon } from "@/components/site/icons";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { services } from "@/lib/brand";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-bg-sm opacity-40 radial-fade"
      />
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="text-lime mb-6 text-xs font-semibold uppercase tracking-[0.25em]">
                ● Capabilities
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="services-heading"
                className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Every layer
                <br />
                of the stack.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-md text-base sm:text-lg">
              Strategy, design, engineering, AI, infrastructure, and growth —
              integrated end-to-end so ambitious products ship fast and scale safely.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem
              key={service.id}
              className="group border-border bg-card hover:border-lime/40 relative flex flex-col gap-6 overflow-hidden rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(143,249,1,0.18)]"
            >
              <div
                aria-hidden="true"
                className="from-lime/0 via-lime/0 to-lime/0 group-hover:from-lime/10 absolute -top-32 -right-32 size-64 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
              />
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-mono text-xs font-medium">
                  {service.id}
                </span>
                <ExternalLinkIcon className="text-muted-foreground group-hover:text-lime size-4 transition-colors duration-500 group-hover:rotate-45 transform-gpu" />
              </div>
              <h3 className="font-sans text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {service.description}
              </p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                {service.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="border-border bg-secondary text-muted-foreground rounded-full border px-2.5 py-1 text-xs font-medium"
                  >
                    {cap}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
