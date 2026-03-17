import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowLeft, Share2, MapPin, ArrowRight } from "lucide-react"
import { getPostBySlug, getRelatedPosts } from "@/lib/blogs-data"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: `${post.title} | Central Region Tourism Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Fetch related posts based on category
  const relatedPosts = getRelatedPosts(slug, post.category, 3)

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
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px]">
          <Image
            src={post.image_url || '/images/blog-placeholder.jpg'}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="container mx-auto max-w-4xl">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-background/80 hover:text-background mb-4 text-sm transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
              
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className={`${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
                  {categoryLabels[post.category] || post.category}
                </Badge>
                {post.location && (
                  <Badge variant="outline" className="text-white border-white/30">
                    <MapPin className="h-3 w-3 mr-1" />
                    {post.location}
                  </Badge>
                )}
              </div>
              
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4 text-balance">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-background/80">
                <span className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {new Date(post.published_at).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag: string, i: number) => (
                  <span 
                    key={i} 
                    className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <article className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
                {post.excerpt}
              </p>
              <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                {post.content}
              </div>
            </article>

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground">Enjoyed this article? Share it!</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog">
                    More Articles
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-2xl font-bold">Related Articles</h2>
                <Link 
                  href="/blog" 
                  className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1"
                >
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Card key={related.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={related.image_url || '/images/blog-placeholder.jpg'}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`${categoryColors[related.category] || 'bg-gray-100'} text-xs`}>
                          {categoryLabels[related.category] || related.category}
                        </Badge>
                      </div>
                      <h3 className="font-serif font-bold group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {related.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${related.slug}`}
                        className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1"
                      >
                        Read More
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
