"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Server, TrendingUp, TrendingDown, RefreshCw } from "lucide-react";

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
  sparkline_in_7d?: {
    price: number[];
  };
}

function Sparkline({ prices }: { prices: number[] }) {
  if (!prices || prices.length === 0) return null;

  const width = 120;
  const height = 40;
  const padding = 4;
  const actualWidth = width - padding * 2;
  const actualHeight = height - padding * 2;

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice || 1;

  const points = prices.map((price, index) => {
    const x = (index / (prices.length - 1)) * actualWidth + padding;
    const y = actualHeight - ((price - minPrice) / priceRange) * actualHeight + padding;
    return `${x},${y}`;
  });

  const pathData = `M ${points.join(" L ")}`;

  // Determine color based on first vs last price
  const isPositive = prices[prices.length - 1] >= prices[0];
  const color = isPositive ? "#10b981" : "#ef4444";

  return (
    <svg width={width} height={height} className="overflow-visible">
      <path
        d={pathData}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatLargeNumber(value: number): string {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
  return `$${value.toFixed(2)}`;
}

export default function APIConnectPage() {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h,24h,7d"
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setCoins(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Crypto Market</h1>
        </div>

        <Card className="border-gray-800 bg-gray-900/50 backdrop-blur">
          <CardContent className="p-0">
            {loading && (
              <div className="flex items-center justify-center py-20">
                <RefreshCw className="h-8 w-8 animate-spin text-[#DC2626]" />
                <span className="ml-3 text-gray-400">Loading market data...</span>
              </div>
            )}

            {error && (
              <div className="flex flex-col items-center justify-center py-20">
                <Server className="h-12 w-12 text-red-500" />
                <p className="mt-4 text-lg font-medium text-red-400">Error loading data</p>
                <p className="mt-2 text-sm text-gray-400">{error}</p>
                <button
                  onClick={fetchData}
                  className="mt-4 rounded-md bg-[#DC2626] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#B91C1C]"
                >
                  Try Again
                </button>
              </div>
            )}

            {!loading && !error && (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800 hover:bg-gray-800/50">
                      <TableHead className="text-gray-400">Rank</TableHead>
                      <TableHead className="text-gray-400">Coin</TableHead>
                      <TableHead className="text-right text-gray-400">Price</TableHead>
                      <TableHead className="text-right text-gray-400">24h Change</TableHead>
                      <TableHead className="text-right text-gray-400">24h Volume</TableHead>
                      <TableHead className="text-right text-gray-400">Market Cap</TableHead>
                      <TableHead className="text-center text-gray-400">7d Chart</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {coins.map((coin, index) => (
                      <motion.tr
                        key={coin.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.02 }}
                        className="border-gray-800 hover:bg-gray-800/30 transition-colors"
                      >
                        <TableCell className="text-gray-300">{coin.market_cap_rank}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
                              <Image
                                src={coin.image}
                                alt={coin.name}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                            <div>
                              <div className="font-semibold text-white">{coin.name}</div>
                              <div className="text-xs uppercase text-gray-400">{coin.symbol}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium text-white">
                          {formatCurrency(coin.current_price)}
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge
                            variant="outline"
                            className={`border-0 font-semibold ${coin.price_change_percentage_24h >= 0
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                              }`}
                          >
                            <span className="mr-1">
                              {coin.price_change_percentage_24h >= 0 ? (
                                <TrendingUp className="inline h-3 w-3" />
                              ) : (
                                <TrendingDown className="inline h-3 w-3" />
                              )}
                            </span>
                            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right text-gray-300">
                          {formatLargeNumber(coin.total_volume)}
                        </TableCell>
                        <TableCell className="text-right text-gray-300">
                          {formatLargeNumber(coin.market_cap)}
                        </TableCell>
                        <TableCell className="text-center">
                          {coin.sparkline_in_7d?.price ? (
                            <Sparkline prices={coin.sparkline_in_7d.price} />
                          ) : (
                            <span className="text-xs text-gray-500">N/A</span>
                          )}
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mt-8 rounded-xl border border-gray-800 bg-gray-900/30 p-6 text-center">
          <Server className="mx-auto h-10 w-10 text-[#DC2626]" />
          <p className="mt-3 text-gray-400">API Integration — Coming Soon</p>
          <p className="mt-1 text-sm text-gray-500">
            We&apos;re working on a developer API for automated tracking and integration.
          </p>
        </div>
      </div>
    </div>
  );
}
