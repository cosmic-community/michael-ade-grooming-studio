# Marcus J. Grooming Studio

![Marcus J. Grooming Studio](https://imgix.cosmicjs.com/cdfbd8c0-bca7-11f0-8893-ab943f57b671-photo-1585747860715-2ba37e788b70-1762608935398.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional website for Marcus J. Grooming Studio - a premium men's grooming salon. Built with Next.js 16 and powered by Cosmic CMS, featuring WhatsApp appointment booking, service showcases, team profiles, client testimonials, and transformation case studies.

## ✨ Features

- **WhatsApp Booking Integration** - Direct appointment scheduling through WhatsApp with pre-filled messages
- **Dynamic Service Pages** - Showcase services with detailed descriptions, pricing, and professional imagery
- **Team Member Profiles** - Highlight staff expertise with photos, bios, and specialties
- **Client Testimonials** - Display authentic reviews with star ratings and service associations
- **Before/After Case Studies** - Transformation galleries showing professional results
- **Responsive Design** - Optimized experience across all devices
- **Dark Theme UI** - Sophisticated design with warm accent colors
- **SEO Optimized** - Proper meta tags and structured data for search engines
- **Server-Side Rendering** - Fast initial page loads with Next.js 16 App Router

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=690f4641fb7423bbdde4e565&clone_repository=690f483afb7423bbdde4e5a6)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies for a hair dressing company owned by a man. it should be able to allow customers to book appointment through whatsapp into the owners DM"

### Code Generation Prompt

> Based on the content model I created for "Create a content model for a company website with services, team members, testimonials, and case studies for a hair dressing company owned by a man. it should be able to allow customers to book appointment through whatsapp into the owners DM", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **Cosmic SDK** - Official JavaScript SDK for Cosmic API
- **React** - UI component library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account with a bucket containing the grooming studio content

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd marcus-grooming-studio
```

2. **Install dependencies**
```bash
bun install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. **Run the development server**
```bash
bun run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Cosmic SDK Examples

### Fetching Services

```typescript
import { cosmic } from '@/lib/cosmic'

export async function getServices() {
  try {
    const { objects: services } = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return services as Service[]
  } catch (error) {
    if (error.status === 404) return []
    throw new Error('Failed to fetch services')
  }
}
```

### Fetching Team Members

```typescript
export async function getTeamMembers() {
  try {
    const { objects: members } = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return members as TeamMember[]
  } catch (error) {
    if (error.status === 404) return []
    throw new Error('Failed to fetch team members')
  }
}
```

### Fetching Case Studies with Related Services

```typescript
export async function getCaseStudies() {
  try {
    const { objects: studies } = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1) // Includes related services data
    
    return studies as CaseStudy[]
  } catch (error) {
    if (error.status === 404) return []
    throw new Error('Failed to fetch case studies')
  }
}
```

## 🎨 Cosmic CMS Integration

This application uses Cosmic CMS for all content management. The content model includes:

### Object Types

1. **Services** - Grooming services with pricing and descriptions
   - Service name, description, price, duration
   - Service images optimized with imgix

2. **Team Members** - Staff profiles and expertise
   - Name, role, bio, specialties, years of experience
   - Professional photos

3. **Testimonials** - Client reviews and ratings
   - Client name, review text, star rating
   - Associated service and date

4. **Case Studies** - Transformation showcases
   - Project title, client name, description
   - Before/after photos, gallery images
   - Related services used

5. **Site Settings** - Business information (singleton)
   - Business name, tagline, about text
   - Contact details, social media links
   - WhatsApp number for bookings
   - Business hours and address

### WhatsApp Booking Integration

The application includes a WhatsApp booking button that:
- Pre-fills a message from Site Settings
- Opens WhatsApp with the business phone number
- Works on both mobile and desktop
- Provides seamless appointment scheduling

## 📱 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables

Make sure to set these in your deployment platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions about Cosmic CMS, visit [Cosmic Docs](https://www.cosmicjs.com/docs)

For Next.js documentation, visit [Next.js Docs](https://nextjs.org/docs)

<!-- README_END -->