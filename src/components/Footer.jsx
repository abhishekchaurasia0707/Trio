import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  const products = [
    { name: 'IT Server Rack', path: '/products' },
    { name: 'Network Rack', path: '/products' },
    { name: 'Wall Mount Cabinet', path: '/products' },
    { name: 'PDU', path: '/products' },
    { name: 'Rack Accessories', path: '/products' },
    { name: 'Custom Solutions', path: '/products' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.3, 1, 1.3],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
      />
      
      {/* Main Footer */}
      <div className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3 mb-6"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="w-14 h-14 bg-gradient-to-br from-primary via-primary-500 to-accent rounded-2xl flex items-center justify-center shadow-2xl"
                >
                  <span className="text-white font-bold text-2xl">T</span>
                </motion.div>
                <div>
                  <span className="font-heading font-bold text-2xl">Trio Power</span>
                  <span className="block text-xs font-medium text-accent">Technologies</span>
                </div>
              </motion.div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premium manufacturer of IT Server Racks, Network Cabinets, PDUs & Rack Accessories. Powering your infrastructure since 2009.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center hover:from-primary hover:to-accent transition-all duration-300 shadow-xl border border-gray-700/50"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <motion.h3 
                whileHover={{ x: 5 }}
                className="font-heading font-semibold text-xl mb-6 text-gradient-accent cursor-pointer"
              >
                Quick Links
              </motion.h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-accent transition-colors duration-200 flex items-center group"
                      >
                        <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                        {link.name}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.h3 
                whileHover={{ x: 5 }}
                className="font-heading font-semibold text-xl mb-6 text-gradient-accent cursor-pointer"
              >
                Products
              </motion.h3>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.name}>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        to={product.path}
                        className="text-gray-400 hover:text-accent transition-colors duration-200 flex items-center group"
                      >
                        <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                        {product.name}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.h3 
                whileHover={{ x: 5 }}
                className="font-heading font-semibold text-xl mb-6 text-gradient-accent cursor-pointer"
              >
                Contact Us
              </motion.h3>
              <ul className="space-y-4">
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/20">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <span className="text-gray-400">
                    Pune, Maharashtra<br />
                    India
                  </span>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/20">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <a href="tel:+912012345678" className="text-gray-400 hover:text-white transition-colors">
                    +91 20 1234 5678
                  </a>
                </motion.li>
                <motion.li 
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/20">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <a href="mailto:info@triopower.com" className="text-gray-400 hover:text-white transition-colors">
                    info@triopower.com
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800/50 bg-gradient-to-r from-gray-800/50 to-slate-800/50 backdrop-blur-sm relative">
        <div className="container-custom py-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading font-semibold text-xl mb-3 text-white"
            >
              Stay Updated
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-6"
            >
              Subscribe to our newsletter for the latest updates and offers
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-accent to-accent/80 rounded-xl font-semibold text-white hover:from-accent/90 hover:to-accent transition-all shadow-lg"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800/50 bg-gray-900/50 backdrop-blur-sm">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Trio Power Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="text-gray-400 hover:text-accent transition-colors duration-200"
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                whileHover={{ y: -2 }}
                href="#" 
                className="text-gray-400 hover:text-accent transition-colors duration-200"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
