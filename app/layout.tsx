import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { withBasePath } from './lib/basePath'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mountain of Fire and Miracles Ministries Australia',
  description: 'Official website of Mountain of Fire and Miracles Ministries (MFM) Australia. Join us for powerful prayer sessions, Bible study, and spiritual growth.',
  keywords: 'MFM, Mountain of Fire, Miracles, Ministries, Australia, Prayer, Bible Study, Church',
  authors: [{ name: 'MFM Australia' }],
  creator: 'MFM Australia',
  publisher: 'MFM Australia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mountainoffireau.github.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mountain of Fire and Miracles Ministries Australia',
    description: 'Official website of Mountain of Fire and Miracles Ministries (MFM) Australia. Join us for powerful prayer sessions, Bible study, and spiritual growth.',
    url: withBasePath('/'),
    siteName: 'MFM Australia',
    images: [
      {
        url: withBasePath('/images/icons/mfm-logo.jpg'),
        width: 1200,
        height: 630,
        alt: 'MFM Australia Logo',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mountain of Fire and Miracles Ministries Australia',
    description: 'Official website of Mountain of Fire and Miracles Ministries (MFM) Australia. Join us for powerful prayer sessions, Bible study, and spiritual growth.',
    images: [withBasePath('/images/icons/mfm-logo.jpg')],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={withBasePath('/images/icons/mfm-logo.jpg')} type="image/jpeg" />
        <link rel="icon" href={withBasePath('/images/icons/mfm-logo.jpg')} />
        <link rel="apple-touch-icon" href={withBasePath('/images/icons/mfm-logo.jpg')} />
        
        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        <meta property="og:image" content={withBasePath('/images/icons/mfm-logo.jpg')} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="MFM Australia Logo" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 