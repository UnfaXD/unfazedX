import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { brand, faqs } from "@/lib/brand";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-20 sm:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-lime mb-6 text-xs font-semibold uppercase tracking-[0.25em]">
                ● FAQ
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="faq-heading"
                className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl"
              >
                Questions,
                <br />
                <span className="text-muted-foreground italic font-light">
                  answered.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground mt-6 max-w-sm text-base">
                Still unsure?{" "}
                <a
                  href={brand.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-lime font-semibold transition-colors"
                >
                  Message us on WhatsApp
                </a>{" "}
                and we&apos;ll answer fast.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="divide-border/60 border-border/60 divide-y overflow-hidden rounded-3xl border">
                {faqs.map((item) => (
                  <details key={item.q} className="group bg-card/40">
                    <summary className="hover:bg-card flex cursor-pointer list-none items-center justify-between gap-4 p-6 transition-colors [&::-webkit-details-marker]:hidden">
                      <span className="font-sans text-lg font-semibold tracking-tight">
                        {item.q}
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-muted-foreground group-open:bg-lime group-open:text-lime-foreground group-open:rotate-45 flex size-7 shrink-0 items-center justify-center rounded-full border border-border text-lg transition-all duration-300"
                      >
                        +
                      </span>
                    </summary>
                    <div className="text-muted-foreground px-6 pb-6 text-base leading-relaxed">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
