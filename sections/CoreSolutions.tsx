"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Shield,
  Globe,
  Users,
  TrendingUp,
  Target,
  Code,
} from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Brand Protection (Google Ads)",
    description: "Defend your brand from competitor hijacking with advanced Google Ads strategies.",
    gradient: "from-red-50 to-rose-50",
    iconColor: "text-red-600",
  },
  {
    icon: Globe,
    title: "Global Customer Acquisition",
    description: "Scale your reach across top-performing GEOs with high-intent traffic.",
    gradient: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Users,
    title: "Referral System Growth",
    description: "Expand and optimize your affiliate network for sustainable growth.",
    gradient: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Commission Optimization",
    description: "Maximize ROI with data-driven commission structures and performance tracking.",
    gradient: "from-purple-50 to-pink-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Target,
    title: "Custom Partner Strategies",
    description: "Tailored marketing solutions designed for your specific business goals.",
    gradient: "from-amber-50 to-orange-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Code,
    title: "S2S & API Integration",
    description: "Seamless server-to-server tracking and API integration for enterprise needs.",
    gradient: "from-cyan-50 to-teal-50",
    iconColor: "text-cyan-600",
  },
];

export function CoreSolutions() {
  return (
    <section className="bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Core Solutions Overview</h2>
          <p className="mt-3 text-zinc-600">Comprehensive services to accelerate your growth.</p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-all hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${solution.gradient}`}>
                    <solution.icon className={`h-6 w-6 ${solution.iconColor}`} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{solution.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

