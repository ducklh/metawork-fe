"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partnerLogos = [
  { src: "/partner/binance.png", name: "Binance" },
  { src: "/partner/bingx.webp", name: "BingX" },
  { src: "/partner/bybit.png", name: "Bybit" },
  { src: "/partner/google.png", name: "Google" },
  { src: "/partner/Lbank.png", name: "LBank" },
  { src: "/partner/mexc.png", name: "Mexc" },
];

export function Partners() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-2xl font-bold sm:text-3xl">Trusted by partners</p>
        </div>
        <div className="mt-6 grid grid-cols-3 items-center gap-6 sm:grid-cols-6">
          {partnerLogos.map(({ src, name }, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative h-8 w-24 transition hover:opacity-100 hover:grayscale-0">
                <Image src={src} alt={name} fill className="object-contain" />
              </div>
              <p className="mt-2 text-xs font-medium text-zinc-600">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section >
  );
}


