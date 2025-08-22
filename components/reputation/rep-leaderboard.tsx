"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Crown, TrendingUp, Target, Trophy, Medal, Award } from "lucide-react"

// Mock reputation data
const mockRepLeaderboard = [
  {
    rank: 1,
    address: "0x1234...5678",
    username: "MemeKing",
    repScore: 9850,
    tier: "Oracle",
    totalStaked: 45.7,
    winRate: 87.5,
    battlesWon: 156,
    avatar: "/placeholder-user.jpg",
    badge: "🥇"
  },
  {
    rank: 2,
    address: "0x8765...4321",
    username: "ViralProphet",
    repScore: 8240,
    tier: "Influencer",
    totalStaked: 32.1,
    winRate: 82.3,
    battlesWon: 98,
    avatar: "/placeholder-user.jpg",
    badge: "🥈"
  },
  {
    rank: 3,
    address: "0x9999...1111",
    username: "ChadPredictor", 
    repScore: 7650,
    tier: "Influencer",
    totalStaked: 28.9,
    winRate: 79.1,
    battlesWon: 87,
    avatar: "/placeholder-user.jpg",
    badge: "🥉"
  },
  {
    rank: 4,
    address: "0x2222...9999",
    username: "DegenerateSeer",
    repScore: 6890,
    tier: "Degen",
    totalStaked: 23.4,
    winRate: 75.8,
    battlesWon: 67,
    avatar: "/placeholder-user.jpg",
    badge: "🏅"
  },
  {
    rank: 5,
    address: "0x5555...7777",
    username: "MemeMaster",
    repScore: 6450,
    tier: "Degen",
    totalStaked: 19.8,
    winRate: 72.4,
    battlesWon: 54,
    avatar: "/placeholder-user.jpg",
    badge: "🏅"
  }
]

const getTierColor = (tier: string) => {
  switch (tier) {
    case "Oracle": return "text-purple-400"
    case "Influencer": return "text-yellow-400"
    case "Degen": return "text-green-400"
    default: return "text-gray-400"
  }
}

const getTierBg = (tier: string) => {
  switch (tier) {
    case "Oracle": return "bg-purple-900/30 border-purple-500/50"
    case "Influencer": return "bg-yellow-900/30 border-yellow-500/50"
    case "Degen": return "bg-green-900/30 border-green-500/50"
    default: return "bg-gray-900/30 border-gray-500/50"
  }
}

export function RepLeaderboard() {
  const [timeframe, setTimeframe] = useState<"day" | "week" | "month" | "all">("week")

  return (
    <div className="space-y-6">
      {/* Header with timeframe filter */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black uppercase text-black mb-2">
            REPUTATION LEADERBOARD
          </h2>
          <p className="text-gray-400 font-bold">
            Rankings based on prediction accuracy, stake performance, and battle wins
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold text-gray-400">TIMEFRAME:</span>
          <select
            value={timeframe}
            onChange={(e) => setTimeframe(e.target.value as typeof timeframe)}
            className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 text-sm font-bold"
          >
            <option value="day">24H</option>
            <option value="week">WEEK</option>
            <option value="month">MONTH</option>
            <option value="all">ALL TIME</option>
          </select>
        </div>
      </div>

      {/* Tier Legend */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="meme-card p-4 bg-purple-900/20 border border-purple-500/30">
          <div className="flex items-center space-x-2 mb-2">
            <Crown className="h-5 w-5 text-purple-400" />
            <span className="font-black text-purple-400">ORACLE</span>
          </div>
          <p className="text-xs text-gray-400 font-bold">10,000+ Rep Score</p>
          <p className="text-xs text-gray-300">Legendary predictors with perfect track records</p>
        </div>
        <div className="meme-card p-4 bg-yellow-900/20 border border-yellow-500/30">
          <div className="flex items-center space-x-2 mb-2">
            <Trophy className="h-5 w-5 text-yellow-400" />
            <span className="font-black text-yellow-400">INFLUENCER</span>
          </div>
          <p className="text-xs text-gray-400 font-bold">5,000+ Rep Score</p>
          <p className="text-xs text-gray-300">Elite tier with consistent wins and high stakes</p>
        </div>
        <div className="meme-card p-4 bg-green-900/20 border border-green-500/30">
          <div className="flex items-center space-x-2 mb-2">
            <Medal className="h-5 w-5 text-green-400" />
            <span className="font-black text-green-400">DEGEN</span>
          </div>
          <p className="text-xs text-gray-400 font-bold">1,000+ Rep Score</p>
          <p className="text-xs text-gray-300">Rising stars showing promising prediction skills</p>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="space-y-4">
        {mockRepLeaderboard.map((user, index) => (
          <motion.div
            key={user.address}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`meme-card p-6 ${getTierBg(user.tier)} ${
              user.rank <= 3 ? "ring-2 ring-yellow-400/50" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Left: Rank and User Info */}
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-black">
                  {user.badge}
                </div>
                <div className="flex items-center space-x-3">
                  <Image
                    src={user.avatar}
                    alt={user.username}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-gray-600"
                  />
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-black text-white">
                        {user.username}
                      </h3>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full border ${getTierBg(user.tier)} ${getTierColor(user.tier)}`}>
                        {user.tier.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 font-bold">
                      {user.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className={`text-2xl font-black ${getTierColor(user.tier)}`}>
                    {user.repScore.toLocaleString()}
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase">
                    Rep Score
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-blue-400">
                    {user.totalStaked}
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase">
                    Total Staked (ETH)
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-green-400">
                    {user.winRate}%
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase">
                    Win Rate
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-orange-400">
                    {user.battlesWon}
                  </div>
                  <div className="text-xs font-bold text-gray-400 uppercase">
                    Battles Won
                  </div>
                </div>
              </div>
            </div>

            {/* Progress bar for rep score */}
            <div className="mt-4">
              <div className="flex justify-between text-xs font-bold text-gray-400 mb-1">
                <span>Progress to next tier</span>
                <span>{user.repScore}/10000</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${
                    user.tier === "Oracle" 
                      ? "bg-purple-400" 
                      : user.tier === "Influencer"
                      ? "bg-yellow-400"
                      : "bg-green-400"
                  }`}
                  style={{ width: `${Math.min((user.repScore / 10000) * 100, 100)}%` }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="meme-card px-8 py-3 font-black text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all">
          LOAD MORE LEGENDS
        </button>
      </div>
    </div>
  )
}
