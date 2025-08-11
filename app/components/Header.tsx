'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import MFMLogo from './MFMLogo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Main Header */}
      <header className="bg-mfm-primary shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <MFMLogo size="lg" variant="white" showText={true} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <Link href="/" className="nav-link">Home</Link>
              <div className="relative group">
                <span className="nav-link cursor-pointer">About Us</span>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link href="/about/meet-the-go" className="block px-4 py-2 text-gray-700 hover:bg-mfm-gray">Meet the GO</Link>
                  <Link href="/about/mission-vision" className="block px-4 py-2 text-gray-700 hover:bg-mfm-gray">Mission & Vision</Link>
                  <Link href="/about/beliefs" className="block px-4 py-2 text-gray-700 hover:bg-mfm-gray">Statement of Belief</Link>
                </div>
              </div>
              <Link href="/pmch" className="nav-link">PMCH</Link>
              <Link href="/branches" className="nav-link">MFM Branches - AU</Link>
              <Link href="/resources" className="nav-link">Resources</Link>
              <Link href="/donate" className="nav-link">Donate</Link>
              <Link href="/contact" className="nav-link">Contact Us</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white text-2xl"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden bg-mfm-dark py-4">
              <div className="flex flex-col space-y-2">
                <Link href="/" className="nav-link block py-2">Home</Link>
                <Link href="/about" className="nav-link block py-2">About Us</Link>
                <Link href="/pmch" className="nav-link block py-2">PMCH</Link>
                <Link href="/branches" className="nav-link block py-2">MFM Branches - AU</Link>
                <Link href="/resources" className="nav-link block py-2">Resources</Link>
                <Link href="/donate" className="nav-link block py-2">Donate</Link>
                <Link href="/contact" className="nav-link block py-2">Contact Us</Link>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  )
}

export default Header 