import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";
import { createStorage, noopStorage } from "wagmi";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!;

const config = getDefaultConfig({
    appName: "TSender",
    projectId,
    chains: [mainnet, sepolia],
    ssr: false,

    storage: typeof window !== "undefined"
        ? createStorage({ storage: window.localStorage })
        : createStorage({ storage: noopStorage }),
});

export default config;
