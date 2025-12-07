"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export function RiskDisclaimer() {
  return (
    <section className="bg-zinc-950 text-white border-t border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="flex items-start gap-4 max-w-4xl mx-auto"
        >
          <div className="flex-shrink-0 mt-1">
            <AlertTriangle className="h-5 w-5 text-zinc-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-white mb-2">Risk Disclaimer</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Crypto and Forex markets involve significant risk. K-Network does not provide investment advice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

