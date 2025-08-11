import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft } from 'react-icons/fa'
import { withBasePath } from '../../lib/basePath'

export default function Beliefs() {
  const beliefs = [
    "The Scriptures are the inspired Word of God; the only basis for our faith and fellowship",
    "The One True God, ETERNAL EXISTENT in three Persons. God The Father, God The Son and The Holy Spirit",
    "The fall and deprivation of mankind, necessitating redemption through the Blood of Jesus Christ",
    "The Salvation of Mankind is through the Redeeming Work of Jesus Christ and the Regenerative Work of the Holy Spirit. Sanctification is seen as an act of separation from that which is evil",
    "The Baptism of the Holy Spirit - Acts 2:4; 10:44 and 19:1-6",
    "Restitution for past wrongs where possible",
    "The Ordinance of the Church, the Lord's Supper and Water Baptism",
    "The Church Universal, both visible and invisible",
    "The Ministry, divinely called and scripturally ordained as that approved of Almighty God",
    "Divine healing as provided by the Lord Jesus Christ",
    "The Rapture ushering all believers into the Marriage Supper of the Lamb, and the second advent of the Lord Jesus Christ when He will physically land on the earth",
    "The Millennial Reign of Christ",
    "The Final Judgment",
    "The New Heaven and Earth"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative bg-mfm-primary text-white py-20">
        <div className="absolute inset-0">
          <Image
            src={withBasePath('/images/backgrounds/mfm-bg.jpg')}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <Link href="/about" className="inline-flex items-center gap-2 text-mfm-secondary hover:text-white transition-colors duration-300 mb-6">
            <FaArrowLeft />
            <span>Back to About</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">WHAT WE BELIEVE</h1>
        </div>
      </section>

      {/* Beliefs List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {beliefs.map((belief, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-3"></div>
                  <p className="text-gray-800 text-lg leading-relaxed">{belief}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 