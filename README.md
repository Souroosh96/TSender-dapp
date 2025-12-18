# TSender DApp

TSender is a **gas-optimized ERC-20 airdrop decentralized application (dApp)** that allows users to send tokens to multiple recipients in a single transaction.

This project was built as part of the **Cyfrin Full-Stack Web3 Development Crash Course**.

- 📘 Course: https://updraft.cyfrin.io/courses/full-stack-web3-development-crash-course  
- 🔗 Reference UI Repo: https://github.com/Cyfrin/ts-tsender-ui-cu  
- 🔗 Smart Contract Repo: https://github.com/Cyfrin/TSender  

---

## 🚀 Live Deployment

The application is deployed on **Vercel** and can be accessed here:

👉 **Live DApp:**  
https://tsender-dapp-vercel-c73k9dxlf-sourooshs-projects-1161fc7b.vercel.app/

---

## 🎥 Demo Video

A short demo showing how to use the dApp:

👉 **YouTube Demo:**  
`<LINK_TO_YOUR_YOUTUBE_VIDEO>`

---

## 🛠 Tech Stack

### Frontend
- **Next.js** – React framework with static site generation (SSG)
- **React** – Component-based UI architecture
- **Tailwind CSS** – Utility-first styling

### Web3 & Blockchain
- **Solidity** – ERC-20 smart contract interaction
- **Wagmi** – React hooks for blockchain interactions
- **RainbowKit** – Wallet connection & network switching UI
- **EVM Networks** – Ethereum, Sepolia, Optimism, Arbitrum, Base, zkSync, Anvil

### Tooling & Deployment
- **pnpm** – Fast and efficient package manager
- **Vercel** – Frontend deployment and hosting
- **Anvil / Foundry** – Local blockchain testing

---

## ✨ Features

- **Gas-Optimized ERC-20 Airdrops**  
  Batch token transfers powered by a highly optimized TSender smart contract written in Huff.

- **Wallet Connection**  
  Seamless wallet integration via RainbowKit (MetaMask & WalletConnect-compatible wallets).

- **Multi-Chain Support**  
  Easily switch between supported EVM networks:
  - Ethereum Mainnet  
  - Sepolia (testnet)  
  - Optimism  
  - Arbitrum  
  - Base  
  - zkSync  
  - Local testnets (Anvil)

- **Flexible Input System**
  - ERC-20 token contract address
  - Recipient addresses (comma or newline separated)
  - Token amounts in wei (comma or newline separated)
  - Input validation to ensure matching recipients and amounts


- **Secure Two-Step Transaction Flow**
  1. **Approve** – Grant the TSender contract permission to spend tokens
  2. **Airdrop** – Execute the batch transfer in a single transaction


- **Static & Decentralization-Friendly**
  - Built as a static frontend suitable for decentralized hosting

---

## 🧪 Testing the DApp (Minting USDT on Sepolia)

To test the dApp, you need **test USDT (ERC-20)** on the **Sepolia** network.

### USDT Contract on Sepolia
🔗 https://sepolia.etherscan.io/token/0x952897ed3f14576b51ca4e5512809a88dbdb5ca5

### Steps to Mint USDT

1. Open the contract link above.
2. Go to the **Contract** tab.
3. Click **Write Contract**.
4. Click **Connect to Web3** and connect your wallet.
5. Use the `mint` function:
   - **to (address):** Your MetaMask address
   - **amount:**  
     USDT has **6 decimals**.  
     To mint **100 USDT**, enter:
     ```
     100000000
     ```
     (`100 × 10⁶`)
6. Confirm the transaction.

Once minted, connect your wallet to the dApp and start testing.

---

## 🧪 Local Testing (Anvil)

For local testing with mock tokens and addresses using **Anvil**, follow the setup guide here:

🔗 https://github.com/Cyfrin/ts-tsender-ui-cu/blob/main/CONTRIBUTING.md

This includes:
- Mock ERC-20 tokens
- Test recipient addresses
- Local chain configuration

---

## 🧠 Core Concepts Demonstrated

- ERC-20 token standard (`approve`, `decimals`, `transferFrom`)
- Token airdrops and batch transfers
- Wallet-based transaction signing
- Gas optimization awareness (Huff-based contracts)
- Multi-chain Web3 frontend architecture
- Security-first Web3 development practices

---

## 🔮 Future Improvements

- Support for additional asset types:
  - Native tokens (ETH, MATIC, etc.)
  - NFTs (ERC-721 / ERC-1155)
- CSV upload for recipient lists
- Gas estimation and comparison across networks
- Enhanced transaction simulation and safety checks
- Advanced UX improvements and analytics

---

## 📄 License

This project is licensed under the **MIT License**.


