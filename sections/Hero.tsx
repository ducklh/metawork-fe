"use client";

import { Button } from "@/components/ui/button";
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
            <Button size="lg" className="bg-[--primary-hex] hover:opacity-90">
              Start earning now
            </Button>
            <Button size="lg" variant="outline">
              Learn more
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


