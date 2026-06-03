import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/sections/hero";
import { TrustMetrics } from "@/components/sections/trust-metrics";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { WhyUnfazedX } from "@/components/sections/why-unfazedx";
import { Ventures } from "@/components/sections/ventures";
import { Process } from "@/components/sections/process";
import { Industries } from "@/components/sections/industries";
import { CoreValues } from "@/components/sections/core-values";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main" className="relative">
        <Hero />
        <TrustMetrics />
        <About />
        <Services />
        <WhyUnfazedX />
        <Ventures />
        <Process />
        <Industries />
        <CoreValues />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
