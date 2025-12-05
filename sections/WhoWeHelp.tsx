"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const groups = [
  {
    icon: Building2,
    title: "Crypto & Forex Brands",
    description: "Accelerate growth with brand protection, high-intent traffic, and global scale strategies.",
    href: "/solutions/crypto-forex",
    gradient: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: Users,
    title: "Individual Partners",
    description: "Upgrade commissions, grow your referral system, and access exclusive offers within K-NETWORK.",
    href: "/solutions/individual-partners",
    gradient: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
  },
];

export function WhoWeHelp() {
  return (
    <section className="bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who We Help</h2>
          <p className="mt-3 text-zinc-600">Tailored solutions for brands and partners at every stage.</p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Card className={`h-full border-2 ${group.borderColor} bg-gradient-to-br ${group.gradient} shadow-sm transition-all hover:shadow-md hover:-translate-y-1`}>
                <CardContent className="p-8">
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm`}>
                    <group.icon className={`h-7 w-7 ${group.iconColor}`} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-zinc-900">{group.title}</h3>
                  <p className="mt-4 text-zinc-700">{group.description}</p>
                  <Link
                    href={group.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 transition-colors hover:text-[#DC2626]"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

