export type Campaign = {
  id: string;
  name: string;
  description: string;
  category: "Crypto" | "Forex";
  logo: string;
};

export const campaigns: Campaign[] = [
  {
    id: "1",
    name: "BitNova Exchange",
    description: "Spot & futures exchange with high-paying referral tiers.",
    category: "Crypto",
    logo: "/logos/logo.png",
  },
  {
    id: "2",
    name: "ChainPay Wallet",
    description: "Secure multi-chain wallet with cashback rewards.",
    category: "Crypto",
    logo: "/logos/logo.png",
  },
  {
    id: "3",
    name: "AlphaFX Broker",
    description: "Trusted FX broker with tight spreads and fast onboarding.",
    category: "Forex",
    logo: "/logos/logo.png",
  },
  {
    id: "4",
    name: "DeFi Earn",
    description: "Yield strategies for stablecoins with transparent metrics.",
    category: "Crypto",
    logo: "/logos/logo.png",
  },
  {
    id: "5",
    name: "ProFX Signals",
    description: "Premium signal service with verified performance history.",
    category: "Forex",
    logo: "/logos/logo.png",
  },
  {
    id: "6",
    name: "MetaCard",
    description: "Crypto card with instant rewards and global acceptance.",
    category: "Crypto",
    logo: "/logos/logo.png",
  },
];


