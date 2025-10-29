"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/mission", label: "Mission" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/api-connect", label: "API Connect" },
  { href: "/docs", label: "Docs" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-6 w-6 rounded bg-[--primary-hex]"></span>
          <span>Metawork</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  active ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="outline">
            <Link href="#cta">Log in</Link>
          </Button>
          <Button asChild size="sm" className="bg-[--primary-hex] hover:opacity-90">
            <Link href="#cta">Start earning</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}


