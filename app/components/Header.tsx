'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import MFMLogo from './MFMLogo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      setActiveDropdown(null)
    }
  }

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header className="bg-mfm-primary shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center z-10">
            <MFMLogo size="lg" variant="white" showText={true} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <div className="relative group">
              <span className="nav-link cursor-pointer flex items-center gap-1">
                About Us
                <FaChevronDown className="text-sm" />
              </span>
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link href="/about/meet-the-go" className="block px-4 py-2 text-gray-700 hover:bg-mfm-gray transition-colors">Meet the GO</Link>
                <Link href="/about/mission-vision" className="block px-4 py-2 text-gray-700 hover:bg-mfm-gray transition-colors">Mission & Vision</Link>
                <Link href="/about/beliefs" className="block px-4 py-2 text-gray-700 hover:bg-mfm-gray transition-colors">Statement of Belief</Link>
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
            className="lg:hidden text-white text-2xl z-10 relative p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          ref={menuRef} 
          className={`lg:hidden mobile-menu bg-mfm-dark shadow-lg ${isMenuOpen ? 'open' : ''}`}
        >
          <nav className="py-4 px-4">
            <div className="flex flex-col space-y-1">
              <Link 
                href="/" 
                className="nav-link block py-3 px-4 rounded-md hover:bg-mfm-primary/20 transition-colors"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              
              {/* About Us Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('about')}
                  className="w-full text-left nav-link block py-3 px-4 rounded-md hover:bg-mfm-primary/20 transition-colors flex items-center justify-between"
                >
                  About Us
                  {activeDropdown === 'about' ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <div className={`dropdown-content ${activeDropdown === 'about' ? 'open' : ''}`}>
                  <div className="pl-4 space-y-1 mt-1">
                    <Link 
                      href="/about/meet-the-go" 
                      className="block py-2 px-4 text-mfm-secondary hover:text-white hover:bg-mfm-primary/20 rounded-md transition-colors"
                      onClick={handleLinkClick}
                    >
                      Meet the GO
                    </Link>
                    <Link 
                      href="/about/mission-vision" 
                      className="block py-2 px-4 text-mfm-secondary hover:text-white hover:bg-mfm-primary/20 rounded-md transition-colors"
                      onClick={handleLinkClick}
                    >
                      Mission & Vision
                    </Link>
                    <Link 
                      href="/about/beliefs" 
                      className="block py-2 px-4 text-mfm-secondary hover:text-white hover:bg-mfm-primary/20 rounded-md transition-colors"
                      onClick={handleLinkClick}
                    >
                      Statement of Belief
                    </Link>
                  </div>
                </div>
              </div>

              <Link 
                href="/pmch" 
                className="nav-link block py-3 px-4 rounded-md hover:bg-mfm-primary/20 transition-colors"
                onClick={handleLinkClick}
              >
                PMCH
              </Link>
              
              <Link 
                href="/branches" 
                className="nav-link block py-3 px-4 rounded-md hover:bg-mfm-primary/20 transition-colors"
                onClick={handleLinkClick}
              >
                MFM Branches - AU
              </Link>
              
              <Link 
                href="/resources" 
                className="nav-link block py-3 px-4 rounded-md hover:bg-mfm-primary/20 transition-colors"
                onClick={handleLinkClick}
              >
                Resources
              </Link>
              
              <Link 
                href="/donate" 
                className="nav-link block py-3 px-4 rounded-md hover:bg-mfm-primary/20 transition-colors"
                onClick={handleLinkClick}
              >
                Donate
              </Link>
              
              <Link 
                href="/contact" 
                className="nav-link block py-3 px-4 rounded-md hover:bg-mfm-primary/20 transition-colors"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 