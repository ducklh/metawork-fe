import { Hero } from "@/sections/Hero";
import { Stats } from "@/sections/Stats";
import { WhyChoose } from "@/sections/WhyChoose";
import { FinalCTA } from "@/sections/FinalCTA";
import { HowItWorks } from "@/sections/HowItWorks";
import { Partners } from "@/sections/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <WhyChoose />
      <Partners />
      <FinalCTA />
    </>
  );
}
