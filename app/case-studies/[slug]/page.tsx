import { getCaseStudyBySlug, getCaseStudies } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export async function generateStaticParams() {
  const studies = await getCaseStudies()
  return studies.map(study => ({
    slug: study.slug,
  }))
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = await getCaseStudyBySlug(slug)
  
  if (!study) {
    notFound()
  }
  
  const beforeImage = study.metadata.before_photo?.imgix_url
  const afterImage = study.metadata.after_photo?.imgix_url
  const gallery = study.metadata.gallery || []
  
  return (
    <div className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{study.metadata.project_title}</h1>
        {study.metadata.client_name && (
          <p className="text-primary text-xl mb-8">Client: {study.metadata.client_name}</p>
        )}
        
        {/* Before & After Section */}
        {(beforeImage || afterImage) && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {beforeImage && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Before</h3>
                <img
                  src={`${beforeImage}?w=1200&h=800&fit=crop&auto=format,compress`}
                  alt="Before transformation"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
            )}
            {afterImage && (
              <div>
                <h3 className="text-2xl font-bold mb-4">After</h3>
                <img
                  src={`${afterImage}?w=1200&h=800&fit=crop&auto=format,compress`}
                  alt="After transformation"
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
              </div>
            )}
          </div>
        )}
        
        {/* Description */}
        <div 
          className="prose prose-invert prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: study.metadata.description }}
        />
        
        {/* Services Used */}
        {study.metadata.services_used && study.metadata.services_used.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">Services Used</h3>
            <div className="flex flex-wrap gap-3">
              {study.metadata.services_used.map(service => (
                <span
                  key={service.id}
                  className="px-4 py-2 bg-primary text-secondary rounded-full font-medium"
                >
                  {service.metadata.service_name}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Gallery */}
        {gallery.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6">Gallery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {gallery.map((image, index) => (
                <img
                  key={index}
                  src={`${image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
                  alt={`Gallery image ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full rounded-lg"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}