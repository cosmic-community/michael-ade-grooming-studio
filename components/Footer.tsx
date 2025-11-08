import { getSiteSettings } from '@/lib/cosmic'
import Link from 'next/link'

export default async function Footer() {
  const settings = await getSiteSettings()
  
  if (!settings) return null
  
  return (
    <footer className="bg-secondary-light border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Business Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{settings.metadata.business_name}</h3>
            {settings.metadata.about && (
              <div 
                className="text-gray-400 text-sm mb-4"
                dangerouslySetInnerHTML={{ __html: settings.metadata.about }}
              />
            )}
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              {settings.metadata.phone_number && (
                <p>
                  <a href={`tel:${settings.metadata.phone_number}`} className="hover:text-primary">
                    {settings.metadata.phone_number}
                  </a>
                </p>
              )}
              {settings.metadata.email && (
                <p>
                  <a href={`mailto:${settings.metadata.email}`} className="hover:text-primary">
                    {settings.metadata.email}
                  </a>
                </p>
              )}
              {settings.metadata.address && (
                <p className="whitespace-pre-line">{settings.metadata.address}</p>
              )}
            </div>
          </div>
          
          {/* Hours & Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Hours</h4>
            {settings.metadata.business_hours && (
              <p className="text-gray-400 whitespace-pre-line mb-6">
                {settings.metadata.business_hours}
              </p>
            )}
            
            {(settings.metadata.facebook_url || settings.metadata.instagram_url) && (
              <div className="flex gap-4">
                {settings.metadata.facebook_url && (
                  <a
                    href={settings.metadata.facebook_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary"
                  >
                    Facebook
                  </a>
                )}
                {settings.metadata.instagram_url && (
                  <a
                    href={settings.metadata.instagram_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary"
                  >
                    Instagram
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {settings.metadata.business_name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}