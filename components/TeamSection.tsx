import type { TeamMember } from '@/types'
import TeamCard from './TeamCard'

interface TeamSectionProps {
  team: TeamMember[]
}

export default function TeamSection({ team }: TeamSectionProps) {
  if (!team || team.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400 text-lg">Team information coming soon.</p>
      </div>
    )
  }
  
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {team.map(member => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  )
}