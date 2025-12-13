"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia, zkSync } from "wagmi/chains";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

if (!projectId) {
    throw new Error("Missing NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID");
}

const config = getDefaultConfig({
    appName: "TSender",
    projectId,
    chains: [mainnet, sepolia, zkSync],
    ssr: false, // ✅ REQUIRED for Vercel
});

export default config;
