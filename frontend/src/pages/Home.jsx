import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Server, Shield, Truck, Users, Wrench, HeadphonesIcon } from 'lucide-react'
import Section, { SectionHeader } from '../components/Section'
import { FeatureCard, ProductCard, IndustryCard } from '../components/Card'
import AnimatedCounter from '../components/AnimatedCounter'
import TestimonialSlider from '../components/TestimonialSlider'
import FAQ from '../components/FAQ'
import CTABanner from '../components/CTABanner'
import { products, industries, testimonials, faqs } from '../data/products'

const Home = () => {
  const features = [
    { icon: Shield, title: 'Premium Manufacturing', description: 'State-of-the-art manufacturing facility with quality control at every stage.' },
    { icon: Users, title: 'Quality Assurance', description: 'ISO certified processes ensuring consistent quality across all products.' },
    { icon: Wrench, title: 'Custom Solutions', description: 'Tailored solutions designed to meet your specific infrastructure requirements.' },
    { icon: Truck, title: 'Fast Delivery', description: 'Efficient logistics network ensuring timely delivery across India.' },
    { icon: Server, title: 'Industry Experience', description: '15+ years of expertise in IT infrastructure manufacturing.' },
    { icon: HeadphonesIcon, title: 'Customer Support', description: 'Dedicated support team for installation, maintenance, and troubleshooting.' },
  ]

  const manufacturingProcess = [
    { step: '01', title: 'Design', description: 'Custom engineering and design based on requirements' },
    { step: '02', title: 'Manufacturing', description: 'Precision manufacturing using advanced equipment' },
    { step: '03', title: 'Quality Check', description: 'Rigorous testing and quality assurance' },
    { step: '04', title: 'Packaging', description: 'Secure packaging for safe transportation' },
    { step: '05', title: 'Delivery', description: 'Timely delivery to your location' },
  ]

  return (
    <>
      <Helmet>
        <title>Trio Power Technologies - Powering Your Infrastructure</title>
        <meta name="description" content="Premium Manufacturer of IT Server Racks, Network Cabinets, PDUs & Rack Accessories. Powering Your Infrastructure." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Enhanced Gradient Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-accent/30 via-accent/20 to-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.15, 0.35, 0.15],
            rotate: [90, 0, 90]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-br from-primary/20 via-slate-600/30 to-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-slate-700/20 via-gray-600/20 to-slate-800/20 rounded-full blur-3xl"
        />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 mb-8 shadow-xl cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Shield size={18} className="text-accent" />
                </motion.div>
                <span className="text-white text-sm font-semibold">ISO 9001:2015 Certified</span>
              </motion.div>

              <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                Powering Modern{' '}
                <span className="text-gradient-accent">IT Infrastructure</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Premium Manufacturer of IT Server Racks, Network Cabinets, PDUs & Rack Accessories.
                <span className="block text-gray-400 mt-3 text-base md:text-lg">Trusted by 1000+ enterprises across India since 2009.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/products" className="btn-accent text-center flex items-center justify-center gap-2 group">
                    Explore Products
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link to="/contact" className="btn-secondary text-center">
                    Request Quote
                  </Link>
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { value: '15+', label: 'Years Experience', icon: Wrench },
                  { value: '500+', label: 'Projects Completed', icon: Server },
                  { value: '1000+', label: 'Happy Customers', icon: Users },
                  { value: '50+', label: 'Product Range', icon: Shield }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-5 text-center hover:from-accent/20 hover:to-accent/10 hover:border-accent/30 transition-all duration-300 shadow-xl"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: index * 2 }}
                    >
                      <stat.icon size={22} className="text-accent mx-auto mb-2" />
                    </motion.div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                      <AnimatedCounter end={stat.value} />
                    </div>
                    <div className="text-gray-300 text-xs md:text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main Card */}
                <motion.div
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/30 rounded-3xl backdrop-blur-sm border border-white/30 shadow-2xl"
                />
                
                {/* Inner Card */}
                <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-slate-900 rounded-2xl border border-gray-700 overflow-hidden shadow-inner">
                  {/* Server Rack Visual */}
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + i * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-3 border border-gray-600 hover:border-accent/50 transition-all duration-300 cursor-pointer"
                        >
                          <div className="w-full aspect-square bg-gradient-to-br from-primary/30 to-accent/20 rounded flex items-center justify-center">
                            <Server size={20} className="text-accent" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ delay: 1.2 + i * 0.2 }}
                          className="h-2 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-2 -right-2 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                >
                  Best Seller
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-2 -left-2 bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                >
                  Made in India
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute top-1/4 -left-8 w-16 h-16 bg-accent/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{ y: [15, -15, 15] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
                  className="absolute bottom-1/4 -right-8 w-20 h-20 bg-slate-700/30 rounded-full blur-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* About Preview */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl">🏭</div>
              </div>
            </div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader title="About Trio Power Technologies" subtitle="Leading manufacturer of IT infrastructure solutions in India" centered={false} />
            <p className="text-gray-600 mb-6 leading-relaxed">
              Trio Power Technologies is a premier manufacturer of IT Server Racks, Network Cabinets, Power Distribution Units (PDUs), and Rack Accessories. Based in Pune, Maharashtra, we have been powering India's IT infrastructure for over 15 years.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our state-of-the-art manufacturing facility produces high-quality, durable products that meet international standards. We serve data centers, enterprises, telecom companies, and various industries across India.
            </p>
            <Link to="/about" className="inline-flex items-center btn-primary">
              Learn More <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section dark>
        <SectionHeader title="Why Choose Us" subtitle="What sets us apart from the competition" dark />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Products Preview */}
      <Section>
        <SectionHeader title="Our Products" subtitle="Comprehensive range of IT infrastructure solutions" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.slice(0, 12).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/products" className="inline-flex items-center btn-primary">
            View All Products <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </Section>

      {/* Industries */}
      <Section dark>
        <SectionHeader title="Industries We Serve" subtitle="Trusted by diverse sectors across India" dark />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.slice(0, 8).map((industry, index) => (
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

      {/* Manufacturing Process */}
      <Section>
        <SectionHeader title="Our Manufacturing Process" subtitle="Quality at every step" />
        <div className="grid md:grid-cols-5 gap-4">
          {manufacturingProcess.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl">
                  {process.step}
                </div>
                {index < manufacturingProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300" />
                )}
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{process.title}</h3>
              <p className="text-gray-600 text-sm">{process.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section dark>
        <SectionHeader title="What Our Clients Say" subtitle="Trusted by leading organizations" dark />
        <div className="max-w-4xl mx-auto">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader title="Frequently Asked Questions" subtitle="Find answers to common questions" />
        <div className="max-w-3xl mx-auto">
          <FAQ faqs={faqs.slice(0, 6)} />
        </div>
      </Section>

      {/* CTA Banner */}
      <CTABanner
        title="Need Custom Rack Solutions?"
        subtitle="Contact us for bespoke solutions tailored to your specific requirements"
        buttonText="Request a Quote"
        buttonLink="/contact"
      />
    </>
  )
}

export default Home
