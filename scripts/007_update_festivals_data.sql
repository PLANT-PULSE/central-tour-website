-- Update festivals table with new fields for enhanced festival data
ALTER TABLE festivals 
ADD COLUMN IF NOT EXISTS history TEXT,
ADD COLUMN IF NOT EXISTS people TEXT,
ADD COLUMN IF NOT EXISTS latitude DECIMAL(10, 8),
ADD COLUMN IF NOT EXISTS longitude DECIMAL(11, 8),
ADD COLUMN IF NOT EXISTS gallery_images TEXT[];

-- Update existing festivals with enhanced data
-- Aboakyer Festival
UPDATE festivals 
SET 
  history = 'Aboakyer Festival is a prestigious annual festival celebrated by the Efutu people of Winneba in Ghana''s Central Region. The festival commemorates the migration of the ancestors from the ancient Ghanaian empire to their present location. The name "Aboakyer" literally means "the hunters'' festival" in the Fante language. The highlight of the festival is the deer hunting ceremony where two rival Asafo companies (warrior groups) compete to capture a live deer. The winning team presents the deer to the chief as a sacred sacrifice, believed to ensure prosperity and good harvest for the community.',
  people = 'Efutu people',
  latitude = 5.3568,
  longitude = -0.5931,
  gallery_images = ARRAY['/images/festivals/aboakyir/images.jpeg', '/images/festivals/aboakyir/images (1).jpeg', '/images/festivals/aboakyir/images (2).jpeg']
WHERE slug = 'aboakyer-festival';

-- Apiba Festival
UPDATE festivals 
SET 
  history = 'Apiba Festival is celebrated by the Effutu and Fante communities of Senya Beraku to mark the first maize harvest. The festival is a time of thanksgiving to the gods and ancestors for a successful harvest. Traditional Apiba music, which is characterized by drumming and dancing, is performed throughout the celebration.',
  people = 'Effutu and Fante communities',
  latitude = 5.4186,
  longitude = -0.4603,
  gallery_images = ARRAY['/images/festivals/apiba-festival/download.jpeg', '/images/festivals/apiba-festival/download (1).jpeg']
WHERE slug = 'apiba-festival';

-- Edina Bakatue Festival
UPDATE festivals 
SET 
  history = 'The Edina Bakatue Festival is one of the most important traditional festivals in Elmina, celebrating the opening of the fishing season and the ritual opening of the Benya Lagoon. The festival has deep religious significance as it involves offerings to the sea god and ancestors for a prosperous fishing season.',
  people = 'Fante people of Elmina',
  latitude = 5.0833,
  longitude = -1.3500,
  gallery_images = ARRAY['/images/festivals/edina-bakaue/e0b27940476739.578146b2370b0-scaled-1.jpg', '/images/festivals/edina-bakaue/History_TopImage-1024x437.jpg']
WHERE slug = 'bakatue-festival';

-- Note: The following festivals need to be added if they don't exist
-- These are the new festivals from the requirements that may not be in the database yet

-- Akwambo Festival
INSERT INTO festivals (name, slug, description, location, festival_date, month, image_url, highlights, history, people, latitude, longitude, gallery_images)
VALUES 
(
  'Akwambo Festival',
  'akwambo-festival',
  'Commemorates the clearing of paths by ancestors during migration and symbolizes unity and purification.',
  'Agona and Gomoa areas',
  'August',
  'August',
  '/images/festivals/akwambo-festival/images.jpeg',
  ARRAY['Path clearing ceremony', 'Purification rituals', 'Chief''s durbar', 'Traditional drumming'],
  'Akwambo Festival is celebrated by Fante communities in Agona and Gomoa areas to commemorate the clearing of paths by their ancestors during migration. The festival symbolizes unity, purification, and the preservation of cultural heritage.',
  'Fante communities',
  5.5189,
  -0.6571,
  ARRAY['/images/festivals/akwambo-festival/images.jpeg', '/images/festivals/akwambo-festival/download.jpeg']
)
ON CONFLICT (slug) DO NOTHING;

