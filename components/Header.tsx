import Link from 'next/link'
import { getSiteSettings } from '@/lib/cosmic'

export default async function Header() {
  const settings = await getSiteSettings()
  
  return (
    <header className="bg-secondary-light border-b border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            {settings?.metadata.logo?.imgix_url ? (
              <img
                src={`${settings.metadata.logo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
                alt={settings.metadata.business_name}
                width={50}
                height={50}
                className="rounded-full"
              />
            ) : (
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-secondary font-bold text-xl">H</span>
              </div>
            )}
            <div>
              <h1 className="text-xl font-bold">{settings?.metadata.business_name || 'Hair Styling Studio'}</h1>
              {settings?.metadata.tagline && (
                <p className="text-sm text-primary">{settings.metadata.tagline}</p>
              )}
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="hover:text-primary">Services</Link>
            <Link href="/#team" className="hover:text-primary">Team</Link>
            <Link href="/case-studies" className="hover:text-primary">Gallery</Link>
            <Link href="/#testimonials" className="hover:text-primary">Reviews</Link>
            {settings?.metadata.whatsapp_number && (
              <a
                href={`https://wa.me/${settings.metadata.whatsapp_number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(settings.metadata.booking_message || 'Hi! I would like to book an appointment for hair braiding.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-secondary rounded-full font-semibold hover:bg-primary-dark transition-colors"
              >
                Book Now
              </a>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}