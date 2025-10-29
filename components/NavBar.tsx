"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);

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
                className={`text-sm transition-colors ${active
                  ? "font-semibold text-[--primary-hex]"
                  : "text-zinc-500 hover:text-zinc-900"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-[--primary-hover-hex] transition-colors"
          >
            <Link href="/auth/login">Start earning</Link>
          </Button>
        </div>
        <button
          aria-label="Open menu"
          className="inline-flex items-center justify-center rounded md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="border-b bg-white">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`${active
                        ? "font-semibold text-[--primary-hex]"
                        : "text-zinc-600 hover:text-zinc-900"
                        }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Button
                  asChild
                  size="sm"
                  className="mt-2 w-full bg-primary text-primary-foreground hover:bg-[--primary-hover-hex]"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/auth/login">Start earning</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}


