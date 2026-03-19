import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Clock, 
  Users, 
  Check, 
  X,
  ArrowLeft, 
  MapPin,
  Calendar,
  Star,
  Share2,
  ChevronDown,
  ChevronUp
} from "lucide-react"

export const metadata: Metadata = {
  title: "Heritage Trail - 2 Day Historical Journey",
  description: "Explore the rich history and cultural heritage of Ghana's Central Region. Visit UNESCO World Heritage Sites, traditional villages, and historical landmarks.",
}

// Tour highlights data
const highlights = [
  {
    icon: "🏰",
    title: "Forts & Castles",
    description: "Visit Cape Coast Castle and Elmina Castle, UNESCO World Heritage Sites that stand as powerful reminders of the transatlantic slave trade."
  },
  {
    icon: "🏘️",
    title: "Traditional Villages",
    description: "Experience authentic Ghanaian culture in preserved traditional villages where ancient customs and practices are still maintained."
  },
  {
    icon: "🗿",
    title: "Historical Landmarks",
    description: "Explore significant historical sites including Fort St. Jago, Assin Manso Slave River Site, and more."
  }
]

// Day-by-day itinerary
const itinerary = [
  {
    day: 1,
    title: "Cape Coast & Elmina Exploration",
    activities: [
      "Pickup from Accra early morning",
      "Visit Cape Coast Castle - guided tour",
      "Lunch at local restaurant",
      "Explore Elmina Castle",
      "Evening check-in at hotel",
      "Dinner and cultural entertainment"
    ]
  },
  {
    day: 2,
    title: "Historical Sites & Cultural Experience",
    activities: [
      "Breakfast at hotel",
      "Visit Fort St. Jago",
      "Explore Assin Manso Slave River Site",
      "Traditional village visit",
      "Return to Accra",
      "End of tour"
    ]
  }
]

// Testimonials
const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "United Kingdom",
    rating: 5,
    text: "An eye-opening experience that brought history to life. The guides were incredibly knowledgeable and the sites were moving."
  },
  {
    name: "James Wilson",
    location: "Canada",
    rating: 5,
    text: "The Heritage Trail exceeded all expectations. Seeing these historical sites with expert commentary made it truly unforgettable."
  }
]

// Gallery images - Real images from Ghana's Central Region
const galleryImages = [
  "/images/cape-coast-castle.jpg",
  "/images/elmina-castle.jpg", 
  "/images/fort-st-jago/download (1).jpeg",
  "/images/assin-manso-slave-river-site/download (1).jpeg",
  "/images/cape-coast-castle/download (1).jpeg",
  "/images/elmina-castle/download (1).jpeg"
]

export default function HeritageTrailPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/heritage-trail.jpg"
            alt="Heritage Trail - Cape Coast Castle"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto px-4">
              <Link 
                href="/packages" 
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Packages
              </Link>
              <Badge className="bg-amber-600 hover:bg-amber-700 text-white mb-4">
                Heritage Tour
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Heritage Trail
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                2 Day Historical Journey through Ghana's UNESCO World Heritage Sites
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center text-white/90 bg-black/30 px-4 py-2 rounded-full">
                  <Clock className="mr-2 h-5 w-5" />
                  2 Days
                </div>
                <div className="flex items-center text-white/90 bg-black/30 px-4 py-2 rounded-full">
                  <MapPin className="mr-2 h-5 w-5" />
                  Central Region
                </div>
                <div className="flex items-center text-white/90 bg-black/30 px-4 py-2 rounded-full">
                  <Star className="mr-2 h-5 w-5 text-amber-400" />
                  4.9 (128 reviews)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Discover Ghana's Rich Heritage
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Immerse yourself in the powerful history of Ghana's Central Region on this 
                comprehensive 2-day heritage tour. From the imposing fortresses that line 
                the coast to the sacred rivers where enslaved Africans took their last steps 
                on African soil, this journey will leave you profoundly moved and deeply informed.
                Our expert guides bring history to life with compelling narratives and unique insights.
              </p>
            </div>
          </div>
        </section>

        {/* Tour Highlights */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Tour Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="text-center pb-2">
                    <div className="text-5xl mb-4">{highlight.icon}</div>
                    <h3 className="font-serif text-xl font-bold">{highlight.title}</h3>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Heritage Sites Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square rounded-lg overflow-hidden group"
                >
                  <Image
                    src={src}
                    alt={`Heritage site ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Duration & Schedule */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Duration */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="font-serif text-2xl font-bold flex items-center">
                    <Clock className="mr-2 h-6 w-6" />
                    Duration & Schedule
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">Tour Duration</span>
                    <span className="text-lg font-bold">2 Days / 1 Night</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">Start Time</span>
                    <span>6:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">End Time</span>
                    <span>Day 2, ~6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">Group Size</span>
                    <span>2-20 participants</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium">Language</span>
                    <span>English (other languages on request)</span>
                  </div>
                </CardContent>
              </Card>

              {/* Itinerary */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="font-serif text-2xl font-bold flex items-center">
                    <Calendar className="mr-2 h-6 w-6" />
                    Day-by-Day Itinerary
                  </h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  {itinerary.map((day) => (
                    <div key={day.day} className="border rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                          {day.day}
                        </div>
                        <h4 className="font-bold">{day.title}</h4>
                      </div>
                      <ul className="space-y-2 ml-11">
                        {day.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Pricing & Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Standard */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <Badge variant="outline" className="w-fit mx-auto mb-2">Standard</Badge>
                  <h3 className="font-serif text-2xl font-bold">Economy</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$199</span>
                    <span className="text-muted-foreground">/person</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Air-conditioned transport</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Professional guide</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Entrance fees</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Lunch (Day 1 & 2)</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <X className="h-5 w-5 mr-3" />
                    <span>Accommodation</span>
                  </div>
                </CardContent>
              </Card>

              {/* Popular */}
              <Card className="border-2 border-primary shadow-lg">
                <CardHeader className="text-center pb-4">
                  <Badge className="bg-primary w-fit mx-auto mb-2">Most Popular</Badge>
                  <h3 className="font-serif text-2xl font-bold">Standard</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$299</span>
                    <span className="text-muted-foreground">/person</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Air-conditioned transport</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Professional guide</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Entrance fees</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>All meals included</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>1-night 3-star hotel</span>
                  </div>
                </CardContent>
              </Card>

              {/* Premium */}
              <Card className="border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <Badge variant="outline" className="w-fit mx-auto mb-2">Premium</Badge>
                  <h3 className="font-serif text-2xl font-bold">Luxury</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$449</span>
                    <span className="text-muted-foreground">/person</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Luxury transport</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Expert historian guide</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>All entrance fees & donations</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>All meals + premium dining</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>1-night 5-star hotel</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              What Our Travelers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                    <div className="font-medium">
                      <p>{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold mb-8">
              Ready to Explore Ghana's Heritage?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="min-w-[160px]">
                <Link href="/book">
                  Book Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[160px]">
                <button>
                  <ChevronDown className="mr-2 h-4 w-4" />
                  Learn More
                </button>
              </Button>
              <Button asChild variant="ghost" size="lg" className="min-w-[160px]">
                <button>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </button>
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
