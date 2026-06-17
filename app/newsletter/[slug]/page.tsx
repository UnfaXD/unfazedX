import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/site/container";
import { ShareButtons } from "@/components/site/share-buttons";
import { brand } from "@/lib/brand";
import { posts, getPost } from "@/lib/posts";

const SITE_URL = "https://unfazedx.com";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  const url = `${SITE_URL}/newsletter/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [`${SITE_URL}/og.png`],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_URL}/og.png`],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/newsletter/${post.slug}`;
  const related = posts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    image: `${SITE_URL}/og.png`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "UnfazedX Holdings", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "UnfazedX Holdings",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/projects/logosvg.png` },
    },
  };

  return (
    <>
      <Nav />
      <main id="main" className="relative">
        <article className="relative isolate pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b ${post.gradient} opacity-30`}
          />
          <Container>
            <div className="mx-auto max-w-3xl">
              <Link
                href="/newsletter"
                className="text-muted-foreground hover:text-lime mb-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              >
                <span aria-hidden>←</span> All articles
              </Link>

              <div className="text-muted-foreground mb-5 flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider">
                <span className="text-lime font-semibold">{post.category}</span>
                <span aria-hidden>·</span>
                <span>{formatDate(post.date)}</span>
                <span aria-hidden>·</span>
                <span>{post.readMin} min read</span>
              </div>

              <h1 className="text-balance font-sans text-[clamp(2rem,5.5vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-tight">
                {post.title}
              </h1>

              <p className="text-foreground/80 mt-6 text-lg leading-relaxed sm:text-xl">
                {post.intro}
              </p>

              <div className="border-border/60 mt-8 border-y py-5">
                <ShareButtons url={url} title={post.title} />
              </div>

              <div className="mt-10 flex flex-col gap-8">
                {post.points.map((pt) => (
                  <section key={pt.h}>
                    <h2 className="font-sans text-2xl font-bold tracking-tight">
                      {pt.h}
                    </h2>
                    <p className="text-muted-foreground mt-3 text-base leading-relaxed sm:text-lg">
                      {pt.p}
                    </p>
                  </section>
                ))}
              </div>

              <div className="border-lime/40 bg-lime/5 mt-12 rounded-2xl border-l-4 p-6">
                <p className="text-lime mb-1 text-xs font-semibold uppercase tracking-wider">
                  The takeaway
                </p>
                <p className="text-foreground text-base font-medium leading-relaxed">
                  {post.takeaway}
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="border-border bg-card/60 mt-12 flex flex-col items-start gap-4 rounded-3xl border p-7 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-sans text-xl font-bold tracking-tight">
                    Want this done for your business?
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm">
                    UnfazedX builds websites, brands &amp; online stores in
                    Kigali. Let&apos;s talk.
                  </p>
                </div>
                <a
                  href={brand.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lime text-lime-foreground inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                >
                  Start a project →
                </a>
              </div>

              <div className="mt-10">
                <ShareButtons url={url} title={post.title} />
              </div>
            </div>

            {related.length > 0 ? (
              <div className="mx-auto mt-20 max-w-5xl">
                <h2 className="mb-6 font-sans text-2xl font-bold uppercase tracking-tight">
                  More on {post.category}
                </h2>
                <div className="grid gap-5 sm:grid-cols-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/newsletter/${r.slug}`}
                      className="group border-border/60 bg-card hover:border-lime/40 block rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1"
                    >
                      <p className="text-lime text-[10px] font-semibold uppercase tracking-wider">
                        {r.category}
                      </p>
                      <h3 className="group-hover:text-lime mt-2 font-sans text-lg font-bold leading-tight tracking-tight transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                        {r.excerpt}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </Container>
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
