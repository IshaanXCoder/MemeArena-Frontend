"use client"

import { motion } from "framer-motion"
import { Trophy, Swords, Target } from "lucide-react"

export function HeroHeader() {
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <motion.div 
        className="mb-8 flex justify-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.6 }}
      >
        <div className="relative">
          <Swords className="h-20 w-20 text-yellow-400" />
          <Target className="absolute -top-2 -right-2 h-8 w-8 text-orange-400" />
        </div>
      </motion.div>

      <motion.h1 
        className="mb-6 text-6xl font-black tracking-tight sm:text-8xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {"MEMEARENA".split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p 
        className="mb-8 text-2xl font-bold text-gray-300 sm:text-3xl uppercase tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        BATTLE • STAKE • PREDICT • DOMINATE
      </motion.p>
    </>
  )
} 