import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-ghana.jpg"
          alt="Beautiful coastline of Ghana's Central Region"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-2xl text-background">
          <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
            Welcome to Ghana&apos;s Central Region
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
            Discover the Heart of Ghana
          </h1>
          <p className="text-lg md:text-xl text-background/90 mb-8 leading-relaxed max-w-xl">
            Explore UNESCO World Heritage Sites, walk among treetops in ancient rainforests, 
            and immerse yourself in centuries of rich history and vibrant culture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/destinations">
                Explore Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-background/30 text-background hover:bg-background/10">
              <Link href="/packages">
                <Play className="mr-2 h-5 w-5" />
                View Tour Packages
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 pt-8 border-t border-background/20 grid grid-cols-3 gap-8">
            <div>
              <p className="font-serif text-3xl md:text-4xl font-bold text-accent">2</p>
              <p className="text-sm text-background/70 mt-1">UNESCO Sites</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl font-bold text-accent">375km²</p>
              <p className="text-sm text-background/70 mt-1">Rainforest</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl font-bold text-accent">500+</p>
              <p className="text-sm text-background/70 mt-1">Years of History</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
