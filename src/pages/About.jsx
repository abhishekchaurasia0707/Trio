import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Award, Users, Target, Eye, Zap, CheckCircle, Shield, Factory, Globe, TrendingUp, Clock, Truck, Wrench, Star, MapPin, Package } from 'lucide-react'
import Section, { SectionHeader } from '../components/Section'
import AnimatedCounter from '../components/AnimatedCounter'

const About = () => {
  const stats = [
    { value: '15+', label: 'Years Experience', icon: Award, color: 'bg-blue-500' },
    { value: '500+', label: 'Projects Completed', icon: Target, color: 'bg-green-500' },
    { value: '1000+', label: 'Happy Customers', icon: Users, color: 'bg-purple-500' },
    { value: '50+', label: 'Product Range', icon: Zap, color: 'bg-orange-500' },
    { value: '200+', label: 'Team Members', icon: Users, color: 'bg-pink-500' },
    { value: '100%', label: 'Quality Assurance', icon: Shield, color: 'bg-cyan-500' }
  ]

  const values = [
    { icon: Eye, title: 'Vision', description: 'To be India\'s leading manufacturer of IT infrastructure solutions, known for quality, innovation, and customer satisfaction.', color: 'from-blue-500 to-blue-600' },
    { icon: Target, title: 'Mission', description: 'To provide premium quality IT infrastructure products that empower businesses with reliable, scalable, and efficient solutions.', color: 'from-green-500 to-green-600' },
    { icon: Award, title: 'Values', description: 'Quality, Innovation, Customer Focus, Integrity, and Excellence in everything we do.', color: 'from-purple-500 to-purple-600' }
  ]

  const milestones = [
    { year: '2009', title: 'Company Founded', description: 'Trio Power Technologies established in Pune, Maharashtra', icon: Factory },
    { year: '2012', title: 'First Major Contract', description: 'Secured contract with leading telecom operator', icon: Award },
    { year: '2015', title: 'Expansion', description: 'Expanded manufacturing facility and product range', icon: TrendingUp },
    { year: '2018', title: 'ISO Certification', description: 'Achieved ISO 9001:2015 certification', icon: CheckCircle },
    { year: '2021', title: '1000+ Customers', description: 'Reached milestone of 1000+ satisfied customers', icon: Users },
    { year: '2024', title: 'Pan India Presence', description: 'Expanded operations across all major Indian cities', icon: Globe }
  ]

  const manufacturingProcess = [
    { step: '01', title: 'Design & Engineering', description: 'Custom engineering using CAD software and 3D modeling', icon: Wrench },
    { step: '02', title: 'Material Selection', description: 'Premium quality cold-rolled steel and components', icon: Shield },
    { step: '03', title: 'Precision Manufacturing', description: 'State-of-the-art CNC machines and automated processes', icon: Factory },
    { step: '04', title: 'Quality Control', description: 'Rigorous testing at every stage of production', icon: CheckCircle },
    { step: '05', title: 'Surface Treatment', description: 'Powder coating for durability and corrosion resistance', icon: Star },
    { step: '06', title: 'Assembly & Testing', description: 'Final assembly and comprehensive quality checks', icon: Wrench },
    { step: '07', title: 'Packaging', description: 'Secure packaging to prevent damage during transit', icon: Package },
    { step: '08', title: 'Delivery', description: 'Timely delivery through our logistics network', icon: Truck }
  ]

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System', icon: Award },
    { name: 'CE Certified', description: 'European Conformity', icon: CheckCircle },
    { name: 'Make in India', description: 'Proudly Made in India', icon: Globe }
  ]

  const team = [
    { name: 'Leadership', description: 'Experienced industry veterans', icon: Users },
    { name: 'Engineering', description: 'Skilled design and development team', icon: Wrench },
    { name: 'Manufacturing', description: 'Expert production workforce', icon: Factory },
    { name: 'Quality Assurance', description: 'Dedicated QC team', icon: Shield }
  ]

  return (
    <>
      <Helmet>
        <title>About Us - Trio Power Technologies</title>
        <meta name="description" content="Learn about Trio Power Technologies - India's leading manufacturer of IT Server Racks, Network Cabinets, and infrastructure solutions." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              About <span className="text-accent">Trio Power</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powering India's IT Infrastructure Since 2009
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/products" className="btn-accent">
                Explore Products
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon size={28} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">
                <AnimatedCounter end={stat.value} />
              </div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Company Story */}
      <Section dark>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeader title="Our Story" subtitle="From humble beginnings to industry leader" centered={false} dark />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Trio Power Technologies was founded in 2009 with a simple vision: to provide high-quality IT infrastructure solutions to Indian businesses. What started as a small manufacturing unit in Pune has grown into one of India's most trusted names in server racks and network cabinets.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Over the years, we have invested heavily in technology, quality systems, and our team. Today, our state-of-the-art manufacturing facility produces a wide range of products that meet international standards and serve customers across various industries.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our commitment to quality, innovation, and customer satisfaction has earned us the trust of over 1000 customers, including leading data centers, telecom operators, enterprises, and government organizations.
            </p>
            
            {/* Location Info */}
            <div className="flex items-start space-x-3 bg-gray-800/50 rounded-xl p-4 mt-6">
              <MapPin className="text-accent mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="font-semibold text-white mb-1">Headquarters</h4>
                <p className="text-gray-400 text-sm">Pune, Maharashtra, India</p>
                <p className="text-gray-400 text-sm">Strategic location for pan-India distribution</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl">🏭</div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                ISO 9001:2015
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
              >
                Made in India
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Vision, Mission, Values */}
      <Section>
        <SectionHeader title="Our Foundation" subtitle="The principles that guide us" />
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${value.color} rounded-2xl p-8 text-white h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="font-heading font-semibold text-2xl mb-4 text-center">{value.title}</h3>
                <p className="text-white/90 text-center leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section dark>
        <SectionHeader title="Certifications" subtitle="Quality standards we adhere to" dark />
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-accent transition-colors"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <cert.icon size={32} className="text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-white mb-2">{cert.name}</h3>
              <p className="text-gray-400 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Milestones */}
      <Section>
        <SectionHeader title="Our Journey" subtitle="Key milestones in our growth" />
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-3 md:justify-end">
                      <milestone.icon size={20} className="text-accent" />
                      <span className="text-accent font-bold text-2xl">{milestone.year}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 bg-primary rounded-full items-center justify-center z-10 shadow-lg">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section dark>
        <SectionHeader title="Our Team" subtitle="The people behind our success" dark />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700 hover:border-accent transition-colors group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <dept.icon size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-white mb-2">{dept.name}</h3>
              <p className="text-gray-400 text-sm">{dept.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Manufacturing Process */}
      <Section>
        <SectionHeader title="Manufacturing Process" subtitle="Quality at every step" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {manufacturingProcess.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-gray-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <process.icon size={24} className="text-primary group-hover:text-white" />
                </div>
                <div className="text-2xl font-bold text-primary/20 mb-3">{process.step}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
              {index < manufacturingProcess.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300 group-hover:bg-primary transition-colors" />
              )}
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
              Ready to Work With Us?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how Trio Power Technologies can help with your IT infrastructure needs.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300">
              Get in Touch <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default About
