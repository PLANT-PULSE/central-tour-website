"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Spinner } from "@/components/ui/spinner"
import { Check, MapPin, Package, Bus, Calendar, Users, Phone, Mail, User } from "lucide-react"

interface BookingFormProps {
  destinations: Array<{ id: string; name: string; slug: string }>
  packages: Array<{ id: string; name: string; slug: string; price: number }>
  preselectedPackage?: string
  preselectedDestination?: string
}

export function BookingForm({ 
  destinations, 
  packages, 
  preselectedPackage, 
  preselectedDestination 
}: BookingFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [bookingType, setBookingType] = useState<string>(
    preselectedPackage ? 'package' : preselectedDestination ? 'destination' : 'package'
  )
  
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    travelDate: '',
    numberOfPeople: '1',
    packageId: packages.find(p => p.slug === preselectedPackage)?.id || '',
    destinationId: destinations.find(d => d.slug === preselectedDestination)?.id || '',
    pickupLocation: '',
    specialRequests: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const supabase = createClient()
      
      const bookingData = {
        booking_type: bookingType,
        customer_name: formData.customerName,
        customer_email: formData.customerEmail,
        customer_phone: formData.customerPhone,
        travel_date: formData.travelDate,
        number_of_people: parseInt(formData.numberOfPeople),
        pickup_location: formData.pickupLocation || null,
        special_requests: formData.specialRequests || null,
        package_id: bookingType === 'package' ? formData.packageId : null,
        destination_id: bookingType === 'destination' ? formData.destinationId : null,
        status: 'pending',
      }

      const { error } = await supabase
        .from('bookings')
        .insert(bookingData)

      if (error) throw error

      setSuccess(true)
    } catch (error) {
      console.error('Booking error:', error)
      alert('There was an error processing your booking. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="py-16 text-center">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-secondary-foreground" />
          </div>
          <h2 className="font-serif text-2xl font-bold mb-4">Booking Submitted!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for your booking request. We&apos;ll review your details and contact you 
            within 24 hours to confirm your reservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => router.push('/')}>
              Return Home
            </Button>
            <Button variant="outline" asChild>
              <a 
                href="https://wa.me/233241234567?text=Hi! I just submitted a booking and wanted to follow up."
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Booking Type Selection */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              What would you like to book?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup 
              value={bookingType} 
              onValueChange={setBookingType}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <Label 
                htmlFor="package" 
                className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                  bookingType === 'package' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                }`}
              >
                <RadioGroupItem value="package" id="package" />
                <div>
                  <p className="font-medium">Tour Package</p>
                  <p className="text-sm text-muted-foreground">Multi-day curated tours</p>
                </div>
              </Label>
              <Label 
                htmlFor="destination" 
                className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                  bookingType === 'destination' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                }`}
              >
                <RadioGroupItem value="destination" id="destination" />
                <div>
                  <p className="font-medium">Destination Visit</p>
                  <p className="text-sm text-muted-foreground">Single location trip</p>
                </div>
              </Label>
              <Label 
                htmlFor="transport" 
                className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                  bookingType === 'transport' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                }`}
              >
                <RadioGroupItem value="transport" id="transport" />
                <div>
                  <p className="font-medium">Transportation Only</p>
                  <p className="text-sm text-muted-foreground">Private vehicle hire</p>
                </div>
              </Label>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Selection Based on Type */}
        {bookingType === 'package' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                Select Tour Package
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select 
                value={formData.packageId} 
                onValueChange={(value) => setFormData({ ...formData, packageId: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a tour package" />
                </SelectTrigger>
                <SelectContent>
                  {packages.map((pkg) => (
                    <SelectItem key={pkg.id} value={pkg.id}>
                      {pkg.name} - GHS {pkg.price?.toFixed(0)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        )}

        {bookingType === 'destination' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Select Destination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select 
                value={formData.destinationId} 
                onValueChange={(value) => setFormData({ ...formData, destinationId: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a destination" />
                </SelectTrigger>
                <SelectContent>
                  {destinations.map((dest) => (
                    <SelectItem key={dest.id} value={dest.id}>
                      {dest.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        )}

        {bookingType === 'transport' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bus className="h-5 w-5 text-primary" />
                Transportation Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="pickupLocation">Pickup Location *</Label>
                <Input
                  id="pickupLocation"
                  placeholder="e.g., Accra, Kotoka Airport"
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                  required={bookingType === 'transport'}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Please describe where you&apos;d like to be picked up and dropped off. 
                Our team will contact you to confirm details.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Travel Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Travel Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="travelDate">Travel Date *</Label>
              <Input
                id="travelDate"
                type="date"
                value={formData.travelDate}
                onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <Label htmlFor="numberOfPeople">Number of People *</Label>
              <Select 
                value={formData.numberOfPeople} 
                onValueChange={(value) => setFormData({ ...formData, numberOfPeople: value })}
              >
                <SelectTrigger id="numberOfPeople">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '10+'].map((num) => (
                    <SelectItem key={num} value={String(num)}>
                      {num} {num === 1 ? 'person' : 'people'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="customerName">Full Name *</Label>
              <Input
                id="customerName"
                placeholder="Enter your full name"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="customerEmail">Email Address *</Label>
                <Input
                  id="customerEmail"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.customerEmail}
                  onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="customerPhone">Phone Number (with country code) *</Label>
                <Input
                  id="customerPhone"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  value={formData.customerPhone}
                  onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Special Requests */}
        <Card>
          <CardHeader>
            <CardTitle>Special Requests (Optional)</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Any special requirements, dietary restrictions, accessibility needs, or questions?"
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
              rows={4}
            />
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button type="submit" size="lg" disabled={loading} className="min-w-[200px]">
            {loading ? (
              <>
                <Spinner className="mr-2" />
                Processing...
              </>
            ) : (
              'Submit Booking Request'
            )}
          </Button>
          <Button type="button" variant="outline" size="lg" asChild>
            <a 
              href="https://wa.me/233241234567?text=Hi! I have questions about booking."
              target="_blank"
              rel="noopener noreferrer"
            >
              Need Help? Chat with Us
            </a>
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          By submitting this form, you agree to our terms and conditions. 
          Our team will contact you within 24 hours to confirm your booking.
        </p>
      </form>
    </div>
  )
}
