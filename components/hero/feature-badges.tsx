import { Swords, Trophy, Target, TrendingUp } from "lucide-react"

export function FeatureBadges() {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-6 text-lg font-bold">
      <div className="flex items-center gap-2 bg-black text-yellow-400 px-4 py-2 retro-border">
        <Swords className="h-5 w-5" />
        <span>MEME BATTLES</span>
      </div>
      <div className="flex items-center gap-2 bg-black text-green-400 px-4 py-2 retro-border">
        <Target className="h-5 w-5" />
        <span>PREDICTION STAKES</span>
      </div>
      <div className="flex items-center gap-2 bg-black text-orange-400 px-4 py-2 retro-border">
        <Trophy className="h-5 w-5" />
        <span>REP REWARDS</span>
      </div>
      <div className="flex items-center gap-2 bg-black text-purple-400 px-4 py-2 retro-border">
        <TrendingUp className="h-5 w-5" />
        <span>VIRAL TRACKING</span>
      </div>
    </div>
  )
}