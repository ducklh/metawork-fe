"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function AuthCard({ title, subtitle, children }: AuthCardProps) {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-[#6A4DF4] to-[#4FC3F7] px-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="w-full max-w-md"
      >
        <Card className="w-full rounded-2xl border bg-white/95 p-8 shadow-xl backdrop-blur">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">{title}</h1>
            {subtitle ? (
              <p className="mt-2 text-sm text-zinc-600">{subtitle}</p>
            ) : null}
          </div>
          <div className="mt-6">{children}</div>
        </Card>
      </motion.div>
    </div>
  );
}


