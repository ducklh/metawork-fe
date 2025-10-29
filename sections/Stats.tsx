"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const stats = [
  { label: "Affiliates", value: "12,500+" },
  { label: "Monthly Referrals", value: "180k+" },
  { label: "Transaction Volume", value: "$25M+" },
  { label: "Active Campaigns", value: "300+" },
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
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold">{s.value}</div>
                  <div className="mt-1 text-sm text-zinc-600">{s.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


