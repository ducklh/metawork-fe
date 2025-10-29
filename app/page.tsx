import { Hero } from "@/sections/Hero";
import { Stats } from "@/sections/Stats";
import { WhyChoose } from "@/sections/WhyChoose";
import { FinalCTA } from "@/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChoose />
      <FinalCTA />
    </>
  );
}
