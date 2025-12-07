"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="cta" className="bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border bg-gradient-to-br from-[#DC2626] to-black px-8 py-14 text-center text-white shadow-xl"
        >
          <h3 className="text-2xl font-semibold sm:text-3xl">Get started with K-Network</h3>
          <p className="mt-4 text-lg text-white/90">Connect with our team to discuss your requirements.</p>
          <div className="mt-8 flex items-center justify-center">
            <Button asChild size="lg" className="bg-white text-[#DC2626] hover:bg-zinc-100 transition-colors shadow-lg hover:shadow-xl px-8">
              <Link href="/partner-with-us">Partner With Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


