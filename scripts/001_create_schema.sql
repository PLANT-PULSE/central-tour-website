-- Central Region Tourism Platform Database Schema

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

-- Activities table
CREATE TABLE IF NOT EXISTS activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  destination_id UUID NOT NULL REFERENCES destinations(id) ON DELETE CASCADE,
  activity_name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tour packages table
CREATE TABLE IF NOT EXISTS tour_packages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  package_name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  duration_days INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  included_destinations UUID[],
  schedule TEXT,
  highlights TEXT[],
  inclusions TEXT[],
  exclusions TEXT[],
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  pickup_location TEXT NOT NULL,
  destination_id UUID REFERENCES destinations(id),
  tour_package_id UUID REFERENCES tour_packages(id),
  travel_date DATE NOT NULL,
  number_of_people INTEGER NOT NULL DEFAULT 1,
  vehicle_type TEXT NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  payment_status TEXT DEFAULT 'pending',
  payment_reference TEXT,
  booking_status TEXT DEFAULT 'pending',
  special_requests TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  destination_id UUID NOT NULL REFERENCES destinations(id) ON DELETE CASCADE,
  user_name TEXT NOT NULL,
  user_email TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT,
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Festivals table
CREATE TABLE IF NOT EXISTS festivals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT NOT NULL,
  location TEXT NOT NULL,
  festival_date TEXT,
  image_url TEXT,
  highlights TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  image_url TEXT,
  category TEXT,
  author TEXT DEFAULT 'Central Region Tourism',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  customer_location TEXT,
  testimonial_text TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Company info table
CREATE TABLE IF NOT EXISTS company_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  slogan TEXT,
  mission TEXT,
  vision TEXT,
  story TEXT,
  phone TEXT,
  email TEXT,
  whatsapp TEXT,
  address TEXT,
  facebook_url TEXT,
  instagram_url TEXT,
  twitter_url TEXT,
  youtube_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_destinations_slug ON destinations(slug);
CREATE INDEX IF NOT EXISTS idx_destinations_featured ON destinations(featured);
CREATE INDEX IF NOT EXISTS idx_tour_packages_slug ON tour_packages(slug);
CREATE INDEX IF NOT EXISTS idx_tour_packages_featured ON tour_packages(featured);
CREATE INDEX IF NOT EXISTS idx_reviews_destination ON reviews(destination_id);
CREATE INDEX IF NOT EXISTS idx_activities_destination ON activities(destination_id);
CREATE INDEX IF NOT EXISTS idx_bookings_email ON bookings(customer_email);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_festivals_slug ON festivals(slug);
