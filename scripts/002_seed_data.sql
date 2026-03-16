-- Seed data for Central Region Tourism Platform

-- Insert company info
INSERT INTO company_info (company_name, slogan, mission, vision, story, phone, email, whatsapp, address, facebook_url, instagram_url, twitter_url)
VALUES (
  'Central Region Tourism',
  'Discover the Heart of Ghana',
  'To promote sustainable tourism in Ghana''s Central Region by connecting visitors with our rich cultural heritage, natural wonders, and historical landmarks while supporting local communities.',
  'To be the leading tourism platform in Ghana, making the Central Region a world-class destination for cultural and eco-tourism.',
  'Central Region Tourism was founded with a passion for sharing the incredible stories, landscapes, and culture of Ghana''s Central Region with the world. From the historic castles along the coast to the pristine rainforests of Kakum, we are dedicated to providing unforgettable experiences that honor our heritage and preserve our natural treasures for generations to come.',
  '+233 24 123 4567',
  'info@centralregiontourism.gh',
  '+233241234567',
  'Cape Coast, Central Region, Ghana',
  'https://facebook.com/centralregiontourism',
  'https://instagram.com/centralregiontourism',
  'https://twitter.com/crtourism'
)
ON CONFLICT DO NOTHING;

-- Insert destinations
INSERT INTO destinations (name, slug, location, description, history, entry_fee, opening_hours, best_time_to_visit, latitude, longitude, image_url, travel_tips, safety_advice, cultural_facts, distance_from_cape_coast, estimated_travel_time, estimated_transport_cost, nearby_restaurants, nearby_hotels, featured)
VALUES 
(
  'Cape Coast Castle',
  'cape-coast-castle',
  'Cape Coast, Central Region',
  'Cape Coast Castle is a UNESCO World Heritage Site and one of the most significant historical landmarks in West Africa. This imposing white fortress stands as a powerful reminder of the transatlantic slave trade, where millions of Africans were held before being shipped across the Atlantic. Today, it serves as a museum and memorial, offering visitors a deeply moving and educational experience.',
  'Built by the Swedish Africa Company in 1653, Cape Coast Castle was later captured by the Dutch and then the British. For over 300 years, it served as a hub for the transatlantic slave trade. The castle''s dungeons held thousands of enslaved Africans in horrific conditions before their forced journey to the Americas. In 1979, it was designated a UNESCO World Heritage Site.',
  50.00,
  '9:00 AM - 5:00 PM (Daily)',
  'November to March (dry season)',
  5.1054,
  -1.2466,
  'https://images.unsplash.com/photo-1590070103837-4ae6d7c17f86?w=1200',
  'Wear comfortable shoes as the tour involves walking on uneven surfaces. Bring water and prepare for an emotionally intense experience. Photography is allowed in most areas.',
  'The castle is well-maintained and safe for visitors. Stay with your tour group and follow guide instructions.',
  'The castle tour includes visiting the male and female dungeons, the Door of No Return, and the museum which houses artifacts from the slave trade era. Local guides share powerful stories passed down through generations.',
  '0 km (Located in Cape Coast)',
  '0 minutes',
  0.00,
  ARRAY['Castle Restaurant', 'Oasis Beach Resort', 'Coconut Grove Restaurant'],
  ARRAY['Coconut Grove Beach Resort', 'Oasis Beach Resort', 'Elmina Beach Resort'],
  true
),
(
  'Elmina Castle',
  'elmina-castle',
  'Elmina, Central Region',
  'Elmina Castle, also known as St. George Castle, is the oldest European building in existence south of the Sahara. This majestic white fortress overlooking the Atlantic Ocean is a UNESCO World Heritage Site and represents a crucial chapter in world history, particularly the transatlantic slave trade.',
  'Built by the Portuguese in 1482, Elmina Castle was originally constructed for trade in gold and ivory. It later became a significant site in the slave trade under Dutch and British control. The castle has witnessed over 500 years of history and stands as a testament to the complex and often painful past of European colonialism in Africa.',
  50.00,
  '9:00 AM - 5:00 PM (Daily)',
  'November to March (dry season)',
  5.0846,
  -1.3466,
  'https://images.unsplash.com/photo-1568483381568-b3a2f8a19c6e?w=1200',
  'Visit early morning to avoid crowds. The fishing harbor nearby offers excellent photo opportunities. Consider combining with a visit to the local fish market.',
  'The area is tourist-friendly. Be respectful when taking photos of locals, especially fishermen. Watch your belongings in crowded areas.',
  'Elmina is known as the first point of European contact in sub-Saharan Africa. The town''s fishing culture dates back centuries, and the colorful boats in the harbor create a picturesque scene.',
  '15 km',
  '20 minutes',
  30.00,
  ARRAY['Bridge House Restaurant', 'Coconut Grove Restaurant', 'Elmina Beach Resort Restaurant'],
  ARRAY['Elmina Beach Resort', 'Coconut Grove Beach Resort', 'Stumble Inn'],
  true
),
(
  'Kakum National Park',
  'kakum-national-park',
  'Kakum, Central Region',
  'Kakum National Park is a pristine tropical rainforest covering 375 square kilometers of biodiversity. Home to the famous Canopy Walkway, this park offers visitors a unique opportunity to experience the rainforest from treetop level, walking among ancient trees at heights of up to 40 meters above the forest floor.',
  'Kakum was established as a national park in 1992 to protect the remaining virgin tropical rainforest in Ghana. The park is home to over 40 species of larger mammals, 400 species of butterflies, and over 200 bird species. The iconic Canopy Walkway was constructed in 1995 with support from USAID.',
  60.00,
  '8:00 AM - 4:00 PM (Daily)',
  'November to February (dry season)',
  5.3500,
  -1.3833,
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
  'Start early to see more wildlife. Wear sturdy hiking shoes and bring insect repellent. The canopy walk can be challenging for those with fear of heights.',
  'Stay on designated paths and follow ranger instructions. Some trails can be slippery during rainy season.',
  'The park protects several endangered species including forest elephants, bongo antelopes, and Diana monkeys. Local communities are involved in conservation efforts.',
  '33 km',
  '45 minutes',
  50.00,
  ARRAY['Kakum Park Restaurant', 'Rainforest Lodge Cafe', 'Hans Cottage Botel Restaurant'],
  ARRAY['Rainforest Lodge', 'Hans Cottage Botel', 'Coconut Grove Beach Resort'],
  true
),
(
  'Hans Cottage Botel',
  'hans-cottage-botel',
  'Near Kakum, Central Region',
  'Hans Cottage Botel is a unique eco-lodge built on stilts over a crocodile-inhabited lake. This distinctive accommodation offers visitors an unforgettable experience of sleeping above the water while observing crocodiles, exotic birds, and other wildlife in their natural habitat.',
  'Established in the 1990s, Hans Cottage was designed as an eco-friendly destination that combines tourism with wildlife conservation. The resident crocodiles are descendants of animals that have inhabited the lake for generations, living in harmony with the lodge operations.',
  30.00,
  '24 hours (accommodation), Day visits: 8:00 AM - 6:00 PM',
  'Year-round, best November to March',
  5.3667,
  -1.3500,
  'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=1200',
  'Book accommodation in advance during peak season. The restaurant serves excellent local cuisine. Crocodile feeding times are great for photography.',
  'Observe from designated viewing areas. Do not feed or approach crocodiles. The walkways have railings but supervise children closely.',
  'The lake is home to over 30 crocodiles. In local Akan tradition, crocodiles are considered sacred and are believed to protect the community.',
  '30 km',
  '40 minutes',
  45.00,
  ARRAY['Hans Cottage Botel Restaurant', 'Kakum Park Restaurant'],
  ARRAY['Hans Cottage Botel', 'Rainforest Lodge'],
  true
)
ON CONFLICT (slug) DO NOTHING;

