import { useState } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle, XCircle } from 'lucide-react'
import axios from 'axios'
import Section, { SectionHeader } from '../components/Section'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT
const DEFAULT_FORMSPREE_ID = 'xnnavvqj'

const getFormspreeUrl = () => {
  if (FORMSPREE_ENDPOINT && FORMSPREE_ENDPOINT.length > 0) {
    if (FORMSPREE_ENDPOINT.startsWith('http')) return FORMSPREE_ENDPOINT
    return `https://formspree.io/f/${FORMSPREE_ENDPOINT}`
  }
  return `https://formspree.io/f/${DEFAULT_FORMSPREE_ID}`
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '', 
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    setErrorMessage('')

    const formspreeUrl = getFormspreeUrl()
    const payload = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'company' && (!value || value.trim() === '')) {
        payload.append(key, 'Not provided')
      } else {
        payload.append(key, value)
      }
    })
    payload.append('_subject', `New Contact Form Submission from ${formData.name}`)
    payload.append('_replyto', formData.email)
    payload.append('_cc', '')
    payload.append('_template', 'table')

    try {
      await axios.post(formspreeUrl, payload, {
        headers: {
          'Accept': 'application/json'
        },
        timeout: 15000
      })
      setStatus('success')
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form to Formspree:', error)
      setStatus('error')
      if (error.response?.data?.errors && Array.isArray(error.response.data.errors)) {
        const msg = error.response.data.errors.map(e => e.message).join(', ')
        setErrorMessage(msg)
      } else if (error.response?.data?.error) {
        setErrorMessage(error.response.data.error)
      } else if (error.code === 'ERR_NETWORK') {
        setErrorMessage('Network error. Please check your connection and try again.')
      } else if (error.code === 'ECONNABORTED') {
        setErrorMessage('Request timed out. Please try again.')
      } else {
        setErrorMessage(error.message || 'Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - Trio Power Technologies</title>
        <meta name="description" content="Get in touch with Trio Power Technologies for IT infrastructure solutions. Request a quote or contact our team." />
      </Helmet>

      <section className="bg-gradient-to-br from-slate-800 to-slate-900 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Contact <span className="text-accent">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team for quotes, inquiries, or support
            </p>
          </motion.div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader title="Get in Touch" subtitle="We'd love to hear from you" centered={false} />
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    Pune, Maharashtra<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+912012345678" className="text-gray-600 hover:text-primary transition-colors">
                    +91 20 1234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:info@triopower.com" className="text-gray-600 hover:text-primary transition-colors">
                    info@triopower.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Google Maps Integration</p>
                <p className="text-gray-400 text-sm">Pune, Maharashtra, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="font-heading font-bold text-2xl mb-6">Send us a Message</h2>
              
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
                >
                  <CheckCircle size={20} className="text-green-600 mr-2" />
                  <span className="text-green-700">Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <div className="flex items-start">
                    <XCircle size={20} className="text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-red-700 font-medium">Failed to send message.</p>
                      {errorMessage && (
                        <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-accent flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  )
}

export default Contact
