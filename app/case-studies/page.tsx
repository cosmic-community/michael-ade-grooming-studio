import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = {
  title: 'Braiding Gallery - Cunning Braids Studio',
  description: 'View our braiding transformation gallery showcasing before and after results from our protective styling and braiding services for men and women.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()
  
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Braiding Gallery</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Real transformations from our studio. See the beautiful braiding results we create for our clients - both men and women.
          </p>
        </div>
        
        {caseStudies.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No gallery items available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map(study => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}