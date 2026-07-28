import { motion } from 'framer-motion'

const Section = ({ children, className = '', id = '', dark = false }) => {
  return (
    <section
      id={id}
      className={`section-padding ${dark ? 'bg-gray-900 text-white' : 'bg-gray-50'} ${className}`}
    >
      <div className="container-custom">{children}</div>
    </section>
  )
}

export const SectionHeader = ({ title, subtitle, centered = true, dark = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className={`font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 bg-accent-gold mt-6 ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}

export default Section
