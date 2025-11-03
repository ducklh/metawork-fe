"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="cta" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border bg-zinc-50 px-8 py-14 text-center shadow-sm"
        >
          <h3 className="text-2xl font-bold sm:text-3xl">Start earning with K Network today</h3>
          <p className="mt-2 text-zinc-600">Join affiliates and advertisers growing with trusted performance marketing.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button asChild size="lg" variant="outline">
              <Link href="/auth/login">Log in</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


