import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, ArrowRight } from 'lucide-react'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Trio Power Technologies</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary inline-flex items-center justify-center">
                <Home size={20} className="mr-2" />
                Back to Home
              </Link>
              <Link to="/products" className="btn-secondary inline-flex items-center justify-center">
                Browse Products
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default NotFound
