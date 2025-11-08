import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Services - Hair Braiding & Styling Studio',
  description: 'Explore our professional braiding and styling services including box braids, cornrows, weaves, natural hair care, and more.',
}

export default async function ServicesPage() {
  const services = await getServices()
  
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Premium braiding and styling services for all hair types. 
            Each service includes a consultation to create the perfect look for you.
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