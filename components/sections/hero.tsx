"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Container } from "@/components/site/container";
import { ExternalLinkIcon, WhatsAppIcon } from "@/components/site/icons";
import { brand, projects } from "@/lib/brand";

const featured = projects.slice(0, 8);

function WorkCard({
  p,
  decorative = false,
}: {
  p: (typeof projects)[number];
  decorative?: boolean;
}) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={decorative ? -1 : undefined}
      aria-label={
        decorative ? undefined : `${p.title} — ${p.category}, view on ${p.platform}`
      }
      className="group/card focus-visible:outline-lime relative block aspect-[4/3] w-56 shrink-0 overflow-hidden rounded-2xl border border-border/60 transition-colors duration-500 hover:border-lime/40 focus-visible:outline-2 focus-visible:outline-offset-4 sm:w-64"
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-80`}
      />
      <Image
        src={p.image}
        alt={decorative ? "" : `${p.title} — ${p.category} by UnfazedX`}
        fill
        sizes="256px"
        className="object-cover transition-transform duration-700 group-hover/card:scale-105"
        style={{ objectPosition: p.objectPosition ?? "center" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3">
        <span className="text-white font-sans text-sm font-bold uppercase tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          {p.title}
        </span>
        <span className="bg-white/15 text-white inline-flex size-7 shrink-0 items-center justify-center rounded-full backdrop-blur-md transition-all duration-500 group-hover/card:bg-lime group-hover/card:text-lime-foreground group-hover/card:rotate-45">
          <ExternalLinkIcon className="size-3.5" />
        </span>
      </div>
      <span className="bg-black/55 text-white/90 absolute left-3 top-3 inline-flex items-center rounded-full px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider backdrop-blur-md">
        {p.category}
      </span>
    </a>
  );
}

export function Hero() {
  const reduced = useReducedMotion() ?? false;
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, reduced ? 1 : 0.25]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-28 pb-10 sm:pt-36 sm:pb-14"
    >
      <motion.div
        style={{ y, opacity }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-bg radial-fade"
      />
      <motion.div
        style={{ y, opacity }}
        aria-hidden="true"
        className="bg-lime/25 pointer-events-none absolute -top-32 left-1/2 -z-10 size-[44rem] -translate-x-1/2 rounded-full blur-[160px] animate-blob"
      />
      <motion.div
        style={{ y }}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-0 -z-10 size-72 rounded-full bg-fuchsia-500/10 blur-[120px] animate-blob"
      />

      <Container className="flex flex-1 flex-col">
        {/* Top: badge + headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border-border bg-secondary/40 text-muted-foreground inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur"
        >
          <span className="bg-lime relative inline-flex size-1.5 rounded-full">
            <span className="bg-lime absolute inset-0 animate-ping rounded-full opacity-75" />
          </span>
          <span className="text-foreground font-semibold">
            Available for new projects
          </span>
          <span className="text-muted-foreground/70">· Kigali · Est. 2024</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="text-balance mt-6 font-sans text-[clamp(2.6rem,8.5vw,8.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:mt-8"
        >
          {["Bold brands.", "Real products.", "Built to grow."].map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 60, filter: "blur(12px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {word === "Real products." ? (
                <>
                  <span className="text-muted-foreground italic font-light">
                    Real
                  </span>{" "}
                  products.
                </>
              ) : word === "Built to grow." ? (
                <>
                  Built to <span className="text-lime">grow.</span>
                </>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subhead + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="text-muted-foreground max-w-md text-balance text-base leading-relaxed sm:text-lg">
            UnfazedX is a Kigali creative-tech studio. We design and build{" "}
            <span className="text-foreground">
              websites, online stores, and brands
            </span>{" "}
            for ambitious Rwandan businesses — and grow our own ventures
            alongside them.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={brand.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Start a project on WhatsApp · ${brand.phone}`}
                className="bg-lime text-lime-foreground group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(143,249,1,0.55)]"
              >
                <WhatsAppIcon className="size-4" />
                Start a project
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="#pricing"
                className="border-border bg-secondary/40 text-foreground hover:bg-secondary inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold backdrop-blur transition-colors"
              >
                View packages
              </a>
            </div>
            <p className="text-foreground/80 inline-flex items-center gap-1.5 text-xs font-medium lg:justify-end">
              <span className="text-lime" aria-hidden>
                ✓
              </span>
              Free first consult · We reply within a day
            </p>
          </div>
        </motion.div>

        {/* Bottom: featured work preview */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-auto pt-10 sm:pt-12"
        >
          <div className="mb-3 flex items-center justify-between">
            <p className="text-muted-foreground text-xs font-semibold uppercase tracking-[0.25em]">
              ● Featured work
            </p>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-lime text-xs font-semibold transition-colors"
            >
              View all projects →
            </a>
          </div>
          {reduced ? (
            <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
              <div className="flex w-max gap-3">
                {featured.map((p) => (
                  <WorkCard key={p.title} p={p} />
                ))}
              </div>
            </div>
          ) : (
            <div
              aria-hidden="true"
              className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
            >
              <div className="animate-marquee flex w-max gap-3 group-hover:[animation-play-state:paused]">
                {[...featured, ...featured].map((p, i) => (
                  <WorkCard key={`${p.title}-${i}`} p={p} decorative />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
