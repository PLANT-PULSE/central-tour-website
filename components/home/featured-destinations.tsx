import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Destination {
  id: string
  name: string
  slug: string
  location: string
  short_description: string
  image_url: string
  category: string
  entry_fee: number
  opening_hours: string
}

export function FeaturedDestinations({ destinations }: { destinations: Destination[] }) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
            Popular Attractions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From historic slave castles to pristine rainforests, discover the most captivating 
            destinations in Ghana&apos;s Central Region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={destination.image_url}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
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
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link href="/destinations">
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
