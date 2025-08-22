"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { WalletButton } from "@/components/wallet/wallet-button"
import { Zap, Swords } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-teal/95 backdrop-blur-md border-b-2 border-mustard shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3"
            >
              <Image
                src="/logo.jpg"
                alt="MemeArena Logo"
                width={40}
                height={40}
                className="rounded-lg border-2 border-mustard shadow-md"
              />
              <span className="text-3xl font-black text-beige tracking-tight font-retro drop-shadow-lg">
                MEMEARENA
              </span>
            </motion.div>
          </Link>

          <Navigation />

          <WalletButton />
        </div>
      </div>
    </header>
  )
}
