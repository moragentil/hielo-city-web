import React, { useEffect, useRef } from "react"

const brandFiles = [
  "byehenry.png",
  "elcallejon.png",
  "moro.png",
  "wildhops.png",
  "gingerhall.png",
  "cortez.png",
  "calleginebra.png",
  "josue.png",
  "espai.png",
  "universitario.PNG",
  "santa.png",
  "latasca.png",
  "modelo.png",
  "vonharv.png",
  "lodejorge.png"
]

// Función para duplicar las marcas suficiente veces para evitar cortes
const duplicateBrands = (brands, times = 4) => {
  let duplicated = [];
  for (let i = 0; i < times; i++) {
    duplicated = [...duplicated, ...brands];
  }
  return duplicated;
}

export default function BrandsCarousel() {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  
  // Dividir las marcas en dos filas
  const half = Math.ceil(brandFiles.length / 2);
  const brandsRow1 = brandFiles.slice(0, half).map(file => `/images/logos/${file}`);
  const brandsRow2 = brandFiles.slice(half).map(file => `/images/logos/${file}`);
  
  // Duplicar las marcas para el efecto continuo (4 veces para mayor fluidez)
  const duplicatedBrands1 = duplicateBrands(brandsRow1, 4);
  const duplicatedBrands2 = duplicateBrands(brandsRow2, 4);

  // Efecto para reiniciar la animación cuando termine y evitar cortes
  useEffect(() => {
    const handleAnimationIteration = () => {
      // Pequeño retraso para reiniciar suavemente
      setTimeout(() => {
        if (row1Ref.current && row2Ref.current) {
          // Reiniciamos las animaciones
          row1Ref.current.style.animation = 'none';
          row2Ref.current.style.animation = 'none';
          
          // Forzamos un reflow
          void row1Ref.current.offsetWidth;
          void row2Ref.current.offsetWidth;
          
          // Reactivamos las animaciones
          row1Ref.current.style.animation = '';
          row2Ref.current.style.animation = '';
        }
      }, 10);
    };

    const row1Element = row1Ref.current;
    const row2Element = row2Ref.current;

    if (row1Element && row2Element) {
      row1Element.addEventListener('animationiteration', handleAnimationIteration);
      row2Element.addEventListener('animationiteration', handleAnimationIteration);
    }

    return () => {
      if (row1Element && row2Element) {
        row1Element.removeEventListener('animationiteration', handleAnimationIteration);
        row2Element.removeEventListener('animationiteration', handleAnimationIteration);
      }
    };
  }, []);

  return (
    <section id="clientes" className="w-full scroll-mt-40 py-16 flex flex-col items-center justify-center bg-gradient-to-br to-blue-400  from-blue-900/80 ">
      <h2 className="text-3xl font-bold tracking-tight text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
        Marcas que confían en nosotros
      </h2>
      <div className="w-full overflow-hidden relative h-52">
        {/* Primera fila - se mueve hacia la izquierda */}
        <div className="absolute top-0 w-full overflow-hidden">
          <div
            ref={row1Ref}
            className="flex animate-scroll-left-fast"
            style={{ width: `${duplicatedBrands1.length * 7}rem` }}
          >
            {duplicatedBrands1.map((brand, idx) => (
              <div
                key={`top-${idx}`}
                className="flex-shrink-0 w-20 h-20 mx-4 flex items-center justify-center"
              >
                <img src={brand} alt={`brand-${idx}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
        
        {/* Segunda fila - se mueve hacia la derecha */}
        <div className="absolute top-28 w-full overflow-hidden">
          <div
            ref={row2Ref}
            className="flex animate-scroll-right-fast"
            style={{ width: `${duplicatedBrands2.length * 7}rem` }}
          >
            {duplicatedBrands2.map((brand, idx) => (
              <div
                key={`bottom-${idx}`}
                className="flex-shrink-0 w-20 h-20 mx-4 flex items-center justify-center"
              >
                <img src={brand} alt={`brand-${idx}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Estilos CSS para las animaciones */}
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-scroll-left-fast {
          animation: scroll-left 20s linear infinite;
        }
        
        .animate-scroll-right-fast {
          animation: scroll-right 20s linear infinite;
        }
        
        /* Asegurar que la animación no se corte en diferentes navegadores */
        @media (prefers-reduced-motion: no-preference) {
          .animate-scroll-left-fast,
          .animate-scroll-right-fast {
            animation-duration: 15s; /* Más rápido que el valor original */
          }
        }
      `}</style>
    </section>
  )
}