"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const destinations = [
  { title: "Cape Coast Castle", href: "/destinations/cape-coast-castle", description: "UNESCO World Heritage Site" },
  { title: "Elmina Castle", href: "/destinations/elmina-castle", description: "Oldest European building in Sub-Saharan Africa" },
  { title: "Kakum National Park", href: "/destinations/kakum-national-park", description: "Famous canopy walkway experience" },
  { title: "Hans Cottage Botel", href: "/destinations/hans-cottage-botel", description: "Unique eco-lodge over crocodile lake" },
  { title: "Assin Manso Slave River Site", href: "/destinations/assin-manso-slave-river-site", description: "Historic slave trade memorial" },
  { title: "Fort St. Jago", href: "/destinations/fort-st-jago", description: "Panoramic views of Elmina coast" },
  { title: "All Destinations", href: "/destinations", description: "Explore all our destinations" },
]

const tours = [
  { title: "Heritage Trail", href: "/packages/heritage-trail", description: "2-day historical journey" },
  { title: "Nature Adventure", href: "/packages/nature-adventure", description: "1-day nature experience" },
  { title: "Complete Tour", href: "/packages/complete-central", description: "3-day comprehensive tour" },
  { title: "All Packages", href: "/packages", description: "View all tour packages" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-primary">Central Region</span>
            <span className="text-xs text-muted-foreground -mt-1">Tourism Ghana</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {destinations.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tour Packages</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {tours.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/festivals" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  Festivals
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/map" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  Map
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Contact
          </Link>
          <Button asChild>
            <Link href="/book">
              <Phone className="mr-2 h-4 w-4" />
              Book Now
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/destinations" className="py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
              Destinations
            </Link>
            <Link href="/packages" className="py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
              Tour Packages
            </Link>
            <Link href="/festivals" className="py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
              Festivals
            </Link>
            <Link href="/blog" className="py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/map" className="py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
              Map
            </Link>
            <Link href="/about" className="py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="py-2 text-foreground font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Button asChild className="mt-2">
              <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                <Phone className="mr-2 h-4 w-4" />
                Book Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function ListItem({ className, title, children, href, ...props }: React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
