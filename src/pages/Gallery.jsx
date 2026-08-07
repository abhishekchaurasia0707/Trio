import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { X, ZoomIn, Download, ChevronLeft, ChevronRight, Grid, List, Image as ImageIcon, Filter, Maximize2, ArrowRight } from 'lucide-react'
import Section, { SectionHeader } from '../components/Section'
import { products } from '../data/products'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Convert products to gallery format
  const galleryImages = products.map((product, index) => ({
    id: product.id,
    category: product.category,
    title: product.name,
    description: product.description,
    images: product.images || [],
    featured: index < 4,
    productId: product.id
  }))


  const categories = [
    { id: 'all', name: 'All Items', icon: Filter },
    { id: 'racks', name: 'Server Racks', icon: Grid },
    { id: 'cabinets', name: 'Cabinets', icon: ImageIcon },
    { id: 'pdu', name: 'Power Distribution', icon: Maximize2 },
    { id: 'accessories', name: 'Accessories', icon: Filter },
    { id: 'custom', name: 'Custom Solutions', icon: Filter }
  ]

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const navigateImage = (direction) => {
    if (!selectedProduct) return
    const images = selectedProduct.images
    if (images.length === 0) return
    
    let newIndex
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % images.length
    } else {
      newIndex = (currentImageIndex - 1 + images.length) % images.length
    }
    setCurrentImageIndex(newIndex)
  }

  const handleKeyDown = (e) => {
    if (!selectedProduct) return
    if (e.key === 'Escape') {
      setSelectedProduct(null)
      setCurrentImageIndex(0)
    }
    if (e.key === 'ArrowRight') navigateImage('next')
    if (e.key === 'ArrowLeft') navigateImage('prev')
  }

  const handleProductClick = (product) => {
    if (product.images && product.images.length > 0) {
      setSelectedProduct(product)
      setCurrentImageIndex(0)
    }
  }

  return (
    <>
      <Helmet>
        <title>Gallery - Trio Power Technologies</title>
        <meta name="description" content="View our product gallery showcasing IT Server Racks, Network Cabinets, PDUs, and manufacturing facilities." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-semibold border border-accent/30">
                Visual Excellence
              </span>
            </motion.div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Explore our comprehensive range of IT infrastructure solutions through stunning visuals. 
              From server racks to custom manufacturing excellence.
            </p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center gap-8 md:gap-16"
            >
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">{galleryImages.filter(p => p.images && p.images.length > 0).length}+</div>
                <div className="text-gray-400 text-sm mt-1">Products</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">{galleryImages.reduce((acc, p) => acc + (p.images?.length || 0), 0)}+</div>
                <div className="text-gray-400 text-sm mt-1">Images</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">{categories.length - 1}</div>
                <div className="text-gray-400 text-sm mt-1">Categories</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <Section className="bg-gradient-to-r from-gray-50 to-white">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600">Highlighting our most popular solutions</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {galleryImages.filter(g => g.featured && g.images && g.images.length > 0).slice(0, 2).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              onClick={() => handleProductClick(product)}
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-white rounded-full text-xs font-semibold shadow-lg">
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/70 text-white rounded-full text-xs font-semibold backdrop-blur-sm">
                    {product.images.length} photos
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading font-bold text-xl text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2 mb-3">{product.description}</p>
                  <div className="flex items-center text-accent font-medium">
                    <ZoomIn size={16} className="mr-2" />
                    View Gallery
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Gallery */}
      <Section>
        <SectionHeader title="All Products" subtitle="Browse our complete product collection" />
        
        {/* Controls Bar */}
        <div className="mb-8 space-y-6">
          {/* Filter */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-accent to-accent/80 text-white shadow-lg shadow-accent/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  <category.icon size={16} />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex bg-gray-100 rounded-xl p-1">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${viewMode === 'grid' ? 'bg-white text-primary shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="Grid view"
              >
                <Grid size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${viewMode === 'list' ? 'bg-white text-primary shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="List view"
              >
                <List size={20} />
              </motion.button>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredImages.length}</span> images
            </p>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-primary hover:text-accent transition-colors text-sm font-medium flex items-center"
              >
                <X size={16} className="mr-1" /> Clear filter
              </button>
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div 
                  className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden"
                  onClick={() => handleProductClick(product)}
                >
                  {product.images && product.images.length > 0 ? (
                    <img 
                      src={product.images[0]} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  ) : (
                    <div className="text-6xl opacity-50">📦</div>
                  )}
                  {/* Image Count Badge */}
                  {product.images && product.images.length > 1 && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg"
                    >
                      {product.images.length} photos
                    </motion.div>
                  )}
                  {/* Featured Badge */}
                  {product.featured && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      className="absolute top-3 left-3 bg-gradient-to-r from-accent to-accent/80 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg"
                    >
                      Featured
                    </motion.div>
                  )}
                  {/* Quick Action Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      <h3 className="text-white font-bold text-lg mb-2">{product.title}</h3>
                      <p className="text-gray-300 text-sm line-clamp-2 mb-3">{product.description}</p>
                      <div className="flex items-center justify-between">
                        {product.images && product.images.length > 0 ? (
                          <div className="flex items-center text-accent font-semibold text-sm">
                            <ZoomIn size={16} className="mr-2" />
                            View Gallery
                          </div>
                        ) : (
                          <Link 
                            to={`/products/${product.productId}`}
                            className="flex items-center text-accent font-semibold text-sm hover:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Details <ArrowRight size={16} className="ml-2" />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredImages.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex gap-6 p-6">
                  <motion.div 
                    className="w-40 h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden cursor-pointer shadow-md group-hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleProductClick(product)}
                  >
                    {product.images && product.images.length > 0 ? (
                      <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-5xl opacity-50">📦</span>
                    )}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-heading font-bold text-xl text-gray-900 group-hover:text-primary transition-colors">{product.title}</h3>
                      <div className="flex gap-2">
                        {product.featured && (
                          <span className="bg-gradient-to-r from-accent to-accent/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                            Featured
                          </span>
                        )}
                        {product.images && product.images.length > 1 && (
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {product.images.length} photos
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center gap-4">
                      {product.images && product.images.length > 0 ? (
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleProductClick(product)}
                          className="flex items-center px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-accent transition-colors shadow-md"
                        >
                          <ZoomIn size={16} className="mr-2" />
                          View Gallery
                        </motion.button>
                      ) : null}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link 
                          to={`/products/${product.productId}`}
                          className="flex items-center text-primary font-semibold hover:text-accent transition-colors"
                        >
                          View Details <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredImages.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border-2 border-dashed border-gray-200"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ImageIcon size={80} className="text-gray-300 mx-auto mb-6" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No images found</h3>
            <p className="text-gray-500 mb-8">Try selecting a different category to explore our collection</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('all')}
              className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              View All Images
            </motion.button>
          </motion.div>
        )}
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => {
              setSelectedProduct(null)
              setCurrentImageIndex(0)
            }}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-accent transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 shadow-lg"
              aria-label="Close"
            >
              <X size={28} />
            </motion.button>

            {/* Navigation */}
            {selectedProduct.images && selectedProduct.images.length > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage('prev')
                  }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-4 shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={36} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage('next')
                  }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-4 shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight size={36} />
                </motion.button>
              </>
            )}

            {/* Image Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 md:p-10 text-center shadow-2xl border border-gray-700">
                <div className="aspect-square max-h-[55vh] bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden shadow-inner">
                  {selectedProduct.images && selectedProduct.images.length > 0 && (
                    <motion.img 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      key={currentImageIndex}
                      src={selectedProduct.images[currentImageIndex]} 
                      alt={selectedProduct.title} 
                      className="max-w-full max-h-full object-contain" 
                    />
                  )}
                  {selectedProduct.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-accent to-accent/80 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Featured
                    </div>
                  )}
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-3">
                  {selectedProduct.title}
                </h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">{selectedProduct.description}</p>
                <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-primary/30 to-primary/20 text-primary-300 rounded-full text-sm font-medium capitalize border border-primary/30">
                    {selectedProduct.category}
                  </span>
                  {selectedProduct.images && selectedProduct.images.length > 1 && (
                    <div className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700">
                      {currentImageIndex + 1} / {selectedProduct.images.length}
                    </div>
                  )}
                </div>
                {/* Image Thumbnails */}
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <div className="flex justify-center gap-3 mb-6 flex-wrap">
                    {selectedProduct.images.map((img, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex(idx)
                        }}
                        className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shadow-lg ${
                          currentImageIndex === idx ? 'border-accent ring-2 ring-accent/50' : 'border-transparent hover:border-gray-600'
                        }`}
                      >
                        <img src={img} alt={`${selectedProduct.title} ${idx + 1}`} className="w-full h-full object-cover" />
                      </motion.button>
                    ))}
                  </div>
                )}
                {/* View Product Details Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={`/products/${selectedProduct.productId}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedProduct(null)
                      setCurrentImageIndex(0)
                    }}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-white rounded-xl font-bold hover:shadow-2xl transition-all duration-300 shadow-lg"
                  >
                    View Product Details <ArrowRight size={20} className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Keyboard Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
              {selectedProduct.images && selectedProduct.images.length > 1 
                ? 'Use arrow keys to navigate, ESC to close' 
                : 'ESC to close'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Gallery
