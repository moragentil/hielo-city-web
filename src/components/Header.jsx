import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, MessageCircle, Menu, X } from "lucide-react"
import Logo from '../../public/images/hielocity-logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "#inicio", text: "Inicio" },
    { href: "#productos", text: "Productos" },
    { href: "#servicios", text: "Servicios" },
    { href: "#testimonios", text: "Testimonios" },
    { href: "#clientes", text: "Clientes" },
    { href: "#contacto", text: "Contacto" },
  ]

  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  }

  return (
    <>
      <header className="fixed w-full px-4 sm:px-10 top-0 z-40 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg shadow-blue-500/5">
        <div className="container mx-auto flex h-16 items-center justify-between py-4">
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
                className="h-16 w-auto cursor-pointer transition-transform duration-300 group-hover:scale-110"
                draggable="false"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex gap-6 text-gray-900">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="font-medium transition-colors hover:text-blue-500 relative group">
                  {link.text}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            <a
              href="tel:2214638936"
              className="font-medium text-gray-900 flex items-center backdrop-blur-md bg-white/30 border rounded-md px-4 py-2 border-blue-200 transition-colors hover:text-blue-700"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span>221-463-8936</span>
            </a>
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
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100 ">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-white z-50 flex flex-col p-6 lg:hidden"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg text-blue-600">Menú</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="py-3 border-b border-gray-100 text-base  text-gray-800 hover:text-blue-500 transition-colors">
                  {link.text}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <a
                href="tel:2214638936"
                className="w-full text-center  text-gray-900 flex items-center justify-center bg-gray-100 border rounded-md px-4 py-2 border-gray-300 transition-colors hover:text-blue-700"
              >
                <Phone className="mr-2 h-4 w-4" />
                <span>Llamar: 221-463-8936</span>
              </a>
              <a
                href="https://wa.me/5492214638936"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center  flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-md px-4 py-2 text-white shadow-lg"
              >
                <MessageCircle className="mr-2 h-4 w-4"/> Pedir Ahora por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}