-- Update destinations with gallery images
UPDATE destinations SET 
  gallery = ARRAY[
    'https://images.unsplash.com/photo-1590070103837-4ae6d7c17f86?w=800',
    'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800',
    'https://images.unsplash.com/photo-1534234828563-0bf62fb25c9f?w=800',
    'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
    'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=800',
    'https://images.unsplash.com/photo-1531300185376-174bf7c0f5eb?w=800'
  ]
WHERE slug = 'cape-coast-castle';

UPDATE destinations SET 
  gallery = ARRAY[
    'https://images.unsplash.com/photo-1568483381568-b3a2f8a19c6e?w=800',
    'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800',
    'https://images.unsplash.com/photo-1534234828563-0bf62fb25c9f?w=800',
    'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
    'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=800',
    'https://images.unsplash.com/photo-1531300185376-174bf7c0f5eb?w=800'
  ]
WHERE slug = 'elmina-castle';

UPDATE destinations SET 
  gallery = ARRAY[
    'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
    'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800',
    'https://images.unsplash.com/photo-1534234828563-0bf62fb25c9f?w=800',
    'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
    'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=800',
    'https://images.unsplash.com/photo-1531300185376-174bf7c0f5eb?w=800'
  ]
WHERE slug = 'kakum-national-park';

UPDATE destinations SET 
  gallery = ARRAY[
    'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=800',
    'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800',
    'https://images.unsplash.com/photo-1534234828563-0bf62fb25c9f?w=800',
    'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800',
    'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=800',
    'https://images.unsplash.com/photo-1531300185376-174bf7c0f5eb?w=800'
  ]
