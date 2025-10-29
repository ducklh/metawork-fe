import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Metawork — Affiliate Marketing Platform",
  description: "The leading affiliate marketing platform for affiliates and advertisers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-zinc-900`}>
        <NavBar />
        <main className="pt-16 min-h-[calc(100vh-64px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
