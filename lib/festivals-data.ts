// Festival data types and constants for the Interactive Festival Explorer

export interface Festival {
  id?: string;
  name: string;
  slug: string;
  description: string;
  location: string;
  festival_date: string;
  month: string;
  image_url: string;
  highlights?: string[];
  history?: string;
  people?: string;
  latitude?: number;
  longitude?: number;
  gallery_images?: string[];
}

export interface FestivalVisit {
  id?: string;
  festival_id: string;
  festival_name: string;
  arrival_date: string;
  number_of_visitors: number;
  contact_email: string;
  created_at?: string;
}

// Festival calendar by month
export const FESTIVAL_CALENDAR: Record<string, Festival[]> = {
  'January': [],
  'February': [],
  'March': [],
  'April': [],
  'May': [],
  'June': [],
  'July': [],
  'August': [],
  'September': [],
  'October': [],
  'November': [],
  'December': [],
};

// Festival data with complete information
export const FESTIVALS_DATA: Festival[] = [
  {
    id: '1',
    name: 'Aboakyer Festival',
    slug: 'aboakyer-festival',
    description: 'A deer-hunting festival commemorating the migration of the Efutu people. Two Asafo companies compete to capture a live deer which is presented as a sacred sacrifice.',
    location: 'Winneba',
    festival_date: 'First Saturday in May',
    month: 'May',
    image_url: '/images/festivals/aboakyir/8677-aboakyer-festival.jpg',
    history: 'Aboakyer Festival is a prestigious annual festival celebrated by the Efutu people of Winneba in Ghana\'s Central Region. The festival commemorates the migration of the ancestors from the ancient Ghanaian empire to their present location. The name "Aboakyer" literally means "the hunters\' festival" in the Fante language. The highlight of the festival is the deer hunting ceremony where two rival Asafo companies (warrior groups) compete to capture a live deer. The winning team presents the deer to the chief as a sacred sacrifice, believed to ensure prosperity and good harvest for the community.',
    people: 'Efutu people',
    latitude: 5.3568,
    longitude: -0.5931,
    gallery_images: [
      '/images/festivals/aboakyir/images.jpeg',
      '/images/festivals/aboakyir/images (1).jpeg',
      '/images/festivals/aboakyir/images (2).jpeg',
      '/images/festivals/aboakyir/download.jpeg',
      '/images/festivals/aboakyir/download (1).jpeg',
      '/images/festivals/aboakyir/download (2).jpeg',
    ],
    highlights: ['Deer hunting competition', 'Asafo company parade', 'Traditional music and dance', 'Community sacrifice', 'Chief\'s durbar'],
  },
  {
    id: '2',
    name: 'Apiba Festival',
    slug: 'apiba-festival',
    description: 'Celebrates the first maize harvest and includes traditional Apiba music performances and community thanksgiving.',
    location: 'Senya Beraku',
    festival_date: 'Second Saturday in June',
    month: 'June',
    image_url: '/images/festivals/apiba-festival/download.jpeg',
    history: 'Apiba Festival is celebrated by the Effutu and Fante communities of Senya Beraku to mark the first maize harvest. The festival is a time of thanksgiving to the gods and ancestors for a successful harvest. Traditional Apiba music, which is characterized by drumming and dancing, is performed throughout the celebration. The festival brings together family members who have migrated to various parts of Ghana and the diaspora to celebrate their cultural heritage and strengthen community bonds.',
    people: 'Effutu and Fante communities',
    latitude: 5.4186,
    longitude: -0.4603,
    gallery_images: [
      '/images/festivals/apiba-festival/download.jpeg',
      '/images/festivals/apiba-festival/download (1).jpeg',
      '/images/festivals/apiba-festival/download (2).jpeg',
      '/images/festivals/apiba-festival/download (3).jpeg',
      '/images/festivals/apiba-festival/download (4).jpeg',
    ],
    highlights: ['Maize harvest celebration', 'Apiba music performances', 'Traditional drumming', 'Community thanksgiving', 'Family reunions'],
  },
  {
    id: '3',
    name: 'Edina Bakatue Festival',
    slug: 'edina-bakatue-festival',
    description: 'Celebrates the opening of the fishing season and the ritual opening of the Benya Lagoon.',
    location: 'Elmina',
    festival_date: 'First Tuesday in July',
    month: 'July',
    image_url: '/images/festivals/edina-bakaue/e0b27940476739.578146b2370b0-scaled-1.jpg',
    history: 'The Edina Bakatue Festival is one of the most important traditional festivals in Elmina, celebrating the opening of the fishing season and the ritual opening of the Benya Lagoon. The festival has deep religious significance as it involves offerings to the sea god and ancestors for a prosperous fishing season. The highlight is the ceremonial casting of the net into the lagoon by the chief, followed by traditional boat races. The festival showcases the rich maritime heritage of the Fante people of Elmina.',
    people: 'Fante people of Elmina',
    latitude: 5.0833,
    longitude: -1.3500,
    gallery_images: [
      '/images/festivals/edina-bakaue/e0b27940476739.578146b2370b0-scaled-1.jpg',
      '/images/festivals/edina-bakaue/History_TopImage-1024x437.jpg',
      '/images/festivals/edina-bakaue/download.jpeg',
      '/images/festivals/edina-bakaue/download (1).jpeg',
      '/images/festivals/edina-bakaue/download (2).jpeg',
    ],
    highlights: ['Ceremonial net casting', 'Boat regatta', 'Traditional fishing rituals', 'Chief\'s durbar', 'Cultural performances'],
  },
  {
    id: '4',
    name: 'Akwambo Festival',
    slug: 'akwambo-festival',
    description: 'Commemorates the clearing of paths by ancestors during migration and symbolizes unity and purification.',
    location: 'Agona and Gomoa areas',
    festival_date: 'August',
    month: 'August',
    image_url: '/images/festivals/akwambo-festival/images.jpeg',
    history: 'Akwambo Festival is celebrated by Fante communities in Agona and Gomoa areas to commemorate the clearing of paths by their ancestors during migration. The festival symbolizes unity, purification, and the preservation of cultural heritage. The name "Akwambo" means "to clear the way" in Fante. During the celebration, traditional rites are performed to cleanse the community of evil spirits and to honor the ancestors. The festival features grand durbars of chiefs, traditional drumming, dancing, and the performance of ancestral rites.',
    people: 'Fante communities',
    latitude: 5.5189,
    longitude: -0.6571,
    gallery_images: [
      '/images/festivals/akwambo-festival/images.jpeg',
      '/images/festivals/akwambo-festival/download.jpeg',
      '/images/festivals/akwambo-festival/download (1).jpeg',
      '/images/festivals/akwambo-festival/download (2).jpeg',
      '/images/festivals/akwambo-festival/download (3).jpeg',
    ],
    highlights: ['Path clearing ceremony', 'Purification rituals', 'Chief\'s durbar', 'Traditional drumming', 'Cultural dance performances'],
  },
  {
    id: '5',
    name: 'Odambea Festival',
    slug: 'odambea-festival',
    description: 'Celebrates the migration of the Nkusukum people from Techiman and symbolizes unity.',
    location: 'Saltpond (Nkusukum Traditional Area)',
    festival_date: 'Last Saturday in August',
    month: 'August',
    image_url: '/images/festivals/odambea-festival/download.jpeg',
    history: 'Odambea Festival is celebrated by the Nkusukum people in the Saltpond area to commemorate their migration from Techiman in the Bono Region to their present location. The festival symbolizes unity, cultural identity, and thanksgiving. The name "Odambea" means "welcome home" in the Nkusukum language. During the celebration, the community comes together to perform traditional rites, showcase cultural practices, and honor their ancestors. The festival is an important event for preserving the cultural heritage of the Nkusukum people.',
    people: 'Nkusukum people',
    latitude: 5.2353,
    longitude: -0.7089,
    gallery_images: [
      '/images/festivals/odambea-festival/download.jpeg',
      '/images/festivals/odambea-festival/download (1).jpeg',
      '/images/festivals/odambea-festival/download (2).jpeg',
      '/images/festivals/odambea-festival/download (3).jpeg',
      '/images/festivals/odambea-festival/download (4).jpeg',
    ],
    highlights: ['Migration commemoration', 'Traditional rites', 'Cultural performances', 'Community feast', 'Chief\'s durbar'],
  },
  {
    id: '6',
    name: 'Fetu Afahye',
    slug: 'fetu-afahye',
    description: 'A purification and thanksgiving festival performed to cleanse the community and celebrate cultural heritage.',
    location: 'Cape Coast',
    festival_date: 'First Saturday in September',
    month: 'September',
    image_url: '/images/festivals/fetu-festiva/download.jpeg',
    history: 'Fetu Afahye is the most spectacular traditional festival in Cape Coast, celebrated by the Oguaa Fante people. The festival is a purification and thanksgiving ceremony performed to cleanse the community of evil spirits and to celebrate the cultural heritage. The name "Fetu Afahye" means "Cape Coast Christmas" in Fante. The celebration features colorful parades, traditional music and dance, durbar of chiefs, and various cultural performances. It is a time when the community comes together to reaffirm their identity and honor their ancestors.',
    people: 'Oguaa Fante people',
    latitude: 5.1054,
    longitude: -1.2465,
    gallery_images: [
      '/images/festivals/fetu-festiva/download.jpeg',
      '/images/festivals/fetu-festiva/download (1).jpeg',
      '/images/festivals/fetu-festiva/download (2).jpeg',
      '/images/festivals/fetu-festiva/download (3).jpeg',
      '/images/festivals/fetu-festiva/download (4).jpeg',
    ],
    highlights: ['Purification rituals', 'Grand durbar of chiefs', 'Traditional music and dance', 'Colorful processions', 'Cultural performances'],
  },
  {
    id: '7',
    name: 'Awubia Festival',
    slug: 'awubia-festival',
    description: 'Celebrated to honor ancestors and pray for prosperity and successful harvest.',
    location: 'Awutu area',
    festival_date: 'September',
    month: 'September',
    image_url: '/images/festivals/Awubia-Festival/images.jpeg',
    history: 'Awubia Festival is celebrated by the Awutu people in the Awutu area to honor their ancestors and pray for prosperity and a successful harvest. The festival is a time of spiritual renewal and community celebration. Traditional rites are performed to seek the blessings of the ancestors and to ensure a bountiful harvest. The festival brings together family members from far and wide to participate in the celebrations and strengthen community bonds.',
    people: 'Awutu people',
    latitude: 5.4456,
    longitude: -0.4023,
    gallery_images: [
      '/images/festivals/Awubia-Festival/images.jpeg',
      '/images/festivals/Awubia-Festival/download.jpeg',
      '/images/festivals/Awubia-Festival/download (1).jpeg',
      '/images/festivals/Awubia-Festival/download (2).jpeg',
      '/images/festivals/Awubia-Festival/download (3).jpeg',
    ],
    highlights: ['Ancestor veneration', 'Harvest thanksgiving', 'Traditional rituals', 'Cultural dance', 'Community gatherings'],
  },
  {
    id: '8',
    name: 'Okyir Festival',
    slug: 'okyir-festival',
    description: 'A cleansing festival performed to remove evil spirits and renew the community.',
    location: 'Anomabo',
    festival_date: 'First Saturday in October',
    month: 'October',
    image_url: '/images/festivals/Okyir-Festival/images.jpeg',
    history: 'Okyir Festival is a cleansing festival celebrated by the Fante people of Anomabo to remove evil spirits and renew the community. The festival is deeply rooted in traditional spiritual beliefs and involves various purification rites. During the celebration, traditional priests perform ceremonies to cleanse the community of malevolent spirits and to invoke the blessings of the ancestors. The festival is also a time for the community to come together to celebrate their cultural heritage and strengthen social bonds.',
    people: 'Fante people',
    latitude: 5.2833,
    longitude: -1.0333,
    gallery_images: [
      '/images/festivals/Okyir-Festival/images.jpeg',
      '/images/festivals/Okyir-Festival/download.jpeg',
      '/images/festivals/Okyir-Festival/download (1).jpeg',
      '/images/festivals/Okyir-Festival/download (2).jpeg',
      '/images/festivals/Okyir-Festival/download (3).jpeg',
    ],
    highlights: ['Cleansing rituals', 'Spiritual purification', 'Traditional ceremonies', 'Cultural performances', 'Community renewal'],
  },
];

