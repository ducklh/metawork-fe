"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Premier Growth Partner for Crypto & Forex Brands
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 sm:text-xl">
            We help financial platforms expand globally through brand protection, customer acquisition, and high-quality performance marketing.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors shadow-md hover:shadow-lg px-8">
              <Link href="/partner-with-us">Partner With Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8">
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


