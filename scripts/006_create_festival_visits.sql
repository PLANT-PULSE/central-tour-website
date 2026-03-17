-- Create festival_visits table for storing visit requests
CREATE TABLE IF NOT EXISTS festival_visits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  festival_id TEXT NOT NULL,
  festival_name TEXT NOT NULL,
  arrival_date DATE NOT NULL,
  number_of_visitors INTEGER NOT NULL CHECK (number_of_visitors >= 1 AND number_of_visitors <= 50),
  contact_email TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_festival_visits_festival_id ON festival_visits(festival_id);
CREATE INDEX IF NOT EXISTS idx_festival_visits_status ON festival_visits(status);
CREATE INDEX IF NOT EXISTS idx_festival_visits_arrival_date ON festival_visits(arrival_date);

-- Add RLS policies for festival_visits
ALTER TABLE festival_visits ENABLE ROW LEVEL SECURITY;

-- Allow authenticated users to insert visits
CREATE POLICY "Allow authenticated users to insert visits"
  ON festival_visits
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow service role to do everything
CREATE POLICY "Allow service role full access"
  ON festival_visits
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to update updated_at
DROP TRIGGER IF EXISTS update_festival_visits_updated_at ON festival_visits;
CREATE TRIGGER update_festival_visits_updated_at
  BEFORE UPDATE ON festival_visits
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample festival visits data (for demonstration)
-- Comment this out if you don't want sample data
-- INSERT INTO festival_visits (festival_id, festival_name, arrival_date, number_of_visitors, contact_email, status)
-- VALUES 
--   ('1', 'Aboakyer Festival', '2026-05-02', 4, 'visitor@example.com', 'pending'),
--   ('6', 'Fetu Afahye', '2026-09-05', 2, 'tourist@example.com', 'confirmed')
-- ON CONFLICT DO NOTHING;
