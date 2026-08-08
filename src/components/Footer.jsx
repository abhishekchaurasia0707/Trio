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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
      
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
              <div className="flex items-center space-x-3 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-br from-primary via-primary-500 to-accent rounded-xl flex items-center justify-center shadow-xl"
                >
                  <span className="text-white font-bold text-2xl">T</span>
                </motion.div>
                <div>
                  <span className="font-heading font-bold text-xl">Trio Power</span>
                  <span className="block text-xs font-medium text-accent">Technologies</span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premium manufacturer of IT Server Racks, Network Cabinets, PDUs & Rack Accessories. Powering your infrastructure since 2009.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-11 h-11 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl flex items-center justify-center hover:from-primary hover:to-accent transition-all duration-300 shadow-lg"
                  >
                    <social.icon size={18} />
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
              <h3 className="font-heading font-semibold text-lg mb-6 text-gradient-accent">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-accent transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                      {link.name}
                    </Link>
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
              <h3 className="font-heading font-semibold text-lg mb-6 text-gradient-accent">Products</h3>
              <ul className="space-y-3">
                {products.map((product) => (
                  <li key={product.name}>
                    <Link
                      to={product.path}
                      className="text-gray-400 hover:text-accent transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                      {product.name}
                    </Link>
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
              <h3 className="font-heading font-semibold text-lg mb-6 text-gradient-accent">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-accent" />
                  </div>
                  <span className="text-gray-400">
                    Pune, Maharashtra<br />
                    India
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <a href="tel:+912012345678" className="text-gray-400 hover:text-white transition-colors">
                    +91 20 1234 5678
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <a href="mailto:info@triopower.com" className="text-gray-400 hover:text-white transition-colors">
                    info@triopower.com
                  </a>
                </li>
              </ul>
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
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
