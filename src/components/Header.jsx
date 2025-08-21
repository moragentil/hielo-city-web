import { motion } from "framer-motion"
import { Snowflake, Phone, MessageCircle } from "lucide-react"
import Logo from '../../public/images/hielocity-logo.png'

export default function Header() {
  return (
    <header className="fixed w-full px-10 top-0 z-40 backdrop-blur-md bg-white border-b border-white/20 shadow-lg shadow-blue-500/5">
      <div className="container flex h-16 items-center justify-between py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <a href="#inicio" className="relative group flex items-center">
            <img
              src={Logo}
              alt="Logo Hielo City"
              className="h-18 w-auto cursor-pointer transition-transform duration-300 group-hover:scale-110"
              draggable="false"
            />
            <span className="ml-3 text-rosa text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Volver al inicio
            </span>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-6"
        >
          <nav className="hidden md:flex gap-6 text-gray-900">
            <a href="#inicio" className="font-medium transition-colors hover:text-blue-500 relative group">
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#productos" className="font-medium transition-colors hover:text-blue-500 relative group">
              Productos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#servicios" className="font-medium transition-colors hover:text-blue-500 relative group">
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonios" className="font-medium transition-colors hover:text-blue-500 relative group">
              Testimonios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contacto" className="font-medium transition-colors hover:text-blue-500 relative group">
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          <button className="font-medium text-gray-900 flex items-center backdrop-blur-md bg-white/30 border rounded-md px-4 py-2 border-blue-200">
            <Phone className="mr-2 h-4 w-4" />
            <span>221-555-1234</span>
          </button>
          <a
            href="https://wa.me/5492214638936"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-md px-4 py-2 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden group transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <MessageCircle className=" h-4 w-4"/> Pedir Ahora
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute -inset-x-2 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></span>
          </a>
        </motion.div>
      </div>
    </header>
  )
}