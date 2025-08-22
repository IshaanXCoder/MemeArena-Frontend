"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { RepLeaderboard } from "@/components/reputation/rep-leaderboard"
import { CreatorRankings } from "@/components/reputation/creator-rankings"
import { BattleChampions } from "@/components/reputation/battle-champions"
import { CustomButton } from "@/components/ui/custom-button"
import { Trophy, Crown, Target, TrendingUp } from "lucide-react"

type LeaderboardTab = "reputation" | "creators" | "champions"

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState<LeaderboardTab>("reputation")

  return (
    <div className="min-h-screen bg-F5E8D3 text-white p-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="h-12 w-12 text-yellow-400" />
            <h1 className="text-5xl font-black uppercase bg-black bg-clip-text text-transparent">
              ARENA RANKINGS
            </h1>
          </div>
          <p className="text-xl font-bold text-gray-300 uppercase tracking-wide">
            WHERE LEGENDS ARE BORN AND MEMES BECOME IMMORTAL
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <CustomButton
            variant={activeTab === "reputation" ? "primary" : "secondary"}
            onClick={() => setActiveTab("reputation")}
            className="flex items-center space-x-2"
          >
            <TrendingUp className="h-4 w-4" />
            <span>REP LEADERBOARD</span>
          </CustomButton>
          <CustomButton
            variant={activeTab === "creators" ? "primary" : "secondary"}
            onClick={() => setActiveTab("creators")}
            className="flex items-center space-x-2"
          >
            <Target className="h-4 w-4" />
            <span>TOP CREATORS</span>
          </CustomButton>
          <CustomButton
            variant={activeTab === "champions" ? "primary" : "secondary"}
            onClick={() => setActiveTab("champions")}
            className="flex items-center space-x-2"
          >
            <Crown className="h-4 w-4" />
            <span>BATTLE CHAMPIONS</span>
          </CustomButton>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "reputation" && <RepLeaderboard />}
          {activeTab === "creators" && <CreatorRankings />}
          {activeTab === "champions" && <BattleChampions />}
        </motion.div>
      </div>
    </div>
  )
}
