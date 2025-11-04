"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Affiliate Marketer",
    content: "K Network has transformed how I monetize my traffic. The real-time tracking and fast payouts make it my go-to platform. I've doubled my earnings in just 3 months!",
    rating: 5,
    avatar: "AC",
  },
  {
    name: "Sarah Martinez",
    role: "Content Creator",
    content: "The marketplace is incredibly diverse with high-quality campaigns. The support team is responsive and the dashboard is intuitive. Highly recommend!",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Michael Johnson",
    role: "Advertiser",
    content: "As an advertiser, I've seen exceptional ROI working with K Network affiliates. The fraud prevention and quality traffic have been game-changers for our campaigns.",
    rating: 5,
    avatar: "MJ",
  },
  {
    name: "Emma Wilson",
    role: "Digital Marketer",
    content: "The API integration made it seamless to connect our systems. Crypto payouts are fast and reliable. This platform has streamlined our entire affiliate program.",
    rating: 5,
    avatar: "EW",
  },
];

export function Testimonials() {
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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Users Say</h2>
          <p className="mt-3 text-zinc-600">Real feedback from affiliates and advertisers using K Network.</p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <Card className="h-full border-0 bg-white shadow-sm ring-1 ring-zinc-100 transition-all hover:shadow-md hover:ring-zinc-200">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="mb-3 h-6 w-6 text-zinc-300" />
                  <p className="mb-4 text-sm text-zinc-700">{testimonial.content}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#DC2626] to-black text-sm font-semibold text-white">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{testimonial.name}</div>
                      <div className="text-xs text-zinc-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

