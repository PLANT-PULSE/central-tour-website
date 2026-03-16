-- Migration: Add new destinations and update gallery images
-- Date: 2026-03-16

-- Insert new destinations for folders without existing destinations

-- 1. Assin Manso Slave River Site
INSERT INTO destinations (name, slug, location, description, history, entry_fee, opening_hours, best_time_to_visit, latitude, longitude, image_url, travel_tips, safety_advice, cultural_facts, distance_from_cape_coast, estimated_travel_time, estimated_transport_cost, nearby_restaurants, nearby_hotels, featured, gallery)
VALUES 
(
  'Assin Manso Slave River Site',
  'assin-manso-slave-river-site',
  'Assin Manso, Central Region',
  'Assin Manso Slave River Site is one of the most poignant historical landmarks in Ghana, serving as a major transit point during the transatlantic slave trade. The site features the famous "Slave River" where enslaved Africans were bathed before their final journey to the castles. Today, it stands as a memorial to those who suffered and perished during this dark chapter in history.',
  'Assin Manso was one of the largest slave markets in West Africa, serving as a collection point for enslaved Africans before they were transported to the coastal castles. The site includes the Slave River (where captives were bathed), the "Last Bath" point, and several mass graves. Archaeological excavations have revealed artifacts that tell the story of this tragic history.',
  30.00,
  '8:00 AM - 5:00 PM (Daily)',
  'November to March (dry season)',
  5.6917,
  -1.2833,
  '/images/assin-manso-slave-river-site/download (1).jpeg',
  'Wear comfortable shoes for walking. Bring water and sun protection. The site can be emotionally overwhelming - take your time.',
  'The site is well-maintained and safe. Follow guide instructions and stay on marked paths.',
  'Assin Manso was a major slave trading hub. The river has spiritual significance - visitors traditionally offer prayers to ancestors. Local guides share powerful stories passed down through generations.',
  '25 km',
  '35 minutes',
  40.00,
  ARRAY['Local Restaurant', 'Town Restaurant'],
  ARRAY['Guest House', 'Motel'],
  true,
  ARRAY[
    '/images/assin-manso-slave-river-site/download (1).jpeg',
    '/images/assin-manso-slave-river-site/download (2).jpeg',
    '/images/assin-manso-slave-river-site/download (3).jpeg',
    '/images/assin-manso-slave-river-site/download (4).jpeg',
    '/images/assin-manso-slave-river-site/download (5).jpeg',
    '/images/assin-manso-slave-river-site/download (6).jpeg',
    '/images/assin-manso-slave-river-site/images (1).jpeg',
    '/images/assin-manso-slave-river-site/images.jpeg'
  ]
)
ON CONFLICT (slug) DO NOTHING;

-- 2. Fort St. Jago
INSERT INTO destinations (name, slug, location, description, history, entry_fee, opening_hours, best_time_to_visit, latitude, longitude, image_url, travel_tips, safety_advice, cultural_facts, distance_from_cape_coast, estimated_travel_time, estimated_transport_cost, nearby_restaurants, nearby_hotels, featured, gallery)
VALUES 
(
  'Fort St. Jago',
  'fort-st-jago',
  'Elmina, Central Region',
  'Fort St. Jago is a historic fortification perched on a hill overlooking Elmina Castle and the Atlantic Ocean. Built by the Portuguese in the 16th century, this smaller but strategically important fort offers visitors breathtaking panoramic views of the coastline and a fascinating glimpse into the colonial history of Ghana.',
  'Originally known as "St. Jago de Elmina" when built by the Portuguese in 1555, the fort was later captured by the Dutch in 1625. It served as a military outpost and trading post, primarily for gold and later for slaves. The fort was abandoned in 1832 but has since been restored and opened to visitors.',
  35.00,
  '9:00 AM - 5:00 PM (Daily)',
  'November to March (dry season)',
  5.0867,
  -1.3450,
  '/images/fort-st-jago/download (1).jpeg',
  'Wear comfortable hiking shoes as the climb to the fort is steep. Early morning visits offer the best views and cooler temperatures.',
  'The fort has been restored with safety railings. Watch your step on uneven surfaces. Safe for most visitors.',
  'The fort offers the best panoramic view of Elmina harbor and both Elmina and Cape Coast Castles. It was strategically important for controlling the gold trade route.',
  '14 km',
  '20 minutes',
  25.00,
  ARRAY['Bridge House Restaurant', 'Coconut Grove Restaurant'],
  ARRAY['Elmina Beach Resort', 'Stumble Inn'],
  true,
  ARRAY[
    '/images/fort-st-jago/download (1).jpeg',
    '/images/fort-st-jago/download (2).jpeg',
    '/images/fort-st-jago/download (3).jpeg',
    '/images/fort-st-jago/download (4).jpeg',
    '/images/fort-st-jago/download (5).jpeg',
    '/images/fort-st-jago/download (6).jpeg',
    '/images/fort-st-jago/images (1).jpeg',
    '/images/fort-st-jago/images.jpeg'
  ]
)
ON CONFLICT (slug) DO NOTHING;

-- Update existing destinations with their local gallery images

-- Update Cape Coast Castle gallery
UPDATE destinations SET 
  gallery = ARRAY[
    '/images/cape-coast-castle/download (1).jpeg',
    '/images/cape-coast-castle/download (2).jpeg',
    '/images/cape-coast-castle/download (3).jpeg',
    '/images/cape-coast-castle/download (4).jpeg',
    '/images/cape-coast-castle/download (5).jpeg',
    '/images/cape-coast-castle/download (6).jpeg',
    '/images/cape-coast-castle/download (7).jpeg',
    '/images/cape-coast-castle/download.jpeg',
    '/images/cape-coast-castle/images.jpeg'
  ],
  image_url = '/images/cape-coast-castle/download.jpeg'
WHERE slug = 'cape-coast-castle';

-- Update Elmina Castle gallery
UPDATE destinations SET 
  gallery = ARRAY[
    '/images/elmina-castle/download (1).jpeg',
    '/images/elmina-castle/download (2).jpeg',
    '/images/elmina-castle/download (3).jpeg',
    '/images/elmina-castle/download.jpeg',
    '/images/elmina-castle/images (1).jpeg',
    '/images/elmina-castle/images (2).jpeg',
    '/images/elmina-castle/images.jpeg',
    '/images/cape-coast-castle/download.jpeg'
  ],
  image_url = '/images/elmina-castle/images.jpeg'
WHERE slug = 'elmina-castle';

-- Update Kakum National Park gallery
UPDATE destinations SET 
  gallery = ARRAY[
    '/images/kakum/download (1).jpeg',
    '/images/kakum/download (2).jpeg',
    '/images/kakum/download (3).jpeg',
    '/images/kakum/download (4).jpeg',
    '/images/kakum/download (5).jpeg',
    '/images/kakum/download (6).jpeg',
    '/images/kakum/download (7).jpeg',
    '/images/kakum/download.jpeg',
    '/images/kakum/images.jpeg'
  ],
  image_url = '/images/kakum/download.jpeg'
WHERE slug = 'kakum-national-park';

-- Update Hans Cottage Botel gallery
UPDATE destinations SET 
  gallery = ARRAY[
    '/images/hans-cottage/download (1).jpeg',
    '/images/hans-cottage/download (2).jpeg',
    '/images/hans-cottage/download (3).jpeg',
    '/images/hans-cottage/download (4).jpeg',
    '/images/hans-cottage/download (5).jpeg',
    '/images/hans-cottage/download (6).jpeg'
  ],
  image_url = '/images/hans-cottage/download (1).jpeg'
WHERE slug = 'hans-cottage-botel';
