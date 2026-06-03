import { Container } from "@/components/site/container";
import { WhatsAppIcon } from "@/components/site/icons";
import { Logo } from "@/components/site/logo";
import { brand, navLinks } from "@/lib/brand";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-card/40 py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a
              href="#hero"
              aria-label="UnfazedX home"
              className="inline-flex"
            >
              <Logo className="text-xl" />
            </a>
            <p className="text-muted-foreground mt-5 max-w-sm text-base leading-relaxed">
              {brand.description}
            </p>
            <p className="text-muted-foreground/80 mt-6 text-xs uppercase tracking-wider">
              {brand.tagline} · {brand.subtagline}
            </p>
            <p className="text-muted-foreground/70 mt-2 text-xs uppercase tracking-wider">
              {brand.address}
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-muted-foreground mb-4 text-xs font-semibold uppercase tracking-wider">
              Navigate
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground hover:text-lime text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-muted-foreground mb-4 text-xs font-semibold uppercase tracking-wider">
              Work
            </p>
            <ul className="flex flex-col gap-2.5">
              {brand.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-lime inline-flex items-center gap-1.5 text-sm transition-colors"
                  >
                    {s.label}
                    <span aria-hidden className="text-xs">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-muted-foreground mb-4 text-xs font-semibold uppercase tracking-wider">
              Contact
            </p>
            <a
              href={`mailto:${brand.email}`}
              className="font-sans text-lg font-semibold lowercase tracking-tight hover:text-lime transition-colors break-all"
            >
              {brand.email}
            </a>
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="text-muted-foreground hover:text-foreground mt-1 block text-sm transition-colors"
            >
              {brand.phone}
            </a>
            <a
              href={brand.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Start a project on WhatsApp · ${brand.phone}`}
              className="bg-lime text-lime-foreground mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="size-4" />
              Start a project
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="my-12 font-sans text-[clamp(4rem,18vw,16rem)] font-bold uppercase leading-none tracking-tighter text-foreground/6 select-none"
        >
          UNFAZED<span className="text-lime/30">X</span>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <p className="text-muted-foreground text-xs">
            © {year} {brand.legalName}. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Designed & engineered in {brand.city}, {brand.country} ·{" "}
            <a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime transition-colors"
            >
              {brand.url.replace("https://", "")}
            </a>
          </p>

          <a
            href={brand.builder.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Site built by ${brand.builder.name} — view portfolio`}
            className="group border-border bg-secondary/60 hover:border-lime/60 hover:bg-secondary inline-flex items-center gap-2.5 rounded-full border px-3 py-1.5 text-xs transition-all"
          >
            <span className="bg-lime relative inline-flex size-1.5 rounded-full">
              <span className="bg-lime absolute inset-0 animate-ping rounded-full opacity-75" />
            </span>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              Built by
            </span>
            <span className="text-foreground font-semibold">
              {brand.builder.name}
            </span>
            <span
              aria-hidden="true"
              className="text-muted-foreground group-hover:text-lime transition-colors"
            >
              ↗
            </span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
