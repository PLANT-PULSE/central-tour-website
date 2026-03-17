-- Migration: Update destination hero images to high-quality images
-- Date: 2026-03-17

-- Update destination hero images to use high-quality Unsplash images

-- Cape Coast Castle - UNESCO World Heritage Site
UPDATE destinations SET 
  image_url = 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=80'
WHERE slug = 'cape-coast-castle';

-- Elmina Castle - UNESCO World Heritage Site
UPDATE destinations SET 
  image_url = 'https://images.unsplash.com/photo-1566374752732-930a6f46877b?w=1200&q=80'
WHERE slug = 'elmina-castle';

-- Kakum National Park - Ancient rainforest canopy walkway
UPDATE destinations SET 
  image_url = 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80'
WHERE slug = 'kakum-national-park';

-- Hans Cottage Botel - Unique hotel on a lake
UPDATE destinations SET 
  image_url = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80'
WHERE slug = 'hans-cottage-botels';

-- Fort St. Jago - Historic fort overlooking Elmina
UPDATE destinations SET 
  image_url = 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200&q=80'
WHERE slug = 'fort-st-jago';

-- Fort Amsterdam - Historic Dutch fort
UPDATE destinations SET 
  image_url = 'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=1200&q=80'
WHERE slug = 'fort-amsterdam';

-- Fort William - Historic British fort
UPDATE destinations SET 
  image_url = 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=1200&q=80'
WHERE slug = 'fort-william';

-- Fort Victoria - Historic coastal fort
UPDATE destinations SET 
  image_url = 'https://images.unsplash.com/photo-1566374752732-930a6f46877b?w=1200&q=80'
WHERE slug = 'fort-victoria';

-- Fort Patience - Historic fort
UPDATE destinations SET 
  image_url = 'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=1200&q=80'
WHERE slug = 'fort-patience';

-- Assin Manso Slave River Site - Historical slave trade site
UPDATE destinations SET 
  image_url = 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7e99f?w=1200&q=80'
WHERE slug = 'assin-manso-slave-river-site';
