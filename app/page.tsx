import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { TrustMetrics } from "@/components/sections/trust-metrics";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Pricing } from "@/components/sections/pricing";
import { WhyUnfazedX } from "@/components/sections/why-unfazedx";
import { Ventures } from "@/components/sections/ventures";
import { Process } from "@/components/sections/process";
import { Industries } from "@/components/sections/industries";
import { CoreValues } from "@/components/sections/core-values";
import { Portfolio } from "@/components/sections/portfolio";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main" className="relative">
        <Hero />
        <TrustedBy />
        <TrustMetrics />
        <About />
        <Services />
        <Pricing />
        <WhyUnfazedX />
        <Ventures />
        <Process />
        <Industries />
        <CoreValues />
        <Portfolio />
        <CaseStudies />
        <Testimonials />
        <Faq />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
