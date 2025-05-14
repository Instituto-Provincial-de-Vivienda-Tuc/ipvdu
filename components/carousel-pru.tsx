"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useGetFeatured } from "@/api/useGetFeatured"
import { ResponseType } from "@/types/response"
import { SkeletonSchema } from "./skeletonSchema"
import { NoticiaType } from "@/types/noticia"

export function CarouselPru() {
    const { loading, result }: ResponseType = useGetFeatured();
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <div className="relative w-full max-w-6xl">
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                opts={{
                    loop: true,
                    align: "start",
                }}
            >
                <CarouselContent>
                    {loading && (
                        <SkeletonSchema grid={3} />
                    )}
                    {result != null && (
                        result.map((noticia: NoticiaType) => {
                            const { id, titulo, subtitulo, fecha, slug, imagenPrincipal, category } = noticia
                            return (
                                <CarouselItem key={id} className="md:basis-full">
                                    <div className="rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:scale-[1.01]">
                                        <div className="flex flex-col md:flex-row bg-white">
                                            <div className="md:w-3/5 overflow-hidden flex items-center justify-center">
                                                <Image
                                                    className="w-full h-auto max-h-[500px] object-contain transition-transform duration-700 hover:scale-110"
                                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imagenPrincipal.url}`}
                                                    alt={titulo}
                                                    width={800}
                                                    height={500}
                                                    priority
                                                />
                                            </div>
                                            <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex items-center justify-between mb-4">
                                                        <span className="text-sm font-medium text-gray-500">{fecha}</span>
                                                        <div className="flex space-x-2">
                                                            <Image
                                                                className="w-5 h-5"
                                                                src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/zmdo4qdcpusm3om08ur4.jpg"
                                                                alt="Icono cámara"
                                                                width={20}
                                                                height={20}
                                                            />
                                                            <Image
                                                                className="w-5 h-5"
                                                                src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/jlrnktzbuw5ubsveknyv.jpg"
                                                                alt="Icono video"
                                                                width={20}
                                                                height={20}
                                                            />
                                                        </div>
                                                    </div>
                                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 line-clamp-3">{titulo}</h2>

                                                    {/* Categoría de la noticia */}
                                                    {category && (
                                                        <div className="mb-3">
                                                            <span className="inline-block bg-[#FFB81A]/20 text-black text-sm font-medium px-3 py-1 rounded-full">
                                                                {category.name}
                                                            </span>
                                                        </div>
                                                    )}

                                                    <p className="text-gray-700 mb-6 line-clamp-4">{subtitulo}</p>
                                                </div>
                                                <a
                                                    href={`noticias/${slug}`}
                                                    className="inline-flex items-center justify-center px-6 py-3 bg-[#FFB81A] text-gray-900 font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#ffce63] self-start"
                                                >
                                                    Leer más
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    )}
                </CarouselContent>

                {/* Flechas de navegación a los costados */}
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#FFB81A]/80 hover:bg-[#FFB81A] border-none text-gray-900 hidden md:flex" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#FFB81A]/80 hover:bg-[#FFB81A] border-none text-gray-900 hidden md:flex" />

                {/* Flechas de navegación centradas para móvil */}
                <div className="flex justify-center mt-4 gap-2 md:hidden">
                    <CarouselPrevious className="relative left-0 translate-x-0 bg-[#FFB81A] hover:bg-[#ffce63] border-none text-gray-900" />
                    <CarouselNext className="relative right-0 translate-x-0 bg-[#FFB81A] hover:bg-[#ffce63] border-none text-gray-900" />
                </div>
            </Carousel>
        </div>
    )
}
