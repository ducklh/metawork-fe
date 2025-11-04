"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I get started as an affiliate?",
    answer: "Simply sign up for an account, browse our marketplace of campaigns, and choose offers that match your audience. You'll get unique referral links to share and start earning commissions immediately.",
  },
  {
    question: "What payment methods do you support?",
    answer: "We support fast crypto payouts including Bitcoin, Ethereum, USDT, and other major cryptocurrencies. We also offer stablecoin payments for more predictable earnings.",
  },
  {
    question: "How often are payouts processed?",
    answer: "Payouts are processed quickly and regularly. Most affiliates receive payments within 24-48 hours after reaching the minimum payout threshold, which varies by campaign.",
  },
  {
    question: "Is there a fee to join K Network?",
    answer: "No, joining K Network is completely free for both affiliates and advertisers. We only make money when you make money, creating a win-win partnership.",
  },
  {
    question: "How do I track my performance?",
    answer: "Our real-time dashboard provides comprehensive analytics including clicks, conversions, revenue, and more. You can track performance by campaign, date range, and traffic source.",
  },
  {
    question: "What types of campaigns are available?",
    answer: "We offer a wide range of campaigns across various verticals including crypto exchanges, trading platforms, fintech services, and more. All campaigns are vetted for quality and conversion potential.",
  },
  {
    question: "Can I use the API to integrate with my systems?",
    answer: "Yes! We offer a comprehensive API that allows you to integrate K Network with your existing systems, automate tracking, and customize your affiliate experience.",
  },
  {
    question: "How do you prevent fraud?",
    answer: "We use advanced fraud detection algorithms, monitor traffic patterns, and implement strict verification processes to ensure fair and transparent transactions for all parties.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-3 text-zinc-600">Everything you need to know about K Network.</p>
        </motion.div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="rounded-xl border border-zinc-200 bg-white shadow-sm">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-zinc-50"
                  >
                    <span className="font-semibold text-zinc-900">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-zinc-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm text-zinc-600">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

