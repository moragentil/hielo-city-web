"use client"

import { Truck, Droplets, ThermometerSnowflake } from "lucide-react"
import { motion } from "framer-motion"

export default function FeatureSection() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const freezeAnimation = {
    hover: {
      boxShadow: "0 0 20px rgba(148, 216, 255, 0.7)",
      transform: "translateY(-5px)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden bg-blue-50/70 justify-center flex px-10">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-2"
        >
          <motion.div
            variants={scaleIn}
            whileHover={freezeAnimation.hover}
            className="bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl shadow-blue-500/5 border border-blue-100/50 hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 border-2 border-blue-200/20 rounded-xl scale-[1.02] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 relative">
              <Truck className="h-7 w-7 text-white" />
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-blue-400 rounded-full filter blur-md -z-10"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent relative z-10">
              Entrega Rápida
            </h3>
            <p className="text-slate-600 relative z-10">
              Entregamos en toda La Plata y alrededores en menos de 2 horas. Servicio express disponible para
              mantener tus productos siempre congelados.
            </p>
          </motion.div>

          <motion.div
            variants={scaleIn}
            whileHover={freezeAnimation.hover}
            className="bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl shadow-blue-500/5 border border-blue-100/50 hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 border-2 border-blue-200/20 rounded-xl scale-[1.02] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 relative">
              <Droplets className="h-7 w-7 text-white" />
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute inset-0 bg-blue-400 rounded-full filter blur-md -z-10"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent relative z-10">
              Calidad Cristalina
            </h3>
            <p className="text-slate-600 relative z-10">
              Hielo cristalino, puro y duradero elaborado con los más altos estándares. Transparente como el cristal
              y sin impurezas.
            </p>
          </motion.div>

          <motion.div
            variants={scaleIn}
            whileHover={freezeAnimation.hover}
            className="bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl shadow-blue-500/5 border border-blue-100/50 hover:shadow-blue-500/10 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 border-2 border-blue-200/20 rounded-xl scale-[1.02] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 relative">
              <ThermometerSnowflake className="h-7 w-7 text-white" />
              <motion.div
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute inset-0 bg-blue-400 rounded-full filter blur-md -z-10"
              />
            </div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent relative z-10">
              Siempre Congelado
            </h3>
            <p className="text-slate-600 relative z-10">
              Disponibles todos los días del año para emergencias y eventos. Nuestro hielo mantiene la temperatura
              ideal por más tiempo.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}