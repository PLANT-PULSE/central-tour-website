'use client';

import { useState, useEffect } from 'react';
import { Festival, getNextFestival } from '@/lib/festivals-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface FestivalCountdownProps {
  onExplore?: (festival: Festival) => void;
}

export function FestivalCountdown({ onExplore }: FestivalCountdownProps) {
  const [nextFestival, setNextFestival] = useState<{ festival: Festival; daysUntil: number } | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get next festival on mount
    const next = getNextFestival();
    setNextFestival(next);
  }, []);

  useEffect(() => {
    if (!nextFestival || !mounted) return;

    const calculateTimeLeft = () => {
      const currentYear = new Date().getFullYear();
      let targetDate: Date | null = null;

      const festivalDate = nextFestival.festival.festival_date.toLowerCase();
      
      if (festivalDate.includes('first saturday in may')) {
        targetDate = getFirstSaturday(4, currentYear);
      } else if (festivalDate.includes('second saturday in june')) {
        targetDate = getNthDay(1, 1, 5, currentYear);
      } else if (festivalDate.includes('first tuesday in july')) {
        targetDate = getFirstDayOfWeek(1, 6, currentYear);
      } else if (festivalDate.includes('august')) {
        targetDate = getLastSaturdayOfMonth(7, currentYear);
      } else if (festivalDate.includes('first saturday in september')) {
        targetDate = getFirstSaturday(8, currentYear);
      } else if (festivalDate.includes('first saturday in october')) {
        targetDate = getFirstSaturday(9, currentYear);
      }

      if (!targetDate || targetDate < new Date()) {
        targetDate = getFirstSaturday(4, currentYear + 1);
      }

      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [nextFestival, mounted]);

  if (!mounted || !nextFestival) {
    return null;
  }

  const { festival, daysUntil } = nextFestival;

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground border-0">
      <CardContent className="p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Festival Info */}
          <div className="space-y-3 md:space-y-4">
            <Badge className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Next Festival
            </Badge>
            
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">{festival.name}</h3>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-primary-foreground/80 text-sm md:text-base">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {festival.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {festival.festival_date}
                </span>
              </div>
            </div>

            <p className="text-primary-foreground/90 text-sm md:text-base line-clamp-2 md:line-clamp-3">
              {festival.description}
            </p>

            <button
              onClick={() => onExplore?.(festival)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
            >
              Explore Festival Details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Countdown Timer */}
          <div className="text-center lg:text-right">
            <p className="text-primary-foreground/80 text-sm mb-4 flex items-center justify-center lg:justify-end gap-1">
              <Clock className="h-4 w-4" />
              Countdown to Celebration
            </p>
            
            <div className="flex justify-center lg:justify-end gap-2 md:gap-3">
              <CountdownUnit value={timeLeft.days} label="Days" />
              <CountdownUnit value={timeLeft.hours} label="Hours" />
              <CountdownUnit value={timeLeft.minutes} label="Minutes" />
              <CountdownUnit value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3 min-w-[55px] md:min-w-[70px]">
        <span className="font-mono text-2xl md:text-3xl font-bold block">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-primary-foreground/70 mt-1">{label}</span>
    </div>
  );
}

// Helper functions
function getFirstSaturday(month: number, year: number): Date {
  const date = new Date(year, month, 1);
  const dayOfWeek = date.getDay();
  const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
  date.setDate(1 + daysUntilSaturday);
  return date;
}

function getNthDay(weekday: number, n: number, month: number, year: number): Date {
  const date = new Date(year, month, 1);
  let count = 0;
  for (let day = 1; day <= 31; day++) {
    if (date.getMonth() !== month) break;
    if (date.getDay() === weekday) {
      count++;
      if (count === n) return date;
    }
    date.setDate(date.getDate() + 1);
  }
  return date;
}

function getFirstDayOfWeek(weekday: number, month: number, year: number): Date {
  const date = new Date(year, month, 1);
  const dayOfWeek = date.getDay();
  const daysUntilTarget = (weekday - dayOfWeek + 7) % 7;
  date.setDate(1 + daysUntilTarget);
  return date;
}

function getLastSaturdayOfMonth(month: number, year: number): Date {
  const date = new Date(year, month + 1, 0);
  const dayOfWeek = date.getDay();
  const daysBack = (dayOfWeek - 6 + 7) % 7;
  date.setDate(date.getDate() - daysBack);
  return date;
}
