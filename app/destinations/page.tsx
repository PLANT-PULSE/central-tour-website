"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, ArrowRight } from "lucide-react"

// Static fallback data in case database is not configured
const staticDestinations = [
  {
    id: '1',
    name: 'Cape Coast Castle',
    slug: 'cape-coast-castle',
    location: 'Cape Coast, Central Region',
    category: 'Historical',
    is_featured: true,
    image_url: '/images/cape-coast-castle/download.jpeg',
    short_description: 'UNESCO World Heritage Site and a powerful reminder of the transatlantic slave trade.',
    opening_hours: '9:00 AM - 5:00 PM',
    entry_fee: 50.00,
  },
  {
    id: '2',
    name: 'Elmina Castle',
    slug: 'elmina-castle',
    location: 'Elmina, Central Region',
    category: 'Historical',
    is_featured: true,
    image_url: '/images/elmina-castle/images.jpeg',
    short_description: 'The oldest European building in Sub-Saharan Africa, a UNESCO World Heritage Site.',
    opening_hours: '9:00 AM - 5:00 PM',
    entry_fee: 50.00,
  },
  {
    id: '3',
    name: 'Kakum National Park',
    slug: 'kakum-national-park',
    location: 'Kakum, Central Region',
    category: 'Nature',
    is_featured: true,
    image_url: '/images/kakum/download.jpeg',
    short_description: 'Pristine tropical rainforest with the famous Canopy Walkway experience.',
    opening_hours: '8:00 AM - 4:00 PM',
    entry_fee: 60.00,
  },
  {
    id: '4',
    name: 'Hans Cottage Botel',
    slug: 'hans-cottage-botel',
    location: 'Near Kakum, Central Region',
    category: 'Accommodation',
    is_featured: false,
    image_url: '/images/hans-cottage/download (1).jpeg',
    short_description: 'Unique eco-lodge built on stilts over a crocodile-inhabited lake.',
    opening_hours: '24 hours',
    entry_fee: 30.00,
  },
  {
    id: '5',
    name: 'Assin Manso Slave River Site',
    slug: 'assin-manso-slave-river-site',
    location: 'Assin Manso, Central Region',
    category: 'Historical',
    is_featured: true,
    image_url: '/images/assin-manso-slave-river-site/download (1).jpeg',
    short_description: 'Historic slave trade memorial with the famous Slave River.',
    opening_hours: '8:00 AM - 5:00 PM',
    entry_fee: 30.00,
  },
  {
    id: '6',
    name: 'Fort St. Jago',
    slug: 'fort-st-jago',
    location: 'Elmina, Central Region',
    category: 'Historical',
    is_featured: true,
    image_url: '/images/fort-st-jago/download (1).jpeg',
    short_description: 'Historic hilltop fort with panoramic views of Elmina.',
    opening_hours: '9:00 AM - 5:00 PM',
    entry_fee: 35.00,
  },
]

interface Destination {
  id: string
  name: string
  slug: string
  location: string
  category: string
  is_featured: boolean
  image_url: string
  short_description: string
  opening_hours: string
  entry_fee: number
}

export default function DestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState("All")

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const supabase = createClient()
        const { data } = await supabase
          .from('destinations')
          .select('*')
          .order('is_featured', { ascending: false })
        
        if (data && data.length > 0) {
          setDestinations(data)
        } else {
          setDestinations(staticDestinations)
        }
      } catch (error) {
        console.log('Using static destination data')
        setDestinations(staticDestinations)
      } finally {
        setLoading(false)
      }
    }

    fetchDestinations()
  }, [])

  // Get unique categories
  const categories = Array.from(new Set(destinations.map(dest => dest.category || "Other")))

  // Filter destinations based on active filter
  const filteredDestinations = activeFilter === "All" 
    ? destinations 
    : destinations.filter(dest => dest.category === activeFilter)

  // Get the last 3 destinations
  const lastThreeDestinations = filteredDestinations.slice(-3)
  const otherDestinations = filteredDestinations.slice(0, -3)

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
        <Footer />
        <WhatsAppButton />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/cape-coast-castle.jpg"
              alt="Explore Ghana's Central Region Destinations"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/80" />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 md:mb-4">
              Explore Our Destinations
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-base md:text-lg px-4">
              Discover the rich history, vibrant culture, and stunning natural beauty 
              of Ghana's Central Region.
            </p>
          </div>
        </section>

        {/* Filter Pills */}
        <section className="py-4 md:py-8 border-b border-border sticky top-16 bg-background z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge 
                variant={activeFilter === "All" ? "default" : "outline"} 
                className="cursor-pointer hover:bg-accent text-xs md:text-sm px-3 py-1"
                onClick={() => setActiveFilter("All")}
              >
                All
              </Badge>
              {categories.map((cat) => (
                <Badge 
                  key={cat} 
                  variant={activeFilter === cat ? "default" : "outline"} 
                  className="cursor-pointer hover:bg-accent text-xs md:text-sm px-3 py-1"
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            {/* Show message if no destinations match filter */}
            {filteredDestinations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No destinations found for this category.</p>
              </div>
            ) : (
              <>
                {/* First row - destinations except last 3 */}
                {otherDestinations.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
                    {otherDestinations.map((destination) => (
                      <DestinationCard key={destination.id} destination={destination} />
                    ))}
                  </div>
                )}

                {/* Last 3 destinations - styled differently */}
                {lastThreeDestinations.length > 0 && (
                  <div>
                    <h2 className="font-serif text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center gap-2">
                      <span className="w-6 md:w-8 h-1 bg-primary rounded"></span>
                      More to Explore
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                      {lastThreeDestinations.map((destination) => (
                        <DestinationCard key={destination.id} destination={destination} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

// Destination Card Component
function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={destination.image_url}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {destination.is_featured && (
          <Badge className="absolute top-2 md:top-4 right-2 md:right-4 bg-accent text-accent-foreground text-xs">
            Featured
          </Badge>
        )}
        <Badge className="absolute top-2 md:top-4 left-2 md:left-4 bg-secondary text-secondary-foreground text-xs">
          {destination.category}
        </Badge>
      </div>
      <CardContent className="p-4 md:p-6">
        <h3 className="font-serif text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {destination.name}
        </h3>
        <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3 md:h-4 md:w-4" />
            {destination.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 md:h-4 md:w-4" />
            {destination.opening_hours}
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-3 md:mb-4 line-clamp-2">
          {destination.short_description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-primary text-sm md:text-base">
            GHS {destination.entry_fee?.toFixed(2)}
          </span>
          <Link 
            href={`/destinations/${destination.slug}`}
            className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1"
          >
            Explore
            <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
