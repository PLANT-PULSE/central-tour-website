"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, X, ExternalLink } from "lucide-react"

interface Destination {
  id: string
  name: string
  slug: string
  location: string
  short_description: string
  latitude: number | null
  longitude: number | null
  category: string
  image_url: string
}

interface InteractiveMapProps {
  destinations: Destination[]
}

export function InteractiveMap({ destinations }: InteractiveMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Check if we're on the client
    if (typeof window === 'undefined') return

    // Dynamically import Leaflet
    const loadMap = async () => {
      const L = (await import('leaflet')).default
      await import('leaflet/dist/leaflet.css')

      if (!mapRef.current) return

      // Clear existing map if any
      mapRef.current.innerHTML = ''

      // Create map centered on Cape Coast
      const map = L.map(mapRef.current).setView([5.15, -1.30], 10)

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      // Custom marker icon
      const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: #1a5f7a; width: 30px; height: 30px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg); border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30]
      })

      // Add markers for each destination
      destinations.forEach((dest) => {
        if (dest.latitude && dest.longitude) {
          const marker = L.marker([dest.latitude, dest.longitude], { icon: customIcon })
            .addTo(map)
            .on('click', () => {
              setSelectedDestination(dest)
            })

          // Add tooltip with destination name
          marker.bindTooltip(dest.name, {
            permanent: false,
            direction: 'top',
            offset: [0, -30]
          })
        }
      })

      setMapLoaded(true)
    }

    loadMap()
  }, [destinations])

  return (
    <div className="relative h-full w-full">
      {/* Map Container */}
      <div ref={mapRef} className="h-full w-full z-0" />

      {/* Loading State */}
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-primary animate-bounce mx-auto mb-4" />
            <p className="text-muted-foreground">Loading map...</p>
          </div>
        </div>
      )}

      {/* Destination Info Card */}
      {selectedDestination && (
        <Card className="absolute top-4 left-4 w-80 z-[1000] shadow-xl">
          <CardContent className="p-0">
            <div className="relative">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image
                  src={selectedDestination.image_url}
                  alt={selectedDestination.name}
                  fill
                  className="object-cover"
                />
              </div>
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-2 right-2 w-8 h-8 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <Badge className="absolute bottom-2 left-2 bg-secondary text-secondary-foreground">
                {selectedDestination.category}
              </Badge>
            </div>
            <div className="p-4">
              <h3 className="font-serif text-lg font-bold mb-1">
                {selectedDestination.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {selectedDestination.location}
              </p>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {selectedDestination.short_description}
              </p>
              <Button asChild className="w-full">
                <Link href={`/destinations/${selectedDestination.slug}`}>
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 z-[1000]">
        <Card className="shadow-lg">
          <CardContent className="p-3">
            <p className="text-xs font-medium mb-2">Destinations</p>
            <div className="space-y-1">
              {['Historical', 'Nature', 'Cultural'].map((category) => (
                <div key={category} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  {category}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
