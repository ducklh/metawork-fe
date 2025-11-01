"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { campaigns as allCampaigns } from "@/data/campaigns";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const filters = ["All", "Crypto", "Forex"] as const;

export default function MarketplacePage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const campaigns = useMemo(() => {
    if (active === "All") return allCampaigns;
    return allCampaigns.filter((c) => c.category === active);
  }, [active]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Explore Active Campaigns</h1>
        <p className="mt-3 max-w-2xl text-zinc-600">Discover high-converting offers across Crypto and Forex.</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((f) => (
            <Button
              key={f}
              variant={active === f ? "default" : "outline"}
              onClick={() => setActive(f)}
              className={
                active === f
                  ? "bg-[#DC2626] text-white hover:bg-[#B91C1C]"
                  : "border-[#DC2626] text-[#DC2626]"
              }
            >
              {f}
            </Button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((c) => (
            <Card
              key={c.id}
              className="group cursor-pointer border shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded bg-zinc-100">
                    <Image src={c.logo} alt={c.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold">{c.name}</p>
                    <p className="text-xs text-zinc-600">{c.category}</p>
                  </div>
                </div>
                <p className="mt-4 line-clamp-2 text-sm text-zinc-600">{c.description}</p>
                <div className="mt-6">
                  <Button className="bg-[#DC2626] text-white hover:bg-[#B91C1C]">Join Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}


