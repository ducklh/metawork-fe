"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  {
    label: "Solutions",
    submenu: [
      { href: "/solutions/crypto-forex", label: "For Crypto & Forex Brands" },
      { href: "/solutions/individual-partners", label: "For Individual Partners" },
    ],
  },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/api-connect", label: "API Connect" },
  { href: "/docs", label: "Docs" },
  { href: "/partner-with-us", label: "Partner With Us" },
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };

    if (solutionsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [solutionsOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/logos/k-logo.png"
            alt="K Logo"
            width={24}
            height={24}
            className="h-6 w-auto"
            priority
          />
          <span>NETWORK</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            if ("submenu" in item) {
              return (
                <div key={item.label} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setSolutionsOpen(!solutionsOpen)}
                    className="flex items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full mt-2 w-64 rounded-lg border bg-white shadow-lg"
                      >
                        <div className="py-2">
                          {item.submenu?.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                              onClick={() => setSolutionsOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
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
            variant="outline"
            className="border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-colors"
          >
            <Link href="/auth/login">Log In</Link>
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
                  if ("submenu" in item) {
                    return (
                      <div key={item.label}>
                        <button
                          onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                          className="flex w-full items-center justify-between text-zinc-600 hover:text-zinc-900"
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileSolutionsOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-zinc-200 pl-4">
                                {item.submenu?.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="text-sm text-zinc-600 hover:text-zinc-900"
                                    onClick={() => {
                                      setMobileSolutionsOpen(false);
                                      setOpen(false);
                                    }}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }
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
                  variant="outline"
                  className="mt-2 w-full border-zinc-300 text-zinc-700 hover:bg-zinc-50"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/auth/login">Log In</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}


