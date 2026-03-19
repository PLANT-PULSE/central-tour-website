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
  ArrowLeft, 
  MapPin,
  Calendar,
  Star,
  Download,
  ChevronDown,
  Globe,
  Heart,
  Sparkles
} from "lucide-react"

export const metadata: Metadata = {
  title: "Complete Tour - 3 Day Comprehensive Tour",
  description: "The ultimate Ghana experience! Combine heritage, nature, and local culture in one unforgettable 3-day journey through the Central Region.",
}

// Combined highlights
const highlights = [
  {
    icon: "🏰",
    category: "Heritage",
    title: "Historical Sites",
    items: ["Cape Coast Castle", "Elmina Castle", "Fort St. Jago", "Assin Manso"]
  },
  {
    icon: "🌳",
    category: "Nature",
    title: "Natural Wonders",
    items: ["Kakum Canopy Walkway", "Rayosoa Falls", "Hans Cottage Botel", "Rainforest Trails"]
  },
  {
    icon: "🎭",
    category: "Culture",
    title: "Local Experiences",
    items: ["Traditional Village Visit", "Local Cuisine", "Cultural Performance", "Market Tour"]
  }
]

// Day-by-day itinerary
const itinerary = [
  {
    day: 1,
    title: "Heritage Day - Castles & History",
    theme: "heritage",
    activities: [
      "Pickup from Accra at 6:00 AM",
      "Visit Cape Coast Castle (2 hours)",
      "Lunch at seaside restaurant",
      "Explore Elmina Castle",
      "Evening check-in at hotel in Cape Coast",
      "Dinner with cultural entertainment"
    ]
  },
  {
    day: 2,
    title: "Nature Day - Rainforest & Wildlife",
    theme: "nature",
    activities: [
      "Early breakfast",
      "Kakum National Park arrival",
      "Canopy Walkway adventure",
      "Guided rainforest hike",
      "Lunch at forest restaurant",
      "Afternoon wildlife safari",
      "Evening at eco-lodge"
    ]
  },
  {
    day: 3,
    title: "Culture Day - Village & Departure",
    theme: "culture",
    activities: [
      "Breakfast",
      "Traditional village visit",
      "Local market tour",
      "Craft shopping",
      "Lunch with local family (optional)",
      "Return to Accra",
      "Tour concludes ~6:00 PM"
    ]
  }
]

// What's included
const included = [
  "Professional licensed guides (heritage & nature)",
  "All transportation in air-conditioned vehicle",
  "All entrance fees to parks & historical sites",
  "2 nights accommodation (3-4 star hotels)",
  "All meals (6 lunches, 2 breakfasts, 2 dinners)",
  "Canopy walkway experience",
  "Village visit & cultural activities",
  "Bottled water throughout the tour",
  "Cool towel service"
]

// Not included
const notIncluded = [
  "Travel insurance",
  "Personal expenses",
  "Alcoholic beverages",
  "Gratuities for guides",
  "Airport transfers (can be arranged)"
]

// Testimonials
const testimonials = [
  {
    name: "David & Maria Santos",
    location: "Brazil",
    rating: 5,
    text: "The Complete Tour was everything we hoped for and more! We saw castles, walked through rainforests, and connected with local communities. Best vacation ever!"
  },
  {
    name: "Robert Taylor",
    location: "USA",
    rating: 5,
    text: "Three days that changed my perspective completely. The guides were knowledgeable, the accommodations were great, and every moment was perfectly organized."
  },
  {
    name: "Lisa Anderson",
    location: "New Zealand",
    rating: 5,
    text: "I've done tours all over the world, but this was hands down the best. The combination of history, nature, and culture was perfect. Can't recommend enough!"
  }
]

// Gallery images - Real images from Ghana's Central Region (diverse mix)
const galleryImages = [
  "/images/cape-coast-castle.jpg",
  "/images/kakum-national-park.jpg",
  "/images/elmina-castle.jpg",
  "/images/nature-adventure.jpg",
  "/images/heritage-trail.jpg",
  "/images/complete-tour.jpg"
]

// Pricing options
const pricingOptions = [
  {
    name: "Standard Complete",
    price: "$599",
    description: "Great value for a comprehensive experience",
    features: [
      "3-day guided tour",
      "3-star hotel accommodation",
      "All meals included",
      "All entrance fees",
      "Professional guides"
    ]
  },
  {
    name: "Premium Complete",
    price: "$799",
    popular: true,
    description: "Enhanced experience with upgraded amenities",
    features: [
      "3-day guided tour",
      "4-star hotel + eco-lodge",
      "All meals + 1 premium dinner",
      "All entrance fees",
      "Expert guides",
      "Private vehicle",
      "Welcome drink & snack pack"
    ]
  },
  {
    name: "Luxury Complete",
    price: "$1,099",
    description: "The ultimate Ghana experience",
    features: [
      "3-day private tour",
      "5-star accommodation",
      "All meals included",
      "All fees & donations",
      "Master guides",
      "Luxury vehicle",
      "Spa treatment included",
      "Personal photographer"
    ]
  }
]

