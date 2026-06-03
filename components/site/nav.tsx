"use client";

import * as React from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Logo } from "@/components/site/logo";
import { navLinks } from "@/lib/brand";
import { cn } from "@/lib/utils";

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 12);
    });
  }, [scrollY]);

  const width = useTransform(scrollY, [0, 200], ["100%", "92%"]);

  return (
    <motion.header
      style={{ width }}
      className={cn(
        "fixed top-3 left-1/2 z-50 -translate-x-1/2 transition-all duration-500",
        scrolled ? "max-w-5xl" : "max-w-7xl",
      )}
    >
      <div
        className={cn(
          "border-border/0 mx-auto flex items-center justify-between rounded-full border px-4 py-2 backdrop-blur-xl transition-all duration-500 sm:px-6",
          scrolled
            ? "border-border/60 bg-background/80 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
            : "border-transparent bg-transparent",
        )}
      >
        <a
          href="#hero"
          className="focus-visible:outline-lime rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <Logo />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground rounded-full px-3 py-1.5 text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="bg-lime text-lime-foreground hidden rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-8px_rgba(223,225,4,0.6)] md:inline-flex"
          >
            Start a venture
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="border-border bg-secondary text-foreground inline-flex size-9 items-center justify-center rounded-full border md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="relative size-4">
              <span
                className={cn(
                  "bg-foreground absolute top-1 left-0 h-0.5 w-4 transition-transform",
                  open && "top-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "bg-foreground absolute top-2.5 left-0 h-0.5 w-4 transition-transform",
                  open && "-rotate-45",
                )}
                style={open ? { top: "0.375rem" } : undefined}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-border bg-background/95 mx-4 mt-2 rounded-2xl border p-3 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hover:bg-secondary block rounded-xl px-4 py-3 text-base font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="bg-lime text-lime-foreground mt-1 block rounded-xl px-4 py-3 text-center text-base font-semibold"
                >
                  Start a venture
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
