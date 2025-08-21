import { motion } from "framer-motion"
import { Snowflake, Phone, CloudSnow, Sparkles } from "lucide-react"
import { Link } from "react-router-dom" // O usa <a> si no usas react-router

export default function Header() {
  return (
    <header className="sticky px-10 top-0 z-40 backdrop-blur-md bg-white/40 supports-[backdrop-filter]:bg-white/20 border-b border-white/20 shadow-lg shadow-blue-500/5">
      <div className="container flex h-16 items-center justify-between py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="relative">
            <Snowflake className="h-7 w-7 text-blue-500" />
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-blue-400 rounded-full filter blur-md -z-10"
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Hielo City
          </span>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex gap-6"
        >
          <a href="#inicio" className="text-sm font-medium transition-colors hover:text-blue-500 relative group">
            Inicio
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#productos" className="text-sm font-medium transition-colors hover:text-blue-500 relative group">
            Productos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#servicios" className="text-sm font-medium transition-colors hover:text-blue-500 relative group">
            Servicios
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#testimonios" className="text-sm font-medium transition-colors hover:text-blue-500 relative group">
            Testimonios
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contacto" className="text-sm font-medium transition-colors hover:text-blue-500 relative group">
            Contacto
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <button className="font-medium flex items-center backdrop-blur-md bg-white/30 border rounded-md px-3 py-2 border-blue-200">
            <Phone className="mr-2 h-4 w-4" />
            <span>221-555-1234</span>
          </button>
          <button className="font-medium flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-md px-3 py-2 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group">
            <span className="relative z-10">Pedir Ahora</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute -inset-x-2 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></span>
          </button>
        </motion.div>
      </div>
    </header>
  )
}