import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  comment: string
}

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2 tracking-wide uppercase text-sm">
            What Our Guests Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Traveler Reviews
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Hear from visitors who have experienced the magic of Ghana&apos;s Central Region with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-primary-foreground/10 border-0 backdrop-blur">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? 'text-accent fill-accent'
                          : 'text-primary-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
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
  )
}
