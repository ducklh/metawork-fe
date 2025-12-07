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
  Send,
  Target,
  Eye,
  Zap,
  Handshake,
} from "lucide-react";

const ecosystemItems = [
  {
    title: "K-AGENCY",
    description: "Advertising and data solutions for financial brands",
    icon: Building2,
  },
  {
    title: "K-FINANCE",
    description: "Traffic and financial market insights",
    icon: TrendingUp,
  },
  {
    title: "K-FOUNDATION",
    description: "Community support and charitable initiatives",
    icon: Users,
  },
  {
    title: "Tài Nguyên MMO",
    description: "Google Ads infrastructure and technical support",
    icon: Award,
  },
];

const geoLocations = [
  { name: "Vietnam", code: "vn" },
  { name: "Thailand", code: "th" },
  { name: "Indonesia", code: "id" },
  { name: "Turkey", code: "tr" },
  { name: "Brazil", code: "br" },
  { name: "Mexico", code: "mx" },
  { name: "South Africa", code: "za" },
  { name: "EU (selected)", code: "eu" },
];

const differentiators = [
  {
    title: "Compliance expertise",
    description: "Experience working with regulated financial markets and high-compliance requirements",
    icon: Shield,
  },
  {
    title: "Brand protection methods",
    description: "Proven strategies for defending brand search visibility on Google Ads",
    icon: BarChart3,
  },
  {
    title: "Real user traffic",
    description: "Focus on genuine trading activity and verified user behavior",
    icon: Users,
  },
  {
    title: "Partnership approach",
    description: "Long-term relationships with clear communication and shared growth objectives",
    icon: Rocket,
  },
  {
    title: "Transparent operations",
    description: "Clear reporting, straightforward commission structures, and open communication",
    icon: FileCheck,
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section - Who We Are */}
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
              Who We Are
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 sm:text-xl leading-relaxed">
              K-Network provides trading infrastructure, liquidity routing, and performance marketing services to crypto and forex exchanges, brokers, and trading platforms. We work with both institutional partners and individual affiliates to deliver customer acquisition, brand protection, and commission optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="relative h-64 w-full overflow-hidden rounded-lg bg-white border border-zinc-200 sm:h-80 lg:h-96 flex items-center justify-center"
            >
              <Image
                src="/logos/k-logo.png"
                alt="K-Network Logo"
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
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Our Story</h2>
              <div className="mt-6 space-y-5 text-base text-zinc-600 leading-relaxed">
                <p>
                  K-Network was founded by Nguyễn Hữu Nghĩa, who spent several years working in financial marketing where compliance, transparency, and quality traffic are critical.
                </p>
                <p>
                  We started with real campaigns and real traffic, building a system that helps exchanges and brokers grow through Google Ads, referral networks, and strategic geographic expansion.
                </p>
                <p>
                  As demand increased, we expanded K-Network into a broader ecosystem under K-Group, supporting partners globally with reliable infrastructure and measurable results.
                </p>
                <p>
                  Today, K-Network works with leading crypto and forex brands, processes millions of impressions monthly, and supports thousands of partners across multiple regions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Vision & Mission</h2>
            <p className="mt-4 text-lg text-zinc-600">
              The principles that guide our work and partnerships.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="h-full border border-zinc-200 bg-white">
                <CardContent className="p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-6">
                    <Rocket className="h-6 w-6 text-zinc-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900">Vision</h3>
                  <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                    To become the most trusted financial growth platform for brands and partners worldwide.
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
              <Card className="h-full border border-zinc-200 bg-white">
                <CardContent className="p-8">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-6">
                    <Target className="h-6 w-6 text-zinc-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900">Mission</h3>
                  <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                    To deliver sustainable user acquisition, brand protection, and commission growth through reliable technology and long-term partnerships.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Leadership Team</h2>
            <p className="mt-4 text-lg text-zinc-600">
              The team building K-Network's infrastructure and partnerships.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Nguyễn Hữu Nghĩa */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="h-full border border-zinc-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full bg-zinc-100 border-2 border-zinc-200">
                    <Image
                      src="/member/nguyen-huu-nghia.png"
                      alt="Nguyễn Hữu Nghĩa"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900">Nguyễn Hữu Nghĩa</h3>
                  <p className="mt-1 text-sm font-medium text-zinc-600">Founder & CEO</p>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    Performance marketing expertise in crypto, forex, Google Ads, and global infrastructure.
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
            >
              <Card className="h-full border border-zinc-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full bg-zinc-100 border-2 border-zinc-200">
                    <Image
                      src="/member/ATHAN.png"
                      alt="ATHAN"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900">ATHAN</h3>
                  <p className="mt-1 text-sm font-medium text-zinc-600">Co-Founder</p>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    Technical infrastructure, platform architecture, and partner scaling.
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
            >
              <Card className="h-full border border-zinc-200 bg-white">
                <CardContent className="p-6 text-center">

                  <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full bg-zinc-100 border-2 border-zinc-200">
                    <Image
                      src="/member/trang.png"
                      alt="Trang"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900">Trang</h3>
                  <p className="mt-1 text-sm font-medium text-zinc-600">Head of Operations</p>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    Operations management, partner communication, and workflow optimization across K-Group.
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
            >
              <Card className="h-full border border-zinc-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full bg-zinc-100 border-2 border-zinc-200">
                    <Image
                      src="/member/nhi.png"
                      alt="Nhi"
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-zinc-900">Nhi</h3>
                  <p className="mt-1 text-sm font-medium text-zinc-600">Head of Media</p>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    Paid traffic for high-compliance industries, Google Ads strategies, and acquisition funnels.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Ecosystem */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Our Ecosystem</h2>
            <p className="mt-4 text-lg text-zinc-600">
              K-Network is part of the K-Group ecosystem, which includes:
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystemItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Card className="h-full border border-zinc-200 bg-white">
                  <CardContent className="p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                      <item.icon className="h-6 w-6 text-zinc-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global GEO Strength */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Global Presence</h2>
            <p className="mt-4 text-lg text-zinc-600">
              We operate in these key markets:
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {geoLocations.map((location, i) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="w-full flex justify-center"
              >
                <Card className="w-full max-w-[220px] border border-zinc-200 bg-white hover:shadow-md transition-shadow rounded-xl">
                  <CardContent className="px-6 py-6">
                    <div className="flex flex-col items-center gap-3">
                      <img
                        src={`https://flagcdn.com/w40/${location.code}.png`}
                        srcSet={`https://flagcdn.com/w80/${location.code}.png 2x`}
                        alt={location.name}
                        className="h-8 w-12 rounded object-cover"
                      />
                      <span className="font-medium text-zinc-900 text-sm text-center">
                        {location.name}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">What Sets Us Apart</h2>
            <p className="mt-4 text-lg text-zinc-600">
              The factors that differentiate K-Network in the market.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Card className="h-full border border-zinc-200 bg-white">
                  <CardContent className="p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                      <item.icon className="h-6 w-6 text-zinc-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Core principles that guide our operations and partnerships.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Transparency */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="h-full border border-zinc-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                    <Eye className="h-6 w-6 text-zinc-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">Transparency</h3>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    Clear data reporting and honest communication in all partnerships.
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
              <Card className="h-full border border-zinc-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                    <Zap className="h-6 w-6 text-zinc-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">Innovation</h3>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    Scalable solutions and continuous platform improvements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <Card className="h-full border border-zinc-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                    <Shield className="h-6 w-6 text-zinc-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">Security</h3>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    Protecting partner data and maintaining secure infrastructure standards.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.4 }}
            >
              <Card className="h-full border border-zinc-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                    <FileCheck className="h-6 w-6 text-zinc-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900">Compliance</h3>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    Adherence to regulatory requirements and industry best practices.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones & Impact */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Milestones</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Key achievements and growth metrics.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card className="border border-zinc-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                    <Building2 className="h-6 w-6 text-zinc-900" />
                  </div>
                  <div className="text-3xl font-semibold text-zinc-900">100+</div>
                  <div className="mt-2 text-sm font-medium text-zinc-600">Global Partners</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Card className="border border-zinc-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                    <BarChart3 className="h-6 w-6 text-zinc-900" />
                  </div>
                  <div className="text-3xl font-semibold text-zinc-900">10M+</div>
                  <div className="mt-2 text-sm font-medium text-zinc-600">Monthly Impressions</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Card className="border border-zinc-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                    <TrendingUp className="h-6 w-6 text-zinc-900" />
                  </div>
                  <div className="text-3xl font-semibold text-zinc-900">300+</div>
                  <div className="mt-2 text-sm font-medium text-zinc-600">Active Campaigns</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Card className="border border-zinc-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                    <Award className="h-6 w-6 text-zinc-900" />
                  </div>
                  <div className="text-3xl font-semibold text-zinc-900">8+ Years</div>
                  <div className="mt-2 text-sm font-medium text-zinc-600">Industry Experience</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Journey */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-zinc-200 bg-white px-8 py-14 text-center shadow-sm"
          >
            <h3 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">Join Our Journey</h3>
            <p className="mt-4 text-lg text-zinc-600">
              We're building a global ecosystem for financial growth, connecting exchanges, brokers, communities, and partners.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-zinc-900 text-white hover:bg-zinc-800 px-8 h-12">
                <Link href="/partner-with-us">Partner With Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-zinc-300 bg-white hover:bg-zinc-50 px-8 h-12">
                <Link href="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-lg text-zinc-600">Contact us to discuss your requirements.</p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45 }}
              className="text-center"
            >
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                <Mail className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="font-semibold text-zinc-900">Email</h3>
              <a
                href="mailto:business@k-network.io"
                className="mt-2 block text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                business@k-network.io
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-center"
            >
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                <MapPin className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="font-semibold text-zinc-900">Location</h3>
              <p className="mt-2 text-sm text-zinc-600">Hong Kong — Global Operations</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="text-center"
            >
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 mb-4">
                <Send className="h-6 w-6 text-zinc-900" />
              </div>
              <h3 className="font-semibold text-zinc-900">Social</h3>
              <div className="mt-2 flex items-center justify-center gap-4 text-sm">
                <a
                  href="https://t.me/K_NETWORK_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  Telegram
                </a>
                <span className="text-zinc-300">|</span>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  X
                </a>
                <span className="text-zinc-300">|</span>
                <a
                  href="mailto:business@k-network.io"
                  className="text-zinc-600 hover:text-zinc-900 transition-colors"
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
