"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Server,
  Code,
  BarChart3,
  Link2,
  Shield,
  CheckCircle2,
  Zap,
  Globe,
  FileText,
  ArrowRight,
  Lock,
  Key,
  Network,
  Activity,
  Circle,
  TrendingUp,
  TrendingDown,
  RefreshCw,
} from "lucide-react";

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

const features = [
  {
    icon: Server,
    title: "S2S Postback",
    description: "Server-to-server postback integration for real-time conversion tracking and automated reporting.",
    details: [
      "Secure server-to-server communication",
      "Real-time conversion notifications",
      "Automated data synchronization",
      "Multiple postback URL support",
      "Custom parameter mapping",
    ],
    gradient: "from-blue-50 to-indigo-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    icon: Code,
    title: "Custom Campaign Tracking",
    description: "Track campaigns with custom parameters, UTM tags, and advanced attribution models.",
    details: [
      "Custom parameter tracking",
      "UTM tag support",
      "Multi-touch attribution",
      "Campaign grouping & segmentation",
      "Custom event tracking",
    ],
    gradient: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    icon: BarChart3,
    title: "Real-time Conversion Reporting",
    description: "Monitor conversions, revenue, and performance metrics in real-time with comprehensive dashboards.",
    details: [
      "Real-time conversion tracking",
      "Revenue reporting & analytics",
      "Performance dashboards",
      "Custom report generation",
      "Export capabilities (CSV, JSON)",
    ],
    gradient: "from-purple-50 to-pink-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
  },
  {
    icon: Link2,
    title: "Integration with Exchange Systems",
    description: "Seamless integration with leading exchange APIs for automated tracking and data synchronization.",
    details: [
      "Exchange API integration",
      "Automated data sync",
      "Multi-exchange support",
      "Webhook notifications",
      "RESTful API endpoints",
    ],
    gradient: "from-amber-50 to-orange-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
  },
  {
    icon: Shield,
    title: "Fraud Filtering & Compliance Support",
    description: "Advanced fraud detection and compliance tools to ensure data integrity and regulatory adherence.",
    details: [
      "Advanced fraud detection algorithms",
      "IP filtering & geolocation checks",
      "Device fingerprinting",
      "Compliance reporting",
      "Regulatory data handling",
    ],
    gradient: "from-red-50 to-rose-50",
    iconColor: "text-red-600",
    borderColor: "border-red-200",
  },
];

