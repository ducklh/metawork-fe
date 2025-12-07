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
    isComingSoon: false,
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
    isComingSoon: false,
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
    isComingSoon: false,
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
    description: "Request access to commission tiers that may not be available through direct signup",
  },
  {
    icon: Link2,
    title: "Tracking Tools",
    description: "Link generation, click tracking, and performance reporting tools",
  },
  {
    icon: Zap,
    title: "Payouts",
    description: "Crypto payouts processed according to exchange schedules",
  },
  {
    icon: Award,
    title: "Exclusive Offers",
    description: "Access to partner programs and offers available through K-Network",
  },
];

export default function IndividualPartnersSolutions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-50" />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                Solutions for Individual Partners
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 sm:text-xl leading-relaxed">
                Access higher commission tiers, referral tools, and exclusive exchange offers through K-Network.
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
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Our Solutions</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Tools and access to help you grow your affiliate business.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-zinc-200 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100">
                        <solution.icon className="h-6 w-6 text-zinc-900" />
                      </div>
                      {solution.isComingSoon && (
                        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 border border-zinc-200">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold text-zinc-900">{solution.title}</h3>
                    <p className="mt-2 text-base font-medium text-zinc-700">{solution.subtitle}</p>
                    <p className="mt-4 text-base text-zinc-600 leading-relaxed">{solution.description}</p>
                    <ul className="mt-6 space-y-3">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-zinc-600" />
                          <span className="text-sm text-zinc-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exchange Partners */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Available Exchanges</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Access offers from multiple exchanges through one platform.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exchanges.map((exchange, i) => (
              <motion.div
                key={exchange.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Card className="h-full border border-zinc-200 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3">{exchange.icon}</div>
                    <h3 className="text-lg font-semibold text-zinc-900">{exchange.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-600">
              Additional exchanges available. All accessible through one platform.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Benefits</h2>
            <p className="mt-4 text-lg text-zinc-600">
              What partners get when working with K-Network.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Card className="h-full border border-zinc-200 bg-white">
                  <CardContent className="p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                      <benefit.icon className="h-6 w-6 text-zinc-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Getting started is straightforward.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create an account and complete the approval process.",
              },
              {
                step: "2",
                title: "Browse Offers",
                description: "Review available offers from exchanges and select campaigns.",
              },
              {
                step: "3",
                title: "Start Earning",
                description: "Share links, track conversions, and receive payouts.",
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
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-2xl font-semibold text-white">
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-3 text-base text-zinc-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-zinc-200 bg-white px-8 py-14 text-center"
          >
            <h3 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">Get Started</h3>
            <p className="mt-4 text-lg text-zinc-600">
              Join K-Network to access exclusive offers and higher commission tiers from top exchanges.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 px-8 h-12">
                <Link href="/auth/register-affiliate">Join as Partner</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-zinc-300 bg-white hover:bg-zinc-50 px-8 h-12">
                <Link href="/marketplace">View Marketplace</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

