import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, Download, Check, ArrowRight, ShoppingCart } from 'lucide-react'
import Section, { SectionHeader } from '../components/Section'
import { products } from '../data/products'
import jsPDF from 'jspdf'

const ProductDetails = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === id)

  const handleDownloadCatalogue = () => {
    // Create PDF
    const doc = new jsPDF()
    
    // Add header
    doc.setFillColor(11, 46, 109) // Primary blue
    doc.rect(0, 0, 210, 40, 'F')
    
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.text('TRIO POWER TECHNOLOGIES', 105, 20, { align: 'center' })
    
    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.text('Product Catalogue', 105, 30, { align: 'center' })
    
    // Reset text color
    doc.setTextColor(0, 0, 0)
    
    let yPosition = 55
    
    // Product name
    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    doc.text(product.name, 20, yPosition)
    yPosition += 10
    
    // Category
    doc.setFontSize(12)
    doc.setFont('helvetica', 'normal')
    doc.text(`Category: ${product.category.toUpperCase()}`, 20, yPosition)
    yPosition += 15
    
    // Description
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Description', 20, yPosition)
    yPosition += 8
    
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    const descriptionLines = doc.splitTextToSize(product.description, 170)
    doc.text(descriptionLines, 20, yPosition)
    yPosition += descriptionLines.length * 6 + 10
    
    // Features
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Key Features', 20, yPosition)
    yPosition += 8
    
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    product.features.forEach((feature) => {
      const featureLines = doc.splitTextToSize(`• ${feature}`, 170)
      doc.text(featureLines, 20, yPosition)
      yPosition += featureLines.length * 6 + 3
    })
    yPosition += 7
    
    // Applications
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Applications', 20, yPosition)
    yPosition += 8
    
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    product.applications.forEach((app) => {
      const appLines = doc.splitTextToSize(`• ${app}`, 170)
      doc.text(appLines, 20, yPosition)
      yPosition += appLines.length * 6 + 3
    })
    yPosition += 7
    
    // Specifications
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Specifications', 20, yPosition)
    yPosition += 8
    
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    Object.entries(product.specifications).forEach(([key, value]) => {
      const specLabel = `${key.charAt(0).toUpperCase() + key.slice(1)}:`
      doc.text(specLabel, 20, yPosition)
      doc.text(value, 70, yPosition)
      yPosition += 8
    })
    
    // Contact info
    yPosition += 10
    doc.setFillColor(244, 163, 0) // Gold accent
    doc.rect(0, yPosition - 5, 210, 30, 'F')
    
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('Contact Us', 105, yPosition + 5, { align: 'center' })
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text('Email: info@triopower.com | Phone: +91 20 1234 5678', 105, yPosition + 12, { align: 'center' })
    doc.text('www.triopower.com', 105, yPosition + 20, { align: 'center' })
    
    // Footer
    doc.setFontSize(8)
    doc.text(`© ${new Date().getFullYear()} Trio Power Technologies. All rights reserved.`, 105, 285, { align: 'center' })
    
    // Save PDF
    doc.save(`${product.name.replace(/\s+/g, '_')}_Catalogue.pdf`)
  }

  if (!product) {
    return (
      <Section>
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="btn-primary inline-block mt-4">
            Back to Products
          </Link>
        </div>
      </Section>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <>
      <Helmet>
        <title>{product.name} - Trio Power Technologies</title>
        <meta name="description" content={product.description} />
      </Helmet>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-primary">Products</Link>
            <span className="text-gray-400">/</span>
            <span className="text-primary font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl">📦</div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/products" className="inline-flex items-center text-gray-500 hover:text-primary mb-6">
              <ArrowLeft size={20} className="mr-2" /> Back to Products
            </Link>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              {product.name}
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-heading font-semibold text-xl mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="mb-8">
              <h3 className="font-heading font-semibold text-xl mb-4">Applications</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-accent flex items-center justify-center">
                <ShoppingCart size={20} className="mr-2" /> Request Quote
              </Link>
              <button 
                onClick={handleDownloadCatalogue}
                className="btn-secondary flex items-center justify-center"
              >
                <Download size={20} className="mr-2" /> Download Catalogue
              </button>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Specifications */}
      <Section dark>
        <SectionHeader title="Specifications" subtitle="Technical details" dark />
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-8">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between py-4 border-b border-gray-700 last:border-0"
              >
                <span className="text-gray-400 font-medium capitalize">{key}</span>
                <span className="text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Section>
          <SectionHeader title="Related Products" subtitle="You might also be interested in" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/products/${relatedProduct.id}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                      {relatedProduct.image ? (
                        <img src={relatedProduct.image} alt={relatedProduct.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-4xl">📦</span>
                      )}
                    </div>
                    <h3 className="font-heading font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{relatedProduct.description}</p>
                    <span className="inline-flex items-center text-primary font-medium text-sm">
                      View Details <ArrowRight size={16} className="ml-2" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-300 py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Need More Information?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect solution for your needs.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300">
              Contact Us <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default ProductDetails