WHERE slug = 'hans-cottage-botel';

-- Insert activities for destinations
INSERT INTO activities (destination_id, activity_name, description)
SELECT d.id, activity.name, activity.description
FROM destinations d
CROSS JOIN (
  VALUES 
    ('Guided Historical Tour', 'Comprehensive tour of the castle dungeons, museum, and Door of No Return'),
    ('Museum Visit', 'Explore artifacts and exhibits documenting the transatlantic slave trade'),
    ('Photography Tour', 'Capture the historic architecture and ocean views')
) AS activity(name, description)
WHERE d.slug = 'cape-coast-castle'
ON CONFLICT DO NOTHING;

INSERT INTO activities (destination_id, activity_name, description)
SELECT d.id, activity.name, activity.description
FROM destinations d
CROSS JOIN (
  VALUES 
    ('Castle Tour', 'Explore the oldest European building in sub-Saharan Africa'),
    ('Fishing Village Walk', 'Experience the vibrant local fishing culture'),
    ('Sunset Photography', 'Capture stunning views of the castle against the setting sun')
) AS activity(name, description)
WHERE d.slug = 'elmina-castle'
ON CONFLICT DO NOTHING;

INSERT INTO activities (destination_id, activity_name, description)
SELECT d.id, activity.name, activity.description
FROM destinations d
CROSS JOIN (
  VALUES 
    ('Canopy Walkway', 'Walk among the treetops on suspended bridges 40m above ground'),
    ('Nature Hiking', 'Explore various trails through the pristine rainforest'),
    ('Bird Watching', 'Spot over 200 species of tropical birds'),
    ('Night Safari', 'Experience the rainforest after dark (advance booking required)')
) AS activity(name, description)
WHERE d.slug = 'kakum-national-park'
ON CONFLICT DO NOTHING;

INSERT INTO activities (destination_id, activity_name, description)
SELECT d.id, activity.name, activity.description
FROM destinations d
CROSS JOIN (
  VALUES 
    ('Crocodile Watching', 'Observe crocodiles in their natural habitat'),
    ('Bird Watching', 'Spot various exotic bird species around the lake'),
    ('Canoeing', 'Paddle across the scenic lake'),
    ('Photography', 'Capture unique shots of wildlife and the botel architecture')
) AS activity(name, description)
WHERE d.slug = 'hans-cottage-botel'
ON CONFLICT DO NOTHING;

