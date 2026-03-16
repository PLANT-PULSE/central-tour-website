import { Metadata } from "next"
import { Suspense } from "react"
import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { BookingForm } from "@/components/booking/booking-form"

export const metadata: Metadata = {
  title: "Book Your Trip",
  description: "Book your tour, transportation, or destination visit in Ghana's Central Region.",
}

async function BookingContent({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
  const params = await searchParams
  const supabase = await createClient()

  // Fetch destinations and packages for the form
  const [{ data: destinations }, { data: packages }] = await Promise.all([
    supabase.from('destinations').select('id, name, slug'),
    supabase.from('tour_packages').select('id, name, slug, price'),
  ])

  return (
    <BookingForm
      destinations={destinations || []}
      packages={packages || []}
      preselectedPackage={params?.package}
      preselectedDestination={params?.destination}
    />
  )
}

export default async function BookPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | undefined }> 
}) {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Book Your Trip
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Complete the form below to book your tour package, destination visit, 
              or transportation in Ghana&apos;s Central Region.
            </p>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Suspense fallback={<div className="text-center py-12">Loading booking form...</div>}>
              <BookingContent searchParams={searchParams} />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
