import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Filter, X, Search, Grid, List, Star, ArrowRight, CheckCircle, Package } from 'lucide-react'
import Section, { SectionHeader } from '../components/Section'
import { ProductCard } from '../components/Card'
import { products } from '../data/products'

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('name')

  useEffect(() => {
    const searchParam = searchParams.get('search')
    if (searchParam) {
      setSearchQuery(searchParam)
    }
  }, [searchParams])

  const categories = [
    { id: 'all', name: 'All Products', icon: Package },
    { id: 'racks', name: 'Server Racks', icon: Grid },
    { id: 'cabinets', name: 'Cabinets', icon: Package },
    { id: 'pdu', name: 'Power Distribution', icon: CheckCircle },
    { id: 'accessories', name: 'Accessories', icon: Package },
    { id: 'custom', name: 'Custom Solutions', icon: Star }
  ]

  const sortOptions = [
    { id: 'name', name: 'Name (A-Z)' },
    { id: 'name-desc', name: 'Name (Z-A)' },
    { id: 'category', name: 'Category' },
    { id: 'featured', name: 'Featured' }
  ]

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory
    const searchMatch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
    return categoryMatch && searchMatch
  }).sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'name-desc':
        return b.name.localeCompare(a.name)
      case 'category':
        return a.category.localeCompare(b.category)
      case 'featured':
        return 0 // You can add a featured field to products
      default:
        return 0
    }
  })

  const clearSearch = () => {
    setSearchQuery('')
    setSearchParams({})
  }

  const ProductGridCard = ({ product, index = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <Link to={`/products/${product.id}`}>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          {/* Image */}
          <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-slate-700/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-5xl">📦</span>
                </div>
              </div>
            )}
            {/* Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                {product.category.toUpperCase()}
              </span>
            </div>
            {/* Quick Actions */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col space-y-2">
              <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-700 hover:text-white transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2 h-10">
              {product.description}
            </p>
            
            {/* Features Preview */}
            <div className="flex flex-wrap gap-1 mb-4">
              {product.features.slice(0, 2).map((feature, index) => (
                <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
              {product.features.length > 2 && (
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  +{product.features.length - 2}
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-500 capitalize">{product.category}</span>
              <span className="text-primary font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                View Details <ArrowRight size={14} className="ml-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )

  const ProductListCard = ({ product, index = 0 }) => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link to={`/products/${product.id}`}>
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 flex gap-6">
          {/* Image */}
          <div className="w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
            {product.images && product.images.length > 0 ? (
              <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl">📦</span>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-heading font-semibold text-xl text-gray-900 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <span className="px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                {product.category.toUpperCase()}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.features.slice(0, 3).map((feature, index) => (
                <span key={index} className="flex items-center text-xs text-gray-500">
                  <CheckCircle size={12} className="mr-1 text-primary" />
                  {feature}
                </span>
              ))}
            </div>

            <span className="text-primary font-semibold text-sm flex items-center">
              View Details <ArrowRight size={14} className="ml-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )

  return (
    <>
      <Helmet>
        <title>Products - Trio Power Technologies</title>
        <meta name="description" content="Browse our comprehensive range of IT Server Racks, Network Cabinets, PDUs, and Rack Accessories." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
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
              Our <span className="text-accent">Products</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive range of IT infrastructure solutions for every need
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">{products.length}+</div>
                <div className="text-gray-400 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">{categories.length - 1}</div>
                <div className="text-gray-400 text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">100%</div>
                <div className="text-gray-400 text-sm">Quality</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <Section>
        <SectionHeader title="Product Catalog" subtitle="Find the perfect solution for your infrastructure" />
        
        {/* Search & Filter Bar */}
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, description, or features..."
                className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X size={20} />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-gray-500 text-center">
                Showing results for "{searchQuery}" ({filteredProducts.length} products found)
              </p>
            )}
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50 rounded-xl p-4">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-slate-700 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  <category.icon size={16} />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Sort & View */}
            <div className="flex items-center gap-3">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>

              {/* View Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-slate-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  aria-label="Grid view"
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-slate-700 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                  aria-label="List view"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products
          </p>
          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
                setSearchParams({})
              }}
              className="text-primary hover:text-accent transition-colors text-sm font-medium flex items-center"
            >
              <X size={16} className="mr-1" /> Clear filters
            </button>
          )}
        </div>

        {/* Product Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductGridCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product, index) => (
              <ProductListCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <Filter size={64} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
                setSearchParams({})
              }}
              className="btn-primary"
            >
              Clear All Filters
            </button>
          </div>
        )}
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
              Need Custom Solutions?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We can design and manufacture custom racks to meet your specific requirements.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300">
              Request Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Products
