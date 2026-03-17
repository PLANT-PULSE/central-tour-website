-- Update blog_posts table with new columns
ALTER TABLE blog_posts 
ADD COLUMN IF NOT EXISTS tags TEXT[],
ADD COLUMN IF NOT EXISTS location TEXT,
ADD COLUMN IF NOT EXISTS is_published BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS published_at TIMESTAMP WITH TIME ZONE;

-- Enable RLS if not already enabled
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for blog_posts
DROP POLICY IF EXISTS "Public blogs are viewable by everyone" ON blog_posts;
CREATE POLICY "Public blogs are viewable by everyone" ON blog_posts
  FOR SELECT
  TO public
  USING (true);

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, image_url, category, location, author, tags, is_published, published_at)
VALUES 
(
  'Discover the Magic of Kakum Canopy Walkway',
  'discover-kakum-canopy-walkway',
  'Experience the thrill of walking 30 meters above the forest floor on Ghana''s most famous canopy walkway.',
  'The Kakum Canopy Walkway is one of Ghana''s most thrilling tourist attractions, offering a unique perspective on the rainforest ecosystem.

Located in the Central Region of Ghana, approximately 30 kilometers from the coastal city of Cape Coast, Kakum National Park is a paradise for nature lovers and adventure seekers alike. The canopy walkway, suspended 30 meters (100 feet) above the forest floor, provides visitors with an unparalleled view of the rainforest canopy.

## The Experience

The walkway consists of seven suspended bridges spanning 330 meters through the forest. As you walk across the swaying bridges, you''ll be surrounded by the sights and sounds of the tropical rainforest. Look out for colorful birds, butterflies, and perhaps even monkeys swinging through the trees above you.

## Best Time to Visit

The best time to experience the canopy walkway is during the dry season, from November to March, when the weather is more predictable and the paths are less muddy. However, the canopy walkway is open year-round, and each season offers a unique experience.

## What to Bring

- Comfortable hiking shoes
- Camera with a good zoom lens
- Binoculars for bird watching
- Light, breathable clothing
- Rain jacket (especially in rainy season)

## Getting There

Kakum National Park is easily accessible from Accra (about 4 hours drive) or Cape Coast (about 30 minutes drive). Guided tours are available from most major tourist areas in the Central Region.

The Kakum Canopy Walkway is truly a must-see experience for any visitor to Ghana''s Central Region, offering a unique blend of adventure and natural beauty.',
  '/images/kakum-national-park.jpg',
  'travel-guide',
  'Kakum',
  'Central Region Tourism',
  ARRAY['Nature', 'Adventure', 'Wildlife'],
  true,
  NOW()
),
(
  'A Complete Guide to Visiting Elmina Castle',
  'complete-guide-to-elmina-castle',
  'Learn about the history, significance, and practical tips for visiting Elmina Castle, Ghana''s oldest European building.',
  'Elmina Castle, located in the historic town of Elmina along Ghana''s Central Coast, is a powerful reminder of the transatlantic slave trade and a testament to the resilience of the human spirit.

## Historical Background

Built in 1482 by Portuguese traders, Elmina Castle is the oldest European building in Sub-Saharan Africa. Originally named São Jorge da Mina (St. George of the Mine), the castle was primarily established as a trading post for gold and later became one of the largest slave trading forts on the West African coast.

## What to Expect

Today, Elmina Castle serves as a museum and memorial. Visitors can explore the various chambers, including the dungeons where enslaved Africans were held before being loaded onto ships bound for the Americas.

The guided tours, led by knowledgeable local guides, provide powerful insights into the castle''s history and the broader context of the slave trade.

## Opening Hours

- Daily: 8:00 AM - 5:00 PM
- Closed on Christmas Day and New Year''s Day

## Admission Fees

- Foreign Visitors: $15
- ECOWAS Citizens: GH₵ 20
- Children under 12: Free

## Tips for Your Visit

1. Allocate at least 2-3 hours for a thorough exploration
2. Wear comfortable walking shoes
3. Bring water and sunscreen
4. Consider combining with a visit to Cape Coast Castle

Elmina Castle is not just a tourist attraction but a place of remembrance and education. It stands as a powerful testament to history and a reminder of the importance of unity and understanding.',
  '/images/elmina-castle.jpg',
  'travel-guide',
  'Elmina',
  'Central Region Tourism',
  ARRAY['History', 'Culture', 'Heritage'],
  true,
  NOW()
),
(
  'Fetu Afahye: The Grand Purification Festival of Cape Coast',
  'fetu-afahye-cape-coast',
  'Discover the rich cultural heritage behind Cape Coast''s most spectacular traditional festival.',
  'Fetu Afahye is the most spectacular traditional festival in Cape Coast, celebrated annually by the people of Oguaa (Cape Coast). This vibrant festival honors the traditional gods and ancestors while celebrating the harvest season.

## When It Takes Place

Fetu Afahye is celebrated on the first Saturday of September each year. The festival draws thousands of visitors from across Ghana and the diaspora.

## The Celebrations

The festival features:
- **Grand Durbars of Chiefs**: Traditional rulers gather in their full regalia
- **Traditional Music and Dance**: Performances by local cultural groups
- **Colorful Processions**: Through the streets of Cape Coast
- **Traditional Food**: Local delicacies served throughout the celebrations

## Cultural Significance

The name "Fetu Afahye" literally means "Cape Coast Christmas" in the Fante language. It is a time of purification, thanksgiving, and renewal. The festival brings together the community to celebrate their cultural heritage and honor their ancestors.

## Best Viewing Spots

- The Obetsebi Lamptey Square
- The streets leading to the Central Market
- The forecourt of the various chiefs'' residences

## Travel Tips

1. Book accommodations well in advance
2. Arrive early for the best viewing positions
3. Respect local customs and traditions
4. Ask permission before photographing ceremonies

Fetu Afahye offers visitors a unique opportunity to experience the rich cultural heritage of Ghana''s Central Region.',
  '/images/fetu-afahye.jpg',
  'festival',
  'Cape Coast',
  'Central Region Tourism',
  ARRAY['Festival', 'Culture', 'Tradition'],
  true,
  NOW()
),
(
  'Top 5 Must-Visit Destinations in Ghana''s Central Region',
  'top-5-destinations-central-region',
  'From historic castles to pristine rainforests, here are the top destinations you shouldn''t miss.',
  'Ghana''s Central Region is a treasure trove of historical sites, natural wonders, and cultural experiences. Here are the top 5 destinations you must visit:

## 1. Cape Coast Castle

A UNESCO World Heritage Site and powerful reminder of the transatlantic slave trade. The museum and dungeon tours provide profound historical insights.

## 2. Elmina Castle

The oldest European building in Sub-Saharan Africa, offering a glimpse into Ghana''s colonial past and the slave trade era.

## 3. Kakum National Park

Home to the famous canopy walkway, this pristine rainforest offers adventure and nature lovers an unforgettable experience.

## 4. Hans Cottage Botel

A unique eco-lodge built on a lake inhabited by crocodiles. Enjoy the peaceful atmosphere and local cuisine.

## 5. Fort St. Jago

For the best panoramic views of Elmina and the coast, hike up to this historic fort. The sunset views are particularly spectacular.

Each destination offers a unique perspective on Ghana''s rich heritage and natural beauty. Start planning your Central Region adventure today!',
  '/images/cape-coast-castle.jpg',
  'tourism',
  'Central Region',
  'Central Region Tourism',
  ARRAY['Travel', 'Destinations', 'Guide'],
  true,
  NOW()
),
(
  'Aboakyer Festival: The Hunter''s Sacred Tradition',
  'aboakyer-festival-winneba',
  'Experience the thrilling deer hunt and vibrant celebrations of Winneba''s most important festival.',
  'Aboakyer Festival is one of Ghana''s most prestigious traditional festivals, celebrated by the Efutu people of Winneba in the Central Region. The festival, which translates to "the hunters'' festival," commemorates the migration of the ancestors and gives thanks for a successful harvest.

## When It Takes Place

The festival is held on the first Saturday of May each year, drawing visitors from across Ghana and beyond.

## The Highlights

The main event is the deer hunt, where two rival Asafo companies (traditional warrior groups) compete to capture a live deer. The hunt begins at dawn, with the teams racing into the bush to find and capture the sacred animal.

The winning team presents the deer to the chief as a sacrifice, believed to ensure prosperity and good fortune for the community.

## The Celebrations

- Traditional drumming and dancing
- Grand durbar of chiefs
- Street processions
- Traditional food and festivities

## Travel Information

Winneba is located about 90 minutes drive from Accra. Accommodation options range from budget guesthouses to comfortable hotels.

Aboakyer is a must-see for anyone interested in authentic Ghanaian cultural traditions.',
  '/images/festivals/aboakyir/8677-aboakyer-festival.jpg',
  'festival',
  'Winneba',
  'Central Region Tourism',
  ARRAY['Festival', 'Culture', 'Tradition'],
  true,
  NOW()
),
(
  'Best Time to Visit Ghana''s Central Region',
  'best-time-to-visit-central-region',
  'Plan your trip perfectly with our comprehensive guide to the best seasons and weather in Ghana''s Central Region.',
  'Ghana''s Central Region offers incredible experiences year-round, but the timing of your visit can enhance your experience. Here''s our comprehensive guide:

## Dry Season (November - March)

**Best Overall Time to Visit**

- Sunny days and lower humidity
- Ideal for beach activities and sightseeing
- Perfect for wildlife viewing in Kakum
- Popular festival season (Fetu Afahye in September)

**Average Temperatures:** 25-32°C (77-90°F)

## Wet Season (April - October)

**Experience the Lush Green Season**

- Rainfall usually occurs in short afternoon showers
- Lush, green landscapes and waterfalls at their best
- Fewer tourists at major attractions
- Lower accommodation prices

**Average Temperatures:** 24-30°C (75-86°F)

## Shoulder Seasons

**April-May & October-November**
- Mix of both seasons
- Good deals on accommodations
- Some festivals during these periods

## Special Considerations

- **December-January:** Peak tourist season, book early
- **August:** Heaviest rainfall, but still visitable
- **September:** Fetu Afahye festival - book months in advance

No matter when you visit, Ghana''s Central Region welcomes you with warm hospitality and unforgettable experiences.',
  '/images/hero-ghana.jpg',
  'travel-guide',
  'Central Region',
  'Central Region Tourism',
  ARRAY['Travel', 'Guide', 'Planning'],
  true,
  NOW()
)
ON CONFLICT (slug) DO NOTHING;

-- Update existing posts to use is_published if they have published=true
UPDATE blog_posts 
SET is_published = published 
WHERE is_published IS NULL OR is_published = false;

-- Update published_at for existing posts
UPDATE blog_posts 
SET published_at = created_at 
WHERE published_at IS NULL;
