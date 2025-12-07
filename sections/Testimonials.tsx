"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We've been using K-Network for routing orders to multiple liquidity providers. The system handles our volume well and the API integration was straightforward.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Global Exchange Platform",
  },
  {
    quote: "The liquidity access and security controls meet our requirements. We process significant volume daily and the uptime has been reliable.",
    author: "Michael Rodriguez",
    role: "Head of Trading",
    company: "International Brokerage",
  },
  {
    quote: "Integration took about two weeks. The documentation covered what we needed and the support team helped with a few edge cases during setup.",
    author: "David Kim",
    role: "Engineering Lead",
    company: "Fintech Startup",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            What Partners Say
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Feedback from exchanges and brokers using our infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-zinc-50 rounded-lg p-8 border border-zinc-200"
            >
              <Quote className="h-8 w-8 text-zinc-300 mb-4" />
              <p className="text-base text-zinc-700 leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="border-t border-zinc-200 pt-6">
                <div className="font-semibold text-zinc-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-zinc-600 mt-1">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
