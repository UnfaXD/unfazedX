import Link from "next/link";
import { Logo } from "@/components/site/logo";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid-bg radial-fade"
      />
      <div
        aria-hidden="true"
        className="bg-lime/15 pointer-events-none absolute -top-24 left-1/2 -z-10 size-[34rem] -translate-x-1/2 rounded-full blur-[150px]"
      />

      <Link href="/" className="mb-10">
        <Logo className="text-xl" />
      </Link>

      <p className="text-lime text-sm font-semibold uppercase tracking-[0.3em]">
        Error 404
      </p>
      <h1 className="text-balance mt-4 font-sans text-[clamp(3rem,12vw,8rem)] font-bold uppercase leading-[0.85] tracking-tight">
        Page not
        <br />
        <span className="text-muted-foreground italic font-light">found.</span>
      </h1>
      <p className="text-muted-foreground mt-6 max-w-md text-base leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Let&apos;s get you back on track.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="bg-lime text-lime-foreground inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
        >
          Back home
          <span aria-hidden>→</span>
        </Link>
        <Link
          href="/newsletter"
          className="border-border bg-secondary/40 text-foreground hover:bg-secondary inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold backdrop-blur transition-colors"
        >
          Read the newsletter
        </Link>
      </div>
    </main>
  );
}
