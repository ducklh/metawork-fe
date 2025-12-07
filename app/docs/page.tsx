"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Globe,
  Shield,
  TrendingUp,
  Users,
  Building2,
  CheckCircle2,
  Target,
  BarChart3,
  Store,
  Link2,
  Code,
  FileCode,
  Copy,
  XCircle,
  AlertTriangle,
  Rocket,
  LayoutDashboard,
  Brain,
  Globe2,
  Zap,
  MapPin,
  MessageCircle,
  Mail,
  Clock,
  FileText,
  Tag,
  Lock,
  Key,
  Eye,
} from "lucide-react";

export default function DocsPage() {
  return (
    <div className="bg-white min-h-screen">
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
              K-NETWORK Documentation
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 sm:text-xl">
              Technical guidelines and operational standards for brand partners and individual affiliates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platform Overview */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#DC2626] to-black">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">1. Platform Overview</h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl"
          >
            <Card className="border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
              <CardContent className="p-8">
                <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
                  K-NETWORK is a global financial performance system designed for Crypto & Forex partners.
                </p>
                <p className="text-base text-zinc-600 mb-6">
                  Our platform provides:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Scalable customer acquisition</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Brand protection through Google Ads & search coverage</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Commission optimization for individual partners</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900">Secure tracking and reporting infrastructure</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <p className="text-sm text-blue-900">
                    <strong>We support both institutional partnerships</strong> (exchanges, brokers, fintech platforms) <strong>and individual affiliates</strong>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Partner Features */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">2. Partner Features</h2>
                <p className="mt-1 text-sm text-zinc-600">Dành cho sàn Crypto/Forex</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {/* Brand Protection Engine */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-orange-50 mb-4">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Brand Protection Engine</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Search visibility monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Competitor interception defense</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Anti-hijacking keyword protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">High-intent user targeting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Acquisition Framework */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 mb-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Acquisition Framework</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">GEO expansion strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Real-time performance tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Custom funnel optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tracking & Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 mb-4">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Tracking & Analytics</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">S2S postback integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Fraud-filtering & anomaly detection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Conversion-level insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Multi-GEO reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Affiliate Features */}
        <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">3. Affiliate Features</h2>
                <p className="mt-1 text-sm text-zinc-600">Dành cho partner lẻ</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {/* Commission Upgrade System */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 mb-4">
                    <TrendingUp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Commission Upgrade System</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Partners can request higher commission tiers across Binance, Bybit, OKX, MEXC, Gate.io, KuCoin and others.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Marketplace Access */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 mb-4">
                    <Store className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Marketplace Access</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Exclusive partner programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">GEO guidelines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Campaign requirements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tracking Tools */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 mb-4">
                    <Link2 className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Tracking Tools</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">UTM & click tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">API-based link generation (beta)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Realtime reporting dashboard</span>
                    </li>
          </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#DC2626] to-black">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">4. Business Model</h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl"
          >
            <Card className="border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
              <CardContent className="p-8">
                <p className="text-lg text-zinc-700 mb-6 leading-relaxed">
                  K-NETWORK operates on a partnership-driven model:
                </p>

                <div className="space-y-6">
                  {/* For Brand Partners */}
                  <div className="p-5 rounded-lg bg-blue-50 border border-blue-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-bold text-zinc-900">For Brand Partners:</h3>
                    </div>
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      We deliver verified user acquisition through compliant traffic channels. Brands pay based on performance or hybrid growth agreements.
                    </p>
                  </div>

                  {/* For Individual Affiliates */}
                  <div className="p-5 rounded-lg bg-emerald-50 border border-emerald-100">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="h-5 w-5 text-emerald-600" />
                      <h3 className="text-lg font-bold text-zinc-900">For Individual Affiliates:</h3>
                    </div>
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      Partners earn based on trading activity or qualified conversions, depending on the exchange's program structure. K-NETWORK provides transparent reporting and upgraded earning tiers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        </section>

      {/* Integration & Tracking */}
        <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">5. Integration & Tracking</h2>
                <p className="mt-1 text-sm text-zinc-600 font-semibold text-purple-600">Quan trọng nhất trong Docs</p>
              </div>
            </div>
          </motion.div>

          <div className="max-w-5xl space-y-8">
            {/* Supported Tracking Methods */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
            >
              <Card className="border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Supported Tracking Methods</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <div>
                        <p className="font-semibold text-zinc-900">S2S Postback (Recommended)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <div>
                        <p className="font-semibold text-zinc-900">API access (Selected brands)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <div>
                        <p className="font-semibold text-zinc-900">Encrypted referral links</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Required Parameters */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Required Parameters</h3>
                  <div className="p-4 rounded-lg bg-zinc-900 font-mono text-sm text-emerald-400">
                    <code>click_id, user_id, time_stamp, geo, conversion_type</code>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Optional Parameters */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <Card className="border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Optional Parameters</h3>
                  <div className="p-4 rounded-lg bg-zinc-900 font-mono text-sm text-emerald-400">
                    <code>device, platform, campaign_id, sub_id</code>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Postback Example */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 shadow-md ring-1 ring-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileCode className="h-5 w-5 text-purple-600" />
                    <h3 className="text-xl font-bold text-zinc-900">Postback Example:</h3>
                  </div>
                  <div className="relative">
                    <div className="p-4 rounded-lg bg-zinc-900 font-mono text-sm text-emerald-400 break-all">
                      <code>https://k-network.io/postback?click_id={'{'}click_id{'}'}&event={'{'}event{'}'}&payout={'{'}payout{'}'}</code>
                    </div>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText('https://k-network.io/postback?click_id={click_id}&event={event}&payout={payout}');
                      }}
                      className="absolute top-2 right-2 p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                      title="Copy to clipboard"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-3 text-xs text-zinc-600 italic">(Dev chỉ cần paste code này)</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Versioning */}
      <section className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700">
                <Tag className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">API Versioning</h2>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-3 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="h-full border border-zinc-800 bg-zinc-950">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Current version</h3>
                  <p className="text-2xl font-bold text-white mb-1">v1.0</p>
                  <p className="text-sm text-zinc-400">Active API version</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <Card className="h-full border border-zinc-800 bg-zinc-950">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Stability status</h3>
                  <p className="text-base font-semibold text-white mb-1">Stable</p>
                  <p className="text-sm text-zinc-400">Production-ready API</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <Card className="h-full border border-zinc-800 bg-zinc-950">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Deprecation policy</h3>
                  <p className="text-base font-semibold text-white mb-1">6 months notice</p>
                  <p className="text-sm text-zinc-400">Advance notification for changes</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="bg-zinc-950 text-white border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Security Best Practices</h2>
                <p className="mt-1 text-sm text-zinc-400">Guidelines for secure API integrations</p>
              </div>
            </div>
          </motion.div>

          <div className="max-w-5xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
            >
              <Card className="border border-zinc-800 bg-zinc-900">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 shrink-0">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">API Key Management</h3>
                      <ul className="space-y-2 mt-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                          <span className="text-sm text-zinc-400">Store API keys securely using environment variables</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                          <span className="text-sm text-zinc-400">Never commit API keys to version control</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                          <span className="text-sm text-zinc-400">Rotate keys regularly and revoke unused credentials</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="border border-zinc-800 bg-zinc-900">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 shrink-0">
                      <Key className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">Request Authentication</h3>
                      <ul className="space-y-2 mt-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                          <span className="text-sm text-zinc-400">Always use HTTPS for all API requests</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                          <span className="text-sm text-zinc-400">Implement request signing for sensitive operations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                          <span className="text-sm text-zinc-400">Validate server certificates to prevent MITM attacks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <Card className="border border-zinc-800 bg-zinc-900">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 shrink-0">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">Data Handling</h3>
                      <ul className="space-y-2 mt-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                          <span className="text-sm text-zinc-400">Sanitize and validate all input parameters</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                          <span className="text-sm text-zinc-400">Log API interactions securely without exposing sensitive data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                          <span className="text-sm text-zinc-400">Implement rate limiting to prevent abuse</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance & Traffic Policy */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-orange-600">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">6. Compliance & Traffic Policy</h2>
                <p className="mt-1 text-sm text-zinc-600 font-semibold text-amber-600">BẮT BUỘC PHẢI CÓ</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 max-w-5xl">
            {/* Allowed Traffic Sources */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="h-full border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white shadow-md ring-1 ring-emerald-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-zinc-900">Allowed Traffic Sources</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">
                        <strong>Google Ads</strong> (Brand & Generic – depending on brand policy)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Content marketing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Community channels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <span className="text-sm text-zinc-700">Financial audience networks</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Restricted Traffic */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <Card className="h-full border-2 border-red-200 bg-gradient-to-br from-red-50 to-white shadow-md ring-1 ring-red-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="h-6 w-6 text-red-600" />
                    <h3 className="text-xl font-bold text-zinc-900">Restricted Traffic</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span className="text-sm text-zinc-700">Incent traffic</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span className="text-sm text-zinc-700">Fake volume / bot trading</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span className="text-sm text-zinc-700">Trademark violation (without permission)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                      <span className="text-sm text-zinc-700">Misleading claims</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Brand Protection Rules */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="mt-8 max-w-5xl"
          >
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 shadow-md ring-1 ring-amber-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3">Brand Protection Rules</h3>
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      Some partners allow brand bidding; some strictly forbid it. K-NETWORK ensures compliance based on each partner's requirements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        </section>

      {/* Roadmap */}
        <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#DC2626] to-black">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">7. Roadmap</h2>
                <p className="mt-1 text-sm text-zinc-600 font-semibold">2025 Roadmap</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            {/* Affiliate Dashboard 2.0 */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-4">
                    <LayoutDashboard className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Affiliate Dashboard 2.0</h3>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Real-time reporting & multi-GEO data layers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Brand Protection AI System */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-4">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Brand Protection AI System</h3>
                  <p className="text-sm text-purple-100 leading-relaxed">
                    Automated competitor detection & keyword defense.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Global Commission Hub */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-4">
                    <Globe2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Global Commission Hub</h3>
                  <p className="text-sm text-emerald-100 leading-relaxed">
                    One-click upgrade request for all exchanges.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* K-NETWORK API Suite */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.4 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-orange-600 to-red-600 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">K-NETWORK API Suite</h3>
                  <p className="text-sm text-orange-100 leading-relaxed">
                    Programmatic offer management & tracking tools.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Regional Expansion */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.5 }}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="h-full border-0 bg-gradient-to-br from-cyan-600 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Regional Expansion</h3>
                  <p className="text-sm text-cyan-100 leading-relaxed">
                    Turkey, LATAM, EU, Africa.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Support */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">8. Partner Support</h2>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 max-w-5xl">
            {/* Support Channels */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">Support Channels</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <MessageCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-900">Telegram</p>
                        <p className="text-sm text-zinc-600">@K_NETWORK_official</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-900">Email</p>
                        <p className="text-sm text-zinc-600">business@k-network.io</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <MessageCircle className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-900">WeChat</p>
                        <p className="text-sm text-zinc-600">K_NETWORK</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Support Availability */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-zinc-900">Support Availability</h3>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                    <p className="text-lg font-semibold text-zinc-900">Mon–Sun: 8 AM – 11 PM</p>
                    <p className="text-sm text-zinc-600 mt-1">(GMT+8)</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
        </section>

      {/* Legal & Disclaimer */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-600 to-zinc-800">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">9. Legal & Disclaimer</h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl"
          >
            <Card className="border-2 border-zinc-200 bg-gradient-to-br from-zinc-50 to-white shadow-md ring-1 ring-zinc-100">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <p className="text-base text-zinc-700 leading-relaxed">
                    Commission tiers vary based on performance, GEO, and partner rules.
                  </p>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    K-NETWORK does not perform financial services; we provide marketing and partnership infrastructure.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
      </div>
      </section>
    </div>
  );
}
