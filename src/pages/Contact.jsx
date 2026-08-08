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

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Gradient Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-slate-700/30 rounded-full blur-3xl"
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Contact <span className="text-gradient-accent">Us</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team for quotes, inquiries, or support
              <span className="block text-gray-400 mt-3 text-base md:text-lg">We typically respond within 24 hours</span>
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
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-4 p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">
                    Pune, Maharashtra<br />
                    India
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-4 p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+912012345678" className="text-gray-600 hover:text-accent transition-colors">
                    +91 20 1234 5678
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-4 p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:info@triopower.com" className="text-gray-600 hover:text-accent transition-colors">
                    info@triopower.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-4 p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-72 flex items-center justify-center shadow-inner overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>
              <div className="text-center relative z-10">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <MapPin size={56} className="text-accent mx-auto mb-3" />
                </motion.div>
                <p className="text-gray-700 font-semibold text-lg">Google Maps Integration</p>
                <p className="text-gray-500 text-sm">Pune, Maharashtra, India</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
              <h2 className="font-heading font-bold text-3xl mb-2 text-gradient">Send us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours</p>
              
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="mb-6 p-5 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-2xl flex items-center shadow-lg"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <CheckCircle size={24} className="text-green-600 mr-3" />
                  </motion.div>
                  <span className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="mb-6 p-5 bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-2xl shadow-lg"
                >
                  <div className="flex items-start">
                    <XCircle size={24} className="text-red-600 mr-3 mt-0.5 flex-shrink-0" />
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
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 bg-white hover:border-gray-300 resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-accent flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed py-4 text-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 size={22} className="mr-3 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={22} className="mr-3" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  )
}

export default Contact
