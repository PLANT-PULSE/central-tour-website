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

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: destination } = await supabase
    .from('destinations')
    .select('name, short_description')
    .eq('slug', slug)
    .single()

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
  const supabase = await createClient()

  const { data: destination } = await supabase
    .from('destinations')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!destination) {
    notFound()
  }

  // Fetch activities for this destination
  const { data: activities } = await supabase
    .from('activities')
    .select('*')
    .eq('destination_id', destination.id)

  // Fetch related destinations (same category)
  const { data: relatedDestinations } = await supabase
    .from('destinations')
    .select('*')
    .eq('category', destination.category)
    .neq('id', destination.id)
    .limit(3)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px]">
          <Image
            src={destination.image_url}
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
