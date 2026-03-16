import { Metadata } from "next"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { ContactForm } from "@/components/contact/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Twitter } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Central Region Tourism. We're here to help plan your perfect trip to Ghana.",
}

export default async function ContactPage() {
  const supabase = await createClient()

  const { data: company } = await supabase
    .from('company_info')
    .select('*')
    .single()

  const socialLinks = company?.social_links as { facebook?: string; instagram?: string; twitter?: string } | null

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-secondary-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto text-lg">
              Have questions about our tours or need help planning your trip? 
              We&apos;re here to help!
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Whether you have questions about our tours, need custom arrangements, 
                    or want to learn more about visiting Ghana&apos;s Central Region, 
                    we&apos;re here to help.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground text-sm">
                        {company?.address || 'Cape Coast, Central Region, Ghana'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground text-sm">
                        {company?.phone || '+233 24 123 4567'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        {company?.email || 'info@centralregiontourism.com'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Saturday: 8:00 AM - 6:00 PM<br />
                        Sunday: 9:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <Card className="bg-[#25D366] text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Prefer WhatsApp?</h3>
                    <p className="text-white/90 text-sm mb-4">
                      Chat with us directly for quick responses to your questions.
                    </p>
                    <Button variant="secondary" asChild className="w-full">
                      <a 
                        href={`https://wa.me/${company?.whatsapp?.replace(/\D/g, '') || '233241234567'}?text=Hello! I have a question about your tours.`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialLinks?.facebook && (
                      <a 
                        href={socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                    )}
                    {socialLinks?.instagram && (
                      <a 
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                    {socialLinks?.twitter && (
                      <a 
                        href={socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h2>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl font-bold mb-4">
              Ready to Start Planning?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Browse our tour packages or book directly to begin your journey 
              to Ghana&apos;s Central Region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/packages">View Tour Packages</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/book">Book Now</Link>
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
