"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Container } from "@/components/site/container";
import { Marquee } from "@/components/site/marquee";
import { marqueeWords } from "@/lib/brand";

export function Hero() {
  const reduced = useReducedMotion() ?? false;
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, reduced ? 1 : 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.94]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16"
    >
      <motion.div
        style={{ y, opacity }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-bg radial-fade"
      />
      <motion.div
        style={{ y, opacity }}
        aria-hidden="true"
        className="bg-lime/30 pointer-events-none absolute -top-32 left-1/2 -z-10 size-[44rem] -translate-x-1/2 rounded-full blur-[160px] animate-blob"
      />
      <motion.div
        style={{ y }}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 right-10 -z-10 size-72 rounded-full bg-fuchsia-500/10 blur-[120px] animate-blob"
      />

      <Container className="flex flex-1 flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border-border bg-secondary/40 text-muted-foreground inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur"
        >
          <span className="bg-lime relative inline-flex size-1.5 rounded-full">
            <span className="bg-lime absolute inset-0 animate-ping rounded-full opacity-75" />
          </span>
          Africa's premier venture studio · Est. 2023
        </motion.div>

        <motion.h1
          style={{ scale }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
          }}
          className="text-balance mt-8 font-sans text-[clamp(3.2rem,11vw,11rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em]"
        >
          {["Engineering", "Africa's", "next decade"].map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 80, filter: "blur(12px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {word === "Africa's" ? (
                <>
                  Africa
                  <span className="text-lime">'s</span>
                </>
              ) : word === "next decade" ? (
                <>
                  <span className="text-muted-foreground italic font-light">next</span> decade
                </>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-8 sm:mt-14 sm:grid-cols-2 sm:items-end"
        >
          <p className="text-muted-foreground max-w-md text-balance text-lg leading-relaxed sm:text-xl">
            UnfazedX is a technology venture studio building, funding, and scaling
            the category-defining digital companies of the next African decade.
          </p>
          <div className="flex flex-col items-start gap-3 sm:items-end">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#cta"
                className="bg-lime text-lime-foreground group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-8px_rgba(223,225,4,0.55)]"
              >
                Start a venture
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#ventures"
                className="border-border bg-secondary/40 text-foreground hover:bg-secondary inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold backdrop-blur transition-colors"
              >
                Explore portfolio
              </a>
            </div>
            <p className="text-muted-foreground text-xs">
              Trusted by founders across Lagos · Nairobi · Cape Town · Accra
            </p>
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-foreground/60 mt-16 border-t border-border/60 py-5 font-sans text-2xl font-bold uppercase tracking-tight sm:text-3xl"
      >
        <Marquee items={marqueeWords} speed="normal" />
      </motion.div>
    </section>
  );
}
