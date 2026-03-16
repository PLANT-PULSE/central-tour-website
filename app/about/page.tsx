import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Users, Award, Heart, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Central Region Tourism - your trusted partner for exploring Ghana's Central Region.",
}

export default async function AboutPage() {
  const supabase = await createClient()

  const { data: company } = await supabase
    .from('company_info')
    .select('*')
    .single()

  const { data: testimonials } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_featured', true)
    .limit(2)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About Us
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              {company?.tagline || 'Discover the Heart of Ghana'}
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
                  Our Story
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Your Gateway to Ghana&apos;s Central Region
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {company?.description || 'We are dedicated to showcasing the rich history, vibrant culture, and stunning natural beauty of Ghana\'s Central Region. From the powerful stories of the slave castles to the thrilling canopy walks of Kakum, we create unforgettable experiences.'}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our team of experienced local guides and tourism professionals are passionate about sharing the treasures of this remarkable region with visitors from around the world. We believe in responsible tourism that benefits local communities while providing authentic, meaningful experiences for our guests.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild>
                    <Link href="/packages">View Our Tours</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/images/hero-ghana.jpg"
                  alt="Central Region of Ghana"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-secondary font-medium mb-2 tracking-wide uppercase text-sm">
                Why Choose Us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                What Sets Us Apart
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  title: "Expert Local Guides",
                  description: "Our guides are locals who deeply understand the history, culture, and hidden gems of the region."
                },
                {
                  icon: Award,
                  title: "Curated Experiences",
                  description: "Every tour is carefully designed to provide meaningful and memorable experiences."
                },
                {
                  icon: Heart,
                  title: "Community Focus",
                  description: "We support local communities and practice responsible, sustainable tourism."
                },
                {
                  icon: MapPin,
                  title: "Local Expertise",
                  description: "Based in Cape Coast, we have unmatched knowledge of the Central Region."
                }
              ].map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
                  Our Values
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">
                  What We Stand For
                </h2>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Authenticity",
                    description: "We provide genuine, unfiltered experiences that respect and honor the true history and culture of Ghana."
                  },
                  {
                    title: "Education",
                    description: "Our tours are designed to educate and enlighten, particularly about the significant historical events that shaped this region."
                  },
                  {
                    title: "Sustainability",
                    description: "We are committed to eco-friendly practices and supporting the conservation of natural and cultural heritage sites."
                  },
                  {
                    title: "Excellence",
                    description: "We strive for the highest standards in customer service, safety, and tour quality."
                  }
                ].map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {testimonials && testimonials.length > 0 && (
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">
                  Testimonials
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold">
                  What Our Guests Say
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="bg-primary-foreground/10 border-0">
                    <CardContent className="p-6">
                      <p className="text-primary-foreground/90 mb-4 italic">
                        &ldquo;{testimonial.comment}&rdquo;
                      </p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-primary-foreground/70">{testimonial.location}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Ready to Explore Ghana?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let us help you discover the wonders of Ghana&apos;s Central Region. 
              Contact us today to start planning your unforgettable journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/book">Book a Tour</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
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
