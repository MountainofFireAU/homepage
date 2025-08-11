import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaDownload, FaFilePdf, FaCalendarAlt, FaBook, FaPrayingHands } from 'react-icons/fa'
import { withBasePath } from '../lib/basePath'

export default function Resources() {
  const resources = [
    {
      id: 'stop-them-3',
      title: 'Stop Them 3',
      description: 'Powerful prayer points and deliverance prayers to stop spiritual attacks and break strongholds.',
      category: 'Prayer Points',
      file: 'Stop_Them_3_20240327091925.pdf',
      size: '260KB',
      date: 'March 2024',
      icon: FaPrayingHands,
      featured: true
    },
    {
      id: 'pmch-august-2025-prayer',
      title: 'PMCH August 2025 Prayer Points',
      description: 'Comprehensive prayer points for Power Must Change Hands (PMCH) session - August 2025.',
      category: 'PMCH Resources',
      file: 'PMCHAugust2025prayer-20250725193328.pdf',
      size: '68KB',
      date: 'August 2025',
      icon: FaPrayingHands
    },
    {
      id: 'pmch-august-2025-program',
      title: 'PMCH August 2025 Program',
      description: 'Complete program schedule and guidelines for Power Must Change Hands (PMCH) - August 2025.',
      category: 'PMCH Resources',
      file: 'PMCHAugust2025Prog-20250725010915.pdf',
      size: '81KB',
      date: 'August 2025',
      icon: FaCalendarAlt
    }
  ]

  const categories = Array.from(new Set(resources.map(resource => resource.category)))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-mfm-primary text-white py-20">
        <div className="absolute inset-0">
          <Image
            src={withBasePath('/images/backgrounds/mfm-bg.jpg')}
            alt="MFM Resources Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">MFM Resources</h1>
          <p className="text-xl md:text-2xl text-mfm-secondary mb-8">
            Powerful prayer points, deliverance materials, and spiritual resources
          </p>
          <div className="flex justify-center items-center space-x-8 text-lg">
            <div className="flex items-center space-x-2">
              <FaBook className="text-mfm-secondary" />
              <span>{resources.length} Resources</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaFilePdf className="text-mfm-secondary" />
              <span>Free Downloads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Featured Resource */}
          {resources.filter(r => r.featured).map(resource => (
            <div key={resource.id} className="mb-12">
              <h2 className="text-2xl font-bold text-mfm-dark mb-6 text-center">Featured Resource</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                <div className="flex items-start space-x-6">
                  <div className="bg-mfm-primary p-4 rounded-lg">
                    <resource.icon className="text-white text-3xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-mfm-secondary text-mfm-dark px-3 py-1 rounded-full text-sm font-semibold">
                        {resource.category}
                      </span>
                      <span className="text-gray-500 text-sm">{resource.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-mfm-dark mb-3">{resource.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{resource.description}</p>
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-sm text-gray-500">File size: {resource.size}</span>
                      <span className="text-sm text-gray-500">Format: PDF</span>
                    </div>
                    <a
                      href={withBasePath(`/Resources/${resource.file}`)}
                      download
                      className="inline-flex items-center space-x-2 bg-mfm-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-mfm-dark transition-colors duration-300"
                    >
                      <FaDownload />
                      <span>Download Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* All Resources */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-mfm-dark mb-8 text-center">All Resources</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map(category => (
                <button
                  key={category}
                  className="px-4 py-2 bg-white border-2 border-mfm-primary text-mfm-primary rounded-lg hover:bg-mfm-primary hover:text-white transition-colors duration-300 font-semibold"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map(resource => (
                <div key={resource.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-mfm-primary p-3 rounded-lg">
                        <resource.icon className="text-white text-xl" />
                      </div>
                      <span className="bg-mfm-secondary text-mfm-dark px-2 py-1 rounded text-xs font-semibold">
                        {resource.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-mfm-dark mb-3">{resource.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{resource.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{resource.size}</span>
                      <span>{resource.date}</span>
                    </div>
                    
                    <a
                      href={withBasePath(`/Resources/${resource.file}`)}
                      download
                      className="w-full inline-flex items-center justify-center space-x-2 bg-mfm-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-mfm-dark transition-colors duration-300"
                    >
                      <FaDownload />
                      <span>Download</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-white rounded-lg shadow-md p-8 mt-12">
            <h3 className="text-2xl font-bold text-mfm-dark mb-6 text-center">How to Use These Resources</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-mfm-secondary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaDownload className="text-mfm-dark text-2xl" />
                </div>
                <h4 className="font-semibold text-mfm-dark mb-2">Download</h4>
                <p className="text-gray-600 text-sm">Click the download button to save the resource to your device</p>
              </div>
              <div className="text-center">
                <div className="bg-mfm-secondary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaBook className="text-mfm-dark text-2xl" />
                </div>
                <h4 className="font-semibold text-mfm-dark mb-2">Study</h4>
                <p className="text-gray-600 text-sm">Read through the materials and prayer points carefully</p>
              </div>
              <div className="text-center">
                <div className="bg-mfm-secondary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <FaPrayingHands className="text-mfm-dark text-2xl" />
                </div>
                <h4 className="font-semibold text-mfm-dark mb-2">Pray</h4>
                <p className="text-gray-600 text-sm">Use these resources in your personal prayer time and spiritual warfare</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 