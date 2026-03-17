'use client';

import { useState } from 'react';
import { Festival, FESTIVAL_CALENDAR, MONTHS_ORDER } from '@/lib/festivals-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface FestivalCalendarProps {
  onExplore?: (festival: Festival) => void;
}

export function FestivalCalendar({ onExplore }: FestivalCalendarProps) {
  const [expandedMonths, setExpandedMonths] = useState<string[]>([]);

  const toggleMonth = (month: string) => {
    setExpandedMonths((prev) =>
      prev.includes(month)
        ? prev.filter((m) => m !== month)
        : [...prev, month]
    );
  };

  const monthsWithFestivals = MONTHS_ORDER.filter(
    (month) => FESTIVAL_CALENDAR[month] && FESTIVAL_CALENDAR[month].length > 0
  );

  return (
    <div className="space-y-4">
      {monthsWithFestivals.map((month) => {
        const festivals = FESTIVAL_CALENDAR[month];
        const isExpanded = expandedMonths.includes(month);

        return (
          <Card key={month} className="overflow-hidden">
            {/* Month Header */}
            <button
              onClick={() => toggleMonth(month)}
              className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-muted/50 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isExpanded ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                }`}>
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg md:text-xl font-bold">{month}</h3>
                  <p className="text-sm text-muted-foreground">
                    {festivals.length} {festivals.length === 1 ? 'festival' : 'festivals'}
                  </p>
                </div>
              </div>
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              )}
            </button>

            {/* Festivals List */}
            {isExpanded && (
              <CardContent className="pt-0 border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {festivals.map((festival) => (
                    <div
                      key={festival.id}
                      className="p-4 rounded-lg border hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-semibold">{festival.name}</h4>
                        <Badge variant="secondary" className="shrink-0">
                          {festival.location}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-3 w-3" />
                        <span>{festival.festival_date}</span>
                      </div>
                      
                      {festival.people && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <MapPin className="h-3 w-3" />
                          <span>{festival.people}</span>
                        </div>
                      )}
                      
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {festival.description}
                      </p>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onExplore?.(festival)}
                        className="w-full"
                      >
                        Explore Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        );
      })}

      {monthsWithFestivals.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No festivals scheduled at this time.</p>
        </div>
      )}
    </div>
  );
}

// Simple horizontal calendar view for compact displays
export function FestivalCalendarCompact({ onExplore }: FestivalCalendarProps) {
  const monthsWithFestivals = MONTHS_ORDER.filter(
    (month) => FESTIVAL_CALENDAR[month] && FESTIVAL_CALENDAR[month].length > 0
  );

  return (
    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
      {monthsWithFestivals.map((month) => {
        const festivals = FESTIVAL_CALENDAR[month];
        
        return (
          <div
            key={month}
            className="min-w-[160px] bg-white rounded-lg border p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                <Calendar className="h-4 w-4 text-primary" />
              </div>
              <span className="font-semibold">{month}</span>
            </div>
            
            <div className="space-y-2">
              {festivals.map((festival) => (
                <button
                  key={festival.id}
                  onClick={() => onExplore?.(festival)}
                  className="w-full text-left p-2 rounded bg-muted/50 hover:bg-muted transition-colors"
                >
                  <p className="font-medium text-sm line-clamp-1">{festival.name}</p>
                  <p className="text-xs text-muted-foreground line-clamp-1">{festival.location}</p>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
