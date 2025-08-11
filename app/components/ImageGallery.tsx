import React from 'react'
import Image from 'next/image'
import { withBasePath } from '../lib/basePath'

interface ImageGalleryProps {
  category: 'leadership' | 'ministries' | 'events' | 'backgrounds'
  className?: string
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ category, className = '' }) => {
  const images = {
    leadership: [
      {
        src: '/images/leadership/dr-olukoya.jpg',
        alt: 'Dr D.K. Olukoya - General Overseer',
        title: 'Dr D.K. Olukoya',
        subtitle: 'General Overseer, MFM Worldwide'
      },
      {
        src: '/images/leadership/pastor-folashade.jpg',
        alt: 'Pastor Folashade Olukoya - Assistant General Overseer',
        title: 'Pastor (Mrs) Folashade Olukoya',
        subtitle: 'Assistant General Overseer'
      }
    ],
    ministries: [
      {
        src: '/images/ministries/womens.jpg',
        alt: 'Women\'s Foundation Ministry',
        title: 'Women\'s Foundation',
        subtitle: 'Empowering Women Through Prayer'
      },
      {
        src: '/images/ministries/youth.jpg',
        alt: 'MFM Youth Ministry',
        title: 'MFM Youth',
        subtitle: 'Building Young Champions for Christ'
      }
    ],
    events: [
      {
        src: '/images/events/pmch.jpg',
        alt: 'PMCH - Power Must Change Hands',
        title: 'PMCH',
        subtitle: 'Power Must Change Hands - First Saturday Monthly'
      }
    ],
    backgrounds: [
      {
        src: '/images/hero/mfm-hero.jpg',
        alt: 'MFM Hero Background',
        title: 'Mountain of Fire',
        subtitle: 'Hero Background'
      }
    ]
  }

  const currentImages = images[category] || []

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {currentImages.map((image, index) => (
        <div key={index} className="card overflow-hidden">
          <div className="relative h-48 bg-mfm-gray">
            <Image
              src={withBasePath(image.src)}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold text-mfm-dark mb-1">{image.title}</h3>
            <p className="text-sm text-gray-600">{image.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImageGallery 