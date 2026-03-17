import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = searchParams.get('limit');
    const slug = searchParams.get('slug');

    // Get single post by slug
    if (slug) {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) {
        console.error('Error fetching blog:', error);
        return NextResponse.json(
          { error: 'Blog not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ data });
    }

    // Get all published blogs with optional filtering
    let query = supabase
      .from('blog_posts')
      .select('*')
      .eq('is_published', true);

    // Filter by category if provided
    if (category && category !== 'all') {
      query = query.eq('category', category);
    }

    // Order by published date
    query = query.order('published_at', { ascending: false });
    
    // Limit results if provided
    if (limit) {
      query = query.limit(parseInt(limit));
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching blogs:', error);
      return NextResponse.json(
        { error: 'Failed to fetch blogs' },
        { status: 500 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error in blogs API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
