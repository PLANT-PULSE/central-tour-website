'use client';

import { useState } from 'react';
import { BlogCard } from './blog-card';
import { Button } from '@/components/ui/button';
import { blogPosts, getPostsByCategory, BlogPost } from '@/lib/blogs-data';

interface BlogGridProps {
  initialPosts?: BlogPost[];
}

const categories = [
  { id: 'all', label: 'All Posts' },
  { id: 'tourism', label: 'Tourism Updates' },
  { id: 'festival', label: 'Festival News' },
  { id: 'travel-guide', label: 'Travel Guides' },
];

export function BlogGrid({ initialPosts = [] }: BlogGridProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts.length > 0 ? initialPosts : blogPosts.filter(p => p.is_published));
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setPosts(getPostsByCategory(category));
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'default' : 'outline'}
            onClick={() => handleCategoryChange(category.id)}
            className="rounded-full"
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h3 className="font-serif text-xl font-bold mb-2">No posts found</h3>
          <p className="text-muted-foreground">
            There are no blog posts in this category yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
