'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createClient } from '@/lib/supabase/client';
import { Festival, FESTIVALS_DATA } from '@/lib/festivals-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';
import { Calendar as CalendarIcon, Users, Mail, MapPin, Loader2, CheckCircle2 } from 'lucide-react';
import { format } from 'date-fns';

const visitFormSchema = z.object({
  festival_id: z.string().min(1, 'Please select a festival'),
  arrival_date: z.string().min(1, 'Please select an arrival date'),
  number_of_visitors: z.number().min(1, 'At least 1 visitor').max(50, 'Maximum 50 visitors'),
  contact_email: z.string().email('Please enter a valid email address'),
});

type VisitFormData = z.infer<typeof visitFormSchema>;

interface FestivalVisitFormProps {
  selectedFestival?: Festival;
  onClose?: () => void;
}

export function FestivalVisitForm({ selectedFestival, onClose }: FestivalVisitFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [arrivalDate, setArrivalDate] = useState<Date | undefined>(undefined);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<VisitFormData>({
    resolver: zodResolver(visitFormSchema),
    defaultValues: {
      festival_id: selectedFestival?.id || '',
      number_of_visitors: 1,
      contact_email: '',
    },
  });

  const selectedFestivalId = watch('festival_id');

  // Set default festival if provided
  if (selectedFestival && !selectedFestivalId) {
    setValue('festival_id', selectedFestival.id || '');
  }

  const onSubmit = async (data: VisitFormData) => {
    setIsSubmitting(true);
    
    try {
      const supabase = await createClient();
      
      const selectedFest = FESTIVALS_DATA.find(f => f.id === data.festival_id);
      
      const { error } = await supabase
        .from('festival_visits')
        .insert({
          festival_id: data.festival_id,
          festival_name: selectedFest?.name || '',
          arrival_date: data.arrival_date,
          number_of_visitors: data.number_of_visitors,
          contact_email: data.contact_email,
        });

      if (error) {
        console.error('Error saving visit:', error);
        toast.error('Failed to submit visit request. Please try again.');
        return;
      }

      setIsSuccess(true);
      toast.success('Visit request submitted successfully! We will contact you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="font-serif text-2xl font-bold mb-2">Visit Request Submitted!</h3>
          <p className="text-muted-foreground mb-4">
            Thank you for your interest in attending our festivals. Our team will contact you at your email address to confirm your visit and provide more details.
          </p>
          <Button onClick={() => {
            setIsSuccess(false);
            onClose?.();
          }}>
            Close
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="font-serif text-2xl">Schedule Your Visit</CardTitle>
        <p className="text-muted-foreground">
          Plan your trip to experience the vibrant cultural festivals of Ghana's Central Region.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Festival Selection */}
          <div className="space-y-2">
            <Label htmlFor="festival_id">Select Festival</Label>
            <Select
              value={selectedFestivalId}
              onValueChange={(value) => setValue('festival_id', value)}
            >
              <SelectTrigger id="festival_id" className={errors.festival_id ? 'border-red-500' : ''}>
                <SelectValue placeholder="Choose a festival" />
              </SelectTrigger>
              <SelectContent>
                {FESTIVALS_DATA.map((festival) => (
                  <SelectItem key={festival.id} value={festival.id || ''}>
                    {festival.name} - {festival.location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.festival_id && (
              <p className="text-sm text-red-500">{errors.festival_id.message}</p>
            )}
          </div>

          {/* Arrival Date */}
          <div className="space-y-2">
            <Label>Arrival Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`w-full justify-start text-left font-normal ${
                    !arrivalDate ? 'text-muted-foreground' : ''
                  } ${errors.arrival_date ? 'border-red-500' : ''}`}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {arrivalDate ? format(arrivalDate, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={arrivalDate}
                  onSelect={(date) => {
                    setArrivalDate(date);
                    if (date) {
                      setValue('arrival_date', format(date, 'yyyy-MM-dd'));
                    }
                  }}
                  disabled={(date) => date < new Date()}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <input type="hidden" {...register('arrival_date')} />
            {errors.arrival_date && (
              <p className="text-sm text-red-500">{errors.arrival_date.message}</p>
            )}
          </div>

          {/* Number of Visitors */}
          <div className="space-y-2">
            <Label htmlFor="number_of_visitors">Number of Visitors</Label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="number_of_visitors"
                  type="number"
                  min={1}
                  max={50}
                  className="pl-10"
                  {...register('number_of_visitors', { valueAsNumber: true })}
                />
              </div>
            </div>
            {errors.number_of_visitors && (
              <p className="text-sm text-red-500">{errors.number_of_visitors.message}</p>
            )}
          </div>

          {/* Contact Email */}
          <div className="space-y-2">
            <Label htmlFor="contact_email">Contact Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="contact_email"
                type="email"
                placeholder="your@email.com"
                className={`pl-10 ${errors.contact_email ? 'border-red-500' : ''}`}
                {...register('contact_email')}
              />
            </div>
            {errors.contact_email && (
              <p className="text-sm text-red-500">{errors.contact_email.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Visit Request'
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to receive communications about your visit.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
