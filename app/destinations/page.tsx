import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore all the incredible destinations in Ghana's Central Region - from UNESCO World Heritage Sites to pristine rainforests.",
}

// Static fallback data in case database is not configured
const staticDestinations = [
  {
    id: '1',
    name: 'Cape Coast Castle',
    slug: 'cape-coast-castle',
    location: 'Cape Coast, Central Region',
    category: 'Historical',
    is_featured: true,
    image_url: '/images/cape-coast-castle.jpg',
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
    image_url: '/images/elmina-castle.jpg',
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
    image_url: '/images/kakum-national-park.jpg',
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
    image_url: '/images/kakum-national-park.jpg',
    short_description: 'Unique eco-lodge built on stilts over a crocodile-inhabited lake.',
    opening_hours: '24 hours',
    entry_fee: 30.00,
  },
]

export default async function DestinationsPage() {
  let destinations = staticDestinations
  
  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('destinations')
      .select('*')
      .order('is_featured', { ascending: false })
    
    if (data && data.length > 0) {
      destinations = data
    }
  } catch (error) {
    // Use static data if database is not available
    console.log('Using static destination data')
  }

  // Group by category
  const categories = destinations?.reduce((acc, dest) => {
    const cat = dest.category || 'Other'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(dest)
    return acc
  }, {} as Record<string, typeof destinations>)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Explore Our Destinations
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Discover the rich history, vibrant culture, and stunning natural beauty 
              of Ghana&apos;s Central Region.
            </p>
          </div>
        </section>

        {/* Filter Pills */}
        <section className="py-8 border-b border-border sticky top-16 bg-background z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="default" className="cursor-pointer">All</Badge>
              {categories && Object.keys(categories).map((cat) => (
                <Badge key={cat} variant="outline" className="cursor-pointer hover:bg-accent">
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {categories && Object.entries(categories).map(([category, dests]) => (
              <div key={category} className="mb-16 last:mb-0">
                <h2 className="font-serif text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-primary rounded"></span>
                  {category} Sites
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dests?.map((destination) => (
                    <Card key={destination.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={destination.image_url}
                          alt={destination.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {destination.is_featured && (
                          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                            Featured
                          </Badge>
                        )}
                        <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                          {destination.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {destination.name}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {destination.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {destination.opening_hours}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {destination.short_description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-primary">
                            GHS {destination.entry_fee?.toFixed(2)}
                          </span>
                          <Link 
                            href={`/destinations/${destination.slug}`}
                            className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1"
                          >
                            Explore
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
