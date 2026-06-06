-- Blog Posts Table
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  meta_description TEXT,
  category TEXT NOT NULL,
  author TEXT DEFAULT 'Equipo Vakdor',
  content TEXT NOT NULL,
  featured_image_url TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  seo_keywords TEXT[],
  read_time_minutes INTEGER,
  views INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published posts
CREATE POLICY "Public can read published posts" ON blog_posts
  FOR SELECT USING (is_published = true);

-- Policy: Only authenticated users can insert/update (for admin)
CREATE POLICY "Authenticated users can manage posts" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');

-- Index for faster slug lookups
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_published ON blog_posts(is_published, published_at DESC);

-- Function to increment views
CREATE OR REPLACE FUNCTION increment_views(post_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE blog_posts SET views = views + 1 WHERE id = post_id;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
