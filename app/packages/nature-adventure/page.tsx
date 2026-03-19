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
  MessageCircle,
  ChevronDown,
  AlertTriangle,
  Mountain,
  TreePine,
  Waves
} from "lucide-react"

export const metadata: Metadata = {
  title: "Nature Adventure - 3 Day Nature Experience",
  description: "Experience the breathtaking natural beauty of Ghana's Central Region. Explore Kakum National Park, canopy walkways, and pristine rainforests.",
}

// Adventure highlights data
const highlights = [
  {
    icon: "🥾",
    title: "Hiking & Trekking",
    description: "Explore guided nature trails through ancient rainforests. Our experienced guides will lead you through diverse ecosystems teeming with wildlife."
  },
  {
    icon: "🦁",
    title: "Wildlife Safaris",
    description: "Spot rare and exotic wildlife including forest elephants, monkeys, butterflies, and over 200 bird species in their natural habitat."
  },
  {
    icon: "🛶",
    title: "River & Lake Excursions",
    description: "Paddle through serene waterways, visit crocodile habitats, and experience the peaceful lakes that dot the Central Region."
  }
]

// Day-by-day itinerary
const itinerary = [
  {
    day: 1,
    title: "Kakum National Park Arrival",
    activities: [
      "Pickup from Accra early morning",
      "Scenic drive through the Central Region",
      "Arrive at Kakum National Park",
      "Lunch at forest restaurant",
      "Afternoon canopy walkway experience",
      "Evening nature walk",
      "Dinner and overnight at eco-lodge"
    ]
  },
  {
    day: 2,
    title: "Wildlife & Adventure Activities",
    activities: [
      "Early morning bird watching tour",
      "Breakfast",
      "Guided forest hike to Rayosoa Falls",
      "Lunch by the waterfall",
      "Wildlife safari",
      "Evening cultural experience",
      "Dinner and overnight"
    ]
  },
  {
    day: 3,
    title: "Departure & Lake Excursion",
    activities: [
      "Breakfast",
      "Visit Hans Cottage Botel (crocodile lake)",
      "Optional canoe ride",
      "Lunch",
      "Return to Accra",
      "End of adventure"
    ]
  }
]

// Difficulty levels
const difficultyLevels = [
  { level: "Easy", description: "Suitable for all ages. Mostly flat terrain with some gentle slopes." },
  { level: "Moderate", description: "Requires basic fitness. Some steep sections and longer walks." },
  { level: "Challenging", description: "For experienced hikers. Steep terrain, extended treks, and physically demanding." }
]

// Safety tips
const safetyTips = [
  "Always stay with your guide during nature walks",
  "Wear comfortable hiking shoes with good grip",
  "Bring insect repellent and sunscreen",
  "Stay hydrated - carry at least 2 liters of water",
  "Do not feed or approach wildlife",
  "Follow all park regulations and instructions"
]

// Testimonials
const testimonials = [
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "The canopy walkway was absolutely terrifying but amazing! Seeing the rainforest from above was a once-in-a-lifetime experience."
  },
  {
    name: "Emma Thompson",
    location: "Australia",
    rating: 5,
    text: "Best nature experience I've ever had. The guides were incredibly knowledgeable about the wildlife and ecosystem."
  }
]

// Gallery images - Real images from Ghana's Central Region (Kakum, Hans Cottage)
const galleryImages = [
  "/images/kakum-national-park.jpg",
  "/images/nature-adventure.jpg",
  "/images/kakum/download (1).jpeg",
  "/images/hans-cottage/download (1).jpeg",
  "/images/kakum/download (2).jpeg",
  "/images/hero-ghana.jpg"
]

// Pricing packages
const pricingPackages = [
  {
    name: "Adventure Starter",
    price: "$249",
    features: [
      "Air-conditioned transport",
      "Professional naturalist guide",
      "Canopy walkway entry",
      "2 lunches",
      "Basic eco-lodge accommodation"
    ],
    notIncluded: [
      "Breakfast & dinner",
      "Personal expenses"
    ]
  },
  {
    name: "Nature Explorer",
    price: "$349",
    popular: true,
    features: [
      "Luxury air-conditioned transport",
      "Expert naturalist guide",
      "All park entrance fees",
      "All meals included",
      "Comfortable eco-lodge",
      "Canoe excursion",
      "Bird watching tour"
    ],
    notIncluded: [
      "Personal expenses"
    ]
  },
  {
    name: "Ultimate Adventure",
    price: "$499",
    features: [
      "Private 4x4 vehicle",
      "Master naturalist guide",
      "All park fees & donations",
      "Premium meals & dining",
      "Luxury eco-lodge suite",
      "Private wildlife safari",
      "Professional photography guide",
      "Souvenir pack"
    ],
    notIncluded: []
  }
]

