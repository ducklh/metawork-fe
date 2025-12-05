import { Hero } from "@/sections/Hero";
import { Stats } from "@/sections/Stats";
import { WhyKNetwork } from "@/sections/WhyKNetwork";
import { ArchitectureOverview } from "@/sections/ArchitectureOverview";
import { Partners } from "@/sections/Partners";
import { Testimonials } from "@/sections/Testimonials";
import { FinalCTA } from "@/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyKNetwork />
      <ArchitectureOverview />
      <Partners />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
