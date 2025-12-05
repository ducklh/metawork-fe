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
    subtitle: "Prevent competitors from hijacking your keywords",
    description: "Defend your brand visibility on Google with our proprietary system.",
    features: [
      "Proprietary Google Ads defense system",
      "Keyword hijacking prevention",
      "Brand search visibility protection",
      "Competitor monitoring & blocking",
      "Real-time brand defense alerts",
    ],
    gradient: "from-red-50 to-rose-50",
    iconColor: "text-red-600",
    borderColor: "border-red-200",
  },
  {
    icon: Target,
    title: "Customer Acquisition",
    subtitle: "High-intent traffic from global GEOs",
    description: "Proven financial performance with real users showing strong trading behavior.",
    features: [
      "High-intent traffic generation",
      "Global GEO coverage",
      "Proven financial performance",
      "Real users with trading behavior",
      "Consistent conversion rates",
    ],
    gradient: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: Globe,
    title: "Global Expansion Strategy",
    subtitle: "We open new GEOs safely and sustainably",
    description: "Deep market understanding ensures successful entry into new territories.",
    features: [
      "Safe & sustainable GEO expansion",
      "Deep market understanding",
      "Regulatory compliance expertise",
      "Local market insights",
      "Risk mitigation strategies",
    ],
    gradient: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    icon: Handshake,
    title: "Partnership Model",
    subtitle: "Flexible pricing and budget control",
    description: "Choose the model that works best for your business goals.",
    features: [
      "Monthly budget control",
      "CPA / CPL / Hybrid models",
      "Revenue share (Ref) model",
      "Transparent reporting",
      "Custom pricing structures",
    ],
    gradient: "from-purple-50 to-pink-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
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
              Solutions for Crypto & Forex Brands
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 sm:text-xl">
              Accelerate your growth with brand protection, high-intent customer acquisition, and strategic global expansion.
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
            <p className="mt-3 text-zinc-600">Comprehensive services designed for crypto and forex brands.</p>
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
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.gradient}`}>
                    <solution.icon className={`h-8 w-8 ${solution.iconColor}`} />
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

      {/* Partnership Models Detail */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Partnership Models</h2>
            <p className="mt-3 text-zinc-600">Flexible pricing options to suit your business needs.</p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnershipModels.map((model, i) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-all hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#DC2626] to-black text-white">
                      <model.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{model.name}</h3>
                    <p className="mt-2 text-sm text-zinc-600">{model.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-600">
              <strong>Monthly budget control</strong> - Full transparency and control over your marketing spend.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our Solutions</h2>
            <p className="mt-3 text-zinc-600">Built specifically for crypto and forex brands.</p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "8+ years of financial marketing expertise",
              "Proprietary brand protection technology",
              "Global GEO coverage with local expertise",
              "Transparent reporting & analytics",
              "Compliance-first approach",
              "Long-term partnership focus",
            ].map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <span className="text-zinc-700">{benefit}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border bg-gradient-to-br from-[#DC2626] to-black px-8 py-14 text-center text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold sm:text-3xl">Ready to Scale Your Brand?</h3>
            <p className="mt-4 text-lg text-white/90">
              Partner with K-NETWORK and accelerate your growth with proven solutions.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-[#DC2626] hover:bg-zinc-100 transition-colors shadow-lg hover:shadow-xl px-8">
                <Link href="/partner-with-us">Partner With Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white px-8">
                <Link href="/about-us">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

