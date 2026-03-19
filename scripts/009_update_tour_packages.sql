-- Update tour packages to match user's requested names and durations
-- Heritage Trail (2 day historical journey)
-- Nature Adventure (3 day nature experience)
-- Complete Tour (3 day comprehensive tour)

-- First, delete existing packages to start fresh
DELETE FROM tour_packages;

-- Insert the new tour packages with slug-based IDs for easy booking reference
INSERT INTO tour_packages (id, name, slug, short_description, description, duration, price, image_url, is_featured, includes, excludes)
VALUES 
(
  'heritage-trail'::uuid,
  'Heritage Trail',
  'heritage-trail',
  '2 day historical journey',
  'Explore the powerful history of Ghana''s slave trade era with visits to both Cape Coast Castle and Elmina Castle. This two-day tour provides deep insights into West African history and its connection to the African diaspora. Visit the Assin Manso Slave River Site and learn about the Middle Passage.',
  '2 days',
  250.00,
  '/images/heritage-trail.jpg',
  true,
  ARRAY['Cape Coast Castle tour', 'Elmina Castle tour', 'Assin Manso Slave River Site', 'Professional guide', 'All entrance fees', '2 breakfasts', '1 lunch', '1 dinner', 'Transportation between destinations', 'Comfortable accommodation'],
  ARRAY['Personal expenses', 'Tips for guide', 'Travel insurance', 'Alcoholic beverages']
),
(
  'nature-adventure'::uuid,
  'Nature Adventure',
  'nature-adventure',
  '3 day nature experience',
  'Experience the wonders of Ghana''s natural beauty with this three-day nature-focused adventure. Visit Kakum National Park''s famous Canopy Walkway, explore the wildlife at Hans Cottage Botel, and discover pristine beaches along the Central Region coast.',
  '3 days',
  320.00,
  '/images/nature-adventure.jpg',
  true,
  ARRAY['Kakum National Park canopy walkway', 'Hans Cottage Botel visit', 'Guided nature walks', 'Wildlife spotting', 'Beach time', 'Professional naturalist guide', 'All park entrance fees', '3 breakfasts', '2 lunches', '2 dinners', 'Transportation', '2 nights accommodation'],
  ARRAY['Personal expenses', 'Tips', 'Travel insurance', 'Camera fees', 'Optional activities']
),
(
  'complete-tour'::uuid,
  'Complete Tour',
  'complete-tour',
  '3 day comprehensive tour',
  'The ultimate Central Region experience! This comprehensive 3-day tour covers all major attractions including both historic castles, Kakum National Park canopy walk, cultural villages, and beach relaxation. Perfect for visitors wanting the complete Ghana experience.',
  '3 days',
  450.00,
  '/images/complete-tour.jpg',
  true,
  ARRAY['Cape Coast Castle tour', 'Elmina Castle tour', 'Kakum National Park canopy walkway', 'Hans Cottage Botel visit', 'Cultural village experience', 'Beach relaxation time', 'Professional guide', 'All entrance fees', '3 breakfasts', '3 lunches', '2 dinners', 'Transportation', '2 nights accommodation (beach resort)'],
  ARRAY['Personal expenses', 'Tips for guide', 'Travel insurance', 'Alcoholic beverages', 'Personal shopping']
)
ON CONFLICT (slug) DO NOTHING;

-- Verify the packages were inserted
SELECT name, slug, duration, price, is_featured FROM tour_packages ORDER BY is_featured DESC, price ASC;
