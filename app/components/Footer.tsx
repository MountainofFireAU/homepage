import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import MFMLogo from './MFMLogo'

const Footer = () => {
  return (
    <footer className="bg-mfm-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4">
              <MFMLogo size="md" variant="dark" showText={true} />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Experience deliverance, healing, and miracles through prayer and worship. 
              Nobody comes to MFM by chance - God brought you here.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/MFMSydneyAustralia" target="_blank" rel="noopener noreferrer" className="text-mfm-secondary hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/mfm.australia/?hl=en" target="_blank" rel="noopener noreferrer" className="text-mfm-secondary hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* About Us Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mfm-secondary">About Us</h4>
            <ul className="space-y-2">
              <li><Link href="/about/story" className="text-gray-300 hover:text-white transition-colors text-sm">Our Story</Link></li>
              <li><Link href="/about/beliefs" className="text-gray-300 hover:text-white transition-colors text-sm">Statement of Belief</Link></li>
              <li><Link href="/about/meet-the-go" className="text-gray-300 hover:text-white transition-colors text-sm">Dr D.K. Olukoya</Link></li>
              <li><Link href="/about/mission-vision" className="text-gray-300 hover:text-white transition-colors text-sm">Mission & Vision</Link></li>
              <li><Link href="/branches" className="text-gray-300 hover:text-white transition-colors text-sm">MFM Branches - AU</Link></li>
              <li><Link href="/about/jobs" className="text-gray-300 hover:text-white transition-colors text-sm">Jobs / Opportunities</Link></li>
            </ul>
          </div>

                      {/* Resources Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-mfm-secondary">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/resources" className="text-gray-300 hover:text-white transition-colors text-sm">Resources</Link></li>
              </ul>
            </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-mfm-secondary">Contact</h4>
            <div className="space-y-3">
              {/* Church Contact Number */}
              <div className="flex items-start space-x-3">
                <FaPhone className="text-mfm-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Church Contact</p>
                  <a href="tel:420251989" className="text-mfm-secondary hover:text-white transition-colors text-sm font-semibold">
                    420 251 989
                  </a>
                </div>
              </div>

              {/* Canberra Location */}
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-mfm-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">📍 Canberra</p>
                  <p className="text-white text-sm">Frencham Pl, Downer ACT</p>
                  <a href="mailto:mfmcanberra@gmail.com" className="text-mfm-secondary hover:text-white transition-colors text-sm">
                    mfmcanberra@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Sydney Location */}
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-mfm-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">📍 Sydney</p>
                  <p className="text-white text-sm">Mercure Hotel, 424-458 Hoxton Park Rd, Prestons</p>
                  <a href="mailto:mfmsydney1@gmail.com" className="text-mfm-secondary hover:text-white transition-colors text-sm">
                    mfmsydney1@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div className="mt-6">
              <h5 className="text-mfm-secondary font-semibold mb-2">Service Times</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <p>Sunday Service: 10:00 AM (AEST)</p>
                <p>Manna Water: 9:00 PM (AEST)</p>
                <p>PMCH: First Saturday of every month</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-2 md:mb-0">
              © Copyright 2025 <strong>MFM Australia</strong>. All Rights Reserved.
            </div>
            <div className="flex space-x-4 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="/public-alert" className="text-gray-400 hover:text-white transition-colors">Public Alert</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 