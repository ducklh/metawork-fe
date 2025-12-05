"use client";

import { motion } from "framer-motion";
import { Network, Route, Shield } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Multi-Asset Liquidity",
    description: "Access aggregated liquidity across crypto, forex, and traditional assets from 20+ leading providers. Optimize execution with deep order books and competitive spreads.",
  },
  {
    icon: Route,
    title: "Smart Routing Engine",
    description: "Intelligent order routing automatically finds the best execution path. Real-time latency optimization and cost analysis ensure optimal trade execution.",
  },
  {
    icon: Shield,
    title: "Institutional Security",
    description: "Bank-grade security with multi-layer encryption, cold storage integration, and compliance with global financial regulations. SOC 2 certified infrastructure.",
  },
];

export function WhyKNetwork() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Why K-Network
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Enterprise-grade infrastructure designed for scale, security, and performance.
          </p>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100">
                <feature.icon className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-zinc-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

