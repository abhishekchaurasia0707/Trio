import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Section, { SectionHeader } from '../components/Section'
import { IndustryCard } from '../components/Card'
import { industries } from '../data/products'

const Industries = () => {
  return (
    <>
      <Helmet>
        <title>Industries We Serve - Trio Power Technologies</title>
        <meta name="description" content="Trio Power Technologies serves diverse industries including Data Centers, Telecom, Healthcare, Education, Manufacturing, Government, Banking, and IT Companies." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Industries We <span className="text-accent">Serve</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by diverse sectors across India for their IT infrastructure needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <Section>
        <SectionHeader title="Our Industry Expertise" subtitle="Solutions tailored for every sector" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <IndustryCard industry={industry} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Detailed Industry Info */}
      <Section dark>
        <SectionHeader title="Industry Solutions" subtitle="How we serve each sector" dark />
        <div className="grid md:grid-cols-2 gap-8">
          {industries.slice(0, 6).map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{industry.icon}</div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-xl text-white mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/30 text-primary-light rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-light py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us help you find the perfect infrastructure solution for your industry.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Industries
