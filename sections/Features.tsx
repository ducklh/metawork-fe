"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Zap,
  Globe,
  Lock,
  BarChart3,
  Wallet,
  Link2,
  Smartphone,
  Headphones,
  Code,
  Shield,
  TrendingUp,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Setup",
    description: "Get started in minutes with instant approval and immediate access to campaigns.",
    color: "from-yellow-50 to-orange-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access campaigns from around the world with multi-language and multi-currency support.",
    color: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "Your data and earnings are protected with enterprise-grade encryption and security measures.",
    color: "from-green-50 to-emerald-50",
    iconColor: "text-green-600",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into your performance with customizable reports and real-time dashboards.",
    color: "from-purple-50 to-pink-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Wallet,
    title: "Flexible Payouts",
    description: "Choose from multiple payment methods including crypto, stablecoins, and traditional methods.",
    color: "from-cyan-50 to-teal-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Link2,
    title: "Smart Link Management",
    description: "Create, organize, and track unlimited links with our intuitive link management system.",
    color: "from-red-50 to-rose-50",
    iconColor: "text-red-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Manage your campaigns on the go with our fully responsive mobile interface.",
    color: "from-violet-50 to-fuchsia-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated support team available around the clock.",
    color: "from-amber-50 to-yellow-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Comprehensive API documentation and SDKs for seamless integration with your systems.",
    color: "from-slate-50 to-gray-50",
    iconColor: "text-slate-600",
  },
  {
    icon: Shield,
    title: "Fraud Protection",
    description: "Advanced anti-fraud systems ensure fair play and protect both affiliates and advertisers.",
    color: "from-indigo-50 to-blue-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "AI-powered recommendations help you optimize campaigns and maximize your earnings.",
    color: "from-emerald-50 to-green-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Stay informed with instant notifications and real-time updates on all your activities.",
    color: "from-pink-50 to-rose-50",
    iconColor: "text-pink-600",
  },
];

export function Features() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Powerful Features</h2>
          <p className="mt-3 text-zinc-600">Everything you need to succeed in affiliate marketing, all in one platform.</p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-all hover:-translate-y-1 hover:shadow-md hover:ring-zinc-200">
                <CardContent className="p-6">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color}`}>
                    <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

