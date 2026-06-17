import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/site/container";
import { NewsletterSignup } from "@/components/site/newsletter-signup";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Newsletter — Web, Branding & Growth Tips for Rwandan Businesses",
  description:
    "Practical guides on web design, branding, e-commerce, SEO and digital marketing for businesses in Kigali and across Rwanda — from the UnfazedX studio.",
  alternates: { canonical: "https://unfazedx.com/newsletter" },
  openGraph: {
    type: "website",
    url: "https://unfazedx.com/newsletter",
    title: "UnfazedX Newsletter — Web, Branding & Growth Tips",
    description:
      "Practical guides on web design, branding, e-commerce, SEO and digital marketing for Rwandan businesses.",
    images: ["https://unfazedx.com/og.png"],
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function NewsletterPage() {
  return (
    <>
      <Nav />
      <main id="main" className="relative">
        <section className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 grid-bg radial-fade"
          />
          <div
            aria-hidden="true"
            className="bg-lime/20 pointer-events-none absolute -top-32 left-1/2 -z-10 size-[40rem] -translate-x-1/2 rounded-full blur-[160px]"
          />
          <Container>
            <p className="text-lime mb-5 text-xs font-semibold uppercase tracking-[0.25em]">
              ● The UnfazedX Newsletter
            </p>
            <h1 className="text-balance max-w-4xl font-sans text-[clamp(2.4rem,7vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.03em]">
              Ideas to help your business{" "}
              <span className="text-lime">win online.</span>
            </h1>
            <p className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
              Practical, no-fluff guides on web design, branding, e-commerce,
              SEO and digital marketing — written for businesses in Kigali and
              across Rwanda.
            </p>
            <p className="text-muted-foreground/70 mt-4 text-sm">
              {posts.length} articles · updated regularly
            </p>
          </Container>
        </section>

        <section className="pb-24 sm:pb-32">
          <Container>
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/newsletter/${post.slug}`}
                  className="group focus-visible:outline-lime mb-5 block break-inside-avoid overflow-hidden rounded-3xl border border-border/60 bg-card transition-all duration-500 hover:-translate-y-1 hover:border-lime/40 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  <div
                    className={`relative flex h-32 items-end bg-gradient-to-br p-5 ${post.gradient}`}
                  >
                    <span className="bg-background/70 text-foreground inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="font-sans text-xl font-bold uppercase leading-tight tracking-tight group-hover:text-lime transition-colors sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="text-muted-foreground/70 mt-5 flex items-center gap-2 text-xs">
                      <span>{formatDate(post.date)}</span>
                      <span aria-hidden>·</span>
                      <span>{post.readMin} min read</span>
                      <span
                        aria-hidden
                        className="text-lime ml-auto transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-16">
              <NewsletterSignup />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
