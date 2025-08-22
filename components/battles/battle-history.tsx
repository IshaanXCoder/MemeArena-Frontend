"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Trophy, Clock, TrendingUp, Crown, Target } from "lucide-react"

// Mock data for battle history
const mockBattleHistory = [
  {
    id: 1,
    winner: {
      title: "Doge to the Moon",
      image: "/placeholder.jpg",
      creator: "0x1234...5678",
      finalStakes: 12.5
    },
    loser: {
      title: "Sad Pepe",
      image: "/placeholder.jpg",
      creator: "0x8765...4321",
      finalStakes: 7.2
    },
    endTime: Date.now() - 3600000, // 1 hour ago
    totalPrize: 19.7,
    participants: 45,
    yourStake: 0.5,
    yourWinnings: 0.8,
    status: "won"
  },
  {
    id: 2,
    winner: {
      title: "Chad Energy",
      image: "/placeholder.jpg",
      creator: "0x9999...1111",
      finalStakes: 15.8
    },
    loser: {
      title: "Wojak Sadness",
      image: "/placeholder.jpg",
      creator: "0x2222...9999",
      finalStakes: 9.3
    },
    endTime: Date.now() - 7200000, // 2 hours ago
    totalPrize: 25.1,
    participants: 67,
    yourStake: 1.0,
    yourWinnings: 0,
    status: "lost"
  },
  {
    id: 3,
    winner: {
      title: "Diamond Hands",
      image: "/placeholder.jpg",
      creator: "0x3333...5555",
      finalStakes: 8.9
    },
    loser: {
      title: "Paper Hands",
      image: "/placeholder.jpg",
      creator: "0x5555...7777",
      finalStakes: 4.1
    },
    endTime: Date.now() - 86400000, // 1 day ago
    totalPrize: 13.0,
    participants: 23,
    yourStake: 0,
    yourWinnings: 0,
    status: "not_participated"
  }
]

