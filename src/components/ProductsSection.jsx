import { useState, useEffect } from "react"
import { CloudSnow, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const numeroWsp = "5492214638936"

const productos = [
	{
		nombre: "Bolsa de Hielo 4kg",
		descripcion:
			"Ideal para reuniones pequeñas y uso doméstico. Hielo cristalino y de larga duración.",
		badge: { texto: "Práctico", color: "bg-rosa" },
		mensaje: "Hola! Quisiera consultar el precio de la Bolsa de Hielo 4kg.",
	},
	{
		nombre: "Bolsa de Hielo 10kg",
		descripcion:
			"Perfecta para fiestas, bares y eventos medianos. Mantiene tus bebidas frías por más tiempo.",
		badge: { texto: "Más Vendido", color: "bg-rosa" },
		mensaje: "Hola! Quisiera consultar el precio de la Bolsa de Hielo 10kg.",
	},
	{
		nombre: "Bolsa de Hielo 15kg",
		descripcion:
			"La mejor opción para grandes eventos y negocios. Gran capacidad y duración.",
		badge: { texto: "Mayor Capacidad", color: "bg-rosa" },
		mensaje: "Hola! Quisiera consultar el precio de la Bolsa de Hielo 15kg.",
	},
]

const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(false)
	useEffect(() => {
		const media = window.matchMedia(query)
		if (media.matches !== matches) {
			setMatches(media.matches)
		}
		const listener = () => setMatches(media.matches)
		window.addEventListener("resize", listener)
		return () => window.removeEventListener("resize", listener)
	}, [matches, query])
	return matches
}

const ProductCard = ({ prod }) => (
	<div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl border border-blue-100/50 p-6 relative flex flex-col items-center transition-all duration-300 hover:-translate-y-2 h-full">
		<div
			className={`absolute top-3 right-3 ${prod.badge.color} text-white text-xs  px-3 py-1 rounded-full flex items-center gap-1 shadow`}
		>
			<Zap className="h-4 w-4" />
			<span>{prod.badge.texto}</span>
		</div>
		<h3 className="text-xl font-bold mb-3 mt-4 text-blue-500 text-center flex items-center gap-2">
			{prod.nombre}
		</h3>
		<p className="text-slate-600 mb-6 text-center text-sm flex-grow">
			{prod.descripcion}
		</p>
		<a
			href={`https://wa.me/${numeroWsp}?text=${encodeURIComponent(prod.mensaje)}`}
			className="w-full mt-auto border border-blue-200 text-blue-700 bg-white hover:bg-blue-50 rounded-md py-2.5 font-medium justify-center flex transition-all duration-300 hover:scale-105 active:scale-95 relative overflow-hidden group"
			target="_blank"
			rel="noopener noreferrer"
		>
			<span className="relative z-10">Solicitar Presupuesto</span>
			<span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
		</a>
	</div>
)

export default function ProductsSection() {
	const isMobile = useMediaQuery("(max-width: 639px)")
	const [[page, direction], setPage] = useState([0, 0])

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection])
	}

	const productIndex = ((page % productos.length) + productos.length) % productos.length

	const slideVariants = {
		hidden: (direction) => ({
			x: direction > 0 ? "100%" : "-100%",
			opacity: 0,
		}),
		visible: {
			x: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 260, damping: 30 },
		},
		exit: (direction) => ({
			x: direction < 0 ? "100%" : "-100%",
			opacity: 0,
			transition: { type: "spring", stiffness: 260, damping: 30 },
		}),
	}

	return (
		<section
			id="productos"
			className="py-6 sm:py-16 md:py-20 bg-blue-50/70 scroll-mt-10"
		>
			<div className="container mx-auto px-4 sm:px-6">
				<div className="text-center mb-4 sm:mb-12">
					<div className="inline-flex px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 sm:text-sm font-medium mb-2 sm:mb-4 items-center gap-2">
						<CloudSnow className="h-4 w-4" />
						<span>Nuestras Bolsas de Hielo</span>
					</div>
					<h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">
						<span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
							Elegí el tamaño ideal para tu necesidad
						</span>
					</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
                Hielo premium para bebidas, eventos y negocios. Disponible en formato <span className="font-semibold text-blue-600">Rolo</span> y <span className="font-semibold text-blue-600">Triturado</span> para adaptarse a todas tus necesidades.
            </p>
				</div>

				{isMobile ? (
					<div className="relative h-[16rem] flex items-center justify-center">
						<AnimatePresence initial={false} custom={direction}>
							<motion.div
								key={page}
								custom={direction}
								variants={slideVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								className="w-full max-w-xs absolute"
							>
								<ProductCard prod={productos[productIndex]} />
							</motion.div>
						</AnimatePresence>
						<button
							onClick={() => paginate(-1)}
							className="absolute top-1/2 -translate-y-1/2 left-0 z-20 p-2 bg-white/50 rounded-full shadow-md hover:bg-white transition-colors"
						>
							<ChevronLeft className="h-6 w-6 text-gray-700" />
						</button>
						<button
							onClick={() => paginate(1)}
							className="absolute top-1/2 -translate-y-1/2 right-0 z-20 p-2 bg-white/50 rounded-full shadow-md hover:bg-white transition-colors"
						>
							<ChevronRight className="h-6 w-6 text-gray-700" />
						</button>
						<div className="absolute -bottom-4 flex gap-2">
							{productos.map((_, i) => (
								<button
									key={i}
									onClick={() =>
										setPage([i, i > productIndex ? 1 : -1])
									}
									className={`w-2.5 h-2.5 rounded-full transition-colors ${
										productIndex === i
											? "bg-blue-500"
											: "bg-gray-300"
									}`}
								/>
							))}
						</div>
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
						{productos.map((prod) => (
							<ProductCard key={prod.nombre} prod={prod} />
						))}
					</div>
				)}
			</div>
		</section>
	)
}