"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, FileCheck, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Brand Protection Experts",
    desc: "Shield your brand from competitor hijacking with our proven Google Ads defense system.",
  },
  {
    icon: Target,
    title: "High-Intent Customer Acquisition",
    desc: "Delivering real users with strong trading behavior across consistent GEOs.",
  },
  {
    icon: FileCheck,
    title: "Compliance-First Approach",
    desc: "Tailored solutions for regulated environments to ensure long-term stability.",
  },
  {
    icon: BarChart3,
    title: "Transparent Tracking & Reporting",
    desc: "Real-time data, clear attribution, no hidden metrics.",
  },
];

export function WhyChoose() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose K-NETWORK</h2>
          <p className="mt-3 text-zinc-600">Built for financial brands and partners who demand excellence.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#DC2626] to-black text-white">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{f.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


