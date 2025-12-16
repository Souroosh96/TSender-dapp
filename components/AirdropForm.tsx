"use client";
import { useState, useMemo } from "react";
import InputField from "./ui/InputField"; // Adjust path if needed
import { chainsToTSender, tsenderAbi, erc20Abi } from "@/app/constants";
import { useChainId, useAccount, useConfig, useReadContract, useWriteContract } from "wagmi";
import { call, readContract, waitForTransactionReceipt } from "@wagmi/core";
import { calculateTotal } from "../utils";

export default function AirdropForm() {
  const [tokenAddress, setTokenAddress] = useState<string>("");
  const [recipients, setRecipients] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const chainId = useChainId();
  const config = useConfig();
  const account = useAccount();
  const total: number = useMemo(() => {
    const t = calculateTotal(amount);
    console.log(t);
    return t;
  }, [amount]);
  const { data: hash, isPending, writeContractAsync } = useWriteContract();

  async function getApprovedAmount(tsenderAddress: string | null): Promise<number> {
    if (!tsenderAddress) {
      alert("No address found for this chain");
      return 0;
    }
    //Read from the chain to see if we have approved enough tokens.
    //Allowance
    const response = await readContract(config, {
      abi: erc20Abi,
      address: tokenAddress as `0x${string}`,
      functionName: "allowance",
      args: [account.address, tsenderAddress as `0x${string}`]
    });
    return response as number;
  }

  async function handleSubmit() {
    //1.a If already approved, move to 2
    //1.b Approve our tsender contract to spend tokens
    //2. Call airdrop function on tsender contract
    //3. Wait for transaction to be mined
    const tsenderAddress = chainsToTSender[chainId]["tsender"];
    console.log("TSender Address:", tsenderAddress);
    const approvedAmount = await getApprovedAmount(tsenderAddress);
    console.log("Approved Amount:", approvedAmount);

    if (approvedAmount < total) {
      const approvalHash = await writeContractAsync({
        abi: erc20Abi,
        address: tokenAddress as `0x${string}`,
        functionName: "approve",
        args: [tsenderAddress as `0x${string}`, BigInt(total)],
      })
      const approvalReceipt = await waitForTransactionReceipt(config, { hash: approvalHash });
      console.log("Approval confirmed", approvalReceipt);

      await writeContractAsync({
        abi: tsenderAbi,
        address: tsenderAddress as `0x${string}`,
        functionName: "airdropERC20",
        args: [
          tokenAddress,
          // Comma or new line separated
          recipients.split(/[,\n]+/).map(addr => addr.trim()).filter(addr => addr !== ''),
          amount.split(/[,\n]+/).map(amt => amt.trim()).filter(amt => amt !== ''),
          BigInt(total),
        ],
      })
    }
    else {
      await writeContractAsync({
        abi: tsenderAbi,
        address: tsenderAddress as `0x${string}`,
        functionName: "airdropERC20",
        args: [
          tokenAddress,
          // Comma or new line separated
          recipients.split(/[,\n]+/).map(addr => addr.trim()).filter(addr => addr !== ''),
          amount.split(/[,\n]+/).map(amt => amt.trim()).filter(amt => amt !== ''),
          BigInt(total),
        ],
      },)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-100">
      {/* Outer full screen background gradient */}

      <div className="max-w-3xl w-full p-10 space-y-10 bg-white rounded-3xl shadow-2xl ring-1 ring-blue-100">
        {/* Inner card: background effect with shadow, rounded corners, and subtle ring */}

        <InputField
          label="Token Address"
          placeholder="Enter token contract address (e.g., 0x...)"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
          type="text"
          className="w-full text-xl p-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        />

        <InputField
          label="Recipients"
          placeholder="Enter recipients (e.g., 0x...)"
          value={recipients}
          onChange={(e) => setRecipients(e.target.value)}
          type="text"
          large={true}
          className="w-full text-xl p-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        />

        <InputField
          label="Amount"
          placeholder="Enter amount to airdrop (e.g., 100)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="text"
          large={true}
          className="w-full text-xl p-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
        />

        <button
          onClick={handleSubmit}
          className="
          w-1/2
          block
          mx-auto
          bg-blue-600 
          text-white 
          text-lg
          font-bold
          py-3
          rounded-xl 
          hover:bg-blue-700 
          transition 
          duration-200
          active:scale-95
          disabled:bg-gray-400 
          disabled:cursor-not-allowed
        "
        >
          Send Tokens
        </button>
      </div>
    </div>
  );
}