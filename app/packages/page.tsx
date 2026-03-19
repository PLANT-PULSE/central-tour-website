"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Check } from "lucide-react"

interface TourPackage {
  id: string
  name: string
  slug: string
  short_description: string
  description: string
  duration: string
  max_group_size: number
  price: number
  image_url: string
  is_featured: boolean
  includes: string[]
  category: string
}

// Static fallback packages
const staticPackages: TourPackage[] = [
  {
    id: '1',
    name: 'Heritage Trail',
    slug: 'heritage-trail',
    short_description: '2 Day Historical Journey through Ghana\'s UNESCO World Heritage Sites',
    description: 'Explore the rich history and cultural heritage of Ghana\'s Central Region',
    duration: '2 Days',
    max_group_size: 20,
    price: 299,
    image_url: '/images/heritage-trail.jpg',
    is_featured: true,
    includes: ['Guide', 'Transport', 'Meals', 'Entrance Fees'],
    category: 'heritage'
  },
  {
    id: '2',
    name: 'Nature Adventure',
    slug: 'nature-adventure',
    short_description: '3 Day Nature Experience in Kakum National Park and Rainforests',
    description: 'Experience the breathtaking natural beauty of Ghana\'s Central Region',
    duration: '3 Days',
    max_group_size: 15,
    price: 349,
    image_url: '/images/nature-adventure.jpg',
    is_featured: true,
    includes: ['Guide', 'Transport', 'Meals', 'Park Fees'],
    category: 'nature'
  },
  {
    id: '3',
    name: 'Complete Tour',
    slug: 'complete-tour',
    short_description: '3 Day Comprehensive Tour - Heritage, Nature & Culture',
    description: 'The ultimate Ghana experience combining all aspects of the region',
    duration: '3 Days',
    max_group_size: 20,
    price: 599,
    image_url: '/images/complete-tour.jpg',
    is_featured: true,
    includes: ['All Meals', 'Guide', 'Transport', 'Accommodation'],
    category: 'complete'
  }
]

export default function PackagesPage() {
  const [packages, setPackages] = useState<TourPackage[]>([])
  const [loading, setLoading] = useState(true)
  const [tourTypeFilter, setTourTypeFilter] = useState("all")
  const [priceFilter, setPriceFilter] = useState("all")
  const [durationFilter, setDurationFilter] = useState("all")

  useEffect(() => {
    async function fetchPackages() {
      try {
        const supabase = createClient()
        const { data } = await supabase
          .from('tour_packages')
          .select('*')
          .order('is_featured', { ascending: false })
        
        if (data && data.length > 0) {
          setPackages(data)
        } else {
          setPackages(staticPackages)
        }
      } catch (error) {
        setPackages(staticPackages)
      } finally {
        setLoading(false)
      }
    }

    fetchPackages()
  }, [])

  // Filter packages
  const filteredPackages = packages.filter(pkg => {
    // Tour type filter
    if (tourTypeFilter !== "all" && pkg.category !== tourTypeFilter) {
      return false
    }
    // Price filter
    if (priceFilter === "under-300" && pkg.price >= 300) return false
    if (priceFilter === "300-500" && (pkg.price < 300 || pkg.price > 500)) return false
    if (priceFilter === "over-500" && pkg.price <= 500) return false
    // Duration filter
    if (durationFilter === "2-days" && !pkg.duration.includes("2")) return false
    if (durationFilter === "3-days" && !pkg.duration.includes("3")) return false
    return true
  })

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
              Tour Packages
            </h1>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
              Choose from our carefully curated packages designed to give you 
              the most memorable experiences in Ghana&apos;s Central Region.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-4">
                {/* Tour Type Filter */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">Tour Type</label>
                  <select 
                    value={tourTypeFilter}
                    onChange={(e) => setTourTypeFilter(e.target.value)}
                    className="h-10 px-3 rounded-md border bg-background"
                  >
                    <option value="all">All Types</option>
                    <option value="heritage">Heritage</option>
                    <option value="nature">Nature</option>
                    <option value="complete">Complete Tour</option>
                  </select>
                </div>

                {/* Price Filter */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">Price Range</label>
                  <select 
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="h-10 px-3 rounded-md border bg-background"
                  >
                    <option value="all">All Prices</option>
                    <option value="under-300">Under GHS 300</option>
                    <option value="300-500">GHS 300 - 500</option>
                    <option value="over-500">Over GHS 500</option>
                  </select>
                </div>

                {/* Duration Filter */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">Duration</label>
                  <select 
                    value={durationFilter}
                    onChange={(e) => setDurationFilter(e.target.value)}
                    className="h-10 px-3 rounded-md border bg-background"
                  >
                    <option value="all">All Durations</option>
                    <option value="2-days">2 Days</option>
                    <option value="3-days">3 Days</option>
                  </select>
                </div>
              </div>

              <p className="text-muted-foreground">
                Showing {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : filteredPackages.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No packages match your filters.</p>
                <Button 
                  variant="link" 
                  onClick={() => {
                    setTourTypeFilter("all")
                    setPriceFilter("all")
                    setDurationFilter("all")
                  }}
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPackages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden border-0 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative aspect-square md:aspect-auto">
                      <Image
                        src={pkg.image_url}
                        alt={pkg.name}
                        fill
                        className="object-cover"
                      />
                      {pkg.is_featured && (
                        <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                          Most Popular
                        </Badge>
                      )}
                    </div>
                    <div className="p-6 flex flex-col">
                      <h2 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h2>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">
                        {pkg.short_description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {pkg.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          Max {pkg.max_group_size}
                        </span>
                      </div>

                      <div className="mb-4">
                        <p className="text-xs font-medium text-foreground mb-2">Includes:</p>
                        <div className="flex flex-wrap gap-2">
                          {pkg.includes?.slice(0, 3).map((item: string, i: number) => (
                            <span key={i} className="flex items-center gap-1 text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                              <Check className="h-3 w-3 text-secondary" />
                              {item}
                            </span>
                          ))}
                          {pkg.includes?.length > 3 && (
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                              +{pkg.includes.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                          <p className="text-xs text-muted-foreground">Starting from</p>
                          <p className="text-2xl font-bold text-primary">
                            GHS {pkg.price?.toFixed(0)}
                          </p>
                        </div>
                        <Button asChild>
                          <Link href={`/packages/${pkg.slug}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            )}
          </div>
        </section>

        {/* Custom Tours CTA */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Need a Custom Tour?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We can create personalized tour packages tailored to your interests, 
              group size, and schedule. Contact us to plan your perfect trip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://wa.me/233241234567?text=Hi! I'd like to request a custom tour package."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
