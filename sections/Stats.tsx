"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "20+",
    label: "Liquidity Providers",
    description: "Connected to major liquidity sources across crypto and forex markets",
  },
  {
    value: "15M+",
    label: "Monthly Volume",
    description: "Trading volume processed monthly across all connected partners",
  },
  {
    value: "35+",
    label: "Enterprise Partners",
    description: "Exchanges, brokers, and trading platforms using our infrastructure",
  },
  {
    value: "99.99%",
    label: "Uptime",
    description: "System availability maintained across all services",
  },
];

export function Stats() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-semibold text-zinc-900 sm:text-5xl">
                {stat.value}
              </div>
              <div className="mt-3 text-base font-medium text-zinc-900">
                {stat.label}
              </div>
              <div className="mt-2 text-sm text-zinc-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
