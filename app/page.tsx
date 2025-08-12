import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFire, FaPray, FaHeart, FaUsers, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPlay, FaArrowRight, FaGlobe } from 'react-icons/fa'
import ImageSlideshow from './components/ImageSlideshow'
import { withBasePath } from './lib/basePath'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-mfm-dark via-mfm-primary to-mfm-dark text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={withBasePath('/images/backgrounds/mfm-bg.jpg')}
            alt="MFM Church Service Background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to the Mountain of Fire and Miracles Ministries
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-mfm-secondary font-medium animate-slide-up">
              "Nobody comes to the Mountain of Fire and Miracles Ministries by chance.<br />
              If you are here, God brought you here."
            </p>
            <p className="text-lg mb-8 text-gray-200">
              Dr D.K. Olukoya, General Overseer MFM Worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources" className="btn-primary inline-flex items-center gap-2">
                <FaPlay /> Resources
              </Link>
              <Link href="/about" className="btn-outline inline-flex items-center gap-2">
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-mfm-secondary opacity-20">
          <FaFire size={60} />
        </div>
        <div className="absolute bottom-10 right-10 text-mfm-secondary opacity-20">
          <FaPray size={60} />
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-mfm-gray py-16">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-semibold text-mfm-dark mb-4">
            "But upon mount Zion shall be deliverance, and there shall be holiness;<br />
            and YOU shall possess YOUR possessions."
          </blockquote>
          <cite className="text-lg text-mfm-primary font-medium">Obadiah 1:17</cite>
        </div>
      </section>

      {/* Image Slideshow */}
      <ImageSlideshow />

      {/* Key Programs */}
      <section className="py-16 bg-mfm-gray">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Our Programs MFM Australia</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Sunday Worship Service */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaCalendarAlt className="text-mfm-primary text-2xl" />
                <h3 className="text-2xl font-bold text-mfm-dark">Sunday Worship Service</h3>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "Let everything that has breath praise the Lord!" - Psalm 150:6
              </blockquote>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-mfm-primary mt-1" />
                  <div>
                    <strong>Canberra:</strong> Frencham Pl, Downer ACT
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-mfm-primary mt-1" />
                  <div>
                    <strong>Sydney:</strong> Mercure Hotel, 424-458 Hoxton Park Rd, Prestons
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-mfm-primary" />
                  <span><strong>Zoom:</strong> Sundays @ 10AM (AEDT)</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4"> </p>
            </div>

            {/* Command the Week */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-mfm-primary text-2xl" />
                <h3 className="text-2xl font-bold text-mfm-dark">Command the Week (Mondays)</h3>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "You will decree a thing, and it will be established!" - Job 22:28
              </blockquote>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-center gap-3">
                  <FaClock className="text-mfm-primary" />
                  <span><strong>Time:</strong> 5:00AM - 6:00AM (AEDT) on Zoom</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaFire className="text-mfm-primary" />
                  <span><strong>Prophetic prayers</strong> to dominate your week!</span>
                </div>
              </div>
            </div>

            {/* Night of Solution */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaPray className="text-mfm-primary text-2xl" />
                <h3 className="text-2xl font-bold text-mfm-dark">Night of Solution</h3>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "Call to Me, and I will answer you!" - Jeremiah 33:3
              </blockquote>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-mfm-primary" />
                  <span><strong>Monthly deliverance vigil</strong> - Last Friday of every month</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaFire className="text-mfm-primary" />
                  <span>⚡ Powerful deliverance prayers</span>
                </div>
              </div>
            </div>

            {/* Power Must Change Hands */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaFire className="text-mfm-primary text-2xl" />
                <h3 className="text-2xl font-bold text-mfm-dark">Power Must Change Hands (August)</h3>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "The kingdom of God suffers violence, and the violent take it by force!" - Matthew 11:12
              </blockquote>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-mfm-primary" />
                  <span><strong>Saturday, 2nd August @ 4PM (AEDT)</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <FaGlobe className="text-mfm-primary mt-1" />
                  <div>
                    <strong>Watch LIVE on:</strong>
                    <ul className="mt-1 space-y-1">
                      <li>• YouTube: "MFM LIVE"</li>
                      <li>• Facebook/YouTube: "Dr. Daniel Olukoya"</li>
                    </ul>
                  </div>
                </div>
              </div>
              <Link href="/pmch" className="btn-primary inline-flex items-center gap-2">
                View PMCH Details <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
} 