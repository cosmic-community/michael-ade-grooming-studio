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
            <h2 className="text-4xl font-bold mb-4">Our Braiding Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Expert braiding and protective styling for all hair types, lengths, and textures. Services for both men and women.
            </p>
          </div>
          <ServiceGrid services={services} />
        </div>
      </section>
      
      <section id="team" className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Braiding Specialists</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Talented braiding artists specializing in protective styles, natural hair care, and creative braiding techniques
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
              See what our clients have to say about their braiding experience and beautiful results
            </p>
          </div>
          <TestimonialSection testimonials={testimonials} />
        </div>
      </section>
      
      <CTASection settings={settings} />
    </>
  )
}