"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Crown, Swords, Trophy, Target } from "lucide-react"

// Mock battle champions data
const mockChampions = [
  {
    rank: 1,
    address: "0x7777...8888",
    username: "BattleLord",
    battlesWon: 89,
    winStreak: 23,
    totalEarnings: 156.7,
    favoriteMeme: "Alpha Chad",
    avatar: "/placeholder-user.jpg",
    title: "GRAND CHAMPION"
  },
  {
    rank: 2,
    address: "0x9999...0000",
    username: "ArenaKing",
    battlesWon: 76,
    winStreak: 18,
    totalEarnings: 134.2,
    favoriteMeme: "Moon Pepe",
    avatar: "/placeholder-user.jpg",
    title: "CHAMPION"
  },
  {
    rank: 3,
    address: "0xAAAA...BBBB",
    username: "WarMaster",
    battlesWon: 65,
    winStreak: 15,
    totalEarnings: 98.5,
    favoriteMeme: "Doge Warrior",
    avatar: "/placeholder-user.jpg",
    title: "CHAMPION"
  }
]

export function BattleChampions() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black uppercase text-yellow-400 mb-2">
          BATTLE CHAMPIONS
        </h2>
        <p className="text-gray-400 font-bold">
          Warriors who dominate the meme arena
        </p>
      </div>

      <div className="space-y-6">
        {mockChampions.map((champion, index) => (
          <motion.div
            key={champion.address}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`meme-card p-6 ${
              champion.rank === 1 
                ? "bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-2 border-yellow-400" 
                : "bg-gray-900/50"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={champion.avatar}
                    alt={champion.username}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-yellow-400"
                  />
                  {champion.rank === 1 && (
                    <Crown className="absolute -top-3 -right-3 h-8 w-8 text-yellow-400" />
                  )}
                </div>
                
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-2xl font-black text-white">
                      {champion.username}
                    </h3>
                    <span className={`text-xs font-black px-3 py-1 rounded-full ${
                      champion.rank === 1 
                        ? "bg-yellow-400 text-black" 
                        : "bg-gray-700 text-yellow-400"
                    }`}>
                      {champion.title}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 font-bold mb-2">
                    {champion.address}
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1 text-orange-400">
                      <Swords className="h-4 w-4" />
                      <span className="font-bold">{champion.battlesWon} wins</span>
                    </div>
                    <div className="flex items-center space-x-1 text-green-400">
                      <Target className="h-4 w-4" />
                      <span className="font-bold">{champion.winStreak} streak</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-3xl font-black text-yellow-400 mb-1">
                  {champion.totalEarnings} ETH
                </div>
                <div className="text-sm font-bold text-gray-400 uppercase">
                  Total Earnings
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Favorite: {champion.favoriteMeme}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hall of Fame */}
      <div className="meme-card p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50">
        <div className="text-center">
          <Trophy className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-black text-yellow-400 mb-2">
            HALL OF FAME
          </h3>
          <p className="text-gray-300 font-bold mb-4">
            Legendary champions who shaped the arena
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-black/50 rounded-lg">
              <div className="text-2xl font-black text-gold">🏆</div>
              <div className="text-lg font-black text-white">MemeEmperor</div>
              <div className="text-sm text-gray-400">First Grand Champion</div>
            </div>
            <div className="p-4 bg-black/50 rounded-lg">
              <div className="text-2xl font-black text-silver">🥈</div>
              <div className="text-lg font-black text-white">ViralKing</div>
              <div className="text-sm text-gray-400">100 Win Milestone</div>
            </div>
            <div className="p-4 bg-black/50 rounded-lg">
              <div className="text-2xl font-black text-bronze">🥉</div>
              <div className="text-lg font-black text-white">MemeGod</div>
              <div className="text-sm text-gray-400">Longest Win Streak</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
