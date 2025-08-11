import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFire, FaPray, FaHeart, FaUsers, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPlay, FaArrowRight, FaGlobe, FaBook, FaWater, FaCrown, FaShieldAlt } from 'react-icons/fa'
import ImageSlideshow from '../components/ImageSlideshow'

export default function Branches() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-mfm-dark via-mfm-primary to-mfm-dark text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/backgrounds/mfm-bg.jpg"
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
              MFM Branches Australia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-mfm-secondary font-medium animate-slide-up">
              Join us in worship, prayer, and spiritual growth across Australia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                <FaMapMarkerAlt /> Find Us
              </Link>
              <Link href="/resources" className="btn-outline inline-flex items-center gap-2">
                Resources <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-12">Our Branches</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Canberra Branch */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-mfm-primary text-2xl" />
                <h3 className="text-2xl font-bold text-mfm-dark">Canberra Branch</h3>
              </div>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-mfm-primary mt-1" />
                  <div>
                    <strong>Address:</strong> Frencham Pl, Downer ACT
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-mfm-primary" />
                  <span><strong>Sunday Service:</strong> 10:00 AM (AEDT)</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-mfm-primary" />
                  <span><strong>Contact:</strong> mfmcanberra@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Sydney Branch */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaMapMarkerAlt className="text-mfm-primary text-2xl" />
                <h3 className="text-2xl font-bold text-mfm-dark">Sydney Branch</h3>
              </div>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-mfm-primary mt-1" />
                  <div>
                    <strong>Address:</strong> Mercure Hotel, 424-458 Hoxton Park Rd, Prestons
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-mfm-primary" />
                  <span><strong>Sunday Service:</strong> 10:00 AM (AEDT)</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-mfm-primary" />
                  <span><strong>Contact:</strong> mfmsydney1@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-mfm-gray">
        <div className="container mx-auto px-4">
          <h2 className="section-heading mb-12">Our Programs & Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Sunday Service */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaCalendarAlt className="text-mfm-primary text-2xl" />
                <h3 className="text-2xl font-bold text-mfm-dark">Sunday Service</h3>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "Let everything that has breath praise the Lord!" - Psalm 150:6
              </blockquote>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-center gap-3">
                  <FaClock className="text-mfm-primary" />
                  <span><strong>Time:</strong> 10:00 AM (AEDT)</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-mfm-primary" />
                  <span><strong>Available:</strong> In-person & Zoom</span>
                </div>
              </div>
            </div>

            {/* Bible Study */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaBook className="text-mfm-primary text-2xl" />
                <h3 className="text-2xl font-bold text-mfm-dark">Bible Study</h3>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "Study to show thyself approved unto God!" - 2 Timothy 2:15
              </blockquote>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-mfm-primary" />
                  <span><strong>Day:</strong> Every Friday</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-mfm-primary" />
                  <span><strong>Time:</strong> 6:00 PM - 7:30 PM (AEDT)</span>
                </div>
              </div>
            </div>

            {/* Command the Week */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-mfm-primary text-2xl" />
                <h3 className="text-2xl font-bold text-mfm-dark">Command the Week</h3>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "You will decree a thing, and it will be established!" - Job 22:28
              </blockquote>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-mfm-primary" />
                  <span><strong>Day:</strong> Every Monday</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-mfm-primary" />
                  <span><strong>Time:</strong> 5:00 AM - 6:00 AM (AEDT)</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-mfm-primary" />
                  <span><strong>Platform:</strong> Zoom</span>
                </div>
              </div>
            </div>

            {/* Manna Water */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaWater className="text-mfm-primary text-2xl" />
                <h3 className="text-2xl font-bold text-mfm-dark">Manna Water</h3>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "And the Lord shall guide thee continually!" - Isaiah 58:11
              </blockquote>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-mfm-primary" />
                  <span><strong>Day:</strong> Every Wednesday</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-mfm-primary" />
                  <span><strong>Time:</strong> 9:00 PM - 11:00 PM (AEDT)</span>
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
                  <span><strong>Day:</strong> Every last Friday of the month</span>
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
                <h3 className="text-2xl font-bold text-mfm-dark">Power Must Change Hands (PMCH)</h3>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "The kingdom of God suffers violence, and the violent take it by force!" - Matthew 11:12
              </blockquote>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-mfm-primary" />
                  <span><strong>Day:</strong> First Saturday of every month</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-mfm-primary" />
                  <span><strong>Platform:</strong> Live Stream</span>
                </div>
              </div>
              <Link href="/pmch" className="btn-primary inline-flex items-center gap-2">
                View PMCH Details <FaArrowRight />
              </Link>
            </div>

            {/* Men of Valour */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaShieldAlt className="text-mfm-primary text-2xl" />
                <h3 className="text-2xl font-bold text-mfm-dark">Men of Valour</h3>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "Be strong and of good courage!" - Joshua 1:9
              </blockquote>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-mfm-primary" />
                  <span><strong>Day:</strong> Every first Monday of the month</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-mfm-primary" />
                  <span><strong>Time:</strong> 10:00 PM - 11:00 PM (AEDT)</span>
                </div>
              </div>
            </div>

            {/* Royal Women */}
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <FaCrown className="text-mfm-primary text-2xl" />
                <h3 className="text-2xl font-bold text-mfm-dark">Royal Women</h3>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "She is clothed with strength and dignity!" - Proverbs 31:25
              </blockquote>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-mfm-primary" />
                  <span><strong>Day:</strong> Every second Monday of the month</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-mfm-primary" />
                  <span><strong>Time:</strong> 10:00 PM - 11:00 PM (AEDT)</span>
                </div>
              </div>
            </div>

            {/* Quarterly Breakthrough and Deliverance Clinic */}
            <div className="card lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <FaFire className="text-mfm-primary text-2xl" />
                <h3 className="text-2xl font-bold text-mfm-dark">Quarterly Breakthrough and Deliverance Clinic</h3>
              </div>
              <blockquote className="text-gray-600 italic mb-4">
                "The Spirit of the Lord is upon me, because he hath anointed me to preach deliverance!" - Luke 4:18
              </blockquote>
              <div className="space-y-3 text-gray-700 mb-4">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-mfm-primary" />
                  <span><strong>Frequency:</strong> Quarterly (Every 3 months)</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaFire className="text-mfm-primary" />
                  <span>⚡ Intensive deliverance and breakthrough prayers</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaUsers className="text-mfm-primary" />
                  <span>👥 Special focus on spiritual warfare and victory</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-mfm-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us Today</h2>
          <p className="text-xl mb-8 text-mfm-secondary max-w-2xl mx-auto">
            Experience the power of God and join our growing family of believers across Australia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link href="/resources" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-mfm-primary transition-colors duration-300">
              Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Image Slideshow */}
      <ImageSlideshow />
    </div>
  )
} 