"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, Plus, Clock, Trophy, Target } from "lucide-react"
import { CustomButton } from "@/components/ui/custom-button"

export function CreateBattle() {
  const [battleType, setBattleType] = useState<"1v1" | "tournament">("1v1")
  const [duration, setDuration] = useState(24) // hours
  const [entryFee, setEntryFee] = useState(0.1) // ETH
  const [meme1, setMeme1] = useState<File | null>(null)
  const [meme2, setMeme2] = useState<File | null>(null)
  const [meme1Title, setMeme1Title] = useState("")
  const [meme2Title, setMeme2Title] = useState("")
  const [twitterUrl1, setTwitterUrl1] = useState("")
  const [twitterUrl2, setTwitterUrl2] = useState("")

  const handleCreateBattle = () => {
    console.log("Creating battle:", {
      battleType,
      duration,
      entryFee,
      meme1Title,
      meme2Title,
      twitterUrl1,
      twitterUrl2
    })
    // This would integrate with your battle creation contract
  }

  const handleFileUpload = (file: File, memeNumber: 1 | 2) => {
    if (memeNumber === 1) {
      setMeme1(file)
    } else {
      setMeme2(file)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl font-black uppercase text-yellow-400 mb-4">
          CREATE NEW BATTLE
        </h2>
        <p className="text-lg text-gray-300 font-bold">
          Pit two memes against each other and let the community decide the winner
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Battle Configuration */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="meme-card p-6 space-y-6"
        >
          <h3 className="text-xl font-black text-yellow-400 flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            BATTLE SETTINGS
          </h3>

          {/* Battle Type */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase">
              Battle Type
            </label>
            <div className="flex space-x-2">
              <CustomButton
                variant={battleType === "1v1" ? "primary" : "secondary"}
                onClick={() => setBattleType("1v1")}
                className="flex-1"
              >
                1v1 DUEL
              </CustomButton>
              <CustomButton
                variant={battleType === "tournament" ? "primary" : "secondary"}
                onClick={() => setBattleType("tournament")}
                className="flex-1"
                disabled
              >
                TOURNAMENT
                <span className="text-xs">(Soon)</span>
              </CustomButton>
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase">
              Battle Duration (Hours)
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white font-bold"
            >
              <option value={1}>1 Hour</option>
              <option value={6}>6 Hours</option>
              <option value={12}>12 Hours</option>
              <option value={24}>24 Hours</option>
              <option value={48}>48 Hours</option>
              <option value={72}>72 Hours</option>
              <option value={168}>1 Week</option>
            </select>
          </div>

          {/* Entry Fee */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-400 uppercase">
              Minimum Entry Fee (ETH)
            </label>
            <input
              type="number"
              value={entryFee}
              onChange={(e) => setEntryFee(parseFloat(e.target.value) || 0)}
              min="0.01"
              step="0.01"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white font-bold"
              placeholder="0.1"
            />
          </div>

          {/* Battle Preview */}
          <div className="p-4 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-lg">
            <h4 className="font-black text-yellow-400 mb-2">BATTLE PREVIEW</h4>
            <div className="space-y-1 text-sm font-bold text-gray-300">
              <div>Type: {battleType.toUpperCase()}</div>
              <div>Duration: {duration} hours</div>
              <div>Min Entry: {entryFee} ETH</div>
              <div>Winner Takes: 80% of prize pool</div>
              <div>Platform Fee: 10%</div>
              <div>Creator Reward: 10%</div>
            </div>
          </div>
        </motion.div>

        {/* Meme Upload */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Meme 1 */}
          <div className="meme-card p-6 space-y-4">
            <h3 className="text-lg font-black text-blue-400 flex items-center gap-2">
              <Target className="h-5 w-5" />
              MEME CONTESTANT #1
            </h3>

            <div className="space-y-3">
              <input
                type="text"
                value={meme1Title}
                onChange={(e) => setMeme1Title(e.target.value)}
                placeholder="Enter meme title..."
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white font-bold placeholder-gray-500"
              />

              <input
                type="url"
                value={twitterUrl1}
                onChange={(e) => setTwitterUrl1(e.target.value)}
                placeholder="Twitter/X post URL (optional)"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white font-bold placeholder-gray-500"
              />

              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-yellow-400 transition-colors cursor-pointer">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-bold text-gray-400">
                  Drop meme image here or click to upload
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 1)}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* VS Divider */}
          <div className="flex items-center justify-center">
            <div className="bg-red-600 text-white px-6 py-2 rounded-full font-black">
              VS
            </div>
          </div>

          {/* Meme 2 */}
          <div className="meme-card p-6 space-y-4">
            <h3 className="text-lg font-black text-purple-400 flex items-center gap-2">
              <Target className="h-5 w-5" />
              MEME CONTESTANT #2
            </h3>

            <div className="space-y-3">
              <input
                type="text"
                value={meme2Title}
                onChange={(e) => setMeme2Title(e.target.value)}
                placeholder="Enter meme title..."
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white font-bold placeholder-gray-500"
              />

              <input
                type="url"
                value={twitterUrl2}
                onChange={(e) => setTwitterUrl2(e.target.value)}
                placeholder="Twitter/X post URL (optional)"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white font-bold placeholder-gray-500"
              />

              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-yellow-400 transition-colors cursor-pointer">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm font-bold text-gray-400">
                  Drop meme image here or click to upload
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0], 2)}
                  className="hidden"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Create Battle Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center"
      >
        <CustomButton
          variant="primary"
          onClick={handleCreateBattle}
          className="text-xl px-12 py-4"
          disabled={!meme1Title || !meme2Title}
        >
          <Plus className="h-5 w-5 mr-2" />
          CREATE BATTLE
        </CustomButton>
        <p className="text-sm text-gray-400 font-bold mt-2">
          Battle creation requires wallet connection and gas fees
        </p>
      </motion.div>
    </div>
  )
}
