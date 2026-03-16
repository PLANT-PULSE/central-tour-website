-- Update mission and vision statements in company_info

BEGIN TRANSACTION;

UPDATE company_info SET 
  mission = 'Our mission is to promote tourism in Ghana''s Central Region by providing a reliable digital platform that allows visitors to discover cultural landmarks, plan memorable trips, and conveniently book transportation to the region''s most iconic destinations.',
  vision = 'To be the leading digital tourism platform in Ghana, making the Central Region the most preferred destination for cultural, historical, and eco-tourism experiences in West Africa.'
WHERE id = 1;

-- Also update if there's no existing record
INSERT INTO company_info (company_name, slogan, mission, vision, story, phone, email, whatsapp, address, facebook_url, instagram_url, twitter_url)
VALUES (
  'Central Region Tourism',
  'Discover the Heart of Ghana',
  'Our mission is to promote tourism in Ghana''s Central Region by providing a reliable digital platform that allows visitors to discover cultural landmarks, plan memorable trips, and conveniently book transportation to the region''s most iconic destinations.',
  'To be the leading digital tourism platform in Ghana, making the Central Region the most preferred destination for cultural, historical, and eco-tourism experiences in West Africa.',
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

COMMIT;
