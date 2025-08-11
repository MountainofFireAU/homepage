import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'MFM Australia - Mountain of Fire and Miracles Ministries',
  description: 'Welcome to Mountain of Fire and Miracles Ministries Australia. Experience deliverance, healing, and miracles through prayer and worship.',
  keywords: 'MFM, Mountain of Fire, Miracles, Ministry, Australia, Prayer, Deliverance, Church, Worship',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6A0DAD" />
        <meta name="description" content="Mountain of Fire and Miracles Ministries Australia - Experience deliverance, healing, and miracles through prayer and worship." />
        <meta name="keywords" content="MFM Australia, Mountain of Fire, Miracles, Ministry, Prayer, Deliverance, Church, Worship, Sydney, Melbourne, Brisbane, Perth" />
        <meta property="og:title" content="MFM Australia - Mountain of Fire and Miracles Ministries" />
        <meta property="og:description" content="Experience deliverance, healing, and miracles through prayer and worship at MFM Australia." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.png" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 