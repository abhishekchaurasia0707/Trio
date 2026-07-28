import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Card = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8 } : {}}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-xl shadow-lg p-6 ${hover ? 'card-hover' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <Card>
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon size={28} className="text-primary" />
      </div>
      <h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Card>
  )
}

export const ProductCard = ({ product }) => {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-primary/20 rounded-lg flex items-center justify-center">
              <span className="text-4xl">📦</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      </div>
      <h3 className="font-heading font-semibold text-xl mb-2 text-gray-900">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
      <a
        href={`/products/${product.id}`}
        className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors"
      >
        Learn More <ArrowRight size={16} className="ml-2" />
      </a>
    </Card>
  )
}

export const IndustryCard = ({ industry }) => {
  return (
    <Card className="text-center group">
      <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-300 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <span className="text-4xl">{industry.icon}</span>
      </div>
      <h3 className="font-heading font-semibold text-xl mb-2 text-gray-900">{industry.name}</h3>
      <p className="text-gray-600 text-sm">{industry.description}</p>
    </Card>
  )
}

export default Card
