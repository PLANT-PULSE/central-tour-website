import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');

    // Get single destination by slug
    if (slug) {
      const { data, error } = await supabase
        .from('destinations')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Error fetching destination:', error);
        return NextResponse.json(
          { error: 'Destination not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ data });
    }

    // Get all destinations with optional filtering
    let query = supabase
      .from('destinations')
      .select('*');

    // Filter by featured if provided
    if (featured === 'true') {
      query = query.eq('is_featured', true);
    }

    // Order by created date
    query = query.order('created_at', { ascending: false });
    
    // Limit results if provided
    if (limit) {
      query = query.limit(parseInt(limit));
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching destinations:', error);
      return NextResponse.json(
        { error: 'Failed to fetch destinations' },
        { status: 500 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error in destinations API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
