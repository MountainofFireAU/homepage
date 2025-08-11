import React from 'react'
import { FaHeart, FaHandsHelping, FaChurch, FaGlobe, FaCreditCard, FaUniversity } from 'react-icons/fa'

export default function Donate() {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-mfm-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Support the Ministry</h1>
          <p className="text-xl text-mfm-secondary max-w-3xl mx-auto">
            "Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver" - 2 Corinthians 9:7
          </p>
        </div>
      </section>



      {/* Bank Details */}
      <section className="py-16 bg-mfm-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading">Bank Transfer Details</h2>
            <div className="max-w-2xl mx-auto">
              {/* Bank Details Card */}
              <div className="card bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <FaUniversity className="text-mfm-primary text-3xl" />
                  <h3 className="text-2xl font-bold text-mfm-dark">Bank Details</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-mfm-dark mb-1">Account Name:</label>
                    <p className="text-gray-700 bg-mfm-gray p-3 rounded">Mountain of Fire and Miracles Ministries  </p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-mfm-dark mb-1">BSB:</label>
                    <p className="text-gray-700 bg-mfm-gray p-3 rounded">012209</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-mfm-dark mb-1">Account Number:</label>
                    <p className="text-gray-700 bg-mfm-gray p-3 rounded">652261564</p>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-mfm-dark mb-1">Reference:</label>
                    <p className="text-gray-700 bg-mfm-gray p-3 rounded">Your Name or + Purpose (e.g. "John Smith - Donations")</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="text-sm text-yellow-800">
                    
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>



      {/* Impact Stories */}
      <section className="py-16 bg-mfm-gray">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card text-center">
              <FaHeart className="text-mfm-primary text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-mfm-dark mb-3">Lives Transformed</h3>
              <p className="text-gray-700">
                Your donations help us provide spiritual counseling, prayer support, 
                and deliverance to those in need.
              </p>
            </div>

            <div className="card text-center">
              <FaGlobe className="text-mfm-primary text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-mfm-dark mb-3">Gospel Spread</h3>
              <p className="text-gray-700">
                Supporting evangelism efforts that reach remote areas and communities 
                across Australia with the message of salvation.
              </p>
            </div>

            <div className="card text-center">
              <FaChurch className="text-mfm-primary text-3xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-mfm-dark mb-3">Church Growth</h3>
              <p className="text-gray-700">
                Helping establish new branches and strengthen existing congregations 
                to better serve our growing community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-mfm-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner With Us Today</h2>
          <p className="text-xl mb-8 text-mfm-secondary max-w-2xl mx-auto">
            Every gift, regardless of size, makes a difference in advancing God's kingdom. 
            Thank you for your generosity and partnership in ministry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@mfmaustralia.org" className="btn-secondary">
              Contact Us About Giving
            </a>
            <a href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-mfm-primary transition-colors duration-300">
              Ask Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 