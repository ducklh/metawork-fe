"use client";

import { usePathname } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuth = pathname?.startsWith("/auth");

  if (isAuth) {
    return (
      <>
        <NavBar />
        <main className="pt-16 min-h-[calc(100vh-64px)]">{children}</main>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <main className="pt-16 min-h-[calc(100vh-64px)]">{children}</main>
      <Footer />
    </>
  );
}


