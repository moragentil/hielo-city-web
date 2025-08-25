"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
	{
		href: "https://share.google/FU6TCLxXPpGV2Kvmh",
		stars: 5,
		text: "Te salva absolutamente todos los planes, la bolsa de 15kg es muy barata y que sea 24 hs hace que puedas comprar el hielo cuando lo necesites sin tener espacio para guardarlo.",
		author: "Bruno Tomasi Posadas",
		role: "Cliente Particular",
		initials: "BP",
	},
	{
		href: "https://share.google/8cCxyC53wveMQV6cq",
		stars: 5,
		text: "Compré 2 bolsas para enfriar la bebida para 50 personas y al final de la fiesta cuando volqué los tachos todavía quedaba hielo como para otra fiesta más, muy rendidor. Altamente recomendable.",
		author: "Gabriel Trueba",
		role: "Cliente Particular",
		initials: "GT",
	},
	{
		href: "https://share.google/eFizTWadYXlMaMzMw",
		stars: 5,
		text: "Excelente servicio y atención !! Muchas gracias Hielo City por la seriedad y compromiso !!! Queres que tu festejo sea un éxito? Hielo City !!! Yo lo recomiendo.",
		author: "Alba Dietrich",
		role: "Cliente Particular",
		initials: "AD",
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

const TestimonialCard = ({ testimonial }) => (
	<a
		href={testimonial.href}
		target="_blank"
		rel="noopener noreferrer"
		className="bg-white/80 backdrop-blur-sm py-6 px-10 sm:px-6 rounded-xl shadow-xl shadow-blue-500/5 border border-blue-100/50 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 flex flex-col h-full justify-between cursor-pointer"
	>
		<div>
			<div className="flex text-yellow-400 mb-4">
				{Array.from({ length: testimonial.stars }).map((_, i) => (
					<Star key={i} className="h-5 w-5 fill-current" />
				))}
			</div>
			<p className="mb-6 text-slate-600 text-sm sm:text-base">
				"{testimonial.text}"
			</p>
		</div>
		<div className="flex items-center mt-auto">
			<div className="w-12 h-12 rounded-full bg-rosa flex items-center justify-center mr-4 shadow-lg shadow-blue-500/20">
				<span className="font-medium text-white">{testimonial.initials}</span>
			</div>
			<div>
				<p className="font-medium">{testimonial.author}</p>
				<p className="text-sm text-slate-500">{testimonial.role}</p>
			</div>
		</div>
	</a>
)

export default function TestimonialSection() {
	const isMobile = useMediaQuery("(max-width: 639px)")
	const [currentIndex, setCurrentIndex] = useState(0)

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length)
	}

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
	}

	const carouselVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
		exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
	}

	return (
		<section id="testimonios" className="py-8 sm:py-16 scroll-mt-10 bg-blue-50/40">
			<div className="container mx-auto px-4 sm:px-6">
				<div className="text-center mb-4 sm:mb-12">
					<div className="inline-flex px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-2 sm:mb-4 items-center gap-2">
						<Star className="h-4 w-4" />
						<span>Testimonios</span>
					</div>
					<h2 className="text-xl sm:text-3xl font-bold tracking-tight mb-2 sm:mb-4 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
						Lo Que Dicen Nuestros Clientes
					</h2>
					<p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
						Nos enorgullece la satisfacción de nuestros clientes y su confianza en
						nuestros productos y servicios.
					</p>
				</div>

				{isMobile ? (
					<div className="relative h-[16rem] flex items-center justify-center">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentIndex}
								variants={carouselVariants}
								initial="hidden"
								animate="visible"
								exit="exit"
								className="w-full max-w-sm absolute"
							>
								<TestimonialCard testimonial={testimonials[currentIndex]} />
							</motion.div>
						</AnimatePresence>
						<button
							onClick={handlePrev}
							className="absolute top-1/2 -translate-y-1/2 left-0 z-20 p-2 bg-white/50 rounded-full shadow-md hover:bg-white transition-colors"
						>
							<ChevronLeft className="h-6 w-6 text-gray-700" />
						</button>
						<button
							onClick={handleNext}
							className="absolute top-1/2 -translate-y-1/2 right-0 z-20 p-2 bg-white/50 rounded-full shadow-md hover:bg-white transition-colors"
						>
							<ChevronRight className="h-6 w-6 text-gray-700" />
						</button>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{testimonials.map((testimonial, index) => (
							<TestimonialCard key={index} testimonial={testimonial} />
						))}
					</div>
				)}
			</div>
		</section>
	)
}