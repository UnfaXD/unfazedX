import { Container } from "@/components/site/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { testimonials } from "@/lib/brand";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative border-y border-border/60 bg-card/50 py-28 sm:py-40"
    >
      <Container>
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <p className="text-lime mb-6 text-xs font-semibold uppercase tracking-[0.25em]">
              ● Testimonials
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              id="testimonials-heading"
              className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Trusted by
              <br />
              <span className="text-muted-foreground italic font-light">
                operators
              </span>{" "}
              we build with.
            </h2>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <RevealItem
              key={testimonial.author}
              className="group border-border bg-background hover:border-lime/30 relative flex flex-col gap-6 rounded-3xl border p-8 transition-all duration-500 sm:p-10"
            >
              <span
                aria-hidden="true"
                className="text-lime/40 font-sans text-6xl leading-none"
              >
                "
              </span>
              <blockquote className="text-foreground text-balance text-xl leading-relaxed sm:text-2xl">
                {testimonial.quote}
              </blockquote>
              <footer className="mt-auto flex items-center gap-4 border-t border-border/60 pt-6">
                <div
                  aria-hidden="true"
                  className="bg-lime text-lime-foreground inline-flex size-11 items-center justify-center rounded-full font-sans text-base font-bold"
                >
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="font-sans text-base font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </footer>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
