"use client"

import { motion } from "framer-motion"
import { Swords, Target, Trophy, TrendingUp, Zap, Crown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-transparent flex items-center justify-center overflow-hidden retro-scanlines">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg.jpg')"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      
      {/* Retro grid background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.1)_1px,transparent_1px)] bg-[size:50px_50px]">
      </div>
      
      {/* Floating retro particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/80 rounded-full animate-float shadow-[0_0_10px_rgba(251,191,36,0.8)]"
            // style={{
            //   left: `${Math.random() * 100}%`,
            //   top: `${Math.random() * 100}%`,
            //   animationDelay: `${Math.random() * 3}s`,
            //   animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`
            // }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center space-y-12">
          
          {/* Logo/Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <Swords className="h-24 w-24 text-yellow-400 drop-shadow-[0_0_25px_rgba(251,191,36,0.8)] " />
              <div className="absolute inset-0 bg-yellow-400  blur-3xl animate-pulse"></div>
            </div>
          </motion.div>

          {/* Main Title - MEMEARENA with retro styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-7xl md:text-9xl font-black text-white leading-tight font-retro  drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              MEMEARENA
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-yellow-400 uppercase tracking-widest font-retro drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]">
              WHERE MEMES BECOME BATTLES
            </p>
          </motion.div>

          {/* Feature Badges - retro styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-2 bg-black/50 border-2 border-yellow-400 px-6 py-3 rounded-retro backdrop-blur-sm hover:bg-yellow-400/20 transition-all duration-300">
              <Swords className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-bold uppercase font-retro">1V1 DUELS</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 border-2 border-yellow-400 px-6 py-3 rounded-retro backdrop-blur-sm hover:bg-yellow-400/20 transition-all duration-300">
              <TrendingUp className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-bold uppercase font-retro">TOKEN STAKING</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 border-2 border-yellow-400 px-6 py-3 rounded-retro backdrop-blur-sm hover:bg-yellow-400/20 transition-all duration-300">
              <Crown className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-bold uppercase font-retro">REP SCORE</span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 border-2 border-yellow-400 px-6 py-3 rounded-retro backdrop-blur-sm hover:bg-yellow-400/20 transition-all duration-300">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-bold uppercase font-retro">TWITTER ORACLE</span>
            </div>
          </motion.div>

          {/* Action Buttons - retro styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            
            
            <Link
              href="/upload"
              className="group px-8 py-4 border-2 border-yellow-400 text-white font-bold text-lg uppercase tracking-wider rounded-retro transition-all hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] font-retro bg-black/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6" />
                UPLOAD MEME
              </div>
            </Link>
            <Link
              href="/battles"
              className="group relative px-8 py-4 bg-yellow-400 text-black font-black text-lg uppercase tracking-wider rounded-retro overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] border-2 border-yellow-400 font-retro "
            >
              <div className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center gap-3">
                <Swords className="h-6 w-6" />
                ENTER MEMEARENA
              </div>
            </Link>
            <Link
              href="/leaderboard"
              className="group px-8 py-4 border-2 border-yellow-400 text-white font-bold text-lg uppercase tracking-wider rounded-retro transition-all hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] font-retro bg-black/20 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6" />
                RANKINGS
              </div>
            </Link>
          </motion.div>

          {/* Install MetaMask Button - retro styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex justify-center mt-8"
          >
            <button className="bg-zinc-700/80 hover:bg-zinc-600/80 text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-retro transition-all hover:scale-105 flex items-center gap-2 border-2 border-zinc-600 hover:border-yellow-400 font-retro backdrop-blur-sm">
              🔒 INSTALL METAMASK
            </button>
          </motion.div>

        </div>
      </div>

      {/* Bottom Stats Section - retro styling */}
      
    </section>
  )
}