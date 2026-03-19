import { Metadata } from "next"
import Image from "next/image"
import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { InteractiveMap } from "@/components/map/interactive-map"

export const metadata: Metadata = {
  title: "Explore Map",
  description: "Interactive map of all destinations in Ghana's Central Region.",
}

export default async function MapPage() {
  const supabase = await createClient()

  const { data: destinations } = await supabase
    .from('destinations')
    .select('id, name, slug, location, short_description, latitude, longitude, category, image_url')

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-12">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-ghana.jpg"
              alt="Explore Ghana's Central Region Map"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              Explore the Central Region
            </h1>
            <p className="text-primary-foreground/80">
              Click on markers to discover our featured destinations
            </p>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[calc(100vh-200px)] min-h-[500px]">
          <InteractiveMap destinations={destinations || []} />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
