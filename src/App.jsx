import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BrandsCarousel from './components/BrandsCarousel'
import FeaturesSection from './components/FeaturesSection'
import ProductsSection from './components/ProductsSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div className="flex min-h-screen flex-col overflow-hidden">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <FeaturesSection />
          <ProductsSection /> 
          <ServicesSection />
          <TestimonialsSection />
          <BrandsCarousel />
          <ContactSection /> 
        </main>
        <Footer />
      </div>
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 md:hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Volver arriba"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
