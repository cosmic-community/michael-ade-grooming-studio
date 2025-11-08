import { getServices, getTeamMembers, getTestimonials, getSiteSettings } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import ServiceGrid from '@/components/ServiceGrid'
import TeamSection from '@/components/TeamSection'
import TestimonialSection from '@/components/TestimonialSection'
import CTASection from '@/components/CTASection'

export default async function HomePage() {
  const [services, team, testimonials, settings] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
    getSiteSettings(),
  ])
  
  return (
    <>
      <Hero settings={settings} />
      
      <section id="services" className="py-20 px-4 bg-secondary-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional grooming services tailored to your style and needs
            </p>
          </div>
          <ServiceGrid services={services} />
        </div>
      </section>
      
      <section id="team" className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Expert stylists dedicated to making you look and feel your best
            </p>
          </div>
          <TeamSection team={team} />
        </div>
      </section>
      
      <section id="testimonials" className="py-20 px-4 bg-secondary-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Reviews</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See what our clients have to say about their experience
            </p>
          </div>
          <TestimonialSection testimonials={testimonials} />
        </div>
      </section>
      
      <CTASection settings={settings} />
    </>
  )
}