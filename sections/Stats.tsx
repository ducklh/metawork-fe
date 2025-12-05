"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const stats = [
  {
    value: "100+",
    label: "Global Partners",
    description: "Trusted by leading crypto & forex brands worldwide.",
    color: "from-violet-50 to-fuchsia-50 text-violet-700 border-violet-100",
  },
  {
    value: "10M+",
    label: "Monthly Impressions",
    description: "Dominating search visibility across multiple GEOs.",
    color: "from-blue-50 to-cyan-50 text-blue-700 border-blue-100",
  },
  {
    value: "Top-Tier",
    label: "GEO Performance",
    description: "Vietnam, Thailand, Turkey, Brazil, Mexico, South Africa.",
    color: "from-emerald-50 to-teal-50 text-emerald-700 border-emerald-100",
  },
  {
    value: "8+ Years",
    label: "Financial Marketing",
    description: "Deep expertise in high-compliance industries.",
    color: "from-amber-50 to-orange-50 text-amber-700 border-amber-100",
  },
];

export function Stats() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className={`overflow-hidden rounded-xl bg-gradient-to-br ${s.color} border-0`}>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold">{s.value}</div>
                  <div className="mt-2 text-base font-semibold">{s.label}</div>
                  <div className="mt-2 text-sm text-zinc-700/80">{s.description}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


