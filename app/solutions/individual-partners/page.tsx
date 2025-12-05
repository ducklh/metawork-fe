"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrendingUp,
  Users,
  Gift,
  Globe,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  Link2,
  Zap,
  Award,
} from "lucide-react";

const solutions = [
  {
    icon: TrendingUp,
    title: "Commission Upgrade Program",
    subtitle: "Get access to exclusive commission tiers",
    description: "Access exclusive commission tiers across top exchanges and maximize your earnings potential.",
    features: [
      "Exclusive commission tiers",
      "Top exchange partnerships",
      "Higher earning potential",
      "Tier-based rewards system",
      "Performance-based upgrades",
    ],
    gradient: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    icon: Users,
    title: "Referral System Development",
    subtitle: "Grow your network with optimized tools",
    description: "Grow your network with optimized links, tools, and GEO guidance to scale your referral business.",
    features: [
      "Optimized referral links",
      "Advanced tracking tools",
      "GEO-specific guidance",
      "Network growth strategies",
      "Performance analytics",
    ],
    gradient: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: Gift,
    title: "Trading Fee Rebate",
    subtitle: "Future support for automated fee cashback",
    description: "Future support for automated fee cashback for qualified partners. Coming soon!",
    features: [
      "Automated fee cashback",
      "Qualified partner benefits",
      "Seamless integration",
      "Real-time rebate tracking",
      "Coming soon",
    ],
    gradient: "from-purple-50 to-pink-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
    isComingSoon: true,
  },
  {
    icon: Globe,
    title: "Access to Global Offers",
    subtitle: "Work with top exchanges worldwide",
    description: "Work with Binance, Bybit, MEXC, BingX, and more — all inside K-NETWORK.",
    features: [
      "Binance partnership access",
      "Bybit integration",
      "MEXC exclusive offers",
      "BingX opportunities",
      "Multiple exchange options",
    ],
    gradient: "from-amber-50 to-orange-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
  },
];

const exchanges = [
  { name: "Binance", icon: "🚀" },
  { name: "Bybit", icon: "⚡" },
  { name: "MEXC", icon: "💎" },
  { name: "BingX", icon: "🔥" },
  { name: "LBank", icon: "🌐" },
  { name: "Gate.io", icon: "🎯" },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Higher Commissions",
    description: "Access exclusive commission tiers unavailable elsewhere",
  },
  {
    icon: Link2,
    title: "Advanced Tools",
    description: "Optimized links and tracking tools for maximum performance",
  },
  {
    icon: Zap,
    title: "Fast Payouts",
    description: "Quick and reliable crypto payouts to your wallet",
  },
  {
    icon: Award,
    title: "Exclusive Access",
    description: "Early access to new offers and premium campaigns",
  },
];

export default function IndividualPartnersSolutions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Solutions for Individual Partners
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 sm:text-xl">
              Upgrade your commissions, grow your referral system, and access exclusive offers within K-NETWORK.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors shadow-md hover:shadow-lg px-8">
                <Link href="/auth/register-affiliate">Join as Partner</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="/marketplace">View Marketplace</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Solutions</h2>
            <p className="mt-3 text-zinc-600">Everything you need to maximize your affiliate earnings.</p>
          </motion.div>

          <div className="mt-16 space-y-24">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid gap-12 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3">
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.gradient}`}>
                      <solution.icon className={`h-8 w-8 ${solution.iconColor}`} />
                    </div>
                    {solution.isComingSoon && (
                      <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-3xl font-bold tracking-tight">{solution.title}</h3>
                  <p className="mt-3 text-xl font-semibold text-zinc-700">{solution.subtitle}</p>
                  <p className="mt-4 text-lg text-zinc-600">{solution.description}</p>
                  <ul className="mt-6 space-y-3">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                        <span className="text-zinc-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <Card className={`h-full border-2 ${solution.borderColor} bg-gradient-to-br ${solution.gradient} shadow-lg`}>
                    <CardContent className="p-8">
                      <div className="flex h-full items-center justify-center">
                        <div className="text-center">
                          <solution.icon className={`mx-auto h-20 w-20 ${solution.iconColor} opacity-20`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Partners */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Access to Global Offers</h2>
            <p className="mt-3 text-zinc-600">Work with leading exchanges — all inside K-NETWORK.</p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exchanges.map((exchange, i) => (
              <motion.div
                key={exchange.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-all hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{exchange.icon}</div>
                    <h3 className="text-lg font-semibold">{exchange.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-600">
              And more exchanges coming soon. <strong>All accessible through one platform.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Key Benefits</h2>
            <p className="mt-3 text-zinc-600">Why individual partners choose K-NETWORK.</p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-all hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#DC2626] to-black text-white">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
            <p className="mt-3 text-zinc-600">Get started in three simple steps.</p>
          </motion.div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your account and get approved as a K-NETWORK partner.",
              },
              {
                step: "2",
                title: "Access Offers",
                description: "Browse exclusive offers from top exchanges and choose your campaigns.",
              },
              {
                step: "3",
                title: "Start Earning",
                description: "Share your links, track performance, and get paid in crypto.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#DC2626] to-black text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-zinc-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border bg-gradient-to-br from-[#DC2626] to-black px-8 py-14 text-center text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold sm:text-3xl">Ready to Upgrade Your Commissions?</h3>
            <p className="mt-4 text-lg text-white/90">
              Join K-NETWORK and access exclusive offers from top exchanges worldwide.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-[#DC2626] hover:bg-zinc-100 transition-colors shadow-lg hover:shadow-xl px-8">
                <Link href="/auth/register-affiliate">Join as Partner</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white px-8">
                <Link href="/marketplace">View Marketplace</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

