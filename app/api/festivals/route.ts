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
    const month = searchParams.get('month');
    const limit = searchParams.get('limit');

    // Get single festival by slug
    if (slug) {
      const { data, error } = await supabase
        .from('festivals')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Error fetching festival:', error);
        return NextResponse.json(
          { error: 'Festival not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ data });
    }

    // Get all festivals with optional filtering
    let query = supabase
      .from('festivals')
      .select('*');

    // Filter by month if provided
    if (month && month !== 'all') {
      query = query.eq('month', month);
    }

    // Order by created date
    query = query.order('created_at', { ascending: false });
    
    // Limit results if provided
    if (limit) {
      query = query.limit(parseInt(limit));
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching festivals:', error);
      return NextResponse.json(
        { error: 'Failed to fetch festivals' },
        { status: 500 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error in festivals API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