const apiEndpoints = [
  {
    method: "POST",
    endpoint: "/api/v1/conversions",
    description: "Track conversions with custom parameters",
  },
  {
    method: "GET",
    endpoint: "/api/v1/reports",
    description: "Retrieve conversion reports and analytics",
  },
  {
    method: "POST",
    endpoint: "/api/v1/postback",
    description: "Configure S2S postback URLs",
  },
  {
    method: "GET",
    endpoint: "/api/v1/campaigns",
    description: "List all available campaigns",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Fast Integration",
    description: "Get up and running in minutes with our comprehensive API documentation",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Handle millions of requests with our scalable infrastructure",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee",
  },
  {
    icon: FileText,
    title: "Comprehensive Docs",
    description: "Detailed documentation with code examples and SDKs",
  },
];

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
    <div className="bg-white min-h-screen">
      {/* Crypto Market Section */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

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

          {/* <div className="mt-8 rounded-xl border border-gray-800 bg-gray-900/30 p-6 text-center">
            <Server className="mx-auto h-10 w-10 text-[#DC2626]" />
            <p className="mt-3 text-gray-400">API Integration — Coming Soon</p>
            <p className="mt-1 text-sm text-gray-500">
              We&apos;re working on a developer API for automated tracking and integration.
            </p>
          </div> */}
        </div>
      </section>

      {/* API Connect Content */}
      <section className="bg-gradient-to-b from-white to-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              API & Tracking Integration
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-600 sm:text-xl">
              Seamlessly integrate K-NETWORK tracking into your systems with our comprehensive API, S2S postback, and real-time reporting solutions.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-[#DC2626] text-white hover:bg-[#B91C1C] transition-colors shadow-md hover:shadow-lg px-8">
                <Link href="/docs">View Documentation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8">
                <Link href="/partner-with-us">Get API Access</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Integration Features</h2>
            <p className="mt-3 text-zinc-600">Powerful tools for seamless tracking and reporting.</p>
          </motion.div>

          <div className="mt-16 space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid gap-12 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient}`}>
                    <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="mt-6 text-3xl font-bold tracking-tight">{feature.title}</h3>
                  <p className="mt-4 text-lg text-zinc-600">{feature.description}</p>
                  <ul className="mt-6 space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                        <span className="text-zinc-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <Card className={`h-full border-2 ${feature.borderColor} bg-gradient-to-br ${feature.gradient} shadow-lg`}>
                    <CardContent className="p-8">
                      <div className="flex h-full items-center justify-center">
                        <div className="text-center">
                          <feature.icon className={`mx-auto h-20 w-20 ${feature.iconColor} opacity-20`} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">API Endpoints</h2>
            <p className="mt-3 text-zinc-600">RESTful API endpoints for all your integration needs.</p>
          </motion.div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {apiEndpoints.map((endpoint, i) => (
              <motion.div
                key={endpoint.endpoint}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <span className={`rounded px-2.5 py-1 text-xs font-semibold ${endpoint.method === "POST"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-emerald-100 text-emerald-700"
                        }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm font-mono text-zinc-900">{endpoint.endpoint}</code>
                    </div>
                    <p className="mt-3 text-sm text-zinc-600">{endpoint.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Our API</h2>
            <p className="mt-3 text-zinc-600">Built for developers, designed for scale.</p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Card className="h-full border-0 bg-gradient-to-br from-white to-zinc-50 shadow-sm ring-1 ring-zinc-100 transition-all hover:-translate-y-1 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#DC2626] to-black text-white">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Architecture Overview */}
      <section className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Security Architecture Overview
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Enterprise-grade security measures protecting all API communications and data.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="h-full border border-zinc-800 bg-zinc-950">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-4">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">TLS 1.3 encrypted transport</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    All API communications are secured with TLS 1.3 encryption to ensure data privacy and integrity.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <Card className="h-full border border-zinc-800 bg-zinc-950">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-4">
                    <Key className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Signed authentication</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    API requests are authenticated using cryptographic signatures to prevent unauthorized access.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <Card className="h-full border border-zinc-800 bg-zinc-950">
                <CardContent className="p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-4">
                    <Network className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Multi-region failover</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Automatic failover across multiple geographic regions ensures high availability and reliability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="bg-zinc-950 text-white border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              System Status
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Real-time operational status and performance metrics.
            </p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.1 }}
            >
              <Card className="h-full border border-zinc-800 bg-zinc-900">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Circle className="h-2 w-2 fill-emerald-500 text-emerald-500" />
                      <span className="text-xs font-medium text-emerald-400">Live</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">API uptime</h3>
                  <p className="text-2xl font-bold text-white mb-1">99.9%</p>
                  <p className="text-sm text-zinc-400">Last 30 days</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              <Card className="h-full border border-zinc-800 bg-zinc-900">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Circle className="h-2 w-2 fill-emerald-500 text-emerald-500" />
                      <span className="text-xs font-medium text-emerald-400">Operational</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Operational status</h3>
                  <p className="text-base font-semibold text-white mb-1">All systems operational</p>
                  <p className="text-sm text-zinc-400">No known issues</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.3 }}
            >
              <Card className="h-full border border-zinc-800 bg-zinc-900">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Circle className="h-2 w-2 fill-emerald-500 text-emerald-500 animate-pulse" />
                      <span className="text-xs font-medium text-emerald-400">Monitoring</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Live monitoring indicator</h3>
                  <p className="text-base font-semibold text-white mb-1">Active monitoring</p>
                  <p className="text-sm text-zinc-400">24/7 system surveillance</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-zinc-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border bg-gradient-to-br from-[#DC2626] to-black px-8 py-14 text-center text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold sm:text-3xl">Ready to Integrate?</h3>
            <p className="mt-4 text-lg text-white/90">
              Get started with our API documentation and start tracking conversions in minutes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-white text-[#DC2626] hover:bg-zinc-100 transition-colors shadow-lg hover:shadow-xl px-8">
                <Link href="/docs">View Documentation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white px-8">
                <Link href="/partner-with-us">Get API Access</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