export function BattleHistory() {
  const [filter, setFilter] = useState<"all" | "participated" | "won" | "lost">("all")
  const [battles] = useState(mockBattleHistory)

  const filteredBattles = battles.filter(battle => {
    switch (filter) {
      case "participated":
        return battle.yourStake > 0
      case "won":
        return battle.status === "won"
      case "lost":
        return battle.status === "lost"
      default:
        return true
    }
  })

  const formatTimeAgo = (timestamp: number) => {
    const diff = Date.now() - timestamp
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)
    
    if (days > 0) return `${days}d ago`
    return `${hours}h ago`
  }

  const totalWinnings = battles.reduce((sum, battle) => sum + battle.yourWinnings, 0)
  const totalStaked = battles.reduce((sum, battle) => sum + battle.yourStake, 0)
  const winRate = battles.filter(b => b.yourStake > 0).length > 0 
    ? (battles.filter(b => b.status === "won").length / battles.filter(b => b.yourStake > 0).length) * 100 
    : 0

  return (
    <div className="space-y-6">
      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <div className="meme-card p-4 text-center">
          <Trophy className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
          <div className="text-2xl font-black text-yellow-400">{totalWinnings.toFixed(2)}</div>
          <div className="text-xs font-bold text-gray-400 uppercase">Total Winnings</div>
        </div>
        <div className="meme-card p-4 text-center">
          <Target className="h-6 w-6 text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-black text-blue-400">{totalStaked.toFixed(2)}</div>
          <div className="text-xs font-bold text-gray-400 uppercase">Total Staked</div>
        </div>
        <div className="meme-card p-4 text-center">
          <TrendingUp className="h-6 w-6 text-green-400 mx-auto mb-2" />
          <div className="text-2xl font-black text-green-400">{winRate.toFixed(1)}%</div>
          <div className="text-xs font-bold text-gray-400 uppercase">Win Rate</div>
        </div>
        <div className="meme-card p-4 text-center">
          <Crown className="h-6 w-6 text-purple-400 mx-auto mb-2" />
          <div className="text-2xl font-black text-purple-400">{battles.filter(b => b.yourStake > 0).length}</div>
          <div className="text-xs font-bold text-gray-400 uppercase">Battles Joined</div>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 overflow-x-auto">
        {[
          { key: "all", label: "ALL BATTLES" },
          { key: "participated", label: "MY BATTLES" },
          { key: "won", label: "WON" },
          { key: "lost", label: "LOST" }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key as typeof filter)}
            className={`px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap transition-all ${
              filter === tab.key
                ? "bg-yellow-400 text-black"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Battle History List */}
      <div className="space-y-4">
        {filteredBattles.map((battle, index) => (
          <motion.div
            key={battle.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="meme-card p-6"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Battle Info */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-5 w-5 text-yellow-400" />
                    <span className="text-lg font-black text-yellow-400">
                      BATTLE #{battle.id}
                    </span>
                    {battle.status === "won" && (
                      <Crown className="h-5 w-5 text-green-400" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-bold">
                      {formatTimeAgo(battle.endTime)}
                    </span>
                  </div>
                </div>

                {/* Competitors */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  {/* Winner */}
                  <div className="text-center">
                    <div className="relative">
                      <Image
                        src={battle.winner.image}
                        alt={battle.winner.title}
                        width={80}
                        height={80}
                        className="rounded-lg mx-auto mb-2 border-2 border-green-400"
                      />
                      <Crown className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400 bg-black rounded-full p-1" />
                    </div>
                    <h4 className="font-black text-green-400 text-sm mb-1">
                      WINNER
                    </h4>
                    <p className="font-bold text-white text-xs">
                      {battle.winner.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {battle.winner.finalStakes} ETH staked
                    </p>
                  </div>

                  {/* VS */}
                  <div className="text-center">
                    <div className="bg-red-600 text-white px-4 py-2 rounded-full font-black text-sm">
                      VS
                    </div>
                  </div>

                  {/* Loser */}
                  <div className="text-center">
                    <Image
                      src={battle.loser.image}
                      alt={battle.loser.title}
                      width={80}
                      height={80}
                      className="rounded-lg mx-auto mb-2 border-2 border-red-400 opacity-75"
                    />
                    <h4 className="font-black text-red-400 text-sm mb-1">
                      LOSER
                    </h4>
                    <p className="font-bold text-white text-xs">
                      {battle.loser.title}
                    </p>
                    <p className="text-xs text-gray-400">
                      {battle.loser.finalStakes} ETH staked
                    </p>
                  </div>
                </div>
              </div>

              {/* Battle Stats & Your Performance */}
              <div className="lg:w-80 space-y-4">
                <div className="meme-card p-4 bg-gray-900/50">
                  <h4 className="font-black text-gray-300 text-sm mb-3 uppercase">
                    Battle Results
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-bold">Prize Pool:</span>
                      <span className="text-yellow-400 font-black">{battle.totalPrize} ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-bold">Participants:</span>
                      <span className="text-white font-bold">{battle.participants}</span>
                    </div>
                  </div>
                </div>

                {battle.yourStake > 0 && (
                  <div className="meme-card p-4 bg-gray-900/50">
                    <h4 className="font-black text-gray-300 text-sm mb-3 uppercase">
                      Your Performance
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400 font-bold">Your Stake:</span>
                        <span className="text-blue-400 font-black">{battle.yourStake} ETH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400 font-bold">Winnings:</span>
                        <span className={`font-black ${
                          battle.yourWinnings > 0 ? "text-green-400" : "text-red-400"
                        }`}>
                          {battle.yourWinnings > 0 ? "+" : ""}{(battle.yourWinnings - battle.yourStake).toFixed(3)} ETH
                        </span>
                      </div>
                      <div className="pt-2 border-t border-gray-700">
                        <div className="flex justify-between">
                          <span className="text-gray-400 font-bold">Result:</span>
                          <span className={`font-black uppercase ${
                            battle.status === "won" ? "text-green-400" : "text-red-400"
                          }`}>
                            {battle.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredBattles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Trophy className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-black text-gray-400 mb-2">NO BATTLES FOUND</h3>
          <p className="text-gray-500 font-bold">
            {filter === "all" 
              ? "No battles have been completed yet" 
              : `No battles found for filter: ${filter.toUpperCase()}`
            }
          </p>
        </motion.div>
      )}
    </div>
  )
}
