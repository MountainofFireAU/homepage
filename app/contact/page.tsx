'use client'
import React, { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
    script.async = true
    script.onload = () => {
      // Initialize EmailJS with your public key
      if (window.emailjs) {
        window.emailjs.init('YOUR_PUBLIC_KEY') // You'll need to replace this with your actual EmailJS public key
      }
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        to_email: 'mfmcanberra@gmail.com'
      }

      // Send email using EmailJS
      if (window.emailjs) {
        await window.emailjs.send(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          templateParams
        )
        
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error('EmailJS not loaded')
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-mfm-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-mfm-secondary max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with MFM Australia for prayer requests, 
            inquiries, or to learn more about our ministry.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-mfm-dark mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Church Contact Number */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mfm-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-mfm-dark mb-1">Church Contact</h3>
                    <p className="text-gray-700">
                      <a href="tel:420251989" className="text-mfm-primary hover:text-mfm-dark transition-colors font-semibold">
                        420 251 989
                      </a>
                    </p>
                  </div>
                </div>

                {/* Canberra Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mfm-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-mfm-dark mb-1">📍 Canberra</h3>
                    <p className="text-gray-700 mb-2">
                      Frencham Pl, Downer ACT
                    </p>
                    <p className="text-gray-700">
                      <FaEnvelope className="inline mr-2" />
                      <a href="mailto:mfmcanberra@gmail.com" className="text-mfm-primary hover:text-mfm-dark transition-colors">
                        mfmcanberra@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Sydney Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mfm-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-mfm-dark mb-1">📍 Sydney</h3>
                    <p className="text-gray-700 mb-2">
                      Mercure Hotel, 424-458 Hoxton Park Rd, Prestons
                    </p>
                    <p className="text-gray-700">
                      <FaEnvelope className="inline mr-2" />
                      <a href="mailto:mfmsydney1@gmail.com" className="text-mfm-primary hover:text-mfm-dark transition-colors">
                        mfmsydney1@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mfm-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-mfm-dark mb-1">Service Times</h3>
                    <div className="text-gray-700 space-y-1">
                      <p>Sunday Service: 10:00 AM (AEST)</p>
                      <p>Manna Water: 11:00 PM (AEST)</p>
                      <p>PMCH: First Saturday of every month</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-mfm-dark mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/MFMSydneyAustralia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-mfm-primary rounded-full flex items-center justify-center text-white hover:bg-mfm-dark transition-colors">
                    <FaFacebook />
                  </a>
                  <a href="https://www.instagram.com/mfm.australia/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-mfm-primary rounded-full flex items-center justify-center text-white hover:bg-mfm-dark transition-colors">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h2 className="text-3xl font-bold text-mfm-dark mb-8">Send Us a Message</h2>
              
              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                  <p className="font-semibold">Message Sent Successfully!</p>
                  <p className="text-sm">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                  <p className="font-semibold">Failed to Send Message</p>
                  <p className="text-sm">Please try again or contact us directly at mfmcanberra@gmail.com</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mfm-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mfm-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mfm-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mfm-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mfm-primary focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="prayer-request">Prayer Request</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="testimony">Testimony</option>
                    <option value="counselling">Counselling</option>
                    <option value="ministry-inquiry">Ministry Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mfm-primary focus:border-transparent"
                    placeholder="Please share your message, prayer request, or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
} 