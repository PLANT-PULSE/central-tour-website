"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface DestinationGalleryProps {
  destinationName: string
  images: string[]
}

export function DestinationGallery({ destinationName, images }: DestinationGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <>
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.slice(0, 8).map((img, index) => (
              <div 
                key={index} 
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={img}
                  alt={`${destinationName} - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="h-8 w-8" />
          </button>
          <button 
            className="absolute left-4 p-2 hover:bg-muted rounded-full"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button 
            className="absolute right-4 p-2 hover:bg-muted rounded-full"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={images[currentImageIndex]}
              alt={`${destinationName} - Image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-muted-foreground">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
