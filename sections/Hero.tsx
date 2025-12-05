"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Minimal background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Liquidity & Trading Infrastructure for Brokers, Exchanges, and Partners.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 sm:text-xl leading-relaxed">
            We help financial platforms expand globally through brand protection, customer acquisition, and high-quality performance marketing.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors px-8 h-12 text-base font-medium"
            >
              <Link href="/solutions">Explore Solutions</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-zinc-300 bg-white hover:bg-zinc-50 px-8 h-12 text-base font-medium"
            >
              <Link href="/partner-with-us">Contact Sales</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
