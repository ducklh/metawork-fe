"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MousePointerClick, LineChart } from "lucide-react";

const steps = [
  {
    icon: MousePointerClick,
    title: "Choose a campaign",
    desc: "Browse the marketplace and pick offers that fit your audience.",
    color: "from-violet-50 to-fuchsia-50",
  },
  {
    icon: LineChart,
    title: "Share and track",
    desc: "Use your referral links and monitor real-time performance.",
    color: "from-blue-50 to-cyan-50",
  },
  {
    icon: CheckCircle2,
    title: "Get paid fast",
    desc: "Receive crypto payouts quickly with transparent reporting.",
    color: "from-emerald-50 to-teal-50",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
          <p className="mt-3 text-zinc-600">Start earning in three simple steps.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`rounded-2xl border bg-gradient-to-br ${s.color} p-6 shadow-sm`}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[--primary-hex] text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


