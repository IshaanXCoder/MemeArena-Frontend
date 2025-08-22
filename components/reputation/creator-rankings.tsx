"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Target, TrendingUp, Eye, Heart } from "lucide-react"

// Mock creator data
const mockCreators = [
  {
    rank: 1,
    address: "0x1111...2222",
    username: "MemeGenius",
    memesCreated: 45,
    totalViralScore: 8950,
    avgEngagement: 92.5,
    topMeme: "Chad Energy",
    avatar: "/placeholder-user.jpg"
  },
  {
    rank: 2,
    address: "0x3333...4444",
    username: "ViralCrafter",
    memesCreated: 32,
    totalViralScore: 7840,
    avgEngagement: 87.2,
    topMeme: "Doge Moon Mission",
    avatar: "/placeholder-user.jpg"
  },
  {
    rank: 3,
    address: "0x5555...6666", 
    username: "MemeWizard",
    memesCreated: 28,
    totalViralScore: 6890,
    avgEngagement: 84.1,
    topMeme: "Pepe's Revenge",
    avatar: "/placeholder-user.jpg"
  }
]

export function CreatorRankings() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black uppercase text-yellow-400 mb-2">
          TOP MEME CREATORS
        </h2>
        <p className="text-gray-400 font-bold">
          Ranked by viral score, engagement, and battle performance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockCreators.map((creator, index) => (
          <motion.div
            key={creator.address}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="meme-card p-6 text-center"
          >
            <div className="relative mb-4">
              <Image
                src={creator.avatar}
                alt={creator.username}
                width={80}
                height={80}
                className="rounded-full mx-auto border-4 border-yellow-400"
              />
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-black">
                #{creator.rank}
              </div>
            </div>

            <h3 className="text-xl font-black text-white mb-1">
              {creator.username}
            </h3>
            <p className="text-sm text-gray-400 font-bold mb-4">
              {creator.address}
            </p>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400 font-bold">Memes Created:</span>
                <span className="text-yellow-400 font-black">{creator.memesCreated}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 font-bold">Viral Score:</span>
                <span className="text-green-400 font-black">{creator.totalViralScore}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400 font-bold">Avg Engagement:</span>
                <span className="text-blue-400 font-black">{creator.avgEngagement}%</span>
              </div>
              <div className="pt-2 border-t border-gray-700">
                <p className="text-xs text-gray-400 font-bold mb-1">TOP MEME:</p>
                <p className="text-sm text-white font-black">{creator.topMeme}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
