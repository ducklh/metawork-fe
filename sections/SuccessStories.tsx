"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

const stories = [
  {
    title: "Exchange Visibility Growth",
    description: "Boosted brand search visibility to 97% dominance in 7 days with targeted Google Ads defense.",
    metrics: [
      { label: "Brand Visibility", value: "97%", icon: Target },
      { label: "Time to Results", value: "7 Days", icon: TrendingUp },
    ],
    gradient: "from-violet-50 to-purple-50",
    borderColor: "border-violet-200",
  },
  {
    title: "New Forex Broker Launch",
    description: "Generated over 12,000 high-intent clicks within 14 days across SEA & LATAM.",
    metrics: [
      { label: "High-Intent Clicks", value: "12K+", icon: DollarSign },
      { label: "Launch Period", value: "14 Days", icon: TrendingUp },
    ],
    gradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
  },
  {
    title: "Referral System Expansion",
    description: "Helped a partner scale from 5,000 → 25,000 active users using mixed paid + organic funnels.",
    metrics: [
      { label: "Active Users", value: "25K+", icon: Users },
      { label: "Growth", value: "400%", icon: TrendingUp },
    ],
    gradient: "from-emerald-50 to-teal-50",
    borderColor: "border-emerald-200",
  },
];

export function SuccessStories() {
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Case Studies</h2>
          <p className="mt-3 text-zinc-600">Real results from brands and partners working with K-NETWORK.</p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Card className={`h-full border-2 ${story.borderColor} bg-gradient-to-br ${story.gradient} shadow-sm transition-all hover:shadow-md`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900">{story.title}</h3>
                  <p className="mt-3 text-sm text-zinc-700">{story.description}</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {story.metrics.map((metric, idx) => (
                      <div key={idx} className="rounded-lg bg-white/60 p-3 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <metric.icon className="h-4 w-4 text-zinc-600" />
                          <div>
                            <div className="text-lg font-bold text-zinc-900">{metric.value}</div>
                            <div className="text-xs text-zinc-600">{metric.label}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

