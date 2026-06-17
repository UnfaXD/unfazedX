"use client";

import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/site/container";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { projects } from "@/lib/brand";
import { cn } from "@/lib/utils";

const FILTERS = ["All", ...Array.from(new Set(projects.map((p) => p.category)))] as const;

export function Portfolio() {
  const [active, setActive] = React.useState<(typeof FILTERS)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-20 sm:py-28"
    >
      <Container>
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="text-lime mb-4 text-xs font-semibold uppercase tracking-[0.25em]">
                ● Selected projects
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                id="projects-heading"
                className="text-balance font-sans text-4xl font-bold uppercase leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl"
              >
                Real work,
                <br />
                <span className="text-muted-foreground italic font-light">
                  shipped
                </span>{" "}
                under the brand.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-md text-base sm:text-lg">
              A selection of brand identity, UI/UX, and product design work from
              UnfazedX. Filter by type, then open any project to view the full
              case study.
            </p>
          </Reveal>
        </div>

        {/* Category filter */}
        <Reveal delay={0.12}>
          <div
            role="tablist"
            aria-label="Filter projects by type"
            className="mb-10 flex flex-wrap gap-2"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300",
                  active === f
                    ? "border-lime bg-lime text-lime-foreground"
                    : "border-border bg-secondary/40 text-muted-foreground hover:border-lime/50 hover:text-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <RevealItem key={project.title}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} — view the full case study on ${project.platform}`}
                className="group focus-visible:outline-lime relative block overflow-hidden rounded-3xl border border-border/60 bg-card transition-all duration-700 hover:-translate-y-1 hover:border-border focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    aria-hidden="true"
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                  />
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.category} by UnfazedX`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                    style={{
                      objectPosition: project.objectPosition ?? "center",
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  />

                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="bg-black/60 text-white inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md">
                      <span className="bg-lime size-1.5 rounded-full" aria-hidden />
                      {project.platform}
                    </span>
                    <span className="bg-black/60 text-white/90 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span
                      aria-hidden="true"
                      className="bg-white/15 text-white inline-flex size-9 items-center justify-center rounded-full text-lg backdrop-blur-md transition-all duration-500 group-hover:bg-lime group-hover:text-lime-foreground group-hover:rotate-45"
                    >
                      ↗
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                    <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-border/60 p-5">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.blurb}
                  </p>
                  <span className="text-muted-foreground group-hover:text-lime shrink-0 self-end text-xs font-semibold whitespace-nowrap transition-colors">
                    View case study →
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://dribbble.com/Netfort"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-secondary text-foreground hover:border-lime/60 hover:text-lime inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors"
          >
            View all on Dribbble <span aria-hidden>↗</span>
          </a>
          <a
            href="https://www.behance.net/unfazedexperie"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-secondary text-foreground hover:border-lime/60 hover:text-lime inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors"
          >
            View all on Behance <span aria-hidden>↗</span>
          </a>
          <a
            href="https://www.pinterest.com/ReconfortDaniel/netfort-uiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-secondary text-foreground hover:border-lime/60 hover:text-lime inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors"
          >
            Mood board on Pinterest <span aria-hidden>↗</span>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