-- Odambea Festival
INSERT INTO festivals (name, slug, description, location, festival_date, month, image_url, highlights, history, people, latitude, longitude, gallery_images)
VALUES 
(
  'Odambea Festival',
  'odambea-festival',
  'Celebrates the migration of the Nkusukum people from Techiman and symbolizes unity.',
  'Saltpond (Nkusukum Traditional Area)',
  'Last Saturday in August',
  'August',
  '/images/festivals/odambea-festival/download.jpeg',
  ARRAY['Migration commemoration', 'Traditional rites', 'Cultural performances', 'Community feast'],
  'Odambea Festival is celebrated by the Nkusukum people in the Saltpond area to commemorate their migration from Techiman in the Bono Region to their present location. The festival symbolizes unity, cultural identity, and thanksgiving.',
  'Nkusukum people',
  5.2353,
  -0.7089,
  ARRAY['/images/festivals/odambea-festival/download.jpeg', '/images/festivals/odambea-festival/download (1).jpeg']
)
ON CONFLICT (slug) DO NOTHING;

-- Awubia Festival
INSERT INTO festivals (name, slug, description, location, festival_date, month, image_url, highlights, history, people, latitude, longitude, gallery_images)
VALUES 
(
  'Awubia Festival',
  'awubia-festival',
  'Celebrated to honor ancestors and pray for prosperity and successful harvest.',
  'Awutu area',
  'September',
  'September',
  '/images/festivals/Awubia-Festival/images.jpeg',
  ARRAY['Ancestor veneration', 'Harvest thanksgiving', 'Traditional rituals', 'Cultural dance'],
  'Awubia Festival is celebrated by the Awutu people in the Awutu area to honor their ancestors and pray for prosperity and a successful harvest. The festival is a time of spiritual renewal and community celebration.',
  'Awutu people',
  5.4456,
  -0.4023,
  ARRAY['/images/festivals/Awubia-Festival/images.jpeg', '/images/festivals/Awubia-Festival/download.jpeg']
)
ON CONFLICT (slug) DO NOTHING;

-- Okyir Festival
INSERT INTO festivals (name, slug, description, location, festival_date, month, image_url, highlights, history, people, latitude, longitude, gallery_images)
VALUES 
(
  'Okyir Festival',
  'okyir-festival',
  'A cleansing festival performed to remove evil spirits and renew the community.',
  'Anomabo',
  'First Saturday in October',
  'October',
  '/images/festivals/Okyir-Festival/images.jpeg',
  ARRAY['Cleansing rituals', 'Spiritual purification', 'Traditional ceremonies', 'Cultural performances'],
  'Okyir Festival is a cleansing festival celebrated by the Fante people of Anomabo to remove evil spirits and renew the community. The festival is deeply rooted in traditional spiritual beliefs and involves various purification rites.',
  'Fante people',
  5.2833,
  -1.0333,
  ARRAY['/images/festivals/Okyir-Festival/images.jpeg', '/images/festivals/Okyir-Festival/download.jpeg']
)
ON CONFLICT (slug) DO NOTHING;

-- Update Fetu Afahye with enhanced data
UPDATE festivals 
SET 
  history = 'Fetu Afahye is the most spectacular traditional festival in Cape Coast, celebrated by the Oguaa Fante people. The festival is a purification and thanksgiving ceremony performed to cleanse the community of evil spirits and to celebrate the cultural heritage. The name "Fetu Afahye" means "Cape Coast Christmas" in Fante. The celebration features colorful parades, traditional music and dance, durbar of chiefs, and various cultural performances.',
  people = 'Oguaa Fante people',
  latitude = 5.1054,
  longitude = -1.2465,
  gallery_images = ARRAY['/images/festivals/fetu-festiva/download.jpeg', '/images/festivals/fetu-festiva/download (1).jpeg', '/images/festivals/fetu-festiva/download (2).jpeg']
WHERE slug = 'oguaa-fetu-afahye';
