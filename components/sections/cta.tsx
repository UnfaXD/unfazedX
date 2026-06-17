import { Container } from "@/components/site/container";
import { WhatsAppIcon } from "@/components/site/icons";
import { Marquee } from "@/components/site/marquee";
import { ProjectForm } from "@/components/site/project-form";
import { Reveal } from "@/components/site/reveal";
import { brand, marqueeWords } from "@/lib/brand";

export function CTA() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="bg-lime/20 pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] animate-blob"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-bg radial-fade"
      />

      <Container>
        <Reveal>
          <p className="text-lime mb-6 text-center text-xs font-semibold uppercase tracking-[0.25em]">
            ● Let&apos;s build
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="cta-heading"
            className="text-balance mx-auto max-w-5xl text-center font-sans text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-8xl"
          >
            Got an idea worth
            <br />
            <span className="text-lime">building?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-muted-foreground mx-auto mt-8 max-w-xl text-center text-lg leading-relaxed sm:text-xl">
            We partner with ambitious founders, SMEs, and organizations to
            transform concepts into products, businesses into brands, and
            challenges into opportunities — through technology.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={brand.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Start a project on WhatsApp · ${brand.phone}`}
              className="bg-lime text-lime-foreground group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition-transform hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(143,249,1,0.55)] sm:w-auto"
            >
              <WhatsAppIcon className="size-5" />
              Start a project on WhatsApp
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href={`mailto:${brand.email}?subject=Let%27s%20build%20together`}
              className="border-border text-foreground hover:border-lime/60 inline-flex w-full items-center justify-center gap-2 rounded-full border px-7 py-4 text-base font-semibold transition-colors sm:w-auto"
            >
              Or email us
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.18}>
          <ProjectForm />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-muted-foreground mt-6 text-center text-sm">
            Email:{" "}
            <a
              href={`mailto:${brand.email}`}
              className="text-foreground hover:text-lime font-semibold transition-colors"
            >
              {brand.email}
            </a>{" "}
            · Call:{" "}
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="text-foreground hover:text-lime font-semibold transition-colors"
            >
              {brand.phone}
            </a>
          </p>
        </Reveal>
      </Container>

      <div className="mt-16 border-t border-border/60 py-6">
        <Marquee
          items={[...marqueeWords, "Let's build", "Kigali", "Africa"]}
          speed="normal"
        />
      </div>
    </section>
  );
}
