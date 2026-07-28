import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, MapPin, Briefcase, Quote } from 'lucide-react'

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(next, 6000)
      return () => clearInterval(timer)
    }
  }, [isPaused])

  const testimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary/10">
              <Quote size={64} />
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-accent text-accent"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
              "{testimonial.quote}"
            </p>

            {/* Author Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              {/* Avatar */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-300 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {testimonial.avatar}
              </div>

              {/* Details */}
              <div className="text-center md:text-left">
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-primary font-medium mb-1">{testimonial.role}</p>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </div>

            {/* Project & Location */}
            <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                <Briefcase size={16} className="text-primary" />
                <span>{testimonial.project}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                <MapPin size={16} className="text-primary" />
                <span>{testimonial.location}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 border border-gray-200"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 border border-gray-200"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-8 bg-primary' 
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4 text-sm text-gray-500">
        {currentIndex + 1} / {testimonials.length}
      </div>
    </div>
  )
}

export default TestimonialSlider
