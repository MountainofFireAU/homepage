import React from 'react'
import Link from 'next/link'
import { FaDownload, FaArrowLeft } from 'react-icons/fa'

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-mfm-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-mfm-secondary hover:text-white transition-colors duration-300 mb-6">
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
          <p className="text-xl text-mfm-secondary max-w-2xl mx-auto">
            Access spiritual resources and materials to strengthen your faith journey
          </p>
        </div>
      </section>

      {/* Resources Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-mfm-primary mb-8">Available Resources</h2>
              
              {/* PDF Download Section */}
              <div className="border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-2xl font-bold text-mfm-dark mb-4">Stop Them 3 - Prayer Points</h3>
                <p className="text-gray-600 mb-6">
                  Download the latest prayer points for spiritual warfare and deliverance.
                </p>
                <a
                  href="/Resources/Stop_Them_3_20240327091925.pdf"
                  download
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FaDownload />
                  Download Stop Them 3 Prayer Points
                </a>
              </div>

              {/* Additional Resources Section */}
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-mfm-dark mb-4">More Resources Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  We are working on providing more spiritual resources including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Prayer points and spiritual warfare materials</li>
                  <li>Audio sermons and teachings</li>
                  <li>Monthly miracle magazines</li>
                  <li>Salvation and discipleship resources</li>
                  <li>Live streaming services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 