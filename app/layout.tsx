import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { withBasePath } from './lib/basePath'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MFM Australia - Mountain of Fire and Miracles Ministries',
  description: 'Official website of Mountain of Fire and Miracles Ministries Australia. Join us for powerful prayers, deliverance, and spiritual transformation.',
  keywords: ['MFM', 'Mountain of Fire', 'Australia', 'Church', 'Prayer', 'Deliverance', 'Christian'],
  authors: [{ name: 'MFM Australia' }],
  creator: 'MFM Australia',
  publisher: 'MFM Australia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mountainoffireau.github.io'),
  openGraph: {
    title: 'MFM Australia - Mountain of Fire and Miracles Ministries',
    description: 'Official website of Mountain of Fire and Miracles Ministries Australia',
    url: 'https://mountainoffireau.github.io/homepage',
    siteName: 'MFM Australia',
    images: [
      {
        url: withBasePath('/favicon.png'),
        width: 1200,
        height: 630,
        alt: 'MFM Australia',
      },
    ],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MFM Australia - Mountain of Fire and Miracles Ministries',
    description: 'Official website of Mountain of Fire and Miracles Ministries Australia',
    images: [withBasePath('/favicon.png')],
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
        <link rel="icon" href={withBasePath('/favicon.png')} type="image/png" />
        <link rel="icon" href={withBasePath('/favicon.ico')} />
        <link rel="apple-touch-icon" href={withBasePath('/favicon.png')} />
        <meta name="theme-color" content="#8B0000" />
        <meta name="msapplication-TileColor" content="#8B0000" />
        <meta property="og:image" content={withBasePath('/favicon.png')} />
      </head>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 