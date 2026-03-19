import { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { BlogGrid } from "@/components/blog"
import { blogPosts, getPostsByCategory } from "@/lib/blogs-data"

export const metadata: Metadata = {
  title: "Tourism Blog - News, Guides & Festival Updates from Ghana's Central Region",
  description: "Discover travel tips, destination guides, and cultural insights about Ghana's Central Region. Read about festivals, tourist attractions, and local experiences.",
}

export default async function BlogPage() {
  // Get all published posts from static data
  const posts = blogPosts.filter(post => post.is_published)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/blog-placeholder.jpg"
              alt="Tourism Blog from Ghana's Central Region"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-accent/40 to-secondary/50" />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tourism & Festival News
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore the latest updates, travel guides, and cultural stories from 
              Ghana's beautiful Central Region.
            </p>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <BlogGrid initialPosts={posts || []} />
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Subscribe to our newsletter to get the latest tourism news, festival updates, 
              and travel guides delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
