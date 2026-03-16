import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedDestinations } from "@/components/home/featured-destinations"
import { FeaturedPackages } from "@/components/home/featured-packages"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { ImageCarousel } from "@/components/image-carousel"
import { Target, Eye } from "lucide-react"

// Carousel images from the image folders
const carouselImages = [
  '/images/cape-coast-castle/download (1).jpeg',
  '/images/elmina-castle/download (1).jpeg',
  '/images/kakum/download (1).jpeg',
  '/images/hans-cottage/download (1).jpeg',
  '/images/fort-st-jago/download (1).jpeg',
  '/images/assin-manso-slave-river-site/download (1).jpeg',
]

// Mission and Vision statements
const missionStatement = "Our mission is to promote tourism in Ghana's Central Region by providing a reliable digital platform that allows visitors to discover cultural landmarks, plan memorable trips, and conveniently book transportation to the region's most iconic destinations."

const visionStatement = "To be the leading digital tourism platform in Ghana, making the Central Region the most preferred destination for cultural, historical, and eco-tourism experiences in West Africa."

export default async function HomePage() {
  const supabase = await createClient()

  // Fetch featured destinations
  const { data: destinations } = await supabase
    .from('destinations')
    .select('*')
    .eq('is_featured', true)
    .limit(3)

  // Fetch featured packages
  const { data: packages } = await supabase
    .from('tour_packages')
    .select('*')
    .eq('is_featured', true)
    .limit(3)

  // Fetch testimonials
  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_featured', true)
    .limit(3)

  return (
    <>
      <Header />
      <main>
        {/* Image Carousel - replaces Hero Section */}
        <section className="relative z-0">
          <ImageCarousel 
            images={carouselImages} 
            title="Explore Ghana's Central Region"
            autoPlay={true}
            interval={4000}
          />
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {missionStatement}
                </p>
              </div>
              
              {/* Vision */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-secondary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-secondary">Our Vision</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {visionStatement}
                </p>
              </div>
            </div>
          </div>
        </section>

        <FeaturedDestinations destinations={destinations || []} />
        <FeaturedPackages packages={packages || []} />
        <TestimonialsSection testimonials={testimonials || []} />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
