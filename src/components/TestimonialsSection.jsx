"use client"

import { Star } from "lucide-react"

export default function TestimonialSection() {
  return (
    <section id="testimonios" className="py-10 scroll-mt-10 container mx-auto">
      <div className="text-center mb-8">
        <div className=" px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4 flex items-center gap-2 justify-center">
          <Star className="h-4 w-4" />
          <span>Testimonios</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Nos enorgullece la satisfacción de nuestros clientes y su confianza en nuestros productos y servicios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonio 1 */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl shadow-blue-500/5 border border-blue-100/50 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-blue-100/50 to-transparent rounded-tl-xl"></div>
          <div className="flex text-yellow-400 mb-4 relative z-10">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <p className="mb-6 text-slate-600 relative z-10">
            "El mejor servicio de hielo de La Plata. Siempre puntuales y con un producto de excelente calidad. El hielo dura mucho más que otros proveedores y mantiene la temperatura perfecta por horas."
          </p>
          <div className="flex items-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-rosa flex items-center justify-center mr-4 shadow-lg shadow-blue-500/20">
              <span className="font-medium text-white">MR</span>
            </div>
            <div>
              <p className="font-medium">Martín Rodríguez</p>
              <p className="text-sm text-slate-500">Restaurante El Dorado</p>
            </div>
          </div>
        </div>

        {/* Testimonio 2 */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl shadow-blue-500/5 border border-blue-100/50 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-tr-xl"></div>
          <div className="flex text-yellow-400 mb-4 relative z-10">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <p className="mb-6 text-slate-600 relative z-10">
            "Contratamos sus servicios para nuestra boda y fue perfecto. La escultura de hielo fue el centro de atención y el hielo para las bebidas duró toda la noche. ¡Brillaba como cristal!"
          </p>
          <div className="flex items-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-rosa flex items-center justify-center mr-4 shadow-lg shadow-blue-500/20">
              <span className="font-medium text-white">LG</span>
            </div>
            <div>
              <p className="font-medium">Laura Gómez</p>
              <p className="text-sm text-slate-500">Cliente Particular</p>
            </div>
          </div>
        </div>

        {/* Testimonio 3 */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl shadow-blue-500/5 border border-blue-100/50 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-100/50 to-transparent rounded-br-xl"></div>
          <div className="flex text-yellow-400 mb-4 relative z-10">
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
            <Star className="h-5 w-5 fill-current" />
          </div>
          <p className="mb-6 text-slate-600 relative z-10">
            "Llevamos más de 3 años trabajando con ellos para nuestro hotel. Servicio confiable, puntual y con un producto de primera calidad. Su hielo triturado es perfecto para nuestros buffets."
          </p>
          <div className="flex items-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-rosa flex items-center justify-center mr-4 shadow-lg shadow-blue-500/20">
              <span className="font-medium text-white">CP</span>
            </div>
            <div>
              <p className="font-medium">Carlos Pérez</p>
              <p className="text-sm text-slate-500">Hotel Platinum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}