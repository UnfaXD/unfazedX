"use client";

import * as React from "react";
import { brand } from "@/lib/brand";

export function NewsletterSignup() {
  const [email, setEmail] = React.useState("");

  function subscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent("Newsletter subscription");
    const body = encodeURIComponent(
      `Please add me to the UnfazedX newsletter.\n\nEmail: ${email.trim() || "[your email]"}`,
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="border-border bg-card/60 relative overflow-hidden rounded-3xl border p-8 text-center sm:p-12">
      <div
        aria-hidden="true"
        className="bg-lime/15 pointer-events-none absolute -top-24 left-1/2 -z-10 size-[28rem] -translate-x-1/2 rounded-full blur-[140px]"
      />
      <p className="text-lime mb-4 text-xs font-semibold uppercase tracking-[0.25em]">
        ● Stay in the loop
      </p>
      <h2 className="text-balance mx-auto max-w-2xl font-sans text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-4xl">
        Get growth tips in your inbox
      </h2>
      <p className="text-muted-foreground mx-auto mt-4 max-w-md text-base">
        Practical web, branding & marketing ideas for Rwandan businesses. No
        spam — unsubscribe anytime.
      </p>

      <form
        onSubmit={subscribe}
        className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="nl-email" className="sr-only">
          Your email address
        </label>
        <input
          id="nl-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="border-border bg-background/60 text-foreground placeholder:text-muted-foreground/70 focus:border-lime w-full rounded-full border px-5 py-3 text-sm transition-colors focus:outline-none"
        />
        <button
          type="submit"
          className="bg-lime text-lime-foreground inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
        >
          Subscribe
          <span aria-hidden>→</span>
        </button>
      </form>

      <p className="text-muted-foreground/70 mt-4 text-xs">
        Prefer WhatsApp?{" "}
        <a
          href={brand.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-lime font-semibold transition-colors"
        >
          Message us
        </a>{" "}
        to be added.
      </p>
    </div>
  );
}
