import { ShieldCheck, Globe, Coins, BarChart3 } from "lucide-react";

export default function MissionPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Empowering Affiliates & Advertisers</h1>
        <p className="mt-3 max-w-2xl text-zinc-600">
          We build transparent performance infrastructure so affiliates can earn more and advertisers can scale with confidence.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <section className="rounded-xl border p-6">
            <h2 className="text-xl font-semibold">For Affiliates</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              <li className="flex items-start gap-3">
                <BarChart3 className="mt-1 h-5 w-5 text-[--primary-hex]" />
                <div>
                  <p className="font-medium">Real-time data tracking</p>
                  <p className="text-sm text-zinc-600">Live analytics for clicks, conversions, and revenue.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Coins className="mt-1 h-5 w-5 text-[--primary-hex]" />
                <div>
                  <p className="font-medium">Crypto payments</p>
                  <p className="text-sm text-zinc-600">Fast payouts in popular assets and stablecoins.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-1 h-5 w-5 text-[--primary-hex]" />
                <div>
                  <p className="font-medium">Diverse campaigns</p>
                  <p className="text-sm text-zinc-600">Crypto, FX, and fintech categories with top-tier offers.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-[--primary-hex]" />
                <div>
                  <p className="font-medium">Anti-fraud protection</p>
                  <p className="text-sm text-zinc-600">Keep your earnings safe with proactive monitoring.</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="rounded-xl border p-6">
            <h2 className="text-xl font-semibold">For Advertisers</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-[--primary-hex]" />
                <div>
                  <p className="font-medium">Trusted platform</p>
                  <p className="text-sm text-zinc-600">Rigorous screening and quality assurance.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-1 h-5 w-5 text-[--primary-hex]" />
                <div>
                  <p className="font-medium">Global reach</p>
                  <p className="text-sm text-zinc-600">Tap into a worldwide network of affiliates.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <BarChart3 className="mt-1 h-5 w-5 text-[--primary-hex]" />
                <div>
                  <p className="font-medium">Data transparency</p>
                  <p className="text-sm text-zinc-600">Granular metrics with clear attribution.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Coins className="mt-1 h-5 w-5 text-[--primary-hex]" />
                <div>
                  <p className="font-medium">Flexible payouts</p>
                  <p className="text-sm text-zinc-600">Pay-as-you-go with streamlined reconciliation.</p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}


