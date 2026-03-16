-- Destinations table
CREATE TABLE IF NOT EXISTS destinations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  location TEXT NOT NULL,
  description TEXT NOT NULL,
  history TEXT,
  entry_fee DECIMAL(10, 2),
  opening_hours TEXT,
  best_time_to_visit TEXT,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  image_url TEXT,
  gallery_urls TEXT[],
  travel_tips TEXT,
  safety_advice TEXT,
  cultural_facts TEXT,
  distance_from_cape_coast TEXT,
  estimated_travel_time TEXT,
  estimated_transport_cost DECIMAL(10, 2),
  nearby_restaurants TEXT[],
  nearby_hotels TEXT[],
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_destinations_slug ON destinations(slug);
CREATE INDEX IF NOT EXISTS idx_destinations_featured ON destinations(featured);
