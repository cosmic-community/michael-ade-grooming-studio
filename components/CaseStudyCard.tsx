import type { CaseStudy } from '@/types'
import Link from 'next/link'

interface CaseStudyCardProps {
  study: CaseStudy
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  const beforeImage = study.metadata.before_photo?.imgix_url
  const afterImage = study.metadata.after_photo?.imgix_url
  
  return (
    <Link href={`/case-studies/${study.slug}`} className="group">
      <div className="bg-secondary rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-colors">
        {(beforeImage || afterImage) && (
          <div className="grid grid-cols-2 gap-1">
            {beforeImage && (
              <div className="relative">
                <img
                  src={`${beforeImage}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt="Before"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-secondary text-white text-sm font-semibold rounded">
                  Before
                </span>
              </div>
            )}
            {afterImage && (
              <div className="relative">
                <img
                  src={`${afterImage}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt="After"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-secondary text-sm font-semibold rounded">
                  After
                </span>
              </div>
            )}
          </div>
        )}
        
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
            {study.metadata.project_title}
          </h3>
          {study.metadata.client_name && (
            <p className="text-gray-400 text-sm mb-3">Client: {study.metadata.client_name}</p>
          )}
          
          {study.metadata.services_used && study.metadata.services_used.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {study.metadata.services_used.slice(0, 3).map(service => (
                <span
                  key={service.id}
                  className="px-3 py-1 bg-secondary-light text-primary text-xs rounded-full"
                >
                  {service.metadata.service_name}
                </span>
              ))}
            </div>
          )}
          
          <p className="text-primary font-semibold">View Full Case Study →</p>
        </div>
      </div>
    </Link>
  )
}