import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Ready to Explore Ghana?
        </h2>
        <p className="text-secondary-foreground/90 max-w-2xl mx-auto mb-8">
          Let us help you plan the perfect trip to Ghana&apos;s Central Region. 
          Contact us today for custom tour arrangements and group bookings.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" asChild className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
            <Link href="/contact">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
          </Button>
          <Button size="lg" asChild className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
            <a 
              href="https://wa.me/233241234567?text=Hello! I'm interested in booking a tour."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
