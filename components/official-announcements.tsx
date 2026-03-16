"use client"

import React from 'react'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Megaphone, Award, Calendar, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export const OfficialAnnouncements = () => {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
    const [zoom, setZoom] = React.useState(1);

    const plugin = React.useRef(
        Autoplay({ delay: 6000, stopOnInteraction: true })
    );

    const handleZoomIn = (e: React.MouseEvent) => {
        e.stopPropagation();
        setZoom(prev => Math.min(prev + 0.5, 4));
    };

    const handleZoomOut = (e: React.MouseEvent) => {
        e.stopPropagation();
        setZoom(prev => Math.max(prev - 0.5, 1));
    };

    const resetZoom = (e: React.MouseEvent) => {
        e.stopPropagation();
        setZoom(1);
    };

    const closeGallery = () => {
        setSelectedImage(null);
        setZoom(1);
    };

    // Lista de comunicados.
    const announcements = [
        {
            id: 1,
            src: '/images/comunicado1.png',
            alt: 'Llamado a Inscripción - Los Villagra',
            date: '16 de Marzo, 2026',
            category: 'Inscripciones'
        },
    ];

    return (
        <section className="w-full py-20 bg-[#f8fafc] relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#FFB81A]/10 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-px w-8 bg-[#00519E]"></div>
                        <span className="text-[#00519E] font-bold tracking-widest text-xs uppercase">Canal Informativo</span>
                        <div className="h-px w-8 bg-[#00519E]"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1e293b] mb-4 font-playfair text-center">
                        Avisos Importantes
                    </h2>
                    <p className="text-slate-600 text-center max-w-2xl text-lg leading-relaxed">
                        Información relevante y de interés público emitida por el Instituto Provincial de Vivienda y Desarrollo Urbano.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full"
                        opts={{
                            loop: true,
                        }}
                    >
                        <CarouselContent className="ml-0">
                            {announcements.map((announcement) => (
                                <CarouselItem key={announcement.id} className="pl-0">
                                    <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row h-auto min-h-[500px] md:min-h-[600px] transform transition-all duration-500">

                                        {/* Lado de la Imagen (Columna Izquierda en Desktop) */}
                                        <div className="w-full md:w-3/5 relative bg-slate-100 aspect-[3/4] md:aspect-auto flex items-center justify-center overflow-hidden">
                                            {/* Fondo con blur suave para imágenes que no llenan el contenedor */}
                                            <div className="absolute inset-0 z-0">
                                                <Image
                                                    src={announcement.src}
                                                    alt=""
                                                    fill
                                                    className="object-cover blur-2xl opacity-20 scale-110"
                                                />
                                            </div>

                                            <div
                                                className="relative w-full h-full p-4 md:p-8 z-10 cursor-pointer group"
                                                onClick={() => setSelectedImage(announcement.src)}
                                            >
                                                <Image
                                                    src={announcement.src}
                                                    alt={announcement.alt}
                                                    fill
                                                    className="object-contain p-2 md:p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                                                    priority
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none rounded-[2rem]"></div>
                                            </div>

                                            {/* Badge flotante sobre la imagen en mobile */}
                                            <div className="absolute top-6 left-6 md:hidden z-20">
                                                <span className="bg-[#00519E] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                                                    <Megaphone size={14} />
                                                    {announcement.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Lado de Información (Columna Derecha en Desktop) */}
                                        <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white relative">
                                            <div className="hidden md:block mb-6">
                                                <span className="bg-blue-50 text-[#00519E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center w-fit gap-2">
                                                    <Award size={14} />
                                                    Comunicado Oficial
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                                                <Calendar size={16} />
                                                <span>{announcement.date}</span>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-tight font-playfair">
                                                {announcement.alt}
                                            </h3>

                                            <div className="h-1 w-20 bg-[#FFB81A] mb-8 rounded-full"></div>

                                            <p className="text-slate-600 mb-10 leading-relaxed italic">
                                                &quot;Invitamos a la población a seguir los canales oficiales para el acceso a información certificada sobre planes de vivienda.&quot;
                                            </p>

                                            <button
                                                onClick={() => setSelectedImage(announcement.src)}
                                                className="bg-[#00519E] hover:bg-[#003d7a] text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-3 group w-full md:w-fit"
                                            >
                                                <ZoomIn size={18} />
                                                Ampliar Imagen
                                            </button>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Controles de Navegación Mejorados */}
                        <div className="flex items-center justify-center gap-6 mt-12">
                            <CarouselPrevious className="static translate-y-0 h-14 w-14 rounded-full border-2 border-slate-200 bg-white text-slate-400 hover:bg-[#00519E] hover:text-white hover:border-[#00519E] transition-all duration-300 shadow-md" />
                            <div className="flex gap-2">
                                {announcements.map((_, idx) => (
                                    <div key={idx} className={`h-2.5 rounded-full transition-all duration-300 ${idx === 0 ? 'w-8 bg-[#00519E]' : 'w-2.5 bg-slate-200'}`}></div>
                                ))}
                            </div>
                            <CarouselNext className="static translate-y-0 h-14 w-14 rounded-full border-2 border-slate-200 bg-white text-slate-400 hover:bg-[#00519E] hover:text-white hover:border-[#00519E] transition-all duration-300 shadow-md" />
                        </div>
                    </Carousel>
                </div>
            </div>

            {/* Modal de Imagen Galería */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
                        onClick={closeGallery}
                    >
                        {/* Barra de Herramientas del Modal */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 z-[110]" onClick={(e) => e.stopPropagation()}>
                            <button
                                onClick={handleZoomOut}
                                className="text-white hover:text-[#FFB81A] transition-colors p-2"
                                title="Alejar"
                            >
                                <ZoomOut size={24} />
                            </button>
                            <span className="text-white font-mono text-sm w-12 text-center">
                                {Math.round(zoom * 100)}%
                            </span>
                            <button
                                onClick={handleZoomIn}
                                className="text-white hover:text-[#FFB81A] transition-colors p-2"
                                title="Acercar"
                            >
                                <ZoomIn size={24} />
                            </button>
                            <div className="w-px h-6 bg-white/20 mx-2"></div>
                            <button
                                onClick={resetZoom}
                                className="text-white hover:text-[#FFB81A] transition-colors p-2"
                                title="Resetear Zoom"
                            >
                                <RotateCcw size={20} />
                            </button>
                        </div>

                        {/* Botón de Cerrar */}
                        <button
                            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-[110]"
                            onClick={closeGallery}
                        >
                            <X size={28} />
                        </button>

                        <motion.div
                            className="relative w-full h-full flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
                        >
                            <motion.div
                                drag={zoom > 1}
                                dragConstraints={{ left: -500 * zoom, right: 500 * zoom, top: -500 * zoom, bottom: 500 * zoom }}
                                animate={{ scale: zoom }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="relative w-full h-full max-w-5xl max-h-[90vh]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={selectedImage}
                                    alt="Comunicado ampliado"
                                    fill
                                    className="object-contain"
                                    priority
                                    draggable={false}
                                />
                            </motion.div>
                        </motion.div>

                        <p className="absolute bottom-10 text-white/50 text-xs text-center pointer-events-none uppercase tracking-widest z-[110]">
                            {zoom > 1 ? 'Puedes arrastrar la imagen para moverte' : 'Usa los controles de arriba para hacer zoom'}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
