"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Activity, BarChart3, Shield } from "lucide-react";

const trustItems = [
  {
    title: "Infrastructure uptime monitoring",
    description: "Continuous monitoring of system availability and performance metrics across all services.",
    icon: Activity,
  },
  {
    title: "Independent performance benchmarking",
    description: "Regular third-party audits and performance evaluations to ensure optimal service delivery.",
    icon: BarChart3,
  },
  {
    title: "Real-time system health tracking",
    description: "Live monitoring and alerting systems to maintain operational excellence and reliability.",
    icon: Shield,
  },
];

export function EnterpriseTrustFramework() {
  return (
    <section className="bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Enterprise Trust Framework
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Built-in reliability and transparency measures for institutional-grade operations.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Card className="h-full border border-zinc-800 bg-zinc-950">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

