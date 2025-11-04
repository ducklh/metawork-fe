import { Hero } from "@/sections/Hero";
import { Stats } from "@/sections/Stats";
import { HowItWorks } from "@/sections/HowItWorks";
import { WhyChoose } from "@/sections/WhyChoose";
import { Features } from "@/sections/Features";
import { Testimonials } from "@/sections/Testimonials";
import { SuccessStories } from "@/sections/SuccessStories";
import { Partners } from "@/sections/Partners";
import { FAQ } from "@/sections/FAQ";
import { FinalCTA } from "@/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <WhyChoose />
      <Features />
      <Testimonials />
      <SuccessStories />
      <Partners />
      <FAQ />
      <FinalCTA />
    </>
  );
}
