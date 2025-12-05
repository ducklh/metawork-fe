import { Hero } from "@/sections/Hero";
import { Stats } from "@/sections/Stats";
import { WhoWeHelp } from "@/sections/WhoWeHelp";
import { WhyChoose } from "@/sections/WhyChoose";
import { CoreSolutions } from "@/sections/CoreSolutions";
import { SuccessStories } from "@/sections/SuccessStories";
import { Partners } from "@/sections/Partners";
import { FinalCTA } from "@/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhoWeHelp />
      <WhyChoose />
      <CoreSolutions />
      <SuccessStories />
      <Partners />
      <FinalCTA />
    </>
  );
}
