import type { SiteSettings } from '@/types'

interface CTASectionProps {
  settings: SiteSettings | null
}

export default function CTASection({ settings }: CTASectionProps) {
  if (!settings?.metadata.whatsapp_number) return null
  
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
          Ready for Your Transformation?
        </h2>
        <p className="text-secondary-light text-xl mb-8">
          Book your appointment today and experience the difference professional grooming makes.
        </p>
        <a
          href={`https://wa.me/${settings.metadata.whatsapp_number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(settings.metadata.booking_message || 'Hi! I would like to book an appointment.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-secondary text-white rounded-full font-bold text-lg hover:bg-secondary-light transition-colors"
        >
          Book via WhatsApp
        </a>
      </div>
    </section>
  )
}