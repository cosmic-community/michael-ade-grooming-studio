import type { TeamMember } from '@/types'

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  const photoUrl = member.metadata.photo?.imgix_url
  
  return (
    <div className="bg-secondary-light rounded-lg overflow-hidden border border-gray-800 p-6">
      <div className="flex items-start gap-6">
        {photoUrl ? (
          <img
            src={`${photoUrl}?w=300&h=300&fit=crop&auto=format,compress`}
            alt={member.metadata.name}
            width={150}
            height={150}
            className="w-32 h-32 rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-secondary text-4xl font-bold">
              {member.metadata.name.charAt(0)}
            </span>
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-1">{member.metadata.name}</h3>
          <p className="text-primary font-semibold mb-3">{member.metadata.role}</p>
          {member.metadata.years_experience && (
            <p className="text-gray-400 text-sm mb-3">
              {member.metadata.years_experience} years of experience
            </p>
          )}
          <p className="text-gray-300 mb-4">{member.metadata.bio}</p>
          {member.metadata.specialties && (
            <div>
              <p className="text-sm font-semibold mb-2">Specialties:</p>
              <p className="text-gray-400 text-sm">{member.metadata.specialties}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}