export default function CompleteTourPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/complete-tour.jpg"
            alt="Complete Tour - Ghana Experience"
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
              <Badge className="bg-purple-600 hover:bg-purple-700 text-white mb-4">
                Most Popular
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Complete Tour
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                3 Day Comprehensive Tour - The Ultimate Ghana Experience
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center text-white/90 bg-black/30 px-4 py-2 rounded-full">
                  <Clock className="mr-2 h-5 w-5" />
                  3 Days / 2 Nights
                </div>
                <div className="flex items-center text-white/90 bg-black/30 px-4 py-2 rounded-full">
                  <MapPin className="mr-2 h-5 w-5" />
                  Central Region
                </div>
                <div className="flex items-center text-white/90 bg-black/30 px-4 py-2 rounded-full">
                  <Star className="mr-2 h-5 w-5 text-amber-400" />
                  4.9 (215 reviews)
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
                The Ultimate Ghana Experience
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Don't choose between history, nature, and culture – experience it ALL! Our 
                comprehensive 3-day tour combines the very best of Ghana's Central Region into 
                one seamless adventure. From the haunting beauty of UNESCO World Heritage castles 
                to the thrilling canopy walkways of Kakum, and the warm embrace of local communities –
                this is Ghana like never before.
              </p>
            </div>
          </div>
        </section>

        {/* Tour Highlights - Combined */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Tour Highlights - All In One
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader className="text-center pb-2">
                    <div className="text-4xl mb-3">{highlight.icon}</div>
                    <Badge variant="outline" className="w-fit mx-auto mb-2">
                      {highlight.category}
                    </Badge>
                    <h3 className="font-serif text-xl font-bold">{highlight.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {highlight.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
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
              Experience Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square rounded-lg overflow-hidden group"
                >
                  <Image
                    src={src}
                    alt={`Complete tour experience ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Duration & Itinerary */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
              {/* Quick Stats */}
              <Card className="border-0 shadow-lg lg:col-span-1">
                <CardHeader>
                  <h3 className="font-serif text-xl font-bold flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Tour Overview
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">3 Days / 2 Nights</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Group Size</span>
                    <span className="font-medium">2-20 People</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Meals</span>
                    <span className="font-medium">10 Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Accommodation</span>
                    <span className="font-medium">2 Nights</span>
                  </div>
                </CardContent>
              </Card>

              {/* Itinerary */}
              <div className="lg:col-span-3 space-y-6">
                {itinerary.map((day) => (
                  <Card key={day.day} className="border-0 shadow-lg overflow-hidden">
                    <CardHeader className={`${
                      day.theme === 'heritage' ? 'bg-amber-100 dark:bg-amber-900/20' :
                      day.theme === 'nature' ? 'bg-green-100 dark:bg-green-900/20' :
                      'bg-purple-100 dark:bg-purple-900/20'
                    }`}>
                      <div className="flex items-center">
                        <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          {day.day}
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-bold">{day.title}</h3>
                          <p className="text-sm text-muted-foreground capitalize">{day.theme} Focus</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {day.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-0 shadow-lg border-green-200">
                <CardHeader>
                  <h3 className="font-serif text-2xl font-bold flex items-center text-green-700">
                    <Check className="mr-2 h-6 w-6" />
                    What's Included
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {included.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg border-red-200">
                <CardHeader>
                  <h3 className="font-serif text-2xl font-bold flex items-center text-red-700">
                    <Sparkles className="mr-2 h-6 w-6" />
                    Not Included
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 text-red-500">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4">
              Complete Tour Packages
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Everything you need for the perfect Ghana experience. All packages include expert guides, 
              comfortable transport, meals, and unforgettable memories.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingOptions.map((option, index) => (
                <Card key={index} className={`border-0 shadow-lg ${option.popular ? 'border-2 border-primary transform md:-translate-y-4' : ''}`}>
                  <CardHeader className="text-center pb-4">
                    {option.popular && (
                      <Badge className="bg-primary w-fit mx-auto mb-2">Best Value</Badge>
                    )}
                    <h3 className="font-serif text-2xl font-bold">{option.name}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{option.price}</span>
                      <span className="text-muted-foreground">/person</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              What Travelers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Book Your Complete Ghana Experience
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Limited spots available! Secure your spot on the most comprehensive tour of Ghana's Central Region.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="min-w-[200px] bg-white text-primary hover:bg-white/90">
                <Link href="/book">
                  Book Complete Tour
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[200px] border-white text-white hover:bg-white/10">
                <button>
                  <Download className="mr-2 h-4 w-4" />
                  Download Brochure
                </button>
              </Button>
              <Button asChild variant="ghost" size="lg" className="min-w-[200px] text-white hover:bg-white/10">
                <button>
                  <Globe className="mr-2 h-4 w-4" />
                  View Full Gallery
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
