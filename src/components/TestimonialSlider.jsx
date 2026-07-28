import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, MapPin, Briefcase, Quote, Building2, Award } from 'lucide-react'

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
      const timer = setInterval(next, 7000)
      return () => clearInterval(timer)
    }
  }, [isPaused])

  const testimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Background Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-200/50 backdrop-blur-sm"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Quote Icon - Top Right */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-primary/5">
              <Quote size={80} className="sm:size-[100px]" />
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-accent text-accent"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 text-center mb-8 sm:mb-10 leading-relaxed font-medium">
              "{testimonial.quote}"
            </p>

            {/* Author Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
              {/* Avatar */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary-300 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-xl ring-4 ring-white/50">
                {testimonial.avatar}
              </div>

              {/* Details */}
              <div className="text-center sm:text-left">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-primary font-semibold text-sm sm:text-base mb-1">{testimonial.role}</p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 text-sm">
                  <Building2 size={14} />
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>

            {/* Project & Location */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-gradient-to-r from-primary/5 to-primary/10 px-3 sm:px-4 py-2 rounded-full border border-primary/10">
                <Briefcase size={14} className="text-primary" />
                <span className="font-medium">{testimonial.project}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 bg-gradient-to-r from-accent/5 to-accent/10 px-3 sm:px-4 py-2 rounded-full border border-accent/10">
                <MapPin size={14} className="text-accent" />
                <span className="font-medium">{testimonial.location}</span>
              </div>
            </div>

            {/* Verified Badge */}
            <div className="flex items-center justify-center mt-6">
              <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                <Award size={12} className="text-primary" />
                <span>Verified Client</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-16 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 border border-gray-200 z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} className="sm:size-24" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-16 w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 border border-gray-200 z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} className="sm:size-24" />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-6 sm:mt-8 space-x-2 sm:space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-6 sm:w-8 bg-gradient-to-r from-primary to-primary-300' 
                : 'w-2 sm:w-2.5 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500 font-medium">
        <span className="text-primary font-bold">{currentIndex + 1}</span>
        <span className="mx-1">/</span>
        {testimonials.length}
      </div>
    </div>
  )
}

export default TestimonialSlider
