'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaDownload, FaFilePdf, FaCalendarAlt, FaPray } from 'react-icons/fa'

export default function PMCH() {
  const [activeTab, setActiveTab] = useState('august')

  const pmchData = {
    august: {
      month: "August 2025",
      prayerPoints: {
        name: "PMCH August 2025 Prayer Points",
        file: "/PMCH/PMCHAugust2025prayer-20250725193328.pdf",
        size: "68KB"
      },
      program: {
        name: "PMCH August 2025 Program",
        file: "/PMCH/PMCHAugust2025Prog-20250725010915.pdf",
        size: "81KB"
      }
    }
  }

  const currentMonth = pmchData.august

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-mfm-primary text-white py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/mfm-bg.jpg"
            alt="MFM Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-mfm-secondary hover:text-white transition-colors duration-300 mb-6">
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">PMCH</h1>
          <p className="text-xl text-mfm-secondary max-w-3xl mx-auto">
            Power Must Change Hands - Monthly prayer program for breakthrough and deliverance
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('august')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors duration-300 ${
                  activeTab === 'august'
                    ? 'bg-white text-mfm-primary shadow-md'
                    : 'text-gray-600 hover:text-mfm-primary'
                }`}
              >
                August 2025
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-mfm-dark mb-4">Power Must Change Hands</h2>
              <p className="text-lg text-gray-600">
                Monthly prayer program for breakthrough, deliverance, and spiritual transformation
              </p>
            </div>

            {/* Current Month Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Prayer Points */}
              <div className="card bg-mfm-gray">
                <div className="flex items-center gap-3 mb-6">
                  <FaPray className="text-mfm-primary text-3xl" />
                  <h3 className="text-2xl font-bold text-mfm-dark">Prayer Points</h3>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-mfm-dark mb-2">{currentMonth.prayerPoints.name}</h4>
                  <p className="text-gray-600 mb-4">Comprehensive prayer points for breakthrough and deliverance</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <FaFilePdf />
                    <span>PDF Document • {currentMonth.prayerPoints.size}</span>
                  </div>
                </div>
                <a 
                  href={currentMonth.prayerPoints.file}
                  download
                  className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                >
                  <FaDownload />
                  Download Prayer Points
                </a>
              </div>

              {/* Program */}
              <div className="card bg-mfm-gray">
                <div className="flex items-center gap-3 mb-6">
                  <FaCalendarAlt className="text-mfm-primary text-3xl" />
                  <h3 className="text-2xl font-bold text-mfm-dark">Program</h3>
                </div>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-mfm-dark mb-2">{currentMonth.program.name}</h4>
                  <p className="text-gray-600 mb-4">Complete program schedule and activities</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <FaFilePdf />
                    <span>PDF Document • {currentMonth.program.size}</span>
                  </div>
                </div>
                <a 
                  href={currentMonth.program.file}
                  download
                  className="btn-primary inline-flex items-center gap-2 w-full justify-center"
                >
                  <FaDownload />
                  Download Program
                </a>
              </div>
            </div>

            {/* Information Section */}
            <div className="mt-12">
              <div className="card bg-mfm-primary text-white">
                <h3 className="text-2xl font-bold mb-4">About PMCH</h3>
                <div className="space-y-4 text-mfm-secondary">
                  <p>
                    Power Must Change Hands (PMCH) is a monthly prayer program designed to bring breakthrough, 
                    deliverance, and spiritual transformation to participants.
                  </p>
                  <p>
                    Each month, we provide comprehensive prayer points and program schedules to help believers 
                    engage in powerful spiritual warfare and experience God's miraculous intervention.
                  </p>
                  <p>
                    Download the documents above to participate in this month's PMCH program and experience 
                    the power of God in your life.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-mfm-gray p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-mfm-dark mb-4">Join Us in Prayer</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Experience the power of God through our monthly PMCH prayer program. 
                  Download the materials and join us in spiritual warfare.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary">
                    Contact Us
                  </Link>
                  <Link href="/about/beliefs" className="border-2 border-mfm-primary text-mfm-primary px-6 py-3 rounded-md font-semibold hover:bg-mfm-primary hover:text-white transition-colors duration-300">
                    Learn About Our Beliefs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 