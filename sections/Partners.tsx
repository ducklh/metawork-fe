"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partnerLogos = [
  "/logos/crypto1.png",
  "/logos/crypto2.png",
  "/logos/crypto3.png",
  "/logos/crypto4.png",
  "/logos/forex1.png",
  "/logos/forex2.png",
];

export function Partners() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-zinc-600">Trusted by partners</p>
        </div>
        <div className="mt-6 grid grid-cols-3 items-center gap-6 sm:grid-cols-6">
          {partnerLogos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="flex items-center justify-center"
            >
              <div className="relative h-8 w-24 opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0">
                <Image src={src} alt="Partner" fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


