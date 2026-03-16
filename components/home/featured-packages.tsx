import Image from "next/image"
import Link from "next/link"
import { Clock, Users, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TourPackage {
  id: string
  name: string
  slug: string
  short_description: string
  image_url: string
  duration: string
  price: number
  max_group_size: number
  includes: string[]
}

export function FeaturedPackages({ packages }: { packages: TourPackage[] }) {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium mb-2 tracking-wide uppercase text-sm">
            Curated Experiences
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tour Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully crafted tour packages designed to give you 
            the most memorable experiences in the Central Region.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.id} 
              className={`overflow-hidden border-0 shadow-lg ${
                index === 1 ? 'lg:scale-105 lg:shadow-2xl relative z-10' : ''
              }`}
            >
              {index === 1 && (
                <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={pkg.image_url}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
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

                <div className="space-y-2">
                  <p className="text-xs font-medium text-foreground">Includes:</p>
                  <ul className="grid grid-cols-2 gap-1">
                    {pkg.includes?.slice(0, 4).map((item, i) => (
                      <li key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Check className="h-3 w-3 text-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Starting from</p>
                  <p className="text-2xl font-bold text-primary">
                    GHS {pkg.price?.toFixed(0)}
                  </p>
                </div>
                <Button asChild>
                  <Link href={`/packages/${pkg.slug}`}>
                    Book Now
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link href="/packages">
              View All Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
