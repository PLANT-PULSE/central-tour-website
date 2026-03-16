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
  Clock, 
  Users, 
  Check, 
  X,
  ArrowLeft, 
  Calendar,
  MessageCircle
} from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: pkg } = await supabase
    .from('tour_packages')
    .select('name, short_description')
    .eq('slug', slug)
    .single()

  if (!pkg) {
    return { title: "Package Not Found" }
  }

  return {
    title: pkg.name,
    description: pkg.short_description,
  }
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: pkg } = await supabase
    .from('tour_packages')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!pkg) {
    notFound()
  }

  const itinerary = pkg.itinerary as Array<{
    day: number
    title: string
    activities: string[]
  }> | null

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src={pkg.image_url}
            alt={pkg.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link 
                href="/packages" 
                className="inline-flex items-center text-background/80 hover:text-background mb-4 text-sm"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Packages
              </Link>
              {pkg.is_featured && (
                <Badge className="bg-accent text-accent-foreground mb-3">
                  Most Popular
                </Badge>
              )}
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-background mb-4">
                {pkg.name}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-background/90">
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {pkg.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Max {pkg.max_group_size} people
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
                  <h2 className="font-serif text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Itinerary */}
                {itinerary && itinerary.length > 0 && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-6">Itinerary</h2>
                    <div className="space-y-4">
                      {itinerary.map((day, index) => (
                        <Card key={index} className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className="bg-primary text-primary-foreground px-6 py-3">
                              <h3 className="font-semibold">Day {day.day}: {day.title}</h3>
                            </div>
                            <div className="p-6">
                              <ul className="space-y-2">
                                {day.activities.map((activity, i) => (
                                  <li key={i} className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                                      <span className="text-xs font-medium text-secondary">{i + 1}</span>
                                    </div>
                                    <span className="text-muted-foreground">{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* What's Included / Excluded */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h2 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                      <Check className="h-5 w-5 text-secondary" />
                      What&apos;s Included
                    </h2>
                    <ul className="space-y-2">
                      {pkg.includes?.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <Check className="h-4 w-4 text-secondary shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                      <X className="h-5 w-5 text-destructive" />
                      What&apos;s Not Included
                    </h2>
                    <ul className="space-y-2">
                      {pkg.excludes?.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-muted-foreground">
                          <X className="h-4 w-4 text-destructive shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Booking Card */}
                <Card className="sticky top-24 shadow-lg">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-4xl font-bold text-primary">
                        GHS {pkg.price?.toFixed(0)}
                      </p>
                      <p className="text-sm text-muted-foreground">per person</p>
                    </div>

                    <div className="space-y-3 text-sm border-t border-border pt-4">
                      <div className="flex items-center gap-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Duration: {pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>Max Group: {pkg.max_group_size} people</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Available: Year-round</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full" size="lg" asChild>
                        <Link href={`/book?package=${pkg.slug}`}>
                          Book This Package
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" size="lg" asChild>
                        <a 
                          href={`https://wa.me/233241234567?text=Hi! I'm interested in the ${pkg.name} package.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Ask Questions
                        </a>
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      Free cancellation up to 48 hours before
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
