import { Container } from "@/components/site/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { clients } from "@/lib/brand";

export function Testimonials() {
  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="relative border-y border-border/60 bg-card/50 py-20 sm:py-28"
    >
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="text-lime mb-6 text-xs font-semibold uppercase tracking-[0.25em]">
                ● Clients & collaborations
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="clients-heading"
                className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Teams we've
                <br />
                <span className="text-muted-foreground italic font-light">
                  built
                </span>{" "}
                with.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-md text-base sm:text-lg">
              From education and tech to product startups and our own ventures
              — a selected history of clients, partners, and proprietary
              programs.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <RevealItem
              key={client.name}
              className="bg-background group relative flex flex-col gap-4 p-7 transition-colors duration-500 hover:bg-card sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                    client.status === "Venture"
                      ? "border-lime/40 bg-lime/10 text-lime"
                      : client.status === "Partner"
                        ? "border-border bg-secondary text-foreground"
                        : "border-border bg-secondary text-muted-foreground"
                  }`}
                >
                  <span
                    className={`size-1.5 rounded-full ${client.status === "Venture" ? "bg-lime" : "bg-muted-foreground"}`}
                    aria-hidden
                  />
                  {client.status}
                </span>
                <span
                  aria-hidden="true"
                  className="text-muted-foreground group-hover:text-lime text-lg transition-colors"
                >
                  ↗
                </span>
              </div>
              <h3 className="font-sans text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                {client.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {client.description}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
