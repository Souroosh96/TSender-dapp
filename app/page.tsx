"use client";

import HomeContent from "../components/HomeContent";
import { useAccount } from "wagmi";

export default function Home() {
    const {isConnected} = useAccount();
    return (
        <div className="min-h-screen bg-gray-100">
            {!isConnected ? (
                <div className="flex items-center justify-center h-full">
                    <div className="text-center font-bold text-2xl text-indigo-600 animate-pulse drop-shadow-lg">
                        Please connect your wallet to access the Airdrop feature...
                    </div>
                </div>
            ) : (
                <HomeContent />
            )}
        </div>
    );
}