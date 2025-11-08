import type { Service } from '@/types'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const imageUrl = service.metadata.service_image?.imgix_url
  
  return (
    <div className="bg-secondary rounded-lg overflow-hidden border border-gray-800 hover:border-primary transition-colors">
      {imageUrl && (
        <img
          src={`${imageUrl}?w=800&h=600&fit=crop&auto=format,compress`}
          alt={service.metadata.service_name}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{service.metadata.service_name}</h3>
        <p className="text-gray-400 mb-4">{service.metadata.description}</p>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-primary font-bold text-xl">{service.metadata.price}</p>
            {service.metadata.duration && (
              <p className="text-gray-500 text-sm">{service.metadata.duration}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}