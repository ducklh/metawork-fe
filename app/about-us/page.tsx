"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Rocket,
  Globe,
  Shield,
  TrendingUp,
  FileCheck,
  BarChart3,
  Building2,
  Users,
  Award,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Send,
  Target,
  Eye,
  Zap,
  Heart,
  Handshake,
} from "lucide-react";

const ecosystemItems = [
  {
    title: "K-AGENCY",
    description: "Global advertising & data solutions",
    icon: Building2,
    gradient: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
  },
  {
    title: "K-FINANCE",
    description: "Free traffic & financial insights",
    icon: TrendingUp,
    gradient: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "K-FOUNDATION",
    description: "Community support & charity impact",
    icon: Users,
    gradient: "from-purple-50 to-pink-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Tài Nguyên MMO",
    description: "Google Ads infrastructure & support",
    icon: Award,
    gradient: "from-amber-50 to-orange-50",
    iconColor: "text-amber-600",
  },
];

const geoLocations = [
  "Vietnam",
  "Thailand",
  "Indonesia",
  "Turkey",
  "Brazil",
  "Mexico",
  "South Africa",
  "EU (selected)",
];

const differentiators = [
  {
    title: "Expertise in high-compliance industries",
    icon: Shield,
    gradient: "from-red-50 to-rose-50",
    iconColor: "text-red-600",
  },
  {
    title: "Proprietary Google Ads brand defense methods",
    icon: BarChart3,
    gradient: "from-blue-50 to-cyan-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Real users, real trading behavior",
    icon: Users,
    gradient: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-600",
  },
  {
    title: "Long-term partnership mindset",
    icon: Rocket,
    gradient: "from-purple-50 to-pink-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Transparent reporting & commission structure",
    icon: FileCheck,
    gradient: "from-amber-50 to-orange-50",
    iconColor: "text-amber-600",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section - Who We Are */}
      <section className="bg-gradient-to-b from-white to-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Who We Are</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 sm:text-xl">
              K-NETWORK is a global financial growth system that partners with top Crypto & Forex brands and individual affiliates. We specialize in customer acquisition, brand protection, and commission optimization through advanced performance marketing and data-driven strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="relative h-64 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-red-100 sm:h-80 lg:h-96 flex items-center justify-center"
            >
              <Image
                src="/logos/k-logo.png"
                alt="K-NETWORK Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
              <div className="mt-6 space-y-4 text-lg text-zinc-600">
                <p>
                  K-NETWORK was founded by Nguyễn Hữu Nghĩa after years of working in the financial marketing industry, where compliance, transparency, and high-quality traffic are essential for success.
                </p>
                <p>
                  Starting from real campaigns and real traffic, we built a unique system that helps exchanges and brokers grow sustainably through Google Ads, referral networks, and strategic GEO expansion.
                </p>
                <p>
                  As demand grew, we developed K-NETWORK into a global ecosystem under K-GROUP — a powerhouse supporting partners worldwide with innovation, reliability, and measurable results.
                </p>
                <p>
                  Today, K-NETWORK collaborates with leading Crypto & Forex brands, processes millions of impressions monthly, and empowers thousands of partners across multiple regions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Vision & Mission</h2>
            <p className="mt-3 text-zinc-600">The principles that guide everything we do.</p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-50 to-red-100">
                    <Rocket className="h-6 w-6 text-red-700" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Vision</h3>
                  <p className="mt-3 text-sm text-zinc-600">
                    To become the world&apos;s most trusted financial growth system for brands and partners.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200">
                    <Target className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Mission</h3>
                  <p className="mt-3 text-sm text-zinc-600">
                    To deliver sustainable user acquisition, brand protection, and commission growth through advanced technology and long-term collaboration.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* What Drives Us */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-gray-900 to-black shadow-sm ring-1 ring-zinc-800 transition-transform hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-200">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">What Drives Us</h3>
                  <p className="mt-3 text-sm text-zinc-300">
                    We believe in partnership, transparency, and real impact. Our work must create value for brands, partners, and the global financial community.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="mt-3 text-zinc-600">
              The global team driving K-NETWORK&apos;s success across Crypto, Forex, and financial marketing.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Nguyễn Hữu Nghĩa */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="group"
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-all hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-red-100 ring-2 ring-zinc-200">
                    <Image
                      src="/member/nguyen-huu-nghia.png"
                      alt="Nguyễn Hữu Nghĩa"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Nguyễn Hữu Nghĩa</h3>
                  <p className="mt-1 text-sm font-medium text-[#DC2626]">Founder & CEO</p>
                  <p className="mt-3 text-sm text-zinc-600">
                    Leader in performance marketing with deep expertise in Crypto, Forex, Google Ads, and global system building.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* ATHAN */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="group"
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-all hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-blue-100 ring-2 ring-zinc-200">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-200 to-blue-300 text-2xl font-bold text-blue-700">
                      A
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">ATHAN</h3>
                  <p className="mt-1 text-sm font-medium text-[#DC2626]">Co-Founder</p>
                  <p className="mt-3 text-sm text-zinc-600">
                    Specialist in technical infrastructure, platform architecture, and partner scaling.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Trang */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="group"
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-all hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-emerald-100 ring-2 ring-zinc-200">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-200 to-emerald-300 text-2xl font-bold text-emerald-700">
                      T
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Trang</h3>
                  <p className="mt-1 text-sm font-medium text-[#DC2626]">Head of Operations</p>
                  <p className="mt-3 text-sm text-zinc-600">
                    Managing operations, partner communication, and workflow optimization across K-GROUP.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Nhi */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="group"
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-all hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-purple-100 ring-2 ring-zinc-200">
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-200 to-purple-300 text-2xl font-bold text-purple-700">
                      N
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Nhi</h3>
                  <p className="mt-1 text-sm font-medium text-[#DC2626]">Head of Media</p>
                  <p className="mt-3 text-sm text-zinc-600">
                    Expert in paid traffic for high-compliance industries, leading Google Ads strategies and acquisition funnels.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Ecosystem */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Ecosystem</h2>
            <p className="mt-3 text-zinc-600">
              K-NETWORK is part of the K-GROUP ecosystem, which includes:
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystemItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient}`}>
                      <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global GEO Strength */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Global GEO Strength</h2>
            <p className="mt-3 text-zinc-600">We operate strongly in:</p>
          </motion.div>
          <div className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              {geoLocations.map((location, i) => (
                <motion.div
                  key={location}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Card className="border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-all hover:shadow-md">
                    <CardContent className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-[#DC2626]" />
                        <span className="font-semibold text-zinc-900">{location}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Makes Us Different</h2>
            <p className="mt-3 text-zinc-600">The competitive advantages that set K-NETWORK apart.</p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient}`}>
                      <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-3 text-zinc-600">The core principles that shape our culture and decisions.</p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Transparency */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Transparency</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    Clear data, honest communication.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Innovation</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    Creative, scalable financial marketing solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Integrity */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Integrity</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    Doing what&apos;s right for partners and users.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.4 }}
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-50 to-orange-50">
                    <Handshake className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Collaboration</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    Growth powered by long-term trust.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Global Mindset */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.5 }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-rose-50">
                    <Globe className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Global Mindset</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    Operating with worldwide vision and adaptability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones & Impact */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Milestones & Impact</h2>
            <p className="mt-3 text-zinc-600">Our journey in numbers.</p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 100+ Global Brand Partners */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="overflow-hidden rounded-xl border-0 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-100">
                    <Building2 className="h-6 w-6 text-violet-700" />
                  </div>
                  <div className="mt-4 text-3xl font-bold text-violet-700">100+</div>
                  <div className="mt-1 text-sm font-semibold text-zinc-700">Global Partners</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 10M+ Monthly Impressions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Card className="overflow-hidden rounded-xl border-0 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100">
                    <BarChart3 className="h-6 w-6 text-blue-700" />
                  </div>
                  <div className="mt-4 text-3xl font-bold text-blue-700">10M+</div>
                  <div className="mt-1 text-sm font-semibold text-zinc-700">Monthly Impressions</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 300+ Active Campaigns Managed */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Card className="overflow-hidden rounded-xl border-0 bg-gradient-to-br from-emerald-50 to-teal-50 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100">
                    <TrendingUp className="h-6 w-6 text-emerald-700" />
          </div>
                  <div className="mt-4 text-3xl font-bold text-emerald-700">300+</div>
                  <div className="mt-1 text-sm font-semibold text-zinc-700">Active Campaigns</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* 8+ Years in Financial Performance Marketing */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              >
              <Card className="overflow-hidden rounded-xl border-0 bg-gradient-to-br from-amber-50 to-orange-50 shadow-sm">
                  <CardContent className="p-6 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-100">
                    <Award className="h-6 w-6 text-amber-700" />
                    </div>
                  <div className="mt-4 text-3xl font-bold text-amber-700">8+ Years</div>
                  <div className="mt-1 text-sm font-semibold text-zinc-700">Industry Experience</div>
                  </CardContent>
                </Card>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Journey */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border bg-gradient-to-br from-[#DC2626] to-black px-8 py-14 text-center text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold sm:text-3xl">Join Our Journey</h3>
            <p className="mt-4 text-lg text-white/90">
              We&apos;re building a global ecosystem for financial growth — bringing together exchanges, brokers, communities, and partners.
            </p>
            <p className="mt-3 text-base text-white/80">
              Grow with us.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-[#DC2626] hover:bg-zinc-100 transition-colors shadow-lg hover:shadow-xl px-8">
                <Link href="/partner-with-us">Partner With Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white px-8">
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
            <p className="mt-3 text-zinc-600">We&apos;d love to hear from you.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="text-center"
            >
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-100">
                <Mail className="h-6 w-6 text-red-700" />
              </div>
              <h3 className="mt-4 font-semibold">Email</h3>
              <a
                href="mailto:info@k-network.io"
                className="mt-2 block text-sm text-zinc-600 hover:text-red-700"
              >
                info@k-network.io
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-center"
            >
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-100">
                <MapPin className="h-6 w-6 text-red-700" />
              </div>
              <h3 className="mt-4 font-semibold">Location</h3>
              <p className="mt-2 text-sm text-zinc-600">Hong Kong — Global Operations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="text-center"
            >
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-100">
                <Send className="h-6 w-6 text-red-700" />
              </div>
              <h3 className="mt-4 font-semibold">Social</h3>
              <div className="mt-2 flex items-center justify-center gap-4 text-sm">
                <a
                  href="https://t.me/K_NETWORK_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-red-700 transition-colors"
                >
                  Telegram
                </a>
                <span className="text-zinc-300">|</span>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-red-700 transition-colors"
                >
                  X
                </a>
                <span className="text-zinc-300">|</span>
                <a
                  href="mailto:info@k-network.io"
                  className="text-zinc-600 hover:text-red-700 transition-colors"
                >
                  Email
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
