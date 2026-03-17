'use client';

import { useState } from 'react';
import { Festival, FESTIVALS_DATA } from '@/lib/festivals-data';
import { 
  FestivalCard, 
  FestivalCountdown, 
  FestivalCalendar, 
  FestivalDetailView 
} from '@/components/festivals';

interface FestivalsExplorerProps {
  initialView?: 'grid' | 'calendar';
}

export function FestivalsExplorer({ initialView = 'grid' }: FestivalsExplorerProps) {
  const [currentView, setCurrentView] = useState<'grid' | 'calendar' | 'detail'>(initialView);
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null);
  const [showVisitForm, setShowVisitForm] = useState(false);

  const handleExploreFestival = (festival: Festival) => {
    setSelectedFestival(festival);
    setCurrentView('detail');
  };

  const handleBackToFestivals = () => {
    setSelectedFestival(null);
    setCurrentView('grid');
    setShowVisitForm(false);
  };

  const handleScheduleVisit = (festival: Festival) => {
    setSelectedFestival(festival);
    setShowVisitForm(true);
  };

  // Detail View
  if (currentView === 'detail' && selectedFestival) {
    return (
      <FestivalDetailView
        festival={selectedFestival}
        onBack={handleBackToFestivals}
        onScheduleVisit={handleScheduleVisit}
      />
    );
  }

  return (
    <div className="space-y-8">
      {/* View Toggle & Countdown */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentView('grid')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentView === 'grid'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setCurrentView('calendar')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentView === 'calendar'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            Calendar View
          </button>
        </div>
      </div>

      {/* Countdown Banner */}
      <FestivalCountdown onExplore={handleExploreFestival} />

      {/* Grid View */}
      {currentView === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FESTIVALS_DATA.map((festival, index) => (
            <FestivalCard
              key={festival.id}
              festival={festival}
              onExplore={handleExploreFestival}
            />
          ))}
        </div>
      )}

      {/* Calendar View */}
      {currentView === 'calendar' && (
        <FestivalCalendar onExplore={handleExploreFestival} />
      )}
    </div>
  );
}
