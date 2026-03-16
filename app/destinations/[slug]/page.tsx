import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { DestinationGallery } from "@/components/destination-gallery"
import { 
  MapPin, 
  Clock, 
  Calendar, 
  DollarSign, 
  Check, 
  ArrowLeft, 
  Share2,
  MessageCircle
} from "lucide-react"

// Static fallback data
const staticDestinations: Record<string, any> = {
  'cape-coast-castle': {
    id: '1',
    name: 'Cape Coast Castle',
    slug: 'cape-coast-castle',
    location: 'Cape Coast, Central Region',
    category: 'Historical',
    is_featured: true,
    image_url: '/images/cape-coast-castle.jpg',
    description: 'Cape Coast Castle is a UNESCO World Heritage Site and one of the most significant historical landmarks in West Africa. This imposing white fortress stands as a powerful reminder of the transatlantic slave trade, where millions of Africans were held before being shipped across the Atlantic. Today, it serves as a museum and memorial, offering visitors a deeply moving and educational experience.',
    history: 'Built by the Swedish Africa Company in 1653, Cape Coast Castle was later captured by the Dutch and then the British. For over 300 years, it served as a hub for the transatlantic slave trade. The castle\'s dungeons held thousands of enslaved Africans in horrific conditions before their forced journey to the Americas. In 1979, it was designated a UNESCO World Heritage Site.',
    short_description: 'UNESCO World Heritage Site and a powerful reminder of the transatlantic slave trade.',
    entry_fee: 50.00,
    opening_hours: '9:00 AM - 5:00 PM (Daily)',
    best_time_to_visit: 'November to March (dry season)',
    currency: 'GHS',
    highlights: ['UNESCO World Heritage Site', 'Museum with artifacts from the slave trade era', 'Door of No Return', 'Guided tours with local experts', 'Panoramic ocean views'],
    gallery: [
      '/images/cape-coast-castle.jpg',
      '/images/elmina-castle.jpg',
      '/images/kakum-national-park.jpg',
      '/images/hero-ghana.jpg',
    ],
  },
  'elmina-castle': {
    id: '2',
    name: 'Elmina Castle',
    slug: 'elmina-castle',
    location: 'Elmina, Central Region',
    category: 'Historical',
    is_featured: true,
    image_url: '/images/elmina-castle.jpg',
    description: 'Elmina Castle, also known as St. George Castle, is the oldest European building in existence south of the Sahara. This majestic white fortress overlooking the Atlantic Ocean is a UNESCO World Heritage Site and represents a crucial chapter in world history, particularly the transatlantic slave trade.',
    history: 'Built by the Portuguese in 1482, Elmina Castle was originally constructed for trade in gold and ivory. It later became a significant site in the slave trade under Dutch and British control. The castle has witnessed over 500 years of history and stands as a testament to the complex and often painful past of European colonialism in Africa.',
    short_description: 'The oldest European building in Sub-Saharan Africa, a UNESCO World Heritage Site.',
    entry_fee: 50.00,
    opening_hours: '9:00 AM - 5:00 PM (Daily)',
    best_time_to_visit: 'November to March (dry season)',
    currency: 'GHS',
    highlights: ['Oldest European building in Sub-Saharan Africa', 'UNESCO World Heritage Site', 'Stunning ocean views', 'Rich trading history', 'Nearby fishing harbor'],
    gallery: [
      '/images/elmina-castle.jpg',
      '/images/cape-coast-castle.jpg',
      '/images/kakum-national-park.jpg',
      '/images/hero-ghana.jpg',
    ],
  },
  'kakum-national-park': {
    id: '3',
    name: 'Kakum National Park',
    slug: 'kakum-national-park',
    location: 'Kakum, Central Region',
    category: 'Nature',
    is_featured: true,
    image_url: '/images/kakum-national-park.jpg',
    description: 'Kakum National Park is a pristine tropical rainforest covering 375 square kilometers of biodiversity. Home to the famous Canopy Walkway, this park offers visitors a unique opportunity to experience the rainforest from treetop level, walking among ancient trees at heights of up to 40 meters above the forest floor.',
    history: 'Kakum was established as a national park in 1992 to protect the remaining virgin tropical rainforest in Ghana. The park is home to over 40 species of larger mammals, 400 species of butterflies, and over 200 bird species. The iconic Canopy Walkway was constructed in 1995 with support from USAID.',
    short_description: 'Pristine tropical rainforest with the famous Canopy Walkway experience.',
    entry_fee: 60.00,
    opening_hours: '8:00 AM - 4:00 PM (Daily)',
    best_time_to_visit: 'November to February (dry season)',
    currency: 'GHS',
    highlights: ['Famous Canopy Walkway', 'Trekking through ancient rainforest', 'Wildlife spotting', 'Bird watching', 'Nature walks'],
    gallery: [
      '/images/kakum-national-park.jpg',
      '/images/cape-coast-castle.jpg',
      '/images/elmina-castle.jpg',
      '/images/hero-ghana.jpg',
    ],
  },
  'hans-cottage-botel': {
    id: '4',
    name: 'Hans Cottage Botel',
    slug: 'hans-cottage-botel',
    location: 'Near Kakum, Central Region',
    category: 'Accommodation',
    is_featured: false,
    image_url: '/images/kakum-national-park.jpg',
    description: 'Hans Cottage Botel is a unique eco-lodge built on stilts over a crocodile-inhabited lake. This distinctive accommodation offers visitors an unforgettable experience of sleeping above the water while observing crocodiles, exotic birds, and other wildlife in their natural habitat.',
    history: 'Established in the 1990s, Hans Cottage was designed as an eco-friendly destination that combines tourism with wildlife conservation. The resident crocodiles are descendants of animals that have inhabited the lake for generations, living in harmony with the lodge operations.',
    short_description: 'Unique eco-lodge built on stilts over a crocodile-inhabited lake.',
    entry_fee: 30.00,
    opening_hours: '24 hours (accommodation), Day visits: 8:00 AM - 6:00 PM',
    best_time_to_visit: 'Year-round, best November to March',
    currency: 'GHS',
    highlights: ['Unique crocodile viewing experience', 'Eco-friendly accommodation', 'Bird watching', 'Lake views', 'Restaurant on site'],
    gallery: [
      '/images/kakum-national-park.jpg',
      '/images/cape-coast-castle.jpg',
      '/images/elmina-castle.jpg',
      '/images/hero-ghana.jpg',
    ],
  },
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  
  // Try to get from database, fallback to static data
  let destination = staticDestinations[slug]
  
  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('destinations')
      .select('name, short_description')
      .eq('slug', slug)
      .single()
    
    if (data) {
      destination = { ...destination, ...data }
    }
  } catch (error) {
    // Use static data if database is not available
  }

  if (!destination) {
    return { title: "Destination Not Found" }
  }

  return {
    title: destination.name,
    description: destination.short_description,
  }
}

