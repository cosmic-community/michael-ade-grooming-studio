import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = parseInt(testimonial.metadata.rating.key)
  
  return (
    <div className="bg-secondary rounded-lg p-6 border border-gray-800">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-primary' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-gray-300 mb-4 italic">"{testimonial.metadata.review}"</p>
      
      <div className="border-t border-gray-800 pt-4">
        <p className="font-semibold">{testimonial.metadata.client_name}</p>
        {testimonial.metadata.service_received && (
          <p className="text-sm text-primary">
            {testimonial.metadata.service_received.metadata.service_name}
          </p>
        )}
        {testimonial.metadata.date && (
          <p className="text-xs text-gray-500 mt-1">
            {new Date(testimonial.metadata.date).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  )
}