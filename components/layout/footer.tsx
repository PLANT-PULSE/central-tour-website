import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  destinations: [
    { name: "Cape Coast Castle", href: "/destinations/cape-coast-castle" },
    { name: "Elmina Castle", href: "/destinations/elmina-castle" },
    { name: "Kakum National Park", href: "/destinations/kakum-national-park" },
    { name: "Hans Cottage Botel", href: "/destinations/hans-cottage-botel" },
  ],
  packages: [
    { name: "Heritage Trail", href: "/packages/heritage-trail" },
    { name: "Nature Adventure", href: "/packages/nature-adventure" },
    { name: "Complete Tour", href: "/packages/complete-central" },
    { name: "Cultural Immersion", href: "/packages/cultural-immersion" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Festivals", href: "/festivals" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div>
              <h3 className="font-serif text-2xl font-bold">Central Region</h3>
              <p className="text-sm text-background/70">Tourism Ghana</p>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Your gateway to exploring the rich history, vibrant culture, and stunning natural beauty of Ghana&apos;s Central Region.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tour Packages */}
          <div>
            <h4 className="font-semibold mb-4">Tour Packages</h4>
            <ul className="space-y-2">
              {footerLinks.packages.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Cape Coast, Central Region, Ghana</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/80">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+233 24 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/80">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@centralregiontourism.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Central Region Tourism. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link href="/privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