export default async function DestinationDetailPage({ params }: Props) {
  const { slug } = await params
  
  // Try to get from database, fallback to static data
  let destination = staticDestinations[slug]
  
  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from('destinations')
      .select('*')
      .eq('slug', slug)
      .single()
    
    if (data) {
      destination = { ...destination, ...data }
    }
  } catch (error) {
    // Use static data if database is not available
  }

  if (!destination) {
    notFound()
  }

  // Fetch activities for this destination (only if database is available)
  let activities: any[] = []
  let relatedDestinations: any[] = []
  
  try {
    const supabase = await createClient()
    const { data: dbActivities } = await supabase
      .from('activities')
      .select('*')
      .eq('destination_id', destination.id)
    
    if (dbActivities) {
      activities = dbActivities
    }
    
    // Fetch related destinations (same category)
    const { data: dbRelated } = await supabase
      .from('destinations')
      .select('*')
      .eq('category', destination.category)
      .neq('id', destination.id)
      .limit(3)
    
    if (dbRelated) {
      relatedDestinations = dbRelated
    }
  } catch (error) {
    // Use empty arrays if database is not available - related destinations will come from static data below
    // Get related destinations from static data
    const category = destination.category
    relatedDestinations = Object.values(staticDestinations)
      .filter((d: any) => d.category === category && d.slug !== destination.slug)
      .slice(0, 3)
  }

  // Default gallery images if none in database
  const defaultGallery = [
    '/images/hero-ghana.jpg',
    '/images/cape-coast-castle.jpg',
    '/images/elmina-castle.jpg',
    '/images/kakum-national-park.jpg',
  ]

  // Hero image fallback
  const heroImage = destination.image_url || defaultGallery[0]

  // Get gallery images - handle both database and static data formats
  const galleryArray = destination.gallery as unknown as string[] | undefined
  const galleryImages = galleryArray && galleryArray.length > 0 
    ? [heroImage, ...galleryArray].filter(Boolean)
    : defaultGallery

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px]">
          <Image
            src={heroImage}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link 
                href="/destinations" 
                className="inline-flex items-center text-background/80 hover:text-background mb-4 text-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Destinations
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Badge className="bg-secondary text-secondary-foreground">
                  {destination.category}
                </Badge>
                {destination.is_featured && (
                  <Badge className="bg-accent text-accent-foreground">
                    Featured
                  </Badge>
                )}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-background mb-4">
                {destination.name}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-background/90">
                <span className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {destination.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {destination.opening_hours}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <DestinationGallery 
          destinationName={destination.name}
          images={galleryImages}
        />

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4">About This Destination</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {destination.description}
                  </p>
                </div>

                {/* Highlights */}
                {destination.highlights && destination.highlights.length > 0 && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-4">Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {destination.highlights.map((highlight: string, index: number) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                          <Check className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Activities */}
                {activities && activities.length > 0 && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-4">Activities</h2>
                    <div className="space-y-4">
                      {activities.map((activity) => (
                        <Card key={activity.id}>
                          <CardContent className="p-4 flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">{activity.name}</h3>
                              <p className="text-sm text-muted-foreground">{activity.description}</p>
                              <p className="text-xs text-muted-foreground mt-1">Duration: {activity.duration}</p>
                            </div>
                            {activity.price && (
                              <span className="font-bold text-primary">
                                GHS {activity.price.toFixed(2)}
                              </span>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Booking Card */}
                <Card className="sticky top-24 shadow-lg">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Entry Fee</p>
                      <p className="text-3xl font-bold text-primary">
                        GHS {destination.entry_fee?.toFixed(2)}
                        <span className="text-sm font-normal text-muted-foreground"> / person</span>
                      </p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Hours: {destination.opening_hours}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Best Time: {destination.best_time_to_visit}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>Currency: {destination.currency}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full" size="lg" asChild>
                        <Link href={`/book?destination=${destination.slug}`}>
                          Book a Visit
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" size="lg" asChild>
                        <a 
                          href={`https://wa.me/233241234567?text=Hi! I'm interested in visiting ${destination.name}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Ask a Question
                        </a>
                      </Button>
                    </div>

                    <Button variant="ghost" className="w-full" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share This Destination
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Related Destinations */}
        {relatedDestinations && relatedDestinations.length > 0 && (
          <section className="py-16 bg-muted/50">
            <div className="container mx-auto px-4">
              <h2 className="font-serif text-2xl font-bold mb-8">Related Destinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedDestinations.map((related) => (
                  <Card key={related.id} className="group overflow-hidden border-0 shadow-lg">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={related.image_url}
                        alt={related.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-serif font-bold group-hover:text-primary transition-colors">
                        {related.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{related.location}</p>
                      <Link 
                        href={`/destinations/${related.slug}`}
                        className="text-sm font-medium text-primary mt-2 inline-block"
                      >
                        Learn More →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
