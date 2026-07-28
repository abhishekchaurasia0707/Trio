import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, ShoppingCart } from 'lucide-react'

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' : 'bg-white border-b border-gray-100 shadow-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-300 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">T</span>
            </div>
            <div className="text-primary">
              <span className="font-heading font-bold text-2xl tracking-tight">Trio Power</span>
              <span className="block text-xs font-medium text-gray-500 mt-0.5">Technologies</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Quick Actions */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200">
              <a
                href="tel:+912012345678"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-all duration-200 text-sm font-medium"
              >
                <Phone size={18} />
                <span className="hidden xl:inline">Call Now</span>
              </a>
              <Link
                to="/contact"
                className="btn-accent text-sm flex items-center space-x-2 px-6"
              >
                <ShoppingCart size={18} />
                <span>Get Quote</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-200 text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-xl"
          >
            <div className="container-custom py-8 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-4 px-5 rounded-xl font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-primary to-primary-300 text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Quick Actions */}
              <div className="pt-6 border-t border-gray-200 space-y-4">
                <a
                  href="tel:+912012345678"
                  className="flex items-center space-x-3 py-4 px-5 rounded-xl bg-gray-50 text-gray-800 font-medium hover:bg-gray-100 transition-all duration-200"
                >
                  <Phone size={20} className="text-primary" />
                  <span>Call Now: +91 20 1234 5678</span>
                </a>
                <Link
                  to="/contact"
                  className="block btn-accent text-center py-4 rounded-xl"
                >
                  <ShoppingCart size={20} className="inline mr-2" />
                  Request Quote
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail size={18} className="text-primary" />
                  <span className="text-sm">info@triopower.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
