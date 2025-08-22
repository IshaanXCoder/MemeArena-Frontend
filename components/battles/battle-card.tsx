"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, Trophy, Target, TrendingUp, Users } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"

interface Meme {
  id: number
  title: string
  image: string
  creator: string
  stakes: number
  votes: number
}

interface Battle {
  id: number
  meme1: Meme
  meme2: Meme
  endTime: number
  totalPrize: number
  status: "active" | "ended"
}

interface BattleCardProps {
  battle: Battle
}

export function BattleCard({ battle }: BattleCardProps) {
  const [selectedMeme, setSelectedMeme] = useState<number | null>(null)
  const [stakeAmount, setStakeAmount] = useState(0.1)

  const timeLeft = Math.max(0, battle.endTime - Date.now())
  const hours = Math.floor(timeLeft / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))

  const meme1Percentage = (battle.meme1.stakes / (battle.meme1.stakes + battle.meme2.stakes)) * 100
  const meme2Percentage = 100 - meme1Percentage

  const handleStake = (memeId: number) => {
    console.log(`Staking ${stakeAmount} ETH on meme ${memeId}`)
    // This would integrate with your staking contract
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="meme-card p-6 space-y-4"
    >
      {/* Battle Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-yellow-400" />
          <span className="text-lg font-black text-yellow-400">
            BATTLE #{battle.id}
          </span>
        </div>
        <div className="flex items-center space-x-2 text-orange-400">
          <Clock className="h-4 w-4" />
          <span className="text-sm font-bold">
            {hours}h {minutes}m
          </span>
        </div>
      </div>

      {/* Prize Pool */}
      <div className="text-center p-3 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg border border-yellow-500/30">
        <div className="text-2xl font-black text-yellow-400">
          {battle.totalPrize} ETH
        </div>
        <div className="text-xs font-bold text-gray-400 uppercase">
          Total Prize Pool
        </div>
      </div>

      {/* Meme Competitors */}
      <div className="space-y-4">
        {/* Meme 1 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelectedMeme(battle.meme1.id)}
          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
            selectedMeme === battle.meme1.id
              ? "border-yellow-400 bg-yellow-900/20"
              : "border-gray-600 hover:border-yellow-400/50"
          }`}
        >
          <div className="flex items-center space-x-3 mb-3">
            <Image
              src={battle.meme1.image}
              alt={battle.meme1.title}
              width={60}
              height={60}
              className="rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="font-black text-white text-sm">
                {battle.meme1.title}
              </h4>
              <p className="text-xs text-gray-400 font-bold">
                by {battle.meme1.creator}
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-gray-400">Stakes: {battle.meme1.stakes} ETH</span>
              <span className="text-gray-400">{battle.meme1.votes} votes</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                style={{ width: `${meme1Percentage}%` }}
              />
            </div>
            <div className="text-center text-sm font-black text-yellow-400">
              {meme1Percentage.toFixed(1)}% chance
            </div>
          </div>
        </motion.div>

        {/* VS Divider */}
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded-full">
            <Target className="h-4 w-4 text-white" />
            <span className="text-sm font-black text-white">VS</span>
            <Target className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Meme 2 */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => setSelectedMeme(battle.meme2.id)}
          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
            selectedMeme === battle.meme2.id
              ? "border-yellow-400 bg-yellow-900/20"
              : "border-gray-600 hover:border-yellow-400/50"
          }`}
        >
          <div className="flex items-center space-x-3 mb-3">
            <Image
              src={battle.meme2.image}
              alt={battle.meme2.title}
              width={60}
              height={60}
              className="rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="font-black text-white text-sm">
                {battle.meme2.title}
              </h4>
              <p className="text-xs text-gray-400 font-bold">
                by {battle.meme2.creator}
              </p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-gray-400">Stakes: {battle.meme2.stakes} ETH</span>
              <span className="text-gray-400">{battle.meme2.votes} votes</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                style={{ width: `${meme2Percentage}%` }}
              />
            </div>
            <div className="text-center text-sm font-black text-blue-400">
              {meme2Percentage.toFixed(1)}% chance
            </div>
          </div>
        </motion.div>
      </div>

      {/* Staking Interface */}
      {selectedMeme && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-gray-600 pt-4 space-y-3"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-gray-400">STAKE AMOUNT:</span>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(parseFloat(e.target.value) || 0)}
                min="0.01"
                step="0.01"
                className="w-20 bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-white"
              />
              <span className="text-sm font-bold text-gray-400">ETH</span>
            </div>
          </div>
          
          <CustomButton
            variant="primary"
            onClick={() => handleStake(selectedMeme)}
            className="w-full"
          >
            STAKE ON {selectedMeme === battle.meme1.id ? battle.meme1.title : battle.meme2.title}
          </CustomButton>
        </motion.div>
      )}
    </motion.div>
  )
}
