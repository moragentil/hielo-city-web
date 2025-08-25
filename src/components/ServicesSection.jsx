import { Snowflake, Sparkles, CloudSnow, CheckCircle } from "lucide-react"

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-6 sm:py-16 md:py-20  relative overflow-hidden justify-center flex">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-500 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-blue-50 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-10 z-0 mix-blend-overlay"></div>
      <div className="absolute top-20 left-0 w-20 h-[calc(100%-40px)] bg-gradient-to-r from-blue-300/20 to-transparent z-10 opacity-50"></div>
      <div className="absolute top-20 right-0 w-20 h-[calc(100%-40px)] bg-gradient-to-l from-blue-300/20 to-transparent z-10 opacity-50"></div>

      <div className="container relative z-20">
        <div className="text-center mb-6">
          <div className="inline-flex px-3 py-1 text-xs rounded-full bg-blue-700/30 backdrop-blur-sm border border-blue-400/30 text-white sm:text-sm font-medium mb-2 sm:mb-4 items-center gap-2">
            <Snowflake className="h-4 w-4" />
            <span>Nuestros Servicios</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight mb-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            Soluciones Completas de Hielo
          </h2>
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-blue-100">
            Además de proveer el mejor hielo de La Plata, ofrecemos servicios especializados para todo tipo de necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mx-6 sm:mx-0">
          {/* Servicio para Eventos */}
          <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/20 shadow-xl shadow-blue-900/20 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col h-full justify-between">
            <div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 border-2 border-blue-300/0 rounded-xl scale-[1.02] group-hover:border-blue-300/20 transition-all duration-500 group-hover:scale-[1.01] opacity-0 group-hover:opacity-100"></div>
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-300/30 to-transparent rounded-tl-xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-300/30 to-transparent rounded-br-xl"></div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white relative z-10 flex items-center gap-2">
                <span>Servicio para Eventos</span>
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-blue-200" />
              </h3>
              <ul className="space-y-4 relative z-10 text-sm sm:text-base">
                <li className="flex items-start ">
                  <CheckCircle strokeWidth={3} className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-rosa" />
                  <span className="text-blue-50 ">
                    Suministro de bolsas de hielo para bodas, fiestas y eventos corporativos
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle strokeWidth={3} className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-rosa" />
                  <span className="text-blue-50">
                    Diferentes tamaños disponibles: 4kg, 10kg y 15kg según la necesidad del evento
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle strokeWidth={3} className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-rosa" />
                  <span className="text-blue-50">
                    Entrega refrigerada y puntual en el lugar del evento
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle strokeWidth={3} className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-rosa" />
                  <span className="text-blue-50">
                    Personal capacitado para manejo y distribución que garantiza la frescura del producto
                  </span>
                </li>
              </ul>
            </div>
            <a
              href="https://wa.me/5492214638936?text=Hola!%20Quisiera%20consultar%20por%20el%20servicio%20para%20eventos."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full bg-white text-blue-700 hover:bg-white/90 shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-105 rounded-md py-2 font-medium relative overflow-hidden group text-center"
            >
              <span className="relative z-10 text-rosa">Consultar</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>

          {/* Servicio para Negocios */}
{/* Servicio para Negocios */}
<div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-white/20 shadow-xl shadow-blue-900/20 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col h-full justify-between">
  <div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute inset-0 border-2 border-blue-300/0 rounded-xl scale-[1.02] group-hover:border-blue-300/20 transition-all duration-500 group-hover:scale-[1.01] opacity-0 group-hover:opacity-100"></div>
    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-300/30 to-transparent rounded-tr-xl"></div>
    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-300/30 to-transparent rounded-bl-xl"></div>
    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white relative z-10 flex items-center gap-2">
      <span>Servicio para Negocios</span>
      <CloudSnow className="h-4 w-4 sm:h-5 sm:w-5 text-blue-200" />
    </h3>
    <ul className="space-y-4 relative z-10 text-sm sm:text-base">
      <li className="flex items-start">
        <CheckCircle strokeWidth={3} className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-rosa" />
        <span className="text-blue-50">
          Suministro regular para restaurantes, bares y hoteles con programación de entregas
        </span>
      </li>
      <li className="flex items-start">
        <CheckCircle strokeWidth={3} className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-rosa" />
        <span className="text-blue-50">
          Contratos mensuales con precios especiales y garantía de abastecimiento
        </span>
      </li>
      <li className="flex items-start">
        <CheckCircle strokeWidth={3} className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-rosa" />
        <span className="text-blue-50">
          Entrega en horarios específicos en contenedores térmicos especiales
        </span>
      </li>
      <li className="flex items-start">
        <CheckCircle strokeWidth={3} className="h-5 w-5 mr-3 shrink-0 mt-0.5 text-rosa" />
        <span className="text-blue-50">
          Facturación simplificada y asesoramiento sobre almacenamiento óptimo
        </span>
      </li>
    </ul>
  </div>
  <a
    href="https://wa.me/542214638936?text=Hola!%20Quisiera%20solicitar%20un%20plan%20para%20negocios."
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 w-full bg-white text-blue-700 hover:bg-white/90 shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-105 rounded-md py-2 font-medium relative overflow-hidden group text-center"
  >
    <span className="relative z-10 text-rosa">Solicitar Plan</span>
    <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </a>
</div>

        </div>
      </div>
    </section>
  )
}