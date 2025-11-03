import Link from "next/link";
import { Twitter, Send, Mail, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-6 w-6 rounded bg-[#DC2626]"></span>
            <span>K Network</span>
          </div>
          <div className="flex items-center gap-5 text-sm text-zinc-600">
            <Link href="https://twitter.com" className="flex items-center gap-2 hover:text-zinc-900" target="_blank">
              <Twitter size={18} /> Twitter
            </Link>
            <Link href="https://t.me" className="flex items-center gap-2 hover:text-zinc-900" target="_blank">
              <Send size={18} /> Telegram
            </Link>
            <Link href="/docs" className="flex items-center gap-2 hover:text-zinc-900">
              <BookOpen size={18} /> Docs
            </Link>
            <Link href="mailto:hello@K Network.network" className="flex items-center gap-2 hover:text-zinc-900">
              <Mail size={18} /> Email
            </Link>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} K Network. All rights reserved.</p>
      </div>
    </footer>
  );
}


