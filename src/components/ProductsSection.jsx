import { CloudSnow, Zap } from "lucide-react"

const numeroWsp = "5492214638936"

const productos = [
  {
    nombre: "Bolsa de Hielo 4kg",
    descripcion: "Ideal para reuniones pequeñas y uso doméstico. Hielo cristalino y de larga duración.",
    badge: { texto: "Práctico", color: "bg-rosa", icon: <Zap className="h-4 w-4" /> },
    mensaje: "Hola! Quisiera consultar el precio de la Bolsa de Hielo 4kg."
  },
  {
    nombre: "Bolsa de Hielo 10kg",
    descripcion: "Perfecta para fiestas, bares y eventos medianos. Mantiene tus bebidas frías por más tiempo.",
    badge: { texto: "Más Vendido", color: "bg-rosa", icon: <Zap className="h-4 w-4" /> },
    mensaje: "Hola! Quisiera consultar el precio de la Bolsa de Hielo 10kg."
  },
  {
    nombre: "Bolsa de Hielo 15kg",
    descripcion: "La mejor opción para grandes eventos y negocios. Gran capacidad y duración.",
    badge: { texto: "Mayor Capacidad", color: "bg-rosa", icon: <Zap className="h-4 w-4" /> },
    mensaje: "Hola! Quisiera consultar el precio de la Bolsa de Hielo 15kg."
  }
]

export default function ProductsSection() {
  return (
    <section id="productos" className="py-12 bg-blue-50/70 scroll-mt-10">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="flex px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4 items-center gap-2 justify-center">
            <CloudSnow className="h-4 w-4" />
            <span>Nuestras Bolsas de Hielo</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Elegí el tamaño ideal para tu necesidad
            </span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Hielo premium para bebidas, eventos y negocios. Mantiene la temperatura por más tiempo y no altera el sabor.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productos.map((prod) => (
            <div
              key={prod.nombre}
              className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl border border-blue-100/50 p-8 relative flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`absolute top-2 right-2 ${prod.badge.color} text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 shadow`}>
                {prod.badge.icon}
                <span>{prod.badge.texto}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-1 text-blue-500 text-center flex items-center gap-2">
                {prod.nombre}
              </h3>
              <p className="text-slate-600 mb-8 text-center">
                {prod.descripcion}
              </p>
              <a
                href={`https://wa.me/${numeroWsp}?text=${encodeURIComponent(prod.mensaje)}`}
                className="w-full border border-blue-200 text-blue-700 bg-white hover:bg-blue-50 rounded-md py-3 font-medium justify-center flex transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">Solicitar Presupuesto</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}