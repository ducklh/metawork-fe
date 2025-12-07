"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, Mail } from "lucide-react";

const legitimacyFields = [
  {
    label: "Legal Company Name",
    value: "K-Network",
    icon: Building2,
  },
  {
    label: "Headquarters Location",
    value: "Hong Kong",
    icon: MapPin,
  },
  {
    label: "Year Founded",
    value: "2021",
    icon: Calendar,
  },
  {
    label: "Official Contact Email",
    value: "business@k-network.io",
    icon: Mail,
  },
];

export function CompanyLegitimacy() {
  return (
    <section className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Company Legitimacy
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Transparent corporate information and official contact details.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {legitimacyFields.map((field, i) => (
            <motion.div
              key={field.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Card className="h-full border border-zinc-800 bg-zinc-900">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-4">
                    <field.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-zinc-400 mb-2">{field.label}</h3>
                  <p className="text-base font-semibold text-white">{field.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

