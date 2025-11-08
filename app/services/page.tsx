import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Braiding Services - Cunning Braids Studio',
  description: 'Explore our professional braiding services including knotless braids, cornrows, faux locs, box braids, and more. Expert protective styling for all hair types.',
}

export default async function ServicesPage() {
  const services = await getServices()
  
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Braiding Services</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Premium braiding and protective styling services for all hair types and textures. 
            Each service includes a consultation to create the perfect braided look for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}