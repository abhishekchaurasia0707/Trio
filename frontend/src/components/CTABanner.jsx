import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const CTABanner = ({ title, subtitle, buttonText, buttonLink, dark = false }) => {
  return (
    <section className={`py-20 ${dark ? 'bg-primary' : 'bg-gradient-to-r from-primary to-primary-light'}`}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <Link
            to={buttonLink}
            className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent-gold hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            {buttonText}
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CTABanner
