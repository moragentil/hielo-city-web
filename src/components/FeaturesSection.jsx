"use client"

import { Truck, Droplets, ThermometerSnowflake } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Servicio express en La Plata y alrededores. Tu pedido llega en menos de 2 horas, siempre a la temperatura ideal.",
  },
  {
    icon: Droplets,
    title: "Calidad Cristalina",
    description: "Hielo puro y duradero, elaborado con los más altos estándares. Transparente como el cristal y sin impurezas.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Siempre Congelado",
    description: "Disponibles todos los días para emergencias y eventos. Nuestro hielo mantiene la temperatura por más tiempo.",
  },
]

const FeatureCard = ({ feature, index }) => {
  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const freezeAnimation = {
    hover: {
      boxShadow: "0 0 25px rgba(148, 216, 255, 0.8)",
      transform: "translateY(-6px)",
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      variants={scaleIn}
      whileHover={freezeAnimation.hover}
      className="bg-white/70 backdrop-blur-lg p-4 sm:p-6 rounded-xl shadow-xl shadow-blue-500/5 border border-blue-100/50 transition-shadow,transform duration-300 relative overflow-hidden group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 border-2 border-blue-200/20 rounded-xl scale-[1.02] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>
      <div className="flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:gap-0">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20 relative">
        <feature.icon className="h-5 w-5 text-white" />
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
          className="absolute inset-0 bg-blue-400 rounded-full filter blur-md -z-10"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent relative z-10">
        {feature.title}
      </h3>
      </div>
      <p className="text-slate-600 relative z-10 text-sm sm:text-base">{feature.description}</p>
    </motion.div>
  )
}

export default function FeatureSection() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-6 sm:py-16 md:py-20 relative overflow-hidden bg-blue-50/70">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}