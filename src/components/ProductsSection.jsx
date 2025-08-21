"use client"

import { CloudSnow, Wind, Snowflake, Zap, Waves, Sparkles } from "lucide-react"

export default function ProductsSection() {
  return (
    <section id="productos" className="py-6 bg-blue-50/70">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="flex px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4 items-center gap-2 justify-center">
            <CloudSnow className="h-4 w-4" />
            <span>Nuestros Productos</span>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-500 bg-clip-text text-transparent mb-4">
            Hielo Premium para Todas tus Necesidades
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Diferentes tipos de hielo para eventos, negocios y uso diario.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Producto 1 */}
          <div className="bg-white/70 backdrop-blur-lg rounded-xl overflow-hidden group shadow-xl shadow-blue-500/5 border border-blue-100/50 relative transition-all duration-300 hover:-translate-y-2">
          <div className="absolute inset-0 border-2 border-blue-200/0 rounded-xl scale-[1.02] group-hover:border-blue-200/20 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="/placeholder.svg"
              alt="Hielo en cubos"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 rounded-lg"
              style={{ maxHeight: "256px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div className="absolute top-4 right-4 bg-blue-500/80 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm z-20 flex items-center gap-1">
              <Zap className="h-3 w-3" />
              <span>Más Vendido</span>
            </div>
          </div>
          <div className="p-8 relative">
            <div className="absolute -inset-x-2 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
              <span>Hielo en Cubos</span>
              <CloudSnow className="h-5 w-5 text-blue-500" />
            </h3>
            <p className="text-slate-600 mb-6">
              Perfecto para bebidas y cócteles. Disponible en bolsas de 2kg, 5kg y 10kg. Cristalino y de lenta disolución, mantiene tus bebidas frías sin diluirlas.
            </p>
            <button
              className="w-full border border-blue-200 text-blue-700 bg-white hover:bg-blue-50 rounded-md py-2 font-medium transition-all duration-300 relative overflow-hidden group"
              type="button"
            >
              <span className="relative z-10">ver detalles</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>

          {/* Producto 2 */}
          <div className="bg-white/70 backdrop-blur-lg rounded-xl overflow-hidden group shadow-xl shadow-blue-500/5 border border-blue-100/50 relative transition-all duration-300 hover:-translate-y-2">
          <div className="absolute inset-0 border-2 border-blue-200/0 rounded-xl scale-[1.02] group-hover:border-blue-200/20 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="/placeholder.svg"
              alt="Hielo en bloque"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 rounded-lg"
              style={{ maxHeight: "256px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div className="absolute top-4 right-4 bg-cyan-500/80 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm z-20 flex items-center gap-1">
              <Waves className="h-3 w-3" />
              <span>Larga Duración</span>
            </div>
          </div>
          <div className="p-8 relative">
            <div className="absolute -inset-x-2 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
              <span>Hielo en Bloque</span>
              <Wind className="h-5 w-5 text-blue-500" />
            </h3>
            <p className="text-slate-600 mb-6">
              Ideal para conservar alimentos y para uso industrial. Bloques de 5kg, 10kg y 25kg. Máxima duración y capacidad de enfriamiento para tus productos perecederos.
            </p>
            <button
              className="w-full border border-blue-200 text-blue-700 bg-white hover:bg-blue-50 rounded-md py-2 font-medium transition-all duration-300 relative overflow-hidden group"
              type="button"
            >
              <span className="relative z-10">ver detalles</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
          {/* Producto 3 */}
          <div className="bg-white/70 backdrop-blur-lg rounded-xl overflow-hidden group shadow-xl shadow-blue-500/5 border border-blue-100/50 relative transition-all duration-300 hover:-translate-y-2">
          <div className="absolute inset-0 border-2 border-blue-200/0 rounded-xl scale-[1.02] group-hover:border-blue-200/20 transition-all duration-500 group-hover:scale-105 opacity-0 group-hover:opacity-100"></div>
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src="/placeholder.svg"
              alt="Hielo triturado"
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 rounded-lg"
              style={{ maxHeight: "256px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <div className="absolute top-4 right-4 bg-blue-400/80 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm z-20 flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              <span>Enfriamiento Rápido</span>
            </div>
          </div>
          <div className="p-8 relative">
            <div className="absolute -inset-x-2 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
              <span>Hielo Triturado</span>
              <Snowflake className="h-5 w-5 text-blue-500" />
            </h3>
            <p className="text-slate-600 mb-6">
              Perfecto para mariscos, buffets y presentaciones. Disponible por kilo. Ideal para enfriar rápidamente y crear espectaculares montajes para tus eventos.
            </p>
            <button
              className="w-full border border-blue-200 text-blue-700 bg-white hover:bg-blue-50 rounded-md py-2 font-medium transition-all duration-300 relative overflow-hidden group"
              type="button"
            >
              <span className="relative z-10">ver detalles</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}