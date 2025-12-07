import { Hero } from "@/sections/Hero";
import { EnterpriseTrustFramework } from "@/sections/EnterpriseTrustFramework";
import { Stats } from "@/sections/Stats";
import { WhyKNetwork } from "@/sections/WhyKNetwork";
import { ArchitectureOverview } from "@/sections/ArchitectureOverview";
import { Partners } from "@/sections/Partners";
import { CompanyLegitimacy } from "@/sections/CompanyLegitimacy";
import { Testimonials } from "@/sections/Testimonials";
import { FinalCTA } from "@/sections/FinalCTA";
import { RiskDisclaimer } from "@/sections/RiskDisclaimer";

export default function Home() {
  return (
    <>
      <Hero />
      <EnterpriseTrustFramework />
      <Stats />
      <WhyKNetwork />
      <ArchitectureOverview />
      <Partners />
      <CompanyLegitimacy />
      <Testimonials />
      <FinalCTA />
      <RiskDisclaimer />
    </>
  );
}
