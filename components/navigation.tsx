"use client";
import Link from "next/link"
import { motion } from "framer-motion"
import { useWalletContext } from "@/components/wallet/wallet-provider"
import { Shield, Swords, Trophy, Target } from "lucide-react"

export function Navigation() {
  const walletContext = useWalletContext()

  const navItems = [
    { href: "/", label: "Home", icon: null },
    { href: "/battles", label: "Battles", icon: Swords },
    { href: "/upload", label: "Submit Meme", icon: Target },
    { href: "/explore", label: "Explore", icon: null },
    { href: "/leaderboard", label: "Rankings", icon: Trophy },
  ]

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={item.href}
            className="flex items-center space-x-1 text-sm font-bold text-beige hover:text-mustard transition-colors uppercase tracking-wide font-retro hover:drop-shadow-lg"
          >
            {item.icon && <item.icon className="h-4 w-4" />}
            <span>{item.label}</span>
          </Link>
        </motion.div>
      ))}
      {walletContext.isConnected && (
        <>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/dashboard"
              className="text-sm font-bold text-beige hover:text-mustard transition-colors uppercase tracking-wide font-retro hover:drop-shadow-lg"
            >
              Dashboard
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <Link
              href="/admin"
              className="text-sm font-bold hover:text-green-500 transition-colors uppercase tracking-wide flex items-center gap-1"
            >
              Admin
            </Link> */}
          </motion.div>
        </>
      )}
    </nav>
  )
} 