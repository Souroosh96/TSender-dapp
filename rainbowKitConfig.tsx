/**
 * ------------------------------------------------------------
 * Project: TSender DApp
 * File: rainbowKitConfig.tsx
 * Description: RainbowKit configuration for the TSender DApp
 *
 * Author: Souroosh Memarian
 * Date: 2025-12-17
 *
 * License: MIT
 * ------------------------------------------------------------
 * Copyright (c) 2025 Souroosh Memarian
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * ------------------------------------------------------------
 */

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, mainnet, sepolia } from "wagmi/chains";
import { createStorage, noopStorage } from "wagmi";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!;

const config = getDefaultConfig({
    appName: "TSender",
    projectId,
    chains: [anvil, mainnet, sepolia],
    ssr: false,

    storage: typeof window !== "undefined"
        ? createStorage({ storage: window.localStorage })
        : createStorage({ storage: noopStorage }),
});

export default config;
