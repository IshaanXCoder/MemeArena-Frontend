import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { ParticleBackground } from "@/components/ui/particle-background"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import { WalletProvider } from "@/components/wallet/wallet-provider"
import { ToastProvider } from "@/components/ui/toast-notification"

const orbitron = Orbitron({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MEMEARENA - Battle • Stake • Predict • Dominate",
  description: "The ultimate meme battle arena where you can stake, predict, and dominate!",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} font-retro bg-background text-foreground relative overflow-x-hidden`}>
        <WalletProvider>
          <ToastProvider>
            <Header />
            <main className="min-h-screen relative z-10">
              <div className="relative z-20">{children}</div>
            </main>
            <FloatingActionButton />
          </ToastProvider>
        </WalletProvider>
      </body>
    </html>
  )
}
