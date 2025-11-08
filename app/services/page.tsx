import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Services - Marcus J. Grooming Studio',
  description: 'Explore our professional grooming services including haircuts, beard grooming, styling, and more.',
}

export default async function ServicesPage() {
  const services = await getServices()
  
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Premium grooming services delivered by experienced professionals. 
            Each service includes a consultation to ensure you get the perfect look.
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