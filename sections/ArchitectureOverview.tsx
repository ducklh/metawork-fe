"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Network, Database, Shield } from "lucide-react";

const architectureSteps = [
  {
    icon: Server,
    title: "Client Integration",
    description: "RESTful API & WebSocket connections",
    color: "text-blue-600",
  },
  {
    icon: Network,
    title: "Smart Router",
    description: "Intelligent order routing & execution",
    color: "text-emerald-600",
  },
  {
    icon: Database,
    title: "Liquidity Pool",
    description: "20+ connected liquidity providers",
    color: "text-purple-600",
  },
  {
    icon: Shield,
    title: "Security Layer",
    description: "Encryption, compliance & monitoring",
    color: "text-amber-600",
  },
];

export function ArchitectureOverview() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Architecture Overview
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            A scalable, secure infrastructure built for enterprise trading operations.
          </p>
        </motion.div>

        {/* Diagram */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {architectureSteps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex justify-center"
            >
              {/* Icon box */}
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-white border-2 border-zinc-200 shadow-sm">
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>

                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 max-w-[220px]">
                  {step.description}
                </p>
              </div>

              {/* Arrow - chỉ hiện trên màn hình lớn */}
              {i < architectureSteps.length - 1 && (
                <div
                  className="
                    hidden lg:block absolute 
                    top-[32px] right-0 translate-x-1/2 
                    w-16 h-px
                  "
                >
                  <div className="relative h-full bg-zinc-200">
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
