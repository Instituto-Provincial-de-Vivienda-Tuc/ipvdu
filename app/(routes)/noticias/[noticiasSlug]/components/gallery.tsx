"use client";

import { useGetNoticiaBySlug } from "@/api/getNoticiaBySlug";
import { NoticiaType } from "@/types/noticia";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronRight, ChevronLeft, ZoomIn } from "lucide-react";
import Image from "next/image";

// Definimos interfaces para los tipos que necesitamos
// Tipo para eventos personalizados
type CustomEvent = Event | React.SyntheticEvent;

export const NoticiaGallery = () => {
    const params = useParams();
    const { noticiasSlug } = params;
    const { result }: ResponseType = useGetNoticiaBySlug(noticiasSlug);
    const [selectedImg, setSelectedImg] = useState<number | null>(null);
    const [imgPop, setImgPop] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageClick = (imgIndex: number) => {
        setIsLoading(true);
        setSelectedImg(imgIndex);
        setImgPop(true);
    };

    const closeImagePop = useCallback((event: CustomEvent) => {
        if ('preventDefault' in event && typeof event.preventDefault === 'function') {
            event.preventDefault();
        }
        setImgPop(false);
        setSelectedImg(null);
    }, []);

    const goToNextImage = useCallback((event: CustomEvent) => {
        if ('preventDefault' in event && typeof event.preventDefault === 'function') {
            event.preventDefault();
        }
        if (selectedImg === null || !result) return;

        setIsLoading(true);
        const totalImages = result[0].imagenes.length;
        const nextIndex = (selectedImg + 1) % totalImages;
        setSelectedImg(nextIndex);
    }, [selectedImg, result]);

    const goToPreviousImage = useCallback((event: CustomEvent) => {
        if ('preventDefault' in event && typeof event.preventDefault === 'function') {
            event.preventDefault();
        }
        if (selectedImg === null || !result) return;

        setIsLoading(true);
        const totalImages = result[0].imagenes.length;
        const prevIndex = (selectedImg - 1 + totalImages) % totalImages;
        setSelectedImg(prevIndex);
    }, [selectedImg, result]);

    // Funciones para detectar gestos de deslizamiento en móviles
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            // Creamos un evento personalizado en lugar de usar any
            const swipeEvent = new Event('swipe') as CustomEvent;
            goToNextImage(swipeEvent);
        }

        if (isRightSwipe) {
            // Creamos un evento personalizado en lugar de usar any
            const swipeEvent = new Event('swipe') as CustomEvent;
            goToPreviousImage(swipeEvent);
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    // Función para manejar teclas de navegación
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!imgPop) return;

            if (e.key === 'Escape') {
                closeImagePop(e);
            } else if (e.key === 'ArrowRight') {
                goToNextImage(e);
            } else if (e.key === 'ArrowLeft') {
                goToPreviousImage(e);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Bloquear scroll cuando el lightbox está abierto
        if (imgPop) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [imgPop, selectedImg, goToNextImage, goToPreviousImage, closeImagePop]);

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {result?.map((noticia: NoticiaType) => {
                const { imagenes, id } = noticia;

                return (
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                        id={`contenedorFotos-${id}`}
                        key={id}
                    >
                        {imagenes.map((imagen, imgIndex) => (
                            <div
                                key={imgIndex}
                                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
                                onClick={() => handleImageClick(imgIndex)}
                            >
                                <div className="aspect-w-4 aspect-h-3 bg-gray-100">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imagen.url}`}
                                        alt={`Imagen ${imgIndex + 1} de la noticia ${id}`}
                                        className="w-full h-64 object-cover cursor-pointer transition-transform duration-700 ease-in-out group-hover:scale-110"
                                        width={800}
                                        height={600}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center">
                                        <div className="bg-white/90 p-3 rounded-full shadow-lg">
                                            <ZoomIn className="h-6 w-6 text-gray-800" />
                                        </div>
                                        <p className="text-white font-medium mt-2 text-center px-3 text-shadow">
                                            Ver imagen
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {imgPop && selectedImg !== null && (
                            <div
                                className="fixed top-0 left-0 right-0 bottom-0 bg-black/95 z-50 flex flex-col justify-center items-center backdrop-blur-sm animate-fadeIn"
                                onClick={(e) => {
                                    // Cerrar al hacer clic en el fondo
                                    if (e.target === e.currentTarget) {
                                        closeImagePop(e);
                                    }
                                }}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <button
                                    className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 z-50 transform hover:rotate-90"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Evitar propagación del evento
                                        closeImagePop(e);
                                    }}
                                    aria-label="Cerrar"
                                >
                                    <X className="h-6 w-6" />
                                </button>

                                <button
                                    className="absolute left-4 md:left-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 z-50 transform hover:scale-110 hover:-translate-x-1"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Evitar propagación del evento
                                        goToPreviousImage(e);
                                    }}
                                    aria-label="Imagen anterior"
                                >
                                    <ChevronLeft className="h-8 w-8" />
                                </button>

                                <button
                                    className="absolute right-4 md:right-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 z-50 transform hover:scale-110 hover:translate-x-1"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Evitar propagación del evento
                                        goToNextImage(e);
                                    }}
                                    aria-label="Imagen siguiente"
                                >
                                    <ChevronRight className="h-8 w-8" />
                                </button>

                                <div
                                    className="relative w-full h-full flex justify-center items-center px-4 sm:px-10 md:px-20"
                                    onClick={(e) => e.stopPropagation()} // Evitar que se cierre al hacer clic en el contenedor
                                >
                                    {isLoading && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
                                        </div>
                                    )}

                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imagenes[selectedImg].url}`}
                                        alt={`Imagen ${selectedImg + 1} de la noticia ${id}`}
                                        className="max-w-full max-h-[85vh] object-contain transition-all duration-500 shadow-2xl rounded-md"
                                        width={1200}
                                        height={800}
                                        style={{
                                            opacity: isLoading ? 0.3 : 1,
                                            transform: `scale(${isLoading ? 0.95 : 1})`
                                        }}
                                        onLoad={handleImageLoad}
                                        unoptimized={true}
                                    />
                                </div>

                                <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center">
                                    <div className="bg-black/50 backdrop-blur-sm px-6 py-2 rounded-full">
                                        <p className="text-sm md:text-base text-white font-medium">
                                            {selectedImg + 1} / {imagenes.length}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
