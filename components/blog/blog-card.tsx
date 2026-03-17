'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, MapPin } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  category: string;
  location?: string;
  author: string;
  tags?: string[];
  published_at: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    'tourism': 'bg-blue-100 text-blue-800',
    'festival': 'bg-purple-100 text-purple-800',
    'travel-guide': 'bg-green-100 text-green-800',
  };

  const categoryLabels: Record<string, string> = {
    'tourism': 'Tourism Update',
    'festival': 'Festival News',
    'travel-guide': 'Travel Guide',
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image_url || '/images/blog-placeholder.jpg'}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <Badge className={`${categoryColors[post.category] || 'bg-gray-100 text-gray-800'} hover:${categoryColors[post.category] || 'bg-gray-100'}`}>
            {categoryLabels[post.category] || post.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags?.slice(0, 2).map((tag, i) => (
            <span 
              key={i} 
              className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="font-serif text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h2>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(post.published_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </div>
          {post.location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {post.location}
            </span>
          )}
        </div>

        {/* Read More Link */}
        <Link 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Read More
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
}
