"use client";

import * as React from "react";
import { WhatsAppIcon } from "@/components/site/icons";
import { brand } from "@/lib/brand";

export function ProjectForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function buildText() {
    const lines = [
      `Hi UnfazedX! I'm ${name.trim() || "[your name]"}.`,
      email.trim() ? `Email: ${email.trim()}` : "",
      "",
      message.trim() || "I'd like to discuss a project with you.",
    ].filter(Boolean);
    return lines.join("\n");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = `https://wa.me/${brand.whatsapp.number}?text=${encodeURIComponent(buildText())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-lime focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className="border-border bg-card/60 mx-auto mt-12 w-full max-w-xl rounded-3xl border p-6 text-left backdrop-blur-sm sm:p-8"
    >
      <p className="font-sans text-xl font-bold tracking-tight">
        Tell us about your project
      </p>
      <p className="text-muted-foreground mt-1 text-sm">
        A few details and we&apos;ll reply on WhatsApp, usually within a day.
      </p>

      <div className="mt-5 flex flex-col gap-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="pf-name" className="sr-only">
              Your name
            </label>
            <input
              id="pf-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="pf-email" className="sr-only">
              Email or phone
            </label>
            <input
              id="pf-email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or phone"
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="pf-message" className="sr-only">
            What do you need?
          </label>
          <textarea
            id="pf-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="What do you need? (e.g. a website for my restaurant, a brand identity, an online store…)"
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-lime text-lime-foreground group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-10px_rgba(143,249,1,0.55)]"
      >
        <WhatsAppIcon className="size-4" />
        Send via WhatsApp
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </button>
      <p className="text-muted-foreground mt-3 text-center text-xs">
        Prefer email?{" "}
        <a
          href={`mailto:${brand.email}?subject=Project%20enquiry`}
          className="text-foreground hover:text-lime font-semibold transition-colors"
        >
          {brand.email}
        </a>
      </p>
    </form>
  );
}
