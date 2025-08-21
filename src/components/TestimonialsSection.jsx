"use client"

import { Star } from "lucide-react"

export default function TestimonialSection() {
  return (
    <section id="testimonios" className="py-10 scroll-mt-10 container mx-auto">
      <div className="text-center mb-8">
        <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4 flex items-center gap-2 justify-center">
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
        <a
          href="https://share.google/FU6TCLxXPpGV2Kvmh"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl shadow-blue-500/5 border border-blue-100/50 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col h-full justify-between cursor-pointer"
        >
          <div>
            <div className="flex text-yellow-400 mb-4 ">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="mb-6 text-slate-600 ">
              "Te salva absolutamente todos los planes, la bolsa de 15kg es muy barata y que sea 24 hs hace que puedas comprar el hielo cuando lo necesites sin tener espacio para guardarlo"
            </p>
          </div>
          <div className="flex items-center mt-6">
            <div className="w-12 h-12 rounded-full bg-rosa flex items-center justify-center mr-4 shadow-lg shadow-blue-500/20">
              <span className="font-medium text-white">MR</span>
            </div>
            <div>
              <p className="font-medium">Bruno Tomasi Posadas</p>
              <p className="text-sm text-slate-500">Cliente Particular</p>
            </div>
          </div>
        </a>

        {/* Testimonio 2 */}
        <a
          href="https://share.google/8cCxyC53wveMQV6cq"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl shadow-blue-500/5 border border-blue-100/50 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col h-full justify-between cursor-pointer"
        >
          <div>
            <div className="flex text-yellow-400 mb-4 ">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="mb-6 text-slate-600 ">
              "Compré 2 bolsas para enfriar la bebida para 50 personas y al final de la fiesta cuando volqué los tachos todavía quedaba hielo como para otra fiesta más, muy rendidor. altamente recomendable"
            </p>
          </div>
          <div className="flex items-center mt-6">
            <div className="w-12 h-12 rounded-full bg-rosa flex items-center justify-center mr-4 shadow-lg shadow-blue-500/20">
              <span className="font-medium text-white">LG</span>
            </div>
            <div>
              <p className="font-medium">Gabriel Trueba</p>
              <p className="text-sm text-slate-500">Cliente Particular</p>
            </div>
          </div>
        </a>

        {/* Testimonio 3 */}
        <a
          href="https://share.google/eFizTWadYXlMaMzMw"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl shadow-blue-500/5 border border-blue-100/50 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col h-full justify-between cursor-pointer"
        >
          <div>
            <div className="flex text-yellow-400 mb-4 ">
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
              <Star className="h-5 w-5 fill-current" />
            </div>
            <p className="mb-6 text-slate-600 ">
              "Excelente servicio y atención !! Muchas gracias Hielo City por la seriedad y compromiso !!! Queres que tu festejo sea un éxito? Hielo City !!! Yo lo recomiendo"
            </p>
          </div>
          <div className="flex items-center mt-6">
            <div className="w-12 h-12 rounded-full bg-rosa flex items-center justify-center mr-4 shadow-lg shadow-blue-500/20">
              <span className="font-medium text-white">CP</span>
            </div>
            <div>
              <p className="font-medium">alba dietrich</p>
              <p className="text-sm text-slate-500">Cliente Particular</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}