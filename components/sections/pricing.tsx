import { Container } from "@/components/site/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { WhatsAppIcon } from "@/components/site/icons";
import { brand, packages } from "@/lib/brand";

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
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
                ● Packages
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="pricing-heading"
                className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Clear pricing.
                <br />
                <span className="text-muted-foreground italic font-light">
                  No surprises.
                </span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-md text-base sm:text-lg">
              Transparent packages built for Rwandan businesses. Pay by MoMo or
              bank, installments available, and you approve the design before
              the final payment.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <RevealItem
              key={pkg.name}
              className={`group relative flex flex-col gap-5 overflow-hidden rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1 ${
                pkg.featured
                  ? "border-lime bg-card shadow-[0_24px_48px_-24px_rgba(143,249,1,0.3)]"
                  : "border-border bg-card hover:border-lime/40"
              }`}
            >
              {pkg.featured ? (
                <span className="bg-lime text-lime-foreground absolute right-5 top-5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
                  Most popular
                </span>
              ) : null}

              <div>
                <h3 className="font-sans text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground mt-1 text-xs font-medium uppercase tracking-wider">
                  {pkg.timeline}
                </p>
              </div>

              <div>
                <p className="font-sans text-2xl font-bold tracking-tight sm:text-3xl">
                  {pkg.priceRwf}
                </p>
                <p className="text-muted-foreground text-sm">{pkg.priceUsd}</p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {pkg.summary}
              </p>

              <ul className="mt-auto flex flex-col gap-2 pt-2">
                {pkg.features.map((feat) => (
                  <li
                    key={feat}
                    className="text-foreground/80 flex items-center gap-2 text-sm"
                  >
                    <span className="text-lime" aria-hidden>
                      ✓
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={brand.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ask about the ${pkg.name} package on WhatsApp`}
                className={`group/btn mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  pkg.featured
                    ? "bg-lime text-lime-foreground hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(143,249,1,0.55)]"
                    : "border-border bg-secondary/40 text-foreground hover:bg-secondary border backdrop-blur"
                }`}
              >
                <WhatsAppIcon className="size-4" />
                Get this
                <span
                  aria-hidden
                  className="transition-transform group-hover/btn:translate-x-1"
                >
                  →
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.1}>
          <p className="text-muted-foreground mt-10 text-sm">
            Not sure which fits? Most projects start with a quick chat — we
            recommend the right package and send a clear proposal.{" "}
            <a
              href={brand.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime font-semibold underline-offset-4 hover:underline"
            >
              Message us on WhatsApp →
            </a>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
