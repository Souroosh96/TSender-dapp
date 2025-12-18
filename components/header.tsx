/**
 * ------------------------------------------------------------
 * Project: TSender DApp
 * File: header.tsx
 * Description: Header component for the TSender DApp
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

"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit"
import { FaGithub } from "react-icons/fa"
import Image from "next/image"

export default function Header() {
  return (
    <nav className="px-8 py-4.5 border-b-[1px] border-zinc-100 flex flex-row justify-between items-center bg-white xl:min-h-[77px]">
      <div className="flex items-center gap-2.5 md:gap-6">
        <a href="/" className="flex items-center gap-1 text-zinc-800">
          <Image
            src="https://st2.depositphotos.com/4398873/10651/v/450/depositphotos_106515912-stock-illustration-trident-black-silhouette-sea-neptunus.jpg"
            alt="TSender"
            width={50}
            height={50}
          />
          <h1 className="font-bold text-2xl hidden md:block">TSender</h1>
        </a>
        <a
          href="https://github.com/cyfrin/TSender"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors border-2 border-zinc-600 hover:border-zinc-500 cursor-alias hidden md:block"
        >
          <FaGithub className="h-5 w-5 text-white" />
        </a>
      </div>
      <h3 className="italic text-left hidden text-zinc-500 lg:block">
        My first ERC-20 Airdrop DApp!
      </h3>
      <div className="flex items-center gap-4">
        <ConnectButton />
      </div>
    </nav>
  )
}
