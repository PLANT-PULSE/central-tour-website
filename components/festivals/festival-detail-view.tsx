'use client';

import { Festival, getDaysUntilNextFestival } from '@/lib/festivals-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FestivalGallery } from './festival-gallery';
import { FestivalVisitForm } from './festival-visit-form';
import { Calendar, MapPin, Users, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface FestivalDetailViewProps {
  festival: Festival;
  onBack?: () => void;
  onScheduleVisit?: (festival: Festival) => void;
}

export function FestivalDetailView({ festival, onBack, onScheduleVisit }: FestivalDetailViewProps) {
  const daysUntil = getDaysUntilNextFestival(festival.festival_date);

  const googleMapsUrl = festival.latitude && festival.longitude 
    ? `https://www.google.com/maps/search/?api=1&query=${festival.latitude},${festival.longitude}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(festival.location + ', Central Region, Ghana')}`;

  return (
    <div className="space-y-8">
      {/* Back Button */}
      {onBack && (
        <Button
          variant="ghost"
          onClick={onBack}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Festivals
        </Button>
      )}

      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={festival.image_url}
          alt={festival.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <Badge className="bg-secondary text-secondary-foreground mb-3">
            {festival.month}
          </Badge>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
            {festival.name}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {festival.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {festival.festival_date}
            </span>
            {festival.people && (
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {festival.people}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Countdown Banner */}
      {daysUntil >= 0 && (
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Next Celebration</p>
                  <p className="text-sm text-muted-foreground">
                    {daysUntil === 0 
                      ? 'Today!' 
                      : daysUntil === 1 
                        ? 'Tomorrow!' 
                        : `In ${daysUntil} days`}
                  </p>
                </div>
              </div>
              <Button onClick={() => onScheduleVisit?.(festival)}>
                Schedule a Visit
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Content Tabs */}
      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="visit">Visit</TabsTrigger>
        </TabsList>

        {/* About Tab */}
        <TabsContent value="about" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* History */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-serif text-2xl font-bold mb-4">Cultural History</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {festival.history || festival.description}
                  </p>
                </CardContent>
              </Card>

              {/* Location */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-serif text-2xl font-bold mb-4">Location</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">{festival.location}</p>
                        <p className="text-sm text-muted-foreground">Central Region, Ghana</p>
                      </div>
                    </div>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View on Google Maps
                    </a>
                    
                    {/* Embedded Map */}
                    {festival.latitude && festival.longitude && (
                      <div className="mt-4 rounded-lg overflow-hidden h-[200px] bg-muted">
                        <iframe
                          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d${festival.longitude}!3d${festival.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!2s${festival.latitude}%2C${festival.longitude}!3s${encodeURIComponent(festival.location + ', Central Region, Ghana')}!5e0!3m2!1sen!2sgh!4v1600000000000!5m2!1sen!2sgh`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Map of ${festival.location}`}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Quick Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Date</p>
                        <p className="font-medium">{festival.festival_date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{festival.location}</p>
                      </div>
                    </div>
                    {festival.people && (
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Celebrated By</p>
                          <p className="font-medium">{festival.people}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Highlights */}
              {festival.highlights && festival.highlights.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Highlights</h3>
                    <div className="flex flex-wrap gap-2">
                      {festival.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        {/* Gallery Tab */}
        <TabsContent value="gallery" className="mt-6">
          <FestivalGallery festival={festival} />
        </TabsContent>

        {/* Visit Tab */}
        <TabsContent value="visit" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-4">Plan Your Visit</h2>
              <p className="text-muted-foreground mb-6">
                Experience the vibrant culture and traditions of Ghana's Central Region by attending {festival.name}. 
                Fill out the form to schedule your visit and our team will help you plan an unforgettable experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Select Your Festival</p>
                    <p className="text-sm text-muted-foreground">Choose {festival.name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Choose Your Dates</p>
                    <p className="text-sm text-muted-foreground">Select when you want to arrive</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Get Confirmation</p>
                    <p className="text-sm text-muted-foreground">We'll contact you with details</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <FestivalVisitForm selectedFestival={festival} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
