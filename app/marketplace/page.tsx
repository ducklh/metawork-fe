"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { campaigns as allCampaigns } from "@/data/campaigns";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const filters = ["All", "Crypto", "Forex"] as const;
const ITEMS_PER_PAGE = 6;

export default function MarketplacePage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [page, setPage] = useState(1);

  const filteredCampaigns = useMemo(() => {
    if (active === "All") return allCampaigns;
    return allCampaigns.filter((c) => c.category === active);
  }, [active]);

  const totalPages = Math.ceil(filteredCampaigns.length / ITEMS_PER_PAGE);

  const paginatedCampaigns = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredCampaigns.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCampaigns, page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Explore Active Campaigns
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600">
          Discover high-converting offers across Crypto and Forex.
        </p>

        {/* Filter kiểu radio */}
        <div className="mt-8 flex items-center flex-wrap gap-4">
          <span className="font-semibold text-zinc-900">Filter by:</span>
          <div className="flex items-center gap-6">
            {filters.map((f) => (
              <label key={f} className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="radio"
                  name="category"
                  value={f}
                  checked={active === f}
                  onChange={() => {
                    setActive(f);
                    setPage(1);
                  }}
                  className="h-4 w-4 appearance-none rounded-full border border-gray-400 checked:border-[#6D28D9] checked:bg-[#6D28D9] ring-2 ring-transparent ring-offset-2 transition-all cursor-pointer"
                />
                <span className="text-sm text-zinc-800">{f}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Danh sách campaign */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedCampaigns.map((c) => (
            <Card
              key={c.id}
              className="group flex flex-col items-center border border-zinc-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer"
            >
              <CardContent className="flex flex-col items-center text-center p-8">
                <div className="relative w-full aspect-[16/9] mb-4 flex items-center justify-center overflow-hidden rounded-xl bg-zinc-50">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>


                <h3 className="text-lg font-semibold text-zinc-900">{c.name}</h3>
                <p className="text-xs uppercase tracking-wide text-zinc-500 mt-1">
                  {c.category}
                </p>
                <p className="mt-4 text-sm text-zinc-600 line-clamp-2">{c.description}</p>
                <Button className="mt-6 bg-[#DC2626] text-white hover:bg-[#B91C1C] rounded-full px-6">
                  Join Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Phân trang */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className={`p-2 rounded-full ${page === 1 ? "text-zinc-400 cursor-not-allowed" : "text-black hover:bg-zinc-100"
                }`}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => handlePageChange(p)}
                  className={`w-9 h-9 flex items-center justify-center rounded-full border text-sm font-semibold transition ${page === p
                    ? "bg-[#6D28D9] text-white border-[#6D28D9]"
                    : "border-zinc-300 text-zinc-700 hover:border-[#6D28D9]"
                    }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className={`p-2 rounded-full ${page === totalPages
                ? "text-zinc-400 cursor-not-allowed"
                : "text-black hover:bg-zinc-100"
                }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
