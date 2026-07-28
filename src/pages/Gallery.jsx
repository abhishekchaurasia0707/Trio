import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { X, ZoomIn, Download, ChevronLeft, ChevronRight, Grid, List, Image as ImageIcon, Filter, Maximize2 } from 'lucide-react'
import Section, { SectionHeader } from '../components/Section'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const galleryImages = [
    { id: 1, category: 'racks', title: '42U Server Rack', emoji: '🖥️', image: '', description: 'Heavy-duty server rack for data centers', featured: true },
    { id: 2, category: 'racks', title: 'Network Cabinet', emoji: '📡', image: '', description: 'Compact network cabinet for telecom', featured: false },
    { id: 3, category: 'cabinets', title: 'Wall Mount Cabinet', emoji: '📦', image: '/products/WallMount.webp', description: 'Space-saving wall mount solution', featured: false },
    { id: 4, category: 'pdu', title: 'Vertical PDU', emoji: '🔌', image: '', description: 'Zero-U power distribution unit', featured: true },
    { id: 5, category: 'accessories', title: 'Cable Management', emoji: '🔗', image: '/products/Cable Management.webp', description: 'Professional cable organizers', featured: false },
    { id: 6, category: 'racks', title: 'Open Frame Rack', emoji: '🏗️', image: '', description: 'Maximum airflow open design', featured: false },
    { id: 7, category: 'cabinets', title: 'Perforated Door Rack', emoji: '🚪', image: '', description: 'High-ventilation server rack', featured: true },
    { id: 8, category: 'pdu', title: 'Horizontal PDU', emoji: '⚡', image: '', description: '1U horizontal power strip', featured: false },
    { id: 9, category: 'accessories', title: 'Cooling Fan', emoji: '❄️', image: '', description: 'High-performance cooling solution', featured: false },
    { id: 10, category: 'racks', title: 'Custom Rack Solution', emoji: '🔧', image: '', description: 'Bespoke rack manufacturing', featured: true },
    { id: 11, category: 'accessories', title: 'Rack Accessories', emoji: '🛠️', image: '/products/RackAccessories.webp', description: 'Complete accessory range', featured: false },
    { id: 12, category: 'manufacturing', title: 'Manufacturing Unit', emoji: '🏭', image: '', description: 'State-of-the-art facility', featured: true },
    { id: 13, category: 'manufacturing', title: 'Quality Control Lab', emoji: '🔬', image: '', description: 'Rigorous testing facility', featured: false },
    { id: 14, category: 'racks', title: '45U Server Rack', emoji: '🖥️', image: '', description: 'Enterprise server rack', featured: false },
    { id: 15, category: 'cabinets', title: 'Server Cabinet', emoji: '🗄️', image: '', description: 'Secure server storage', featured: false },
    { id: 16, category: 'pdu', title: 'Smart PDU', emoji: '🔌', image: '', description: 'Intelligent power management', featured: true },
  ]

  const categories = [
    { id: 'all', name: 'All Items', icon: Filter },
    { id: 'racks', name: 'Server Racks', icon: Grid },
    { id: 'cabinets', name: 'Cabinets', icon: ImageIcon },
    { id: 'pdu', name: 'Power Distribution', icon: Maximize2 },
    { id: 'accessories', name: 'Accessories', icon: Filter },
    { id: 'manufacturing', name: 'Manufacturing', icon: ImageIcon }
  ]

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id)
    let newIndex
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
    }
    setSelectedImage(galleryImages[newIndex])
  }

  const handleKeyDown = (e) => {
    if (!selectedImage) return
    if (e.key === 'Escape') setSelectedImage(null)
    if (e.key === 'ArrowRight') navigateImage('next')
    if (e.key === 'ArrowLeft') navigateImage('prev')
  }

  return (
    <>
      <Helmet>
        <title>Gallery - Trio Power Technologies</title>
        <meta name="description" content="View our product gallery showcasing IT Server Racks, Network Cabinets, PDUs, and manufacturing facilities." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-700 pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
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
              Product <span className="text-accent">Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our range of IT infrastructure solutions and manufacturing excellence
            </p>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">{galleryImages.length}+</div>
                <div className="text-gray-400 text-sm">Images</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">{categories.length - 1}</div>
                <div className="text-gray-400 text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">HD</div>
                <div className="text-gray-400 text-sm">Quality</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <Section>
        <SectionHeader title="Our Work" subtitle="Showcasing our products and facilities" />
        
        {/* Controls Bar */}
        <div className="mb-8 space-y-6">
          {/* Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50 rounded-xl p-4">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  <category.icon size={16} />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                aria-label="Grid view"
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                aria-label="List view"
              >
                <List size={20} />
              </button>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  {image.image ? (
                    <img src={image.image} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <span className="text-6xl">{image.emoji}</span>
                  )}
                  {/* Featured Badge */}
                  {image.featured && (
                    <div className="absolute top-2 left-2 bg-accent text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-semibold text-sm mb-1">{image.title}</p>
                    <p className="text-gray-300 text-xs line-clamp-2">{image.description}</p>
                    <div className="flex items-center mt-2 text-accent text-xs font-medium">
                      <ZoomIn size={14} className="mr-1" />
                      View Full
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="flex gap-6 p-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {image.image ? (
                      <img src={image.image} alt={image.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-4xl">{image.emoji}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-heading font-semibold text-lg text-gray-900">{image.title}</h3>
                      {image.featured && (
                        <span className="bg-accent text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{image.description}</p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      <ZoomIn size={14} className="mr-1" />
                      View Full Image
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredImages.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <ImageIcon size={64} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No images found</h3>
            <p className="text-gray-500 mb-6">Try selecting a different category</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="btn-primary"
            >
              View All Images
            </button>
          </div>
        )}
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-2"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-3"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent transition-colors z-10 bg-black/50 rounded-full p-3"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Content */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <div className="aspect-square max-h-[70vh] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                  {selectedImage.image ? (
                    <img src={selectedImage.image} alt={selectedImage.title} className="max-w-full max-h-full object-contain" />
                  ) : (
                    <span className="text-9xl">{selectedImage.emoji}</span>
                  )}
                  {selectedImage.featured && (
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                </div>
                <h3 className="font-heading font-semibold text-2xl text-white mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-400 mb-4">{selectedImage.description}</p>
                <div className="flex items-center justify-center gap-4">
                  <span className="px-3 py-1 bg-primary/30 text-primary-300 rounded-full text-sm capitalize">
                    {selectedImage.category}
                  </span>
                  <div className="text-gray-500 text-sm">
                    {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} / {galleryImages.length}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Keyboard Hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
              Use arrow keys to navigate, ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Gallery
