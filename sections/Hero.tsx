"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            The Leading Affiliate Marketing Platform
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
            Connect with high-converting campaigns, real-time tracking, and fast crypto payouts.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors shadow-md hover:shadow-lg">
              <Link href="/auth/login">Start earning now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about-us">Learn more</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


