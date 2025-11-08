import type { SiteSettings } from '@/types'

interface HeroProps {
  settings: SiteSettings | null
}

export default function Hero({ settings }: HeroProps) {
  if (!settings) return null
  
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-secondary via-secondary-light to-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {settings.metadata.business_name}
        </h1>
        {settings.metadata.tagline && (
          <p className="text-2xl md:text-3xl text-primary mb-8">
            {settings.metadata.tagline}
          </p>
        )}
        {settings.metadata.about && (
          <div 
            className="text-gray-300 text-lg max-w-3xl mx-auto mb-12"
            dangerouslySetInnerHTML={{ __html: settings.metadata.about }}
          />
        )}
        
        {settings.metadata.whatsapp_number && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${settings.metadata.whatsapp_number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(settings.metadata.booking_message || 'Hi! I would like to book an appointment.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-secondary rounded-full font-bold text-lg hover:bg-primary-dark transition-colors inline-block"
            >
              Book Appointment via WhatsApp
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary hover:text-secondary transition-colors inline-block"
            >
              View Services
            </a>
          </div>
        )}
      </div>
    </section>
  )
}