// Static blog data for the Central Tour website
// This file contains tourism news, festival updates, and travel guides for Ghana's Central Region

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  category: 'tourism' | 'festival' | 'travel-guide';
  location?: string;
  author: string;
  tags: string[];
  published_at: string;
  is_published: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Discover the Magic of Kakum Canopy Walkway',
    slug: 'discover-kakum-canopy-walkway',
    excerpt: 'Experience the thrill of walking 30 meters above the forest floor on Ghana\'s most famous canopy walkway.',
    content: `The Kakum Canopy Walkway is one of Ghana's most thrilling tourist attractions, offering a unique perspective on the rainforest ecosystem.

Located in the Central Region of Ghana, approximately 30 kilometers from the coastal city of Cape Coast, Kakum National Park is a paradise for nature lovers and adventure seekers alike. The canopy walkway, suspended 30 meters (100 feet) above the forest floor, provides visitors with an unparalleled view of the rainforest canopy.

## The Experience

The walkway consists of seven suspended bridges spanning 330 meters through the forest. As you walk across the swaying bridges, you'll be surrounded by the sights and sounds of the tropical rainforest. Look out for colorful birds, butterflies, and perhaps even monkeys swinging through the trees above you.

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

The Kakum Canopy Walkway is truly a must-see experience for any visitor to Ghana's Central Region, offering a unique blend of adventure and natural beauty.`,
    image_url: '/images/kakum-national-park.jpg',
    category: 'travel-guide',
    location: 'Kakum',
    author: 'Central Region Tourism',
    tags: ['Nature', 'Adventure', 'Wildlife'],
    published_at: '2024-01-15T10:00:00Z',
    is_published: true,
  },
  {
    id: '2',
    title: 'A Complete Guide to Visiting Elmina Castle',
    slug: 'complete-guide-to-elmina-castle',
    excerpt: 'Learn about the history, significance, and practical tips for visiting Elmina Castle, Ghana\'s oldest European building.',
    content: `Elmina Castle, located in the historic town of Elmina along Ghana's Central Coast, is a powerful reminder of the transatlantic slave trade and a testament to the resilience of the human spirit.

## Historical Background

Built in 1482 by Portuguese traders, Elmina Castle is the oldest European building in Sub-Saharan Africa. Originally named São Jorge da Mina (St. George of the Mine), the castle was primarily established as a trading post for gold and later became one of the largest slave trading forts on the West African coast.

## What to Expect

Today, Elmina Castle serves as a museum and memorial. Visitors can explore the various chambers, including the dungeons where enslaved Africans were held before being loaded onto ships bound for the Americas.

The guided tours, led by knowledgeable local guides, provide powerful insights into the castle's history and the broader context of the slave trade.

## Opening Hours

- Daily: 8:00 AM - 5:00 PM
- Closed on Christmas Day and New Year's Day

## Admission Fees

- Foreign Visitors: $15
- ECOWAS Citizens: GH₵ 20
- Children under 12: Free

## Tips for Your Visit

1. Allocate at least 2-3 hours for a thorough exploration
2. Wear comfortable walking shoes
3. Bring water and sunscreen
4. Consider combining with a visit to Cape Coast Castle

Elmina Castle is not just a tourist attraction but a place of remembrance and education. It stands as a powerful testament to history and a reminder of the importance of unity and understanding.`,
    image_url: '/images/elmina-castle.jpg',
    category: 'travel-guide',
    location: 'Elmina',
    author: 'Central Region Tourism',
    tags: ['History', 'Culture', 'Heritage'],
    published_at: '2024-02-01T10:00:00Z',
    is_published: true,
  },
  {
    id: '3',
    title: 'Fetu Afahye: The Grand Purification Festival of Cape Coast',
    slug: 'fetu-afahye-cape-coast',
    excerpt: 'Discover the rich cultural heritage behind Cape Coast\'s most spectacular traditional festival.',
    content: `Fetu Afahye is the most spectacular traditional festival in Cape Coast, celebrated annually by the people of Oguaa (Cape Coast). This vibrant festival honors the traditional gods and ancestors while celebrating the harvest season.

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
- The forecourt of the various chiefs' residences

## Travel Tips

1. Book accommodations well in advance
2. Arrive early for the best viewing positions
3. Respect local customs and traditions
4. Ask permission before photographing ceremonies

Fetu Afahye offers visitors a unique opportunity to experience the rich cultural heritage of Ghana's Central Region.`,
    image_url: '/images/fetu-afahye.jpg',
    category: 'festival',
    location: 'Cape Coast',
    author: 'Central Region Tourism',
    tags: ['Festival', 'Culture', 'Tradition'],
    published_at: '2024-03-10T10:00:00Z',
    is_published: true,
  },
  {
    id: '4',
    title: 'Top 5 Must-Visit Destinations in Ghana\'s Central Region',
    slug: 'top-5-destinations-central-region',
    excerpt: 'From historic castles to pristine rainforests, here are the top destinations you shouldn\'t miss.',
    content: `Ghana's Central Region is a treasure trove of historical sites, natural wonders, and cultural experiences. Here are the top 5 destinations you must visit:

## 1. Cape Coast Castle

A UNESCO World Heritage Site and powerful reminder of the transatlantic slave trade. The museum and dungeon tours provide profound historical insights.

## 2. Elmina Castle

The oldest European building in Sub-Saharan Africa, offering a glimpse into Ghana's colonial past and the slave trade era.

## 3. Kakum National Park

Home to the famous canopy walkway, this pristine rainforest offers adventure and nature lovers an unforgettable experience.

## 4. Hans Cottage Botel

A unique eco-lodge built on a lake inhabited by crocodiles. Enjoy the peaceful atmosphere and local cuisine.

## 5. Fort St. Jago

For the best panoramic views of Elmina and the coast, hike up to this historic fort. The sunset views are particularly spectacular.

Each destination offers a unique perspective on Ghana's rich heritage and natural beauty. Start planning your Central Region adventure today!`,
    image_url: '/images/cape-coast-castle.jpg',
    category: 'tourism',
    location: 'Central Region',
    author: 'Central Region Tourism',
    tags: ['Travel', 'Destinations', 'Guide'],
    published_at: '2024-04-05T10:00:00Z',
    is_published: true,
  },
  {
    id: '5',
    title: 'Aboakyer Festival: The Hunter\'s Sacred Tradition',
    slug: 'aboakyer-festival-winneba',
    excerpt: 'Experience the thrilling deer hunt and vibrant celebrations of Winneba\'s most important festival.',
    content: `Aboakyer Festival is one of Ghana's most prestigious traditional festivals, celebrated by the Efutu people of Winneba in the Central Region. The festival, which translates to "the hunters' festival," commemorates the migration of the ancestors and gives thanks for a successful harvest.

## When It Takes Place

The festival is held on the first Saturday of May each year, drawing visitors from across Ghana and beyond.

## The Highlights

The main event is the deer hunt, where two rival Asafo companies (traditional warrior groups) compete to capture a live deer. The hunt begins at dawn, with the teams racing into the bush to find and capture the sacred animal.

The winning team presents the deer to the chief as a sacrifice, believed to ensure prosperity and good fortune for the community.

## The Celebrations

- Traditional drumming and dancing
- Grand durbar of chiefs
- Street processions
- Cultural performances

## Travel Tips

1. Arrive early to secure a good viewing spot
2. Respect the sacred nature of the event
3. Wear comfortable shoes for standing all day
4. Bring camera and sunscreen

Aboakyer Festival is a must-see for anyone interested in experiencing authentic Ghanaian culture and traditions.`,
    image_url: '/images/oguaa-fetu.jpg',
    category: 'festival',
    location: 'Winneba',
    author: 'Central Region Tourism',
    tags: ['Festival', 'Culture', 'Tradition'],
    published_at: '2024-05-01T10:00:00Z',
    is_published: true,
  },
  {
    id: '6',
    title: 'Best Time to Visit the Central Region of Ghana',
    slug: 'best-time-to-visit-central-region',
    excerpt: 'Plan your trip perfectly with our comprehensive guide to the best seasons and months for visiting Ghana\'s Central Region.',
    content: `The Central Region of Ghana offers unique experiences year-round, but certain times are better for specific activities. Here's your complete guide to planning the perfect trip.

## Dry Season (November - March)

The dry season is generally considered the best time to visit:
- Perfect for beach activities and sightseeing
- Ideal for visiting historical sites like castles
- Canopy walkway at Kakum is at its best
- Less rainfall means easier transportation

## Green Season (April - June)

The green season has its own charm:
- Lush, green landscapes are stunning
- Fewer tourists at popular attractions
- Lower accommodation prices
- Experience local festivals like Aboakyer

## Festival Season (September - October)

If you want to experience Ghanaian culture:
- Fetu Afahye in September
- Beautiful weather for outdoor events
- Great for photography
- Book accommodations early

## What to Pack

Regardless of when you visit:
- Light, breathable clothing
- Comfortable walking shoes
- Sunscreen and hat
- Rain jacket (especially April-June)
- Camera for capturing memories

The Central Region welcomes visitors throughout the year with its warm hospitality and rich cultural heritage.`,
    image_url: '/images/nature-adventure.jpg',
    category: 'travel-guide',
    location: 'Central Region',
    author: 'Central Region Tourism',
    tags: ['Travel', 'Planning', 'Guide'],
    published_at: '2024-06-15T10:00:00Z',
    is_published: true,
  },
  {
    id: '7',
    title: 'Edina Bakatue Festival: The Sea Goddess Celebration',
    slug: 'edina-bakatue-festival',
    excerpt: 'Discover the ancient traditions of Elmina\'s most important festival honoring the sea goddess.',
    content: `Edina Bakatue Festival is one of the oldest and most significant festivals in Ghana's Central Region, celebrated by the people of Elmina. This festival honors the sea goddess and marks the beginning of the fishing season.

## Historical Significance

The festival dates back centuries and is deeply connected to the fishing traditions of the people of Elmina. It gives thanks to the sea goddess for her blessings and requests protection for fishermen during the new fishing season.

## When It Takes Place

The festival is held on the first Tuesday of August each year, attracting visitors from far and wide.

## Festival Highlights

- **Net Casting Ceremony**: Traditional fishing nets are cast into the sea
- **Grand Durbar**: Chiefs and elders gather in traditional attire
- **Drumming and Dancing**: Cultural performances throughout the day
- **Processions**: Colorful processions through the town

## What to Expect

Visitors can expect:
- Authentic cultural experiences
- Traditional Fante cuisine
- Warm hospitality from locals
- Unique photo opportunities

## Travel Tips

1. Arrive early to experience the morning ceremonies
2. Respect local customs and traditions
3. Try local delicacies at the food stalls
4. Don't miss the grand durbar in the afternoon

Edina Bakatue offers a unique glimpse into the rich maritime heritage of Ghana's Central Region.`,
    image_url: '/images/bakatue.jpg',
    category: 'festival',
    location: 'Elmina',
    author: 'Central Region Tourism',
    tags: ['Festival', 'Culture', 'Sea'],
    published_at: '2024-07-20T10:00:00Z',
    is_published: true,
  },
  {
    id: '8',
    title: 'New Tourism Developments in Cape Coast',
    slug: 'new-tourism-developments-cape-coast',
    excerpt: 'The Central Region is seeing exciting new tourism infrastructure and attractions. Here\'s what\'s new and upcoming.',
    content: `Ghana's Central Region continues to evolve as a premier tourist destination, with new developments enhancing the visitor experience. Here's what's new in Cape Coast and surrounding areas.

## Recent Developments

### Enhanced Visitor Facilities
- Improved parking facilities at major attractions
- New visitor centers at Cape Coast and Elmina Castles
- Upgraded rest areas and amenities

### Tourism Infrastructure
- New boutique hotels and guesthouses
- Improved road networks connecting attractions
- Enhanced signage and tourist information points

### Cultural Tourism
- New museum exhibits at historical sites
- Expanded guided tour options
- Cultural village experiences

## Upcoming Projects

The region is set to see even more improvements:
- Eco-lodge developments near Kakum
- Heritage trail expansions
- Community-based tourism initiatives

## What This Means for Visitors

These developments mean:
- Better organized attractions
- More comfortable travel experiences
- More accommodation options
- Enhanced cultural experiences

## Sustainable Tourism

Many of these developments focus on sustainable tourism practices, ensuring that the region's natural and cultural heritage is preserved for future generations.

The Central Region of Ghana continues to invest in tourism infrastructure, making it an even more attractive destination for international and domestic visitors.`,
    image_url: '/images/heritage-trail.jpg',
    category: 'tourism',
    location: 'Cape Coast',
    author: 'Central Region Tourism',
    tags: ['Tourism', 'Development', 'News'],
    published_at: '2024-08-10T10:00:00Z',
    is_published: true,
  },
];

// Helper function to get posts by category
export function getPostsByCategory(category: string): BlogPost[] {
  if (category === 'all') {
    return blogPosts.filter(post => post.is_published);
  }
  return blogPosts.filter(post => post.is_published && post.category === category);
}

// Helper function to get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Helper function to get related posts
export function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.is_published && post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}
