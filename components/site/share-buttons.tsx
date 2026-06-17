"use client";

import * as React from "react";
import { WhatsAppIcon } from "@/components/site/icons";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.9l-5.4-7.06L4.92 22H1.66l8.02-9.17L1 2h7.07l4.88 6.45L18.244 2Zm-1.21 18h1.9L7.05 4H5.02l12.014 16Z" />
    </svg>
  );
}
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}
function LinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = React.useState(false);
  const enc = encodeURIComponent;
  const text = `${title} — UnfazedX`;

  const links = {
    x: `https://twitter.com/intent/tweet?text=${enc(text)}&url=${enc(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
    whatsapp: `https://wa.me/?text=${enc(`${text} ${url}`)}`,
  };

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  async function nativeShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch {
        /* user cancelled */
      }
    } else {
      copyLink();
    }
  }

  const btn =
    "border-border bg-secondary/50 text-foreground hover:border-lime/60 hover:text-lime inline-flex size-10 items-center justify-center rounded-full border transition-all hover:-translate-y-0.5";

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <span className="text-muted-foreground mr-1 text-xs font-semibold uppercase tracking-wider">
        Share
      </span>
      <a className={btn} href={links.x} target="_blank" rel="noopener noreferrer" aria-label="Share on X">
        <XIcon className="size-4" />
      </a>
      <a className={btn} href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
        <LinkedInIcon className="size-4" />
      </a>
      <a className={btn} href={links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
        <FacebookIcon className="size-4" />
      </a>
      <a className={btn} href={links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
        <WhatsAppIcon className="size-4" />
      </a>
      <button type="button" onClick={copyLink} className={btn} aria-label="Copy link">
        <LinkIcon className="size-4" />
      </button>
      <button
        type="button"
        onClick={nativeShare}
        className="bg-lime text-lime-foreground inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
      >
        {copied ? "Link copied!" : "Share"}
      </button>
    </div>
  );
}
