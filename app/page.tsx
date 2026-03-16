import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedDestinations } from "@/components/home/featured-destinations"
import { FeaturedPackages } from "@/components/home/featured-packages"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"

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
        <HeroSection />
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
