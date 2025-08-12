'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaChevronLeft, FaChevronRight, FaCircle } from 'react-icons/fa'
import { withBasePath } from '../lib/basePath'

const images = [
  withBasePath('/mfmauimage/9a14ddd8-ea42-48ea-927f-3c4576d3b9f3.JPG'),
  withBasePath('/mfmauimage/68cf166d-8ea7-4750-a88b-cdcd6afab2ff.JPG'),
  withBasePath('/mfmauimage/05ba6d63-e9d8-4bc8-8fa4-fcba8defcbd3.JPG'),
  withBasePath('/mfmauimage/IMG_2605.jpg'),
  withBasePath('/mfmauimage/IMG_2602.jpg'),
  withBasePath('/mfmauimage/D33D6E71-66CA-475A-ABED-E80006559913.jpeg'),
  withBasePath('/mfmauimage/D610FBC2-6018-4E2A-9DC1-AA1D76DD1F5B.jpeg'),
  withBasePath('/mfmauimage/995EA251-9C33-4064-B63C-290FFA909DE9.jpeg'),
  withBasePath('/mfmauimage/20250511_015115168_iOS.jpg'),
  withBasePath('/mfmauimage/402C5CEE-36C0-46F7-873A-34411BCB7095.jpeg')
]

export default function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading mb-12">MFM Australia Gallery</h2>
          
          <div className="relative">
            {/* Slideshow Container */}
            <div className="relative h-72 md:h-[420px] overflow-hidden rounded-lg shadow-lg bg-gray-100">
              <div className="flex h-full transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 w-1/3 h-full"
                  >
                    <Image
                      src={image}
                      alt={`MFM Australia ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
                      priority={index === 0}
                    />
                    <div className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentIndex ? 'bg-transparent' : 'bg-black bg-opacity-40'
                    }`}></div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-mfm-primary p-3 rounded-full shadow-lg transition-all duration-300 z-10"
                aria-label="Previous image"
              >
                <FaChevronLeft size={20} />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-mfm-primary p-3 rounded-full shadow-lg transition-all duration-300 z-10"
                aria-label="Next image"
              >
                <FaChevronRight size={20} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-mfm-primary text-white'
                        : 'bg-white bg-opacity-60 text-gray-400 hover:bg-opacity-80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <FaCircle size={8} />
                  </button>
                ))}
              </div>

              {/* Slide Counter */}
              <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm z-10">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="text-lg text-gray-600">
                Experience the power of God at MFM Australia - Where miracles happen and lives are transformed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 