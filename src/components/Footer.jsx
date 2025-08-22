import { motion } from "framer-motion"
import { Snowflake, Facebook, Instagram, CloudSnow, Droplets, Sparkles, Truck, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-10 relative overflow-hidden flex justify-center">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-repeat opacity-10 mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-blue-300/20 to-transparent"></div>
      <div className="container relative z-10 px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="relative">
                <Snowflake className="h-6 w-6 text-blue-400" />
                <motion.div
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-blue-500/30 rounded-full filter blur-md -z-10"
                />
              </div>
              <span className="text-xl font-bold text-white">
                Hielo 
              </span>
              <span className="text-xl font-bold text-rosa">
                City
              </span>
            </motion.div>
            <p className="text-slate-400 mb-6">
              La mayor distribuidora de hielo en La Plata. Calidad y servicio garantizado desde 1995. Especialistas en
              hielo cristalino de larga duración.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/frabricadehielo/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rosa text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/hielocity/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rosa text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-blue-400 group-hover:w-2 transition-all duration-300"></span>
                  <span>Inicio</span>
                </a>
              </li>
              <li>
                <a href="#productos" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-blue-400 group-hover:w-2 transition-all duration-300"></span>
                  <span>Productos</span>
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-blue-400 group-hover:w-2 transition-all duration-300"></span>
                  <span>Servicios</span>
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-blue-400 group-hover:w-2 transition-all duration-300"></span>
                  <span>Testimonios</span>
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-[1px] bg-blue-400 group-hover:w-2 transition-all duration-300"></span>
                  <span>Contacto</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <CloudSnow className="h-4 w-4 text-blue-400" />
                  <span>Hielo para Eventos</span>
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <Droplets className="h-4 w-4 text-blue-400" />
                  <span>Hielo para Negocios</span>
                </span>
              </li>
              <li>
                <span className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <Truck className="h-4 w-4 text-blue-400" />
                  <span>Entrega a Domicilio</span>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-400">Calle 7 entre 45 y 46, La Plata</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-400">221-555-1234</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 shrink-0 mt-0.5" />
                <span className="text-slate-400">info@hielocity.com.ar</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full border-t border-gray-300/50 mt-12 pt-9 text-center text-slate-400 text-sm justify-between">
          <a href="https://www.resguarit.com.ar" target="_blank" rel="noopener noreferrer">
            <p className="flex items-center justify-center gap-2 hover:underline">
            <img
              src="/images/logoresguar.svg"
              alt="Logo Resguar IT"
              className="h-5 w-5 inline-block mr-1"
            />
            Desarrollado por <span className="font-messina">Resguar IT</span>
          </p>
          </a>
          <p>&copy; {new Date().getFullYear()} Hielo City. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}