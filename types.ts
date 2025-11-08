// Cosmic object types for Hair Braiding & Styling Studio

interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    description: string;
    price: string;
    duration?: string;
    service_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name: string;
    role: string;
    bio: string;
    specialties?: string;
    years_experience?: number;
    photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    review: string;
    rating: {
      key: string;
      value: string;
    };
    service_received?: Service;
    date?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title: string;
    client_name?: string;
    description: string;
    services_used?: Service[];
    before_photo?: {
      url: string;
      imgix_url: string;
    };
    after_photo?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    date_completed?: string;
  };
}

export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    business_name: string;
    tagline?: string;
    about?: string;
    whatsapp_number: string;
    booking_message?: string;
    phone_number?: string;
    email?: string;
    address?: string;
    business_hours?: string;
    facebook_url?: string;
    instagram_url?: string;
    logo?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}