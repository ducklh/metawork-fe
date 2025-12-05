import Link from "next/link";
import Image from "next/image";
import { Mail, Send, MessageCircle, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-semibold">
              <Image
                src="/logos/k-logo.png"
                alt="K-NETWORK Logo"
                width={24}
                height={24}
                className="h-6 w-auto"
              />
              <span>K-NETWORK</span>
            </div>
            <p className="text-sm text-zinc-600">
              Global Financial Affiliate System
            </p>
            <p className="text-xs text-zinc-500">
              Part of K-GROUP Ecosystem.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-zinc-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-zinc-900">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/api-connect" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  API Connect
                </Link>
              </li>
              <li>
                <Link href="/partner-with-us" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/solutions/crypto-forex" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  For Brands
                </Link>
              </li>
              <li>
                <Link href="/solutions/individual-partners" className="text-zinc-600 hover:text-zinc-900 transition-colors">
                  For Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-zinc-900">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:business@k-network.io"
                  className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>business@k-network.io</span>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/K_NETWORK_official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  <Send className="h-4 w-4" />
                  <span>@K_NETWORK_official</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-zinc-600">
                  <MessageCircle className="h-4 w-4" />
                  <span>WeChat: K_NETWORK</span>
                </div>
              </li>
              <li>
                <a
                  href="skype:live:.cid.3eae0db85bffac2a?chat"
                  className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>Skype: live:.cid.3eae0db85bffac2a</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-zinc-200 pt-8">
          <p className="text-center text-xs text-zinc-500">
            © 2025 K-NETWORK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
