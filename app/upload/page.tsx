"use client"

import { motion } from "framer-motion"
import { UploadForm } from "@/components/upload-form"
import { Target, Swords, Trophy, TrendingUp } from "lucide-react"

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-F5E8D3 text-white p-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="h-12 w-12 text-yellow-400" />
            <h1 className="text-5xl font-black uppercase bg-black bg-clip-text text-transparent">
              SUBMIT YOUR MEME
            </h1>
          </div>
          <p className="text-xl font-bold text-gray-300 uppercase tracking-wide mb-6">
            ENTER THE ARENA AND BATTLE FOR VIRAL DOMINANCE
          </p>
          <p className="text-lg text-gray-400 font-bold max-w-2xl mx-auto">
            Submit your meme to compete in battles, earn reputation points, and win ETH rewards. 
            Every meme has the potential to become a viral champion!
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="meme-card p-6 text-center">
            <Swords className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-black text-white mb-2">BATTLE READY</h3>
            <p className="text-sm text-gray-400 font-bold">
              Your meme will be eligible for battles immediately after submission
            </p>
          </div>
          <div className="meme-card p-6 text-center">
            <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
            <h3 className="font-black text-white mb-2">EARN REP</h3>
            <p className="text-sm text-gray-400 font-bold">
              Build your reputation score with every viral meme you create
            </p>
          </div>
          <div className="meme-card p-6 text-center">
            <Trophy className="h-8 w-8 text-orange-400 mx-auto mb-3" />
            <h3 className="font-black text-white mb-2">WIN REWARDS</h3>
            <p className="text-sm text-gray-400 font-bold">
              Earn ETH rewards when your memes win battles and go viral
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <UploadForm />
        </motion.div>
      </div>
    </div>
  )
}
