import { CustomButton } from "@/components/ui/custom-button"
import { Swords, Target, Trophy } from "lucide-react"
import Link from "next/link"

export function HeroCTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <Link href="/battles">
        <CustomButton variant="primary" className="text-xl px-8 py-4">
          <Swords className="mr-3 h-6 w-6" />
          ENTER ARENA
        </CustomButton>
      </Link>
      <Link href="/upload">
        <CustomButton variant="secondary" className="text-xl px-8 py-4">
          <Target className="mr-3 h-6 w-6" />
          SUBMIT MEME
        </CustomButton>
      </Link>
      <Link href="/leaderboard">
        <CustomButton variant="accent" className="text-xl px-8 py-4">
          <Trophy className="mr-3 h-6 w-6" />
          RANKINGS
        </CustomButton>
      </Link>
    </div>
  )
} 