-- Insert tour packages
INSERT INTO tour_packages (package_name, slug, description, duration_days, price, image_url, schedule, highlights, inclusions, exclusions, featured)
VALUES 
(
  'Historical Heritage Tour',
  'historical-heritage-tour',
  'Explore the powerful history of Ghana''s slave trade era with visits to both Cape Coast Castle and Elmina Castle. This one-day tour provides deep insights into West African history and its connection to the African diaspora.',
  1,
  150.00,
  'https://images.unsplash.com/photo-1590070103837-4ae6d7c17f86?w=800',
  'Morning: Cape Coast Castle tour and museum visit. Lunch at local restaurant. Afternoon: Elmina Castle tour and fishing village walk.',
  ARRAY['UNESCO World Heritage Sites', 'Professional guide', 'Door of No Return experience', 'Local cuisine lunch', 'Fishing village visit'],
  ARRAY['Hotel pickup and drop-off', 'All entrance fees', 'Professional English-speaking guide', 'Lunch', 'Bottled water', 'Air-conditioned transportation'],
  ARRAY['Personal expenses', 'Tips for guide', 'Travel insurance'],
  true
),
(
  'Rainforest Adventure',
  'rainforest-adventure',
  'Experience the wonders of Kakum National Park''s tropical rainforest. Walk among the treetops on the famous Canopy Walkway and discover diverse wildlife in one of Africa''s most pristine forests.',
  1,
  120.00,
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
  'Early morning departure. Canopy Walkway experience. Guided nature walk. Lunch at park restaurant. Afternoon bird watching.',
  ARRAY['Canopy Walkway experience', 'Guided nature walk', 'Wildlife spotting', 'Tropical bird watching', 'Rainforest education'],
  ARRAY['Hotel pickup and drop-off', 'Park entrance fees', 'Professional guide', 'Lunch', 'Bottled water', 'Transportation'],
  ARRAY['Personal expenses', 'Tips', 'Travel insurance', 'Camera fees'],
  true
),
(
  'Complete Central Region Explorer',
  'complete-central-region-explorer',
  'The ultimate Central Region experience! This comprehensive 2-day tour covers all major attractions including both historic castles, Kakum National Park canopy walk, and Hans Cottage Botel. Perfect for visitors wanting the complete experience.',
  2,
  350.00,
  'https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=800',
  'Day 1: Cape Coast Castle, Elmina Castle, overnight at beach resort. Day 2: Kakum National Park canopy walk, Hans Cottage Botel, return.',
  ARRAY['Both UNESCO castles', 'Kakum Canopy Walkway', 'Crocodile sanctuary', 'Beach resort stay', 'All major attractions'],
  ARRAY['Hotel pickup and drop-off', 'All entrance fees', 'Professional guide', '1 night accommodation', 'All meals', 'Transportation'],
  ARRAY['Personal expenses', 'Tips', 'Travel insurance', 'Alcoholic beverages'],
  true
),
(
  'Cultural Immersion Experience',
  'cultural-immersion-experience',
  'Go beyond the typical tourist experience with this immersive cultural tour. Visit local communities, participate in traditional activities, and gain deeper understanding of Ghanaian culture and traditions.',
  1,
  180.00,
  'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800',
  'Visit local craft village. Traditional cooking class. Cultural performance. Community interaction. Local market tour.',
  ARRAY['Authentic cultural experiences', 'Traditional cooking class', 'Local craft demonstrations', 'Community interaction', 'Market tour'],
  ARRAY['Hotel pickup and drop-off', 'All activity fees', 'Local guide', 'Traditional lunch', 'Cultural performance', 'Transportation'],
  ARRAY['Personal shopping', 'Tips', 'Travel insurance'],
  false
)
ON CONFLICT (slug) DO NOTHING;

-- Insert festivals
INSERT INTO festivals (name, slug, description, location, festival_date, image_url, highlights)
VALUES 
(
  'Oguaa Fetu Afahye',
  'oguaa-fetu-afahye',
  'Oguaa Fetu Afahye is the most spectacular traditional festival in Cape Coast, celebrated annually by the people of Oguaa (Cape Coast). This vibrant festival honors the traditional gods and ancestors while celebrating the harvest season. The festival features colorful parades, traditional music, durbar of chiefs, and various cultural performances.',
  'Cape Coast',
  'First Saturday of September',
  'https://images.unsplash.com/photo-1504596217249-cef2ad2d6b53?w=800',
  ARRAY['Grand durbar of chiefs', 'Traditional music and dance', 'Colorful processions', 'Cultural performances', 'Traditional food']
),
(
  'Bakatue Festival',
  'bakatue-festival',
  'The Bakatue Festival is celebrated by the people of Elmina to mark the opening of the lagoon for fishing. This unique festival combines traditional rituals with colorful celebrations, featuring a ceremonial casting of the net by the chief into the lagoon.',
  'Elmina',
  'First Tuesday of July',
  'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800',
  ARRAY['Ceremonial net casting', 'Boat regatta', 'Traditional fishing rituals', 'Cultural performances', 'Community feast']
),
(
  'Edina Bronya',
  'edina-bronya',
  'Edina Bronya, also known as Elmina Christmas, is a unique celebration that blends Christian and traditional beliefs. This festival features elaborate masquerade performances, traditional music, and colorful street parades.',
  'Elmina',
  'December 24-January 2',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
  ARRAY['Masquerade performances', 'Street parades', 'Traditional music', 'Christmas celebrations', 'Community gatherings']
)
ON CONFLICT (slug) DO NOTHING;

