"use client"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Sparkles } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contacto" className="py-10 relative overflow-hidden justify-center flex">
      <div className="absolute inset-0 bg-slate-50 opacity-70 z-0"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5 z-0 mix-blend-overlay"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Contáctanos
            </h2>
            <p className="text-slate-600 mb-8">
              Estamos disponibles para atender todas tus consultas y pedidos. No dudes en contactarnos por cualquiera de estos medios.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">Dirección</h3>
                  <p className="text-slate-600">Calle 7 entre 45 y 46, La Plata, Buenos Aires</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-rosa/10 flex items-center justify-center mr-4">
                  <Phone className="h-5 w-5 text-rosa" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">Teléfono</h3>
                  <p className="text-slate-600">221-555-1234 / 221-555-5678</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">Email</h3>
                  <p className="text-slate-600">info@hielocity.com.ar</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-rosa/10 flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5 text-rosa" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">Horario de Atención</h3>
                  <p className="text-slate-600">Lunes a Domingo: 8:00 - 22:00</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transform transition-transform duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transform transition-transform duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Formulario de contacto */}
          <motion.div
  className="bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-xl shadow-blue-500/5 border border-blue-100/50 relative overflow-hidden group"
>
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-transparent rounded-tl-xl"></div>
  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-100/50 to-transparent rounded-br-xl"></div>

  <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent relative z-10 flex items-center gap-2">
    <span>Envíanos un Mensaje</span>
    <Mail className="h-5 w-5 text-blue-500" />
  </h3>
  <form className="space-y-4 relative z-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label htmlFor="nombre" className="text-sm font-medium text-slate-700">
          Nombre
        </label>
        <input
          id="nombre"
          placeholder="Tu nombre"
          className="border border-blue-200 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="telefono" className="text-sm font-medium text-slate-700">
          Teléfono
        </label>
        <input
          id="telefono"
          placeholder="Tu teléfono"
          className="border border-blue-200 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
        />
      </div>
    </div>
    <div className="space-y-2">
      <label htmlFor="email" className="text-sm font-medium text-slate-700">
        Email
      </label>
      <input
        id="email"
        type="email"
        placeholder="Tu email"
        className="border border-blue-200 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="asunto" className="text-sm font-medium text-slate-700">
        Asunto
      </label>
      <input
        id="asunto"
        placeholder="Asunto del mensaje"
        className="border border-blue-200 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200"
      />
    </div>
    <div className="space-y-2">
      <label htmlFor="mensaje" className="text-sm font-medium text-slate-700">
        Mensaje
      </label>
      <textarea
        id="mensaje"
        placeholder="Tu mensaje"
        rows={4}
        className="border border-blue-200 rounded-md px-3 py-2 w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition-all duration-200 resize-none"
      />
    </div>
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2"
    >
      <span className="relative z-10 flex items-center gap-2">
        <span>Enviar Mensaje</span>
        <Sparkles className="h-4 w-4" />
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      <span className="absolute -inset-x-2 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></span>
    </button>
  </form>
</motion.div>
        </div>
      </div>
    </section>
  )
}