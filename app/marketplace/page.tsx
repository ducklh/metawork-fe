"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Globe, TrendingUp, Shield, MapPin, Building2, AlertCircle, CheckCircle2, Info } from "lucide-react";
import Link from "next/link";

type Offer = {
  id: string;
  title: string;
  category: "CRYPTO" | "FOREX";
  description: string;
  commission: string;
  geoIdeal: string[];
  benefits: string[];
};

const offers: Offer[] = [
  {
    id: "bybit",
    title: "Bybit Global Partner Program",
    category: "CRYPTO",
    description: "Unlock one of the industry's highest commission tiers with fast approvals and strong conversion rates. Ideal for GEOs such as VN, TH, TR, BR, MX.",
    commission: "Up to the highest partner tier available",
    geoIdeal: ["VN", "TH", "TR", "BR", "MX"],
    benefits: [
      "Fast approval process",
      "Strong conversion rates",
      "Priority support",
      "Advanced tracking tools",
    ],
  },
  {
    id: "binance",
    title: "Binance Affiliate Program",
    category: "CRYPTO",
    description: "Join the world's leading exchange with upgraded commission tiers, excellent user retention, and global coverage across multiple GEOs.",
    commission: "Top-tier commission available",
    geoIdeal: ["Global", "VN", "TH", "ID", "TR", "BR", "MX", "ZA"],
    benefits: [
      "Upgraded commission tiers",
      "Excellent user retention",
      "Global coverage",
      "World's leading exchange",
    ],
  },
  {
    id: "okx",
    title: "OKX Partner Program",
    category: "CRYPTO",
    description: "High-quality partner program with strong support for pro traders, excellent tracking, and expansion-friendly GEOs including Turkey & LATAM.",
    commission: "Up to the highest performance tier",
    geoIdeal: ["TR", "LATAM", "Global", "VN", "TH", "BR", "MX"],
    benefits: [
      "Strong pro trader support",
      "Excellent tracking",
      "Expansion-friendly GEOs",
      "High-quality program",
    ],
  },
  {
    id: "huobi",
    title: "Huobi Global Partners",
    category: "CRYPTO",
    description: "A stable and long-standing exchange offering strong conversion and retention for multiple emerging markets.",
    commission: "Top-level commission available",
    geoIdeal: ["Global", "VN", "TH", "ID", "BR", "MX"],
    benefits: [
      "Stable platform",
      "Long-standing exchange",
      "Strong conversion rates",
      "Emerging markets focus",
    ],
  },
  {
    id: "gate",
    title: "Gate.io Partner Program",
    category: "CRYPTO",
    description: "Popular for mid-tier GEOs with competitive earning rates, diverse product categories, and proven user activity.",
    commission: "Upgraded commission tiers available",
    geoIdeal: ["Global", "VN", "TH", "ID", "TR", "BR"],
    benefits: [
      "Competitive earning rates",
      "Diverse product categories",
      "Proven user activity",
      "Mid-tier GEO focus",
    ],
  },
  {
    id: "kucoin",
    title: "KuCoin Affiliate Program",
    category: "CRYPTO",
    description: "High-engagement user base and wide product offering, suitable for partners targeting dynamic and emerging markets.",
    commission: "Up to the official highest tier",
    geoIdeal: ["Global", "VN", "TH", "ID", "BR", "MX"],
    benefits: [
      "High-engagement users",
      "Wide product offering",
      "Dynamic markets",
      "Emerging markets focus",
    ],
  },
];

export default function MarketplacePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Exclusive Partner Programs
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 sm:text-xl">
              Access high-level Crypto & Forex partner programs with upgraded commissions and priority support through K-NETWORK.
            </p>
            <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-600">
              We collaborate with leading global platforms to provide better earning tiers, safer GEOs, and long-term partnership benefits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offers Grid */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer, i) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-all hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-xl font-bold text-zinc-900 leading-tight">{offer.title}</h3>
                        <Badge
                          variant="outline"
                          className={`shrink-0 ${
                            offer.category === "CRYPTO"
                              ? "border-blue-200 bg-blue-50 text-blue-700"
                              : "border-emerald-200 bg-emerald-50 text-emerald-700"
                          }`}
                        >
                          {offer.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
                      {offer.description}
                    </p>

                    {/* Commission */}
                    <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">Commission</span>
                      </div>
                      <p className="text-sm font-semibold text-zinc-900">{offer.commission}</p>
                    </div>

                    {/* Ideal GEOs */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-zinc-500" />
                        <span className="text-xs font-semibold text-zinc-700 uppercase tracking-wide">Ideal GEOs</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {offer.geoIdeal.map((geo, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 border border-blue-100"
                          >
                            {geo}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="h-4 w-4 text-zinc-500" />
                        <span className="text-xs font-semibold text-zinc-700 uppercase tracking-wide">Key Benefits</span>
                      </div>
                      <ul className="space-y-1.5">
                        {offer.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                            <span className="text-xs text-zinc-600">{benefit}</span>
                          </li>
                        ))}
                        {offer.benefits.length > 3 && (
                          <li className="text-xs text-zinc-500 pl-3.5">+{offer.benefits.length - 3} more benefits</li>
                        )}
                      </ul>
                    </div>

                    {/* Request Access Button */}
                    <Button
                      asChild
                      className="w-full bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors shadow-sm hover:shadow-md"
                    >
                      <Link href={`/auth/register-affiliate?offer=${offer.id}`}>Request Access</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Partnerships */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <Card className="border-2 border-zinc-200 bg-gradient-to-br from-white to-zinc-50 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#DC2626] to-black shrink-0">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-3">
                      Looking for a custom partnership?
                    </h2>
                    <p className="text-zinc-600 mb-6">
                      We also collaborate directly with exchanges, brokers, wallets, and fintech platforms to scale user acquisition and brand visibility.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors shadow-md hover:shadow-lg"
                    >
                      <Link href="/partner-with-us">Partner With Us</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to Upgrade Your Commissions?</h2>
            <p className="mt-4 text-zinc-600">
              Request access to exclusive partner programs and unlock higher earning potential. All requests are reviewed within 24-48 hours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors shadow-md hover:shadow-lg px-8">
                <Link href="/auth/register-affiliate">Join as Partner</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="/solutions/individual-partners">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Program Verification */}
      <section className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="flex items-start gap-4 max-w-4xl mx-auto"
          >
            <div className="flex-shrink-0 mt-1">
              <CheckCircle2 className="h-5 w-5 text-zinc-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-white mb-2">Partner Program Verification</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                All programs are reviewed based on transparency, reputation, and regulatory alignment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Geographic Availability Notice */}
      <section className="bg-zinc-950 text-white border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
            className="flex items-start gap-4 max-w-4xl mx-auto"
          >
            <div className="flex-shrink-0 mt-1">
              <Info className="h-5 w-5 text-zinc-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-white mb-2">Geographic Availability Notice</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Some programs may be restricted in certain jurisdictions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="bg-zinc-50 border-t">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            <div className="flex items-start gap-3 rounded-lg bg-amber-50 border border-amber-200 p-4">
              <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-amber-900 leading-relaxed">
                  <strong>Legal Notice:</strong> Commission tiers may vary by region and approval level. K-NETWORK provides the highest available partner tiers based on official program requirements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

