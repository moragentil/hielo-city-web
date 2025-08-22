"use client"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contacto" className="py-6 sm:py-10 scroll-mt-10 relative overflow-hidden justify-center flex">
      <div className="absolute inset-0 bg-slate-50 opacity-70 z-0"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5 z-0 mix-blend-overlay"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 sm:gap-1 mx-6 md:mx-0">
          {/* Información de contacto */}
          <div>
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight mb-2 sm:mb-6 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Contáctanos
            </h2>
            <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base">
              Estamos disponibles para atender todas tus consultas y pedidos. No dudes en contactarnos por cualquiera de estos medios.
            </p>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start">
                <div className="h-8 w-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 text-sm sm:text-base">Dirección</h3>
                  <p className="text-slate-600 text-sm sm:text-base">Calle 22 Nº619 entre 44 y 45, La Plata, Buenos Aires</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 sm:w-10 sm:h-10 rounded-full bg-rosa/10 flex items-center justify-center mr-4">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-rosa" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 text-sm sm:text-base">Teléfono</h3>
                  <p className="text-slate-600 text-sm sm:text-base">221-463-8936</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 text-sm sm:text-base">Email</h3>
                  <p className="text-slate-600 text-sm sm:text-base">hielocity@hotmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="h-8 w-8 sm:w-10 sm:h-10 rounded-full bg-rosa/10 flex items-center justify-center mr-4">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-rosa" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 text-sm sm:text-base">Horario de Atención</h3>
                  <p className="text-slate-600 text-sm sm:text-base">Lunes a Sábados: 8:00 - 00:00</p>
                  <p className="text-slate-600 text-sm sm:text-base">Domingos: Pedidos con anticipación</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4 sm:mt-8">
              <a
                href="https://www.facebook.com/frabricadehielo/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transform transition-transform duration-300 hover:scale-110"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://www.instagram.com/hielocity/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transform transition-transform duration-300 hover:scale-110"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Mapa en lugar del formulario */}
          <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-blue-100/50 h-fit flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.253622674289!2d-57.970284799999995!3d-34.92517569999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7d02b457dbf%3A0x48bdde9a6d506637!2sHielo%20City!5e0!3m2!1ses-419!2sar!4v1755794119637!5m2!1ses-419!2sar"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Hielo City"
            />
          </div>
        </div>
      </div>
    </section>
  )
}