// Populate the calendar
FESTIVALS_DATA.forEach((festival) => {
  if (FESTIVAL_CALENDAR[festival.month]) {
    FESTIVAL_CALENDAR[festival.month].push(festival);
  }
});

// Month order for display
export const MONTHS_ORDER = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Google Maps embed URL template
export const getGoogleMapsEmbedUrl = (latitude: number, longitude: number, location: string): string => {
  const encodedLocation = encodeURIComponent(`${location}, Central Region, Ghana`);
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!2s${latitude}%2C${longitude}!3s${encodedLocation}!5e0!3m2!1sen!2sgh!4v1600000000000!5m2!1sen!2sgh`;
};

// Calculate days until next festival
export const getDaysUntilNextFestival = (festivalDate: string): number => {
  const currentYear = new Date().getFullYear();
  
  // Parse the festival date string
  let targetDate: Date | null = null;
  
  // Handle various date formats
  const firstSaturdayMay = getFirstSaturdayOfMonth(4, currentYear); // May = 4 (0-indexed)
  const secondSaturdayJune = getNthDayOfMonth(1, 1, 5, currentYear); // Second Saturday of June
  const firstTuesdayJuly = getFirstDayOfWeek(1, 6, currentYear); // First Tuesday of July
  const lastSaturdayAugust = getLastDayOfMonth(5, 7, currentYear); // Last Saturday of August
  const firstSaturdaySeptember = getFirstSaturdayOfMonth(8, currentYear); // September = 8
  const firstSaturdayOctober = getFirstSaturdayOfMonth(9, currentYear); // October = 9
  
  if (festivalDate.toLowerCase().includes('first saturday in may')) {
    targetDate = firstSaturdayMay;
  } else if (festivalDate.toLowerCase().includes('second saturday in june')) {
    targetDate = secondSaturdayJune;
  } else if (festivalDate.toLowerCase().includes('first tuesday in july')) {
    targetDate = firstTuesdayJuly;
  } else if (festivalDate.toLowerCase().includes('august')) {
    targetDate = lastSaturdayAugust;
  } else if (festivalDate.toLowerCase().includes('first saturday in september')) {
    targetDate = firstSaturdaySeptember;
  } else if (festivalDate.toLowerCase().includes('first saturday in october')) {
    targetDate = firstSaturdayOctober;
  }
  
  if (!targetDate) {
    return -1;
  }
  
  // If the date has passed, get next year's date
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (targetDate < today) {
    targetDate.setFullYear(currentYear + 1);
  }
  
  const diffTime = targetDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};

function getFirstSaturdayOfMonth(month: number, year: number): Date {
  const date = new Date(year, month, 1);
  const dayOfWeek = date.getDay(); // 0 = Sunday
  const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
  date.setDate(1 + daysUntilSaturday);
  return date;
}

function getNthDayOfMonth(weekday: number, n: number, month: number, year: number): Date {
  const date = new Date(year, month, 1);
  let count = 0;
  for (let day = 1; day <= 31; day++) {
    if (date.getMonth() !== month) break;
    if (date.getDay() === weekday) {
      count++;
      if (count === n) return date;
    }
    date.setDate(date.getDate() + 1);
  }
  return date;
}

function getFirstDayOfWeek(weekday: number, month: number, year: number): Date {
  const date = new Date(year, month, 1);
  const dayOfWeek = date.getDay();
  const daysUntilTarget = (weekday - dayOfWeek + 7) % 7;
  date.setDate(1 + daysUntilTarget);
  return date;
}

function getLastDayOfMonth(weekday: number, month: number, year: number): Date {
  const date = new Date(year, month + 1, 0);
  const dayOfWeek = date.getDay();
  const daysBack = (dayOfWeek - weekday + 7) % 7;
  date.setDate(date.getDate() - daysBack);
  return date;
}

// Get next upcoming festival
export const getNextFestival = (): { festival: Festival; daysUntil: number } | null => {
  let nextFestival: Festival | null = null;
  let minDays = Infinity;
  
  for (const festival of FESTIVALS_DATA) {
    const days = getDaysUntilNextFestival(festival.festival_date);
    if (days >= 0 && days < minDays) {
      minDays = days;
      nextFestival = festival;
    }
  }
  
  if (nextFestival && minDays !== Infinity) {
    return { festival: nextFestival, daysUntil: minDays };
  }
  
  return null;
};
