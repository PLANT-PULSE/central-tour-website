"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

interface DestinationGalleryProps {
  destinationName: string
  images: string[]
}

export function DestinationGallery({ destinationName, images }: DestinationGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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

  // Ensure we have at least 6 images to display a nice grid
  const displayImages = images.length >= 6 
    ? images.slice(0, 8) 
    : [...images, ...images].slice(0, 8)

  if (!images || images.length === 0) {
    return null
  }

  return (
    <>
      <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif text-3xl font-bold">Photo Gallery</h2>
            <p className="text-muted-foreground text-sm">
              Click any image to enlarge
            </p>
          </div>
          
          {/* Masonry-style grid with varied sizes */}
          <div className={`grid grid-cols-4 grid-rows-2 gap-3 h-[500px] transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            {/* Large featured image */}
            <div 
              className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden rounded-xl group"
              onClick={() => openLightbox(0)}
            >
              <Image
                src={displayImages[0]}
                alt={`${destinationName} - Featured Image`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <ZoomIn className="text-white h-8 w-8" />
              </div>
            </div>
            
            {/* Secondary images */}
            {displayImages.slice(1, 5).map((img, index) => (
              <div 
                key={index + 1} 
                className="relative cursor-pointer overflow-hidden rounded-xl group"
                onClick={() => openLightbox(index + 1)}
              >
                <Image
                  src={img}
                  alt={`${destinationName} - Image ${index + 2}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
            
            {/* Bottom row images */}
            {displayImages.slice(5, 8).map((img, index) => (
              <div 
                key={index + 5} 
                className="relative cursor-pointer overflow-hidden rounded-xl group"
                onClick={() => openLightbox(index + 5)}
              >
                <Image
                  src={img}
                  alt={`${destinationName} - Image ${index + 6}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                {/* Show count overlay on last visible image if there are more */}
                {index === 2 && images.length > 8 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">+{images.length - 8} more</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 p-3 hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              setLightboxOpen(false)
            }}
          >
            <X className="h-8 w-8 text-white" />
          </button>
          
          {/* Previous button */}
          <button 
            className="absolute left-4 p-3 hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft className="h-10 w-10 text-white" />
          </button>
          
          {/* Next button */}
          <button 
            className="absolute right-4 p-3 hover:bg-white/10 rounded-full transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight className="h-10 w-10 text-white" />
          </button>
          
          {/* Main image */}
          <div 
            className="relative w-full max-w-5xl h-[80vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full animate-in zoom-in-95 duration-300">
              <Image
                src={images[currentImageIndex]}
                alt={`${destinationName} - Image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Image counter and navigation dots */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-4 pb-4">
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentImageIndex(index)
                    }}
                  />
                ))}
              </div>
              <p className="text-white/80 text-sm">
                {currentImageIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
