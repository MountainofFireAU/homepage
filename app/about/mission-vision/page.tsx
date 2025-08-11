import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft } from 'react-icons/fa'

export default function MissionVision() {
  const objectives = [
    "To propagate the gospel of our Lord Jesus Christ all over the world",
    "To promote the revival of Apostolic signs, wonders and miracles",
    "To bring together children of God who are lost in dead churches",
    "To train believers in the art and science of spiritual warfare; thus making them an aggressive and victorious army for the Lord",
    "To train believers to receive Holy Ghost baptism and fire as well as a daily walk and relationship with the Holy Spirit",
    "To turn the joy of our enemies to sorrow. That is why we would always have a Deliverance ministry wherever we are. If you do not believe in deliverance, you are not supposed to be in MFM",
    "To build an aggressive end-time army for the Lord. MFM is an end-time church where we build an aggressive end-time army for the Lord. An end-time church is a church where a sinner enters with two options: he either repents or does not come back, contrary to the present day church where sinners are comfortable and find things so easy and convenient",
    "To deliver those who have become slaves to pastors, prophets and apostles",
    "To build up heavenly-bound and aggressive Christians. The priority in MFM is for people to make heaven. It is not a worldly Church",
    "To build up prayer eagles",
    "To purify the Pentecostal dirtiness of this age"
  ]

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
          <Link href="/about" className="inline-flex items-center gap-2 text-mfm-secondary hover:text-white transition-colors duration-300 mb-6">
            <FaArrowLeft />
            <span>Back to About</span>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">MISSION AND VISION</h1>
        </div>
      </section>

      {/* Mission and Vision Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-mfm-dark mb-6">Our Mission</h2>
              <div className="bg-mfm-gray p-8 rounded-lg">
                <p className="text-lg text-gray-800 leading-relaxed text-justify">
                  MFM Ministries is a full gospel ministry devoted to the Revival of Apostolic Signs, 
                  Holy Ghost fireworks and the unlimited demonstration of the power of God to deliver 
                  to the uttermost. Absolute holiness within and without as the greatest spiritual 
                  insecticide and a pre-requisite for Heaven is taught openly. MFM is a do-it-yourself 
                  Gospel ministry where your hands are trained to wage war and your fingers to do battle. 
                  At MFM, aggressive prayer is considered as an aid to spiritual focus and a check against 
                  being overwhelmed by the flesh. At MFM Prayer City, prayer goes on 24 hours a day, 
                  7 days a week, non-stop.
                </p>
              </div>
            </div>

            {/* Objectives */}
            <div>
              <h2 className="text-3xl font-bold text-mfm-dark mb-6">Our Objectives</h2>
              <p className="text-lg text-gray-700 mb-8">The objectives of this ministry are:</p>
              
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-mfm-primary rounded-full mt-3"></div>
                    <p className="text-gray-800 leading-relaxed text-justify">{objective}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <div className="bg-mfm-primary text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
                <p className="text-lg mb-6 text-mfm-secondary">
                  Be part of this end-time army for the Lord. Experience the power of God 
                  and become a prayer eagle in our ministry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-secondary">
                    Visit Our Church
                  </Link>
                  <Link href="/about/beliefs" className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-mfm-primary transition-colors duration-300">
                    Learn Our Beliefs
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