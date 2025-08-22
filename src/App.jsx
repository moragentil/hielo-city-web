import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

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
    </>
  )
}

export default App
