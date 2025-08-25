import { motion, AnimatePresence } from "framer-motion"
import { ThermometerSnowflake, Sparkles, CloudSnow } from "lucide-react"
import { useState, useEffect } from "react"

import carousel1 from '../../public/images/bolsas-festejo.jpg'
import carousel2 from '../../public/images/copa-hielo.jpg'
import carousel3 from '../../public/images/muchas-bolsas.jpg'

const images = [carousel1, carousel2, carousel3]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000) // Cambia la imagen cada 4 segundos

    return () => clearInterval(interval)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const iceTextAnimation = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.8 },
    },
  }

  // Función para scroll suave a productos
  const handleVerProductos = () => {
    const section = document.getElementById("productos")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative mt-16 scroll-mt-20 py-20 md:py-16  bg-gradient-to-r from-blue-900/80 to-blue-500/60">
      <div className=" mx-auto px-6 md:px-16 ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between  lg:gap-12">
          {/* Textos y botones */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-xl space-y-6 sm:space-y-4 flex-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-3 py-1 rounded-full bg-blue-500/30 backdrop-blur-sm border border-blue-400/30 text-xs sm:text-sm font-medium mb-4"
            >
              <span className="flex items-center text-white gap-2">
                <ThermometerSnowflake className="h-4 w-4" />
                <span className="" >La Mejor Calidad en La Plata</span>
              </span>
            </motion.div>
            <motion.h1
              variants={iceTextAnimation}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl "
            >
              <div className="flex gap-1 md:gap-4">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-[0_5px_5px_rgba(148,216,255,0.1)]">Hielo </span>
                <span className="block text-rosa">City</span> {/* Rosa para la marca */}
              </div>
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-[0_5px_5px_rgba(148,216,255,0.1)]">La Mayor Distribuidora</span>
              <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-[0_5px_5px_rgba(148,216,255,0.1)]">de Hielo en La Plata</span>
            </motion.h1>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: 0.4 },
                },
              }}
              className="text-lg md:text-xl text-blue-100"
            >
              Suministramos hielo de la más alta calidad para eventos, negocios y hogares. Entrega rápida y servicio confiable.
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: 0.6 },
                },
              }}
              className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4"
            >
              <a
                href="https://wa.me/5492214638936"
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-white items-center px-3 py-2 rounded-md font-medium bg-blue-600/90 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 relative overflow-hidden group w-fit"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Solicitar Presupuesto</span>
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute -inset-x-2 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></span>
              </a>
              <button
                onClick={handleVerProductos}
                className="flex w-fit items-center px-3 py-2 rounded-md font-medium text-white border-white/40 backdrop-blur-sm border bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Ver Productos</span>
                  <CloudSnow className="h-4 w-4" />
                </span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </motion.div>
          </motion.div>
          {/* Imagen */}
          <div className="flex-1 md:flex justify-center items-center relative w-full max-w-lg h-[28rem] hidden ">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Hielo de alta calidad"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute object-cover rounded-2xl shadow-xl w-full h-full "
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}