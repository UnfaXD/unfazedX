import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
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
  "UnfazedX is a technology venture studio and digital solutions company engineering the next generation of African technology companies. We build, fund, and scale category-defining products.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Building the next generation of African technology`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "UnfazedX",
    "venture studio",
    "African technology",
    "digital solutions",
    "fintech",
    "product engineering",
    "design systems",
    "venture builder",
    "startup studio",
    "Africa tech",
  ],
  category: "technology",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Building the next generation of African technology`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Building the next generation of African technology`,
    description: SITE_DESCRIPTION,
    creator: "@unfazedx",
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
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  foundingDate: "2023",
  sameAs: [
    "https://twitter.com/unfazedx",
    "https://linkedin.com/company/unfazedx",
    "https://github.com/unfazedx",
  ],
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
      </body>
    </html>
  );
}
