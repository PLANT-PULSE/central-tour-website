import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Festivals",
  description: "Experience the vibrant festivals and cultural celebrations of Ghana's Central Region throughout the year.",
}

export default async function FestivalsPage() {
  const supabase = await createClient()

  const { data: festivals } = await supabase
    .from('festivals')
    .select('*')
    .order('month')

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-accent-foreground mb-4">
              Cultural Festivals
            </h1>
            <p className="text-accent-foreground/80 max-w-2xl mx-auto text-lg">
              Immerse yourself in the vibrant traditions and colorful celebrations 
              that showcase the rich cultural heritage of Ghana&apos;s Central Region.
            </p>
          </div>
        </section>

        {/* Festival Calendar */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold mb-4">Festival Calendar</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Plan your visit around these spectacular cultural events
              </p>
            </div>

            <div className="space-y-8">
              {festivals?.map((festival) => (
                <Card key={festival.id} className="overflow-hidden border-0 shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="relative aspect-video lg:aspect-auto">
                      <Image
                        src={festival.image_url || '/images/festival-placeholder.jpg'}
                        alt={festival.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                          {festival.month}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="lg:col-span-2 p-8">
                      <h3 className="font-serif text-2xl font-bold mb-3">{festival.name}</h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {festival.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {festival.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {festival.month}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {festival.description}
                      </p>

                      {festival.highlights && festival.highlights.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-sm mb-3">Highlights</h4>
                          <div className="flex flex-wrap gap-2">
                            {festival.highlights.map((highlight: string, i: number) => (
                              <span 
                                key={i} 
                                className="flex items-center gap-1 text-sm bg-muted px-3 py-1 rounded-full"
                              >
                                <Check className="h-3 w-3 text-secondary" />
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild>
                          <Link href={`/book?festival=${festival.slug}`}>
                            Plan Your Visit
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <a 
                            href={`https://wa.me/233241234567?text=Hi! I'd like to attend the ${festival.name}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get More Info
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Don&apos;t Miss These Celebrations
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Experience authentic Ghanaian culture firsthand. Let us help you plan 
              your trip to coincide with these spectacular festivals.
            </p>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
