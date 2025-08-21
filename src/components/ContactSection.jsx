"use client"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contacto" className="py-10 scroll-mt-10 relative overflow-hidden justify-center flex">
      <div className="absolute inset-0 bg-slate-50 opacity-70 z-0"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
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
                href="https://www.facebook.com/frabricadehielo/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transform transition-transform duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/hielocity/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 transform transition-transform duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
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