export default function NatureAdventurePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px]">
          <Image
            src="/images/nature-adventure.jpg"
            alt="Nature Adventure - Kakum Canopy Walkway"
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
              <Badge className="bg-green-600 hover:bg-green-700 text-white mb-4">
                Nature Adventure
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Nature Adventure
              </h1>
              <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                3 Day Nature Experience in Ghana's Pristine Rainforests
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center text-white/90 bg-black/30 px-4 py-2 rounded-full">
                  <Clock className="mr-2 h-5 w-5" />
                  3 Days / 2 Nights
                </div>
                <div className="flex items-center text-white/90 bg-black/30 px-4 py-2 rounded-full">
                  <Mountain className="mr-2 h-5 w-5" />
                  Moderate Difficulty
                </div>
                <div className="flex items-center text-white/90 bg-black/30 px-4 py-2 rounded-full">
                  <Star className="mr-2 h-5 w-5 text-amber-400" />
                  4.8 (96 reviews)
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
                Experience Ghana's Natural Wonders
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Immerse yourself in the untouched beauty of Ghana's Central Region. From the 
                world-famous Canopy Walkway at Kakum National Park to the serene waters of 
                Hans Cottage Botel, this 3-day adventure will reconnect you with nature like 
                never before. Spot exotic wildlife, trek through ancient rainforests, and create 
                memories that will last a lifetime.
              </p>
            </div>
          </div>
        </section>

        {/* Adventure Highlights */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Adventure Highlights
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
              Adventure Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((src, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square rounded-lg overflow-hidden group"
                >
                  <Image
                    src={src}
                    alt={`Nature adventure ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Duration, Difficulty & Safety */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Duration & Schedule */}
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
                    <span className="text-lg font-bold">3 Days / 2 Nights</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">Start Time</span>
                    <span>6:00 AM Day 1</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="font-medium">End Time</span>
                    <span>Day 3, ~5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium">Group Size</span>
                    <span>2-15 participants</span>
                  </div>
                </CardContent>
              </Card>

              {/* Difficulty Level */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="font-serif text-2xl font-bold flex items-center">
                    <Mountain className="mr-2 h-6 w-6" />
                    Difficulty Level
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {difficultyLevels.map((item, index) => (
                    <div key={index} className="border-b pb-3 last:border-0">
                      <p className="font-bold">{item.level}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Safety Tips */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="font-serif text-2xl font-bold flex items-center">
                    <AlertTriangle className="mr-2 h-6 w-6" />
                    Safety Tips
                  </h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {safetyTips.map((tip, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Detailed Itinerary
            </h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {itinerary.map((day) => (
                <Card key={day.day} className="border-0 shadow-lg">
                  <CardHeader className="bg-muted/30">
                    <div className="flex items-center">
                      <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        {day.day}
                      </div>
                      <h3 className="font-serif text-xl font-bold">{day.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {day.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Adventure Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPackages.map((pkg, index) => (
                <Card key={index} className={`border-0 shadow-lg ${pkg.popular ? 'border-2 border-primary' : ''}`}>
                  <CardHeader className="text-center pb-4">
                    {pkg.popular && (
                      <Badge className="bg-primary w-fit mx-auto mb-2">Most Popular</Badge>
                    )}
                    <h3 className="font-serif text-2xl font-bold">{pkg.name}</h3>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground">/person</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {pkg.notIncluded.map((item, idx) => (
                      <div key={idx} className="flex items-center text-muted-foreground">
                        <X className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>{item}</span>
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
              What Adventurers Say
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
              Ready for Your Nature Adventure?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="min-w-[180px] bg-green-600 hover:bg-green-700">
                <Link href="/book">
                  Book Adventure
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-w-[180px]">
                <button>
                  <ChevronDown className="mr-2 h-4 w-4" />
                  View Full Itinerary
                </button>
              </Button>
              <Button asChild variant="ghost" size="lg" className="min-w-[180px]">
                <Link href="/contact">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Ask a Question
                </Link>
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
