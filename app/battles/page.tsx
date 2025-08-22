"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BattleArena } from "@/components/battles/battle-arena"
import { ActiveBattles } from "@/components/battles/active-battles"
import { BattleHistory } from "@/components/battles/battle-history"
import { CreateBattle } from "@/components/battles/create-battle"
import { Swords, Trophy, Clock, TrendingUp } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"

type Tab = "active" | "create" | "history"

export default function BattlesPage() {
  const [activeTab, setActiveTab] = useState<Tab>("active")
  const [battleStats, setBattleStats] = useState({
    totalBattles: 156,
    activeBattles: 12,
    totalStaked: 45.7,
    topPrize: 8.9
  })

  return (
    <div className="min-h-screen bg-F5E8D3 text-white p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Swords className="h-10 w-10 text-yellow-400" />
            <h1 className="text-5xl font-black uppercase bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              MEME ARENA BATTLES
            </h1>
          </div>
          <p className="text-xl font-bold text-gray-300">
            WHERE MEMES FIGHT FOR VIRAL DOMINANCE
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="meme-card p-6 text-center">
            <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-3xl font-black text-yellow-400">{battleStats.totalBattles}</div>
            <div className="text-sm font-bold text-gray-400 uppercase">Total Battles</div>
          </div>
          <div className="meme-card p-6 text-center">
            <Clock className="h-8 w-8 text-orange-400 mx-auto mb-2" />
            <div className="text-3xl font-black text-orange-400">{battleStats.activeBattles}</div>
            <div className="text-sm font-bold text-gray-400 uppercase">Active Now</div>
          </div>
          <div className="meme-card p-6 text-center">
            <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <div className="text-3xl font-black text-green-400">{battleStats.totalStaked} ETH</div>
            <div className="text-sm font-bold text-gray-400 uppercase">Total Staked</div>
          </div>
          <div className="meme-card p-6 text-center">
            <Swords className="h-8 w-8 text-purple-400 mx-auto mb-2" />
            <div className="text-3xl font-black text-purple-400">{battleStats.topPrize} ETH</div>
            <div className="text-sm font-bold text-gray-400 uppercase">Biggest Prize</div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex space-x-4 mb-8"
        >
          <CustomButton
            variant={activeTab === "active" ? "primary" : "secondary"}
            onClick={() => setActiveTab("active")}
            className="flex items-center space-x-2"
          >
            <Swords className="h-4 w-4" />
            <span>ACTIVE BATTLES</span>
          </CustomButton>
          <CustomButton
            variant={activeTab === "create" ? "primary" : "secondary"}
            onClick={() => setActiveTab("create")}
            className="flex items-center space-x-2"
          >
            <Trophy className="h-4 w-4" />
            <span>CREATE BATTLE</span>
          </CustomButton>
          <CustomButton
            variant={activeTab === "history" ? "primary" : "secondary"}
            onClick={() => setActiveTab("history")}
            className="flex items-center space-x-2"
          >
            <Clock className="h-4 w-4" />
            <span>BATTLE HISTORY</span>
          </CustomButton>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "active" && <ActiveBattles />}
          {activeTab === "create" && <CreateBattle />}
          {activeTab === "history" && <BattleHistory />}
        </motion.div>
      </div>
    </div>
  )
}
