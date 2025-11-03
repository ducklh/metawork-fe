"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Rocket,
  Heart,
  Globe,
  Shield,
  Zap,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Send,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";

const visionMissionData = [
  {
    title: "Vision",
    description:
      "To become the global standard for affiliate marketing, empowering businesses and creators to connect, grow, and thrive in the digital economy.",
    icon: Target,
    gradient: "from-red-50 to-red-100",
    iconColor: "text-red-700",
  },
  {
    title: "Mission",
    description:
      "We provide cutting-edge technology, transparent processes, and unmatched support to help affiliates maximize earnings and advertisers scale their reach efficiently.",
    icon: Rocket,
    gradient: "from-gray-100 to-gray-200",
    iconColor: "text-gray-700",
  },
  {
    title: "What Drives Us",
    description:
      "We believe in democratizing affiliate marketing, making it accessible, fair, and rewarding for everyone—from individual creators to global enterprises.",
    icon: Heart,
    gradient: "from-gray-900 to-black",
    iconColor: "text-white",
  },
];

const teamMembers = [
  {
    name: "Nguyễn Hữu Nghĩa",
    position: "CEO",
    description: "Serial entrepreneur with 10+ years in affiliate marketing and fintech.",
    image: "/member/nguyen-huu-nghia.png",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Hung",
    position: "Co-founder",
    description: "Full-stack engineer passionate about building scalable, secure platforms.",
    image: "/member/hung.png",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Trang",
    position: "Head of Partnerships",
    description: "Expert in forging strategic alliances and driving business growth.",
    image: "/member/trang.png",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Nhi",
    position: "Head of Product",
    description: "User-centric designer turning complex problems into elegant solutions.",
    image: "/member/nhi.png",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

const values = [
  {
    title: "Transparency",
    description: "We believe in open communication, honest reporting, and clear policies that build trust with our partners.",
    icon: Shield,
    gradient: "from-red-50 to-red-100",
    iconColor: "text-red-700",
  },
  {
    title: "Innovation",
    description: "We continuously evolve our platform with cutting-edge technology to stay ahead of industry trends.",
    icon: Zap,
    gradient: "from-gray-100 to-gray-200",
    iconColor: "text-gray-700",
  },
  {
    title: "Collaboration",
    description: "Success comes from working together. We foster strong partnerships between affiliates and advertisers.",
    icon: Users,
    gradient: "from-gray-900 to-black",
    iconColor: "text-white",
  },
  {
    title: "Integrity",
    description: "We operate with the highest ethical standards, ensuring fairness and respect in all our interactions.",
    icon: Award,
    gradient: "from-red-100 to-red-200",
    iconColor: "text-red-800",
  },
  {
    title: "Global Mindset",
    description: "We serve a worldwide community, embracing diverse cultures and building for an international audience.",
    icon: Globe,
    gradient: "from-red-200 to-red-300",
    iconColor: "text-red-900",
  },
];

const milestones = [
  { label: "Publishers", value: "10,000+", icon: Users },
  { label: "Countries", value: "7+", icon: Globe },
  { label: "Campaigns", value: "300+", icon: TrendingUp },
  { label: "Transaction Volume", value: "$25M+", icon: Award },
];

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Who We Are</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
              K Network is a leading affiliate marketing platform that connects ambitious affiliates with high-performing
              campaigns, enabling growth, transparency, and success in the digital economy.
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
              className="relative h-64 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-red-100 sm:h-80 lg:h-96"
            >
              <Image
                src="/logos/duck.jpeg"
                alt="K Network team working together"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
              <div className="mt-6 space-y-4 text-zinc-600">
                <p>
                  K Network was born from a simple observation: affiliate marketing platforms were fragmented, opaque, and
                  often didn&apos;t serve the needs of modern digital creators and advertisers. We set out to change that.
                </p>
                <p>
                  Founded in 2023, we built K Network with a vision to democratize affiliate marketing. Our founders,
                  who have decades of combined experience in fintech, marketing, and technology, recognized the need for
                  a platform that prioritizes transparency, fast payouts, and real-time insights.
                </p>
                <p>
                  Today, K Network serves thousands of affiliates and advertisers across the globe, processing millions in
                  transaction volume while maintaining our core values of integrity, innovation, and partnership.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Vision & Mission</h2>
            <p className="mt-3 text-zinc-600">The principles that guide everything we do.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visionMissionData.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient}`}>
                      <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm text-zinc-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="mt-3 text-zinc-600">
              The people behind K Network are passionate builders, thinkers, and dreamers.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="group relative"
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-all hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-red-100 ">
                      <Image
                        src={member.image}
                        alt={`${member.name} profile picture`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                    <p className="mt-1 text-sm text-zinc-600">{member.position}</p>
                    <p className="mt-3 text-sm text-zinc-600">{member.description}</p>
                    <div className="mt-4 flex items-center justify-center gap-3 opacity-0 transition-opacity group-hover:opacity-100">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-blue-600"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-sky-500"
                        aria-label={`${member.name} Twitter`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-3 text-zinc-600">The core principles that shape our culture and decisions.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-transform hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${value.gradient}`}>
                      <value.icon className={`h-6 w-6 ${value.iconColor}`} />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones & Impact */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Milestones & Impact</h2>
            <p className="mt-3 text-zinc-600">Our journey in numbers.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, i) => (
              <motion.div
                key={milestone.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="overflow-hidden rounded-xl border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-100">
                      <milestone.icon className="h-6 w-6 text-red-700" />
                    </div>
                    <div className="mt-4 text-3xl font-bold">{milestone.value}</div>
                    <div className="mt-1 text-sm text-zinc-600">{milestone.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border bg-white px-8 py-14 text-center shadow-sm"
          >
            <h3 className="text-2xl font-bold sm:text-3xl">Join Our Journey</h3>
            <p className="mt-2 text-zinc-600">
              We&apos;re building the next generation of affiliate marketing — and we&apos;re just getting started.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors shadow-md hover:shadow-lg">
                <Link href="/auth/register-affiliate">Join Our Team</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/auth/register-advertiser">Partner with Us</Link>
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
                href="mailto:contact@K Network.network"
                className="mt-2 block text-sm text-zinc-600 hover:text-red-700"
              >
                contact@K Network.network
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
              <p className="mt-2 text-sm text-zinc-600">Singapore & Vietnam</p>
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
              <div className="mt-2 flex items-center justify-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-blue-600"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-sky-500"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-blue-500"
                  aria-label="Telegram"
                >
                  <Send className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

