import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-source-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Central Region Tourism | Discover the Heart of Ghana',
    template: '%s | Central Region Tourism'
  },
  description: 'Explore Ghana\'s Central Region - home to Cape Coast Castle, Elmina Castle, Kakum National Park, and rich cultural heritage. Book tours, transportation, and unforgettable experiences.',
  keywords: ['Ghana tourism', 'Cape Coast', 'Elmina Castle', 'Kakum National Park', 'African travel', 'heritage tours', 'slave castles', 'Ghana travel'],
  authors: [{ name: 'Central Region Tourism' }],
  creator: 'Central Region Tourism',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://centralregiontourism.com',
    siteName: 'Central Region Tourism',
    title: 'Central Region Tourism | Discover the Heart of Ghana',
    description: 'Explore Ghana\'s Central Region - home to Cape Coast Castle, Elmina Castle, Kakum National Park, and rich cultural heritage.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Central Region Tourism | Discover the Heart of Ghana',
    description: 'Explore Ghana\'s Central Region - home to Cape Coast Castle, Elmina Castle, Kakum National Park.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1a5f7a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