-- Insert blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, image_url, category, published)
VALUES 
(
  'Top 5 Must-Visit Destinations in Ghana''s Central Region',
  'top-5-must-visit-destinations',
  'Discover the most incredible attractions in Ghana''s Central Region, from historic castles to pristine rainforests.',
  'Ghana''s Central Region is a treasure trove of history, culture, and natural beauty. Whether you''re interested in learning about the powerful history of the transatlantic slave trade, walking among the treetops of a tropical rainforest, or experiencing vibrant local culture, the Central Region has something for everyone.\n\n## 1. Cape Coast Castle\nThis UNESCO World Heritage Site is a must-visit for anyone interested in African and world history...\n\n## 2. Kakum National Park\nHome to the famous Canopy Walkway, Kakum offers an unforgettable rainforest experience...\n\n## 3. Elmina Castle\nThe oldest European building in sub-Saharan Africa...\n\n## 4. Hans Cottage Botel\nA unique eco-lodge experience unlike any other...\n\n## 5. Local Fishing Villages\nExperience authentic Ghanaian coastal life...',
  'https://images.unsplash.com/photo-1590070103837-4ae6d7c17f86?w=800',
  'Travel Guide',
  true
),
(
  'A Complete Guide to the Kakum Canopy Walkway',
  'complete-guide-kakum-canopy-walkway',
  'Everything you need to know before visiting Africa''s famous treetop walkway in Kakum National Park.',
  'The Kakum Canopy Walkway is one of only three such walkways in all of Africa and offers an unparalleled opportunity to experience the tropical rainforest from a unique perspective.\n\n## What to Expect\nThe walkway consists of seven bridges suspended between trees, reaching heights of up to 40 meters above the forest floor...\n\n## Best Time to Visit\nThe best time to visit is during the dry season from November to February...\n\n## What to Bring\n- Comfortable walking shoes\n- Insect repellent\n- Water bottle\n- Camera...',
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
  'Travel Tips',
  true
),
(
  'Understanding Ghana''s Slave Trade History',
  'understanding-ghana-slave-trade-history',
  'A thoughtful exploration of the history and significance of Cape Coast and Elmina Castles.',
  'Visiting Ghana''s slave castles is a deeply moving experience that connects visitors with one of history''s most tragic chapters. Understanding this history is essential for anyone planning to visit...\n\n## The Door of No Return\nThis symbolic doorway represents the last point of contact enslaved Africans had with their homeland...\n\n## Why Visit?\nVisiting these sites helps us understand and remember this important history...',
  'https://images.unsplash.com/photo-1568483381568-b3a2f8a19c6e?w=800',
  'Culture & History',
  true
)
ON CONFLICT (slug) DO NOTHING;

-- Insert testimonials
INSERT INTO testimonials (customer_name, customer_location, testimonial_text, rating, featured)
VALUES 
(
  'Sarah Johnson',
  'United States',
  'The tour of Cape Coast Castle was incredibly moving and educational. Our guide was knowledgeable and respectful. This experience changed my perspective on history.',
  5,
  true
),
(
  'Michael Okonkwo',
  'Nigeria',
  'Walking on the Kakum Canopy Walkway was the highlight of my trip to Ghana! The views were breathtaking and the guides made sure we were safe throughout.',
  5,
  true
),
(
  'Emma Thompson',
  'United Kingdom',
  'The 2-day Complete Central Region tour was perfectly organized. From the historic castles to the rainforest adventure, every moment was memorable. Highly recommend!',
  5,
  true
),
(
  'Kwame Asante',
  'Ghana',
  'As a Ghanaian, I was proud to see how well our heritage sites are being preserved and presented to visitors. The team is professional and passionate about tourism.',
  5,
  true
),
(
  'David Chen',
  'Singapore',
  'Hans Cottage Botel was such a unique experience! Sleeping above a crocodile lake sounds scary but it was actually peaceful and beautiful. A must-visit!',
  4,
  true
)
ON CONFLICT DO NOTHING;
