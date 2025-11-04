"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

const stories = [
  {
    title: "Crypto Content Creator Success",
    description: "A YouTube creator specializing in crypto education increased monthly earnings by 300% using our platform.",
    metrics: [
      { label: "Monthly Revenue", value: "$45K+", icon: DollarSign },
      { label: "Conversion Rate", value: "12.5%", icon: Target },
    ],
    gradient: "from-violet-50 to-purple-50",
    borderColor: "border-violet-200",
  },
  {
    title: "Trading Platform Partnership",
    description: "A major crypto exchange scaled their affiliate program to 50,000+ active affiliates in 6 months.",
    metrics: [
      { label: "Active Affiliates", value: "50K+", icon: Users },
      { label: "Growth", value: "400%", icon: TrendingUp },
    ],
    gradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
  },
  {
    title: "Fintech Startup Growth",
    description: "A fintech startup leveraged our network to acquire 10,000+ premium customers within 3 months.",
    metrics: [
      { label: "New Customers", value: "10K+", icon: Users },
      { label: "ROI", value: "250%", icon: TrendingUp },
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Success Stories</h2>
          <p className="mt-3 text-zinc-600">See how affiliates and advertisers are achieving remarkable results with K Network.</p>
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

