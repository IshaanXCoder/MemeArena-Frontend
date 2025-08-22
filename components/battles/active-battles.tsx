"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BattleCard } from "./battle-card"
import { Swords, Clock, TrendingUp } from "lucide-react"

// Mock data for active battles
const mockActiveBattles = [
  {
    id: 1,
    meme1: {
      id: 1,
      title: "Doge vs World",
      image: "/placeholder.jpg",
      creator: "0x1234...5678",
      stakes: 5.2,
      votes: 156
    },
    meme2: {
      id: 2,
      title: "Pepe Revolution",
      image: "/placeholder.jpg", 
      creator: "0x8765...4321",
      stakes: 3.8,
      votes: 89
    },
    endTime: Date.now() + 3600000, // 1 hour from now
    totalPrize: 9.0,
    status: "active"
  },
  {
    id: 2,
    meme1: {
      id: 3,
      title: "Chad Energy",
      image: "/placeholder.jpg",
      creator: "0x9999...1111",
      stakes: 7.1,
      votes: 203
    },
    meme2: {
      id: 4,
      title: "Wojak Sadness",
      image: "/placeholder.jpg",
      creator: "0x2222...9999",
      stakes: 4.9,
      votes: 145
    },
    endTime: Date.now() + 7200000, // 2 hours from now
    totalPrize: 12.0,
    status: "active"
  },
  {
    id: 3,
    meme1: {
      id: 5,
      title: "Moon Cat",
      image: "/placeholder.jpg",
      creator: "0x5555...7777",
      stakes: 2.3,
      votes: 67
    },
    meme2: {
      id: 6,
      title: "Diamond Hands",
      image: "/placeholder.jpg",
      creator: "0x3333...5555",
      stakes: 3.7,
      votes: 98
    },
    endTime: Date.now() + 1800000, // 30 minutes from now
    totalPrize: 6.0,
    status: "active"
  }
]

export function ActiveBattles() {
  const [battles, setBattles] = useState(mockActiveBattles)
  const [sortBy, setSortBy] = useState<"prize" | "time" | "stakes">("prize")

  const sortedBattles = [...battles].sort((a, b) => {
    switch (sortBy) {
      case "prize":
        return b.totalPrize - a.totalPrize
      case "time":
        return a.endTime - b.endTime
      case "stakes":
        return (b.meme1.stakes + b.meme2.stakes) - (a.meme1.stakes + a.meme2.stakes)
      default:
        return 0
    }
  })

  return (
    <div className="space-y-6">
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-black uppercase text-yellow-400 mb-2">
            ACTIVE BATTLES ({battles.length})
          </h2>
          <p className="text-gray-400 font-bold">
            Place your bets on the next viral meme champion
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold text-gray-400">SORT BY:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-1 text-sm font-bold"
          >
            <option value="prize">PRIZE POOL</option>
            <option value="time">TIME LEFT</option>
            <option value="stakes">TOTAL STAKES</option>
          </select>
        </div>
      </div>

      {/* Battle Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedBattles.map((battle, index) => (
          <motion.div
            key={battle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <BattleCard battle={battle} />
          </motion.div>
        ))}
      </div>

      {battles.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Swords className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-black text-gray-400 mb-2">NO ACTIVE BATTLES</h3>
          <p className="text-gray-500 font-bold">
            Be the first to create a meme battle and earn rewards!
          </p>
        </motion.div>
      )}
    </div>
  )
}
