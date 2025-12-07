"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Target,
  Globe,
  Handshake,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  MapPin,
  DollarSign,
} from "lucide-react";

const solutions = [
  {
    icon: Shield,
    title: "Brand Protection",
    subtitle: "Defend your brand search visibility",
    description: "Prevent competitors from hijacking your brand keywords on Google Ads. Monitor and block unauthorized use of your brand terms.",
    features: [
      "Google Ads brand defense",
      "Keyword hijacking prevention",
      "Search visibility monitoring",
      "Competitor blocking",
      "Real-time alerts",
    ],
  },
  {
    icon: Target,
    title: "Customer Acquisition",
    subtitle: "High-intent traffic from key markets",
    description: "Generate qualified traffic from markets where we have proven performance. Focus on users with genuine trading intent.",
    features: [
      "High-intent traffic",
      "Global market coverage",
      "Verified user behavior",
      "Consistent conversion performance",
      "Quality-focused approach",
    ],
  },
  {
    icon: Globe,
    title: "Geographic Expansion",
    subtitle: "Enter new markets with compliance support",
    description: "Expand into new regions with understanding of local regulations, market conditions, and user behavior patterns.",
    features: [
      "Regulatory compliance support",
      "Market entry strategy",
      "Local market insights",
      "Risk assessment",
      "Sustainable expansion",
    ],
  },
  {
    icon: Handshake,
    title: "Partnership Models",
    subtitle: "Flexible pricing options",
    description: "Choose from multiple pricing models that align with your business objectives and budget requirements.",
    features: [
      "Monthly budget control",
      "CPA, CPL, and hybrid models",
      "Revenue share options",
      "Transparent reporting",
      "Custom pricing available",
    ],
  },
];

const partnershipModels = [
  {
    name: "CPA Model",
    description: "Cost Per Acquisition - Pay only for verified conversions",
    icon: CheckCircle2,
  },
  {
    name: "CPL Model",
    description: "Cost Per Lead - Pay for qualified leads generated",
    icon: Users,
  },
  {
    name: "Hybrid Model",
    description: "Combination of CPA and CPL for optimal performance",
    icon: TrendingUp,
  },
  {
    name: "Revenue Share",
    description: "Revenue-based model with transparent commission structure",
    icon: DollarSign,
  },
];

export default function CryptoForexSolutions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-50 rounded-full blur-3xl opacity-50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Solutions for Crypto & Forex Brands
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 sm:text-xl leading-relaxed">
              Brand protection, customer acquisition, and geographic expansion services for exchanges and brokers.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors shadow-md hover:shadow-lg px-8">
                <Link href="/partner-with-us">Partner With Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="/about-us">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Our Solutions</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Services designed for crypto and forex exchanges and brokers.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2">
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
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-6">
                      <solution.icon className="h-6 w-6 text-zinc-900" />
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

      {/* Partnership Models Detail */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Pricing Models</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Choose the pricing structure that fits your business model.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnershipModels.map((model, i) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Card className="h-full border border-zinc-200 bg-white">
                  <CardContent className="p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                      <model.icon className="h-6 w-6 text-zinc-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900">{model.name}</h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{model.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-600">
              <strong>Monthly budget control:</strong> You maintain full control over your marketing spend with transparent reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Why Work With Us</h2>
            <p className="mt-4 text-lg text-zinc-600">
              What sets our approach apart in the market.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "8+ years experience in financial marketing",
              "Brand protection methods for Google Ads",
              "Global market coverage with local knowledge",
              "Clear reporting and analytics",
              "Compliance-focused operations",
              "Partnership approach to growth",
            ].map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Card className="h-full border border-zinc-200 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-zinc-600" />
                      <span className="text-sm text-zinc-700">{benefit}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-zinc-200 bg-zinc-50 px-8 py-14 text-center"
          >
            <h3 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">Get Started</h3>
            <p className="mt-4 text-lg text-zinc-600">
              Connect with our team to discuss your requirements and see how we can help.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 px-8 h-12">
                <Link href="/partner-with-us">Contact Sales</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-zinc-300 bg-white hover:bg-zinc-50 px-8 h-12">
                <Link href="/about-us">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

