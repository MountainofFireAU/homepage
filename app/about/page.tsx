import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFire, FaPray, FaHeart, FaUsers, FaGlobe, FaBook } from 'react-icons/fa'

export default function About() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-mfm-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About MFM Australia</h1>
          <p className="text-xl text-mfm-secondary max-w-3xl mx-auto">
            Mountain of Fire and Miracles Ministries Australia - A place of deliverance, 
            healing, and supernatural breakthroughs through the power of prayer.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <FaFire className="text-mfm-primary text-3xl" />
                <h2 className="text-3xl font-bold text-mfm-dark">Our Mission</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To establish a church that will pursue aggressive evangelism, 
                achieve supernatural church growth, demonstrate the power of God, 
                and produce disciples filled with the Holy Ghost and fire, 
                thereby restoring the glory of God to the church.
              </p>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-6">
                <FaGlobe className="text-mfm-primary text-3xl" />
                <h2 className="text-3xl font-bold text-mfm-dark">Our Vision</h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To establish a holistic ministry that will be committed to the 
                total transformation of the human person through the power of the 
                Holy Ghost, thereby preparing ground for the second coming of our 
                Lord Jesus Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-16 bg-mfm-gray">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card text-center">
              <FaBook className="text-mfm-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-mfm-dark mb-3">The Bible</h3>
              <p className="text-gray-700">
                The entire Bible is the inspired Word of God, 
                our final authority for faith and practice.
              </p>
            </div>

            <div className="card text-center">
              <FaHeart className="text-mfm-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-mfm-dark mb-3">Salvation</h3>
              <p className="text-gray-700">
                Salvation is by grace through faith in Jesus Christ alone, 
                not by works or religious ceremony.
              </p>
            </div>

            <div className="card text-center">
              <FaPray className="text-mfm-primary text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-mfm-dark mb-3">Prayer & Deliverance</h3>
              <p className="text-gray-700">
                Prayer is a powerful weapon against darkness, 
                and deliverance is available for all believers.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/about/beliefs" className="btn-primary">
              Read Full Statement of Belief
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="relative w-full h-80 mb-6 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/leadership/dr-olukoya.jpg"
                  alt="Dr D.K. Olukoya - General Overseer"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-mfm-dark mb-2">Dr. D.K. Olukoya</h3>
              <p className="text-mfm-primary font-semibold mb-4">General Overseer, MFM Worldwide</p>
              <p className="text-gray-700">
                A man of God with exceptional spiritual depth and divine revelations. 
                Author of numerous books and publications on prayer and deliverance.
              </p>
              <Link href="/about/meet-the-go" className="btn-outline mt-4">
                Learn More
              </Link>
            </div>

            <div className="card text-center">
              <div className="relative w-full h-80 mb-6 bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/leadership/pastor-folashade.jpg"
                  alt="Pastor Folashade Olukoya - Assistant General Overseer"
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-mfm-dark mb-2">Pastor (Mrs) Folashade Olukoya</h3>
              <p className="text-mfm-primary font-semibold mb-4">Assistant General Overseer</p>
              <p className="text-gray-700">
                A woman of prayer and wisdom, leading various ministries including 
                the Women's Foundation and youth programs worldwide.
              </p>
              <Link href="/about/meet-the-go" className="btn-outline mt-4">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Overview */}
      <section className="py-16 bg-mfm-gray">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Our Ministries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card text-center">
              <FaUsers className="text-mfm-primary text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-bold text-mfm-dark mb-2">Women's Foundation</h3>
              <p className="text-gray-700 text-sm">Empowering women through prayer, fellowship, and spiritual growth.</p>
            </div>

            <div className="card text-center">
              <FaFire className="text-mfm-primary text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-bold text-mfm-dark mb-2">MFM Youth</h3>
              <p className="text-gray-700 text-sm">Building young champions for Christ through dynamic programs.</p>
            </div>

            <div className="card text-center">
              <FaHeart className="text-mfm-primary text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-bold text-mfm-dark mb-2">We Care Ministry</h3>
              <p className="text-gray-700 text-sm">Reaching out to the community with love and compassion.</p>
            </div>


          </div>
          <div className="text-center mt-8">
            <Link href="/about/mission-vision" className="btn-primary">
              Our Mission & Vision
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-mfm-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Family</h2>
          <p className="text-xl mb-8 text-mfm-secondary max-w-2xl mx-auto">
            Whether you're seeking spiritual growth, deliverance, or simply a place to belong, 
            MFM Australia welcomes you with open arms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Visit Us Today
            </Link>
            <Link href="/branches" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-mfm-primary transition-colors duration-300">
              Find a Branch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 