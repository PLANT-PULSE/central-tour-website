import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Tour Packages",
  description: "Choose from our carefully curated tour packages to explore Ghana's Central Region - from heritage trails to nature adventures.",
}

export default async function PackagesPage() {
  const supabase = await createClient()

  const { data: packages } = await supabase
    .from('tour_packages')
    .select('*')
    .order('is_featured', { ascending: false })

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

        {/* Packages Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {packages?.map((pkg) => (
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
