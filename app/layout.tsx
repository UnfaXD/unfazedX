import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { faqs } from "@/lib/brand";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://unfazedx.com";
const SITE_NAME = "UnfazedX Holdings";
const SITE_DESCRIPTION =
  "UnfazedX Holdings is a Kigali-born technology venture studio and digital solutions company. We design, build, and scale digital products and proprietary technology ventures across Africa.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Build. Launch. Grow. Scale.`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [
    { name: "NDAYISHIMIYE Reconfort Daniel", url: "https://unfazedx.com" },
  ],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "UnfazedX",
    "UnfazedX Holdings",
    "venture studio",
    "Kigali",
    "Rwanda",
    "African technology",
    "digital solutions",
    "product design",
    "UI/UX",
    "brand identity",
    "software engineering",
    "digital marketing",
    "Estatify",
    "UnfazedX Commerce",
    "Reconfort Daniel",
  ],
  category: "technology",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Build. Launch. Grow. Scale.`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Build. Launch. Grow. Scale.`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "UnfazedX Holdings",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  foundingDate: "2024",
  email: "reconfortdanny@gmail.com",
  telephone: "+250780151067",
  founder: {
    "@type": "Person",
    name: "NDAYISHIMIYE Reconfort Daniel",
    jobTitle: "Founder & Lead Designer",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
  sameAs: [
    "https://www.instagram.com/theunfazedxp/",
    "https://www.linkedin.com/company/unfazedxd",
    "https://x.com/UnfazedXp",
    "https://www.behance.net/unfazedexperie",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground min-h-full overflow-x-hidden font-sans">
        <a
          href="#main"
          className="bg-lime text-lime-foreground sr-only z-[100] rounded-md px-4 py-2 text-sm font-semibold focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        {children}
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script
          id="faq-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(faqJsonLd)}
        </Script>
      </body>
    </html>
  );
}
