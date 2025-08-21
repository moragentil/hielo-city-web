"use client"

import { Snowflake, Sparkles, CloudSnow, CheckCircle } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 relative overflow-hidden justify-center flex">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-600 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-50 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-10 z-0 mix-blend-overlay"></div>
      <div className="absolute top-20 left-0 w-20 h-[calc(100%-40px)] bg-gradient-to-r from-blue-300/20 to-transparent z-10 opacity-50"></div>
      <div className="absolute top-20 right-0 w-20 h-[calc(100%-40px)] bg-gradient-to-l from-blue-300/20 to-transparent z-10 opacity-50"></div>

      <div className="container relative z-20">
        <div className="text-center mb-6">
          <div className=" px-3 py-1 rounded-full bg-blue-700/30 backdrop-blur-sm border border-blue-400/30 text-blue-100 text-sm font-medium mb-4 flex items-center gap-2 justify-center">
            <Snowflake className="h-4 w-4" />
            <span>Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Soluciones Completas de Hielo
          </h2>
          <p className="max-w-2xl mx-auto text-blue-100">
            Además de proveer el mejor hielo de La Plata, ofrecemos servicios especializados para todo tipo de necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Servicio para Eventos */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-xl shadow-blue-900/20 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 border-2 border-blue-300/0 rounded-xl scale-[1.02] group-hover:border-blue-300/20 transition-all duration-500 group-hover:scale-[1.01] opacity-0 group-hover:opacity-100"></div>
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-300/30 to-transparent rounded-tl-xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-300/30 to-transparent rounded-br-xl"></div>
            <h3 className="text-2xl font-bold mb-6 text-white relative z-10 flex items-center gap-2">
              <span>Servicio para Eventos</span>
              <Sparkles className="h-5 w-5 text-blue-200" />
            </h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-cyan-300" />
                <span className="text-blue-50">
                  Suministro de hielo para bodas, fiestas y eventos corporativos con servicio de entrega refrigerado
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-cyan-300" />
                <span className="text-blue-50">
                  Esculturas de hielo personalizadas talladas por artistas especializados
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-cyan-300" />
                <span className="text-blue-50">Barras de hielo para cócteles con iluminación LED incorporada</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-cyan-300" />
                <span className="text-blue-50">
                  Personal capacitado para manejo y distribución que garantiza la frescura del producto
                </span>
              </li>
            </ul>
            <button
              className="mt-8 w-full bg-white text-blue-700 hover:bg-white/90 shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-105 rounded-md py-2 font-medium relative overflow-hidden group"
              type="button"
            >
              <span className="relative z-10">consultar</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Servicio para Negocios */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-xl shadow-blue-900/20 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 border-2 border-blue-300/0 rounded-xl scale-[1.02] group-hover:border-blue-300/20 transition-all duration-500 group-hover:scale-[1.01] opacity-0 group-hover:opacity-100"></div>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-300/30 to-transparent rounded-tr-xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-300/30 to-transparent rounded-bl-xl"></div>
            <h3 className="text-2xl font-bold mb-6 text-white relative z-10 flex items-center gap-2">
              <span>Servicio para Negocios</span>
              <CloudSnow className="h-5 w-5 text-blue-200" />
            </h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-cyan-300" />
                <span className="text-blue-50">
                  Suministro regular para restaurantes, bares y hoteles con programación de entregas
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-cyan-300" />
                <span className="text-blue-50">
                  Contratos mensuales con precios especiales y garantía de abastecimiento
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-cyan-300" />
                <span className="text-blue-50">
                  Entrega en horarios específicos en contenedores térmicos especiales
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-cyan-300" />
                <span className="text-blue-50">
                  Facturación simplificada y asesoramiento sobre almacenamiento óptimo
                </span>
              </li>
            </ul>
            <button
              className="mt-8 w-full bg-white text-blue-700 hover:bg-white/90 shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-105 rounded-md py-2 font-medium relative overflow-hidden group"
              type="button"
            >
              <span className="relative z-10">solicitar plan</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}