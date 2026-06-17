import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { faqs, packages } from "@/lib/brand";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://unfazedx.com";
const SITE_NAME = "UnfazedX Holdings";
const SITE_TITLE =
  "UnfazedX — Web Design, Branding & Online Stores in Kigali, Rwanda";
const SITE_DESCRIPTION =
  "UnfazedX is a creative-technology studio in Kigali, Rwanda. We design and build websites, online stores, brand identities, mobile apps and digital products for businesses across Rwanda and East Africa — plus SEO and digital marketing that wins customers. Affordable packages, MoMo payments, fast delivery.";
const OG_IMAGE = `${SITE_URL}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s · UnfazedX — Web Design & Branding Rwanda`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [
    { name: "NDAYISHIMIYE Reconfort Daniel", url: "https://unfazedx.com" },
  ],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    // Brand
    "UnfazedX",
    "UnfazedX Holdings",
    "UnfazedX Rwanda",
    "Estatify",
    "UnfazedX Commerce",
    "Reconfort Daniel",
    // High-intent local service keywords
    "web design Kigali",
    "web design Rwanda",
    "website design Rwanda",
    "website developer Kigali",
    "web development Rwanda",
    "ecommerce website Rwanda",
    "online store Rwanda",
    "branding agency Kigali",
    "brand identity Rwanda",
    "logo design Rwanda",
    "graphic design Kigali",
    "UI UX design Rwanda",
    "mobile app development Rwanda",
    "app developer Kigali",
    "software development Rwanda",
    "digital marketing agency Rwanda",
    "social media management Kigali",
    "SEO Rwanda",
    "creative agency Kigali",
    "digital agency Rwanda",
    "best web design company in Rwanda",
    "affordable website Rwanda",
    // Regional / category
    "Kigali",
    "Rwanda",
    "East Africa",
    "creative technology studio",
    "venture studio Africa",
  ],
  category: "technology",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "UnfazedX — web design, branding & online stores in Kigali, Rwanda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
    site: "@UnfazedXp",
    creator: "@UnfazedXp",
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

const SERVICE_TYPES = [
  "Web Design",
  "Website Development",
  "E-commerce / Online Store Development",
  "Brand Identity Design",
  "Logo Design",
  "UI/UX Design",
  "Mobile App Development",
  "Software Engineering",
  "Digital Marketing",
  "Social Media Management",
  "Search Engine Optimization (SEO)",
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "UnfazedX",
  legalName: "UnfazedX Holdings",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  slogan: "Build. Launch. Grow. Scale.",
  foundingDate: "2024",
  email: "reconfortdanny@gmail.com",
  telephone: "+250780151067",
  image: OG_IMAGE,
  logo: `${SITE_URL}/projects/logosvg.png`,
  priceRange: "RWF 50,000 – RWF 4,400,000",
  currenciesAccepted: "RWF, USD",
  paymentAccepted: "Mobile Money (MoMo), Bank transfer",
  founder: {
    "@type": "Person",
    name: "NDAYISHIMIYE Reconfort Daniel",
    jobTitle: "Founder & Lead Designer",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kigali",
    addressRegion: "Kigali City",
    addressCountry: "RW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.9441,
    longitude: 30.0619,
  },
  areaServed: [
    { "@type": "Country", name: "Rwanda" },
    { "@type": "City", name: "Kigali" },
    { "@type": "Place", name: "East Africa" },
  ],
  knowsAbout: SERVICE_TYPES,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+250780151067",
    contactType: "sales",
    areaServed: "RW",
    availableLanguage: ["English", "Kinyarwanda", "French"],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "UnfazedX Services & Packages",
    itemListElement: packages.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: p.summary,
      priceCurrency: "RWF",
      category: "Digital services",
      itemOffered: {
        "@type": "Service",
        name: p.name,
        description: p.summary,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Rwanda",
      },
    })),
  },
  makesOffer: SERVICE_TYPES.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s, areaServed: "Rwanda" },
  })),
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
