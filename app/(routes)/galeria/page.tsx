"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// Array de imágenes optimizado para evitar duplicados
const uniqueImages = [
    "https://www.primerafuente.com.ar/fotos/notas/2022/03/21/720x405_99266_20220321133130.jpg",
    "https://www.comunicaciontucuman.gob.ar/fotos/cache/notas/2021/09/27/818x460_210927132258_89156.jpeg",
    "https://lh6.googleusercontent.com/proxy/PjOZAh3ucq-zdseoeyJgh4iVIn4oGZE62Z71t4cFaMMgCQ97s4vYz4Ry14lxR7GTRX6kqLwRr8vmBSFC2CJo7_HgEt8mjfSUWtiTC5JAyuoNVTx5G7zTYDsq3BOupUJXVkw18MgpjhMLgnhM5uY7U2VT9zXaVbB6teqvqSoGpuBR4E7pf_dNgMmSlw8MZwYWqN14ouglDfoqgRVslfOkeoxV1_Y6ly_P",
    "https://www.comunicaciontucuman.gob.ar/fotos/notas/2021/07/30/210730115135_14551.jpg",
    "https://www.salta.gob.ar/public/images/noticias/73959-el-ipv-esta-por-finalizar-108-viviendas-para-empleados-viales.jpg",
    "https://lh3.googleusercontent.com/proxy/rZnNfycBWCzCXS5kEI4MihCncVSGOTXW9IUtrL0zDWbmT1jvV9ZMpqGD1OIVewLrxemGo_cuMU8DdGEsojDgMVVcD6yVhHGfpU6pxO8tiF1V7Z8zwdzDr1USASbX2bG4c15h3SaxlD5vmYpSarz6Hhz6p7vq4w_IO1H3rr8uZVcKNDW18xS-RdbqIA",
    "https://media.sitioandino.com.ar/p/57832db65448cc500670ae34a06ad4db/adjuntos/335/imagenes/000/632/0000632132/790x0/smart/entrega-casa-ipv-guaymallenjpg.jpg",
    "https://diariosanrafael.com.ar/wp-content/uploads/2024/10/Gustavo-Cantero-IPV.jpg",
];

// Textos para las polaroids
const polaroidTexts = [
    "Viviendas de calidad",
    "Familias y su primer hogar",
    "Detalle en cada casa",
    "Construyendo sueños",
    "Precisión y compromiso",
    "Trabajo en equipo",
    "Actividad en nuestros barrios",
    "Proyectos que quedan",
];

export default function Page() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const modalRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    // Simular carga de página con tiempo reducido para mejor experiencia
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 600);
        return () => clearTimeout(timer);
    }, []);

    // Cerrar modal
    const closeModal = useCallback(() => {
        setSelectedImage(null);
        document.body.style.overflow = ''; // Restaurar scroll
    }, []);

    // Navegar entre imágenes
    const navigateImages = useCallback((direction: number) => {
        if (currentIndex === -1) return;

        const newIndex = (currentIndex + direction + uniqueImages.length) % uniqueImages.length;
        setCurrentIndex(newIndex);
        setSelectedImage(uniqueImages[newIndex]);
    }, [currentIndex]);

    // Gestión de navegación con teclado
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImage) return;

            switch (e.key) {
                case 'Escape':
                    closeModal();
                    break;
                case 'ArrowLeft':
                    navigateImages(-1);
                    break;
                case 'ArrowRight':
                    navigateImages(1);
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, currentIndex, closeModal, navigateImages]);

    // Abrir modal con imagen seleccionada
    const openModal = useCallback((src: string, index: number) => {
        setSelectedImage(src);
        setCurrentIndex(index);
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    }, []);

    // Gestión de gestos táctiles
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        const swipeThreshold = 50;
        const diff = touchStartX.current - touchEndX.current;

        if (Math.abs(diff) < swipeThreshold) return;

        if (diff > 0) {
            // Deslizar a la izquierda (siguiente)
            navigateImages(1);
        } else {
            // Deslizar a la derecha (anterior)
            navigateImages(-1);
        }
    };

    // Generar ángulo aleatorio para cada polaroid
    const getRandomRotation = (index: number) => {
        // Semilla basada en el índice para mantener consistencia
        const seed = index * 137.5;
        // Generar un ángulo entre -6 y 6 grados
        return ((seed % 12) - 6).toFixed(1);
    };

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white mt-4">
            {/* Pantalla de carga con efecto moderno */}
            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-white dark:bg-gray-900">
                    <div className="relative w-24 h-24">
                        <div className="absolute inset-0 border-4 border-t-[#FFB81A] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                        <div className="absolute inset-2 border-4 border-t-transparent border-r-[#FFB81A]/80 border-b-transparent border-l-transparent rounded-full animate-spin animation-delay-150"></div>
                        <div className="absolute inset-4 border-4 border-t-transparent border-r-transparent border-b-[#FFB81A]/60 border-l-transparent rounded-full animate-spin animation-delay-300"></div>
                    </div>
                </div>
            )}

            <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                {/* Botón de regreso */}
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-700 hover:text-[#FFB81A] transition-colors duration-300 mb-6 py-2 px-4 rounded-md hover:bg-gray-100 group"
                >
                    <ArrowLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                    <span className="font-medium">Volver al inicio</span>
                </Link>

                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4 relative inline-block">
                        <span className="relative z-10">Álbum de Fotos</span>
                        <span className="absolute -bottom-1 left-0 w-full h-3 bg-[#FFB81A]/50 dark:bg-[#FFB81A]/70 transform -rotate-1 rounded-lg"></span>
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto opacity-80">Nuestra colección de momentos capturados con nuestra comunidad</p>
                </div>

                {/* Fondo de álbum de fotos */}
                <div className="relative bg-amber-50 dark:bg-gray-800 rounded-xl p-6 md:p-10 shadow-xl mb-16">
                    {/* Textura de papel mejorada - más artesanal */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIwLjUiIGZpbGw9IiNlZWVlZWUiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iMC4zIiBmaWxsPSIjZjVmNWY1Ij48L2NpcmNsZT4KPGNpcmNsZSBjeD0iMTUiIGN5PSIxNSIgcj0iMC40IiBmaWxsPSIjZjBmMGYwIj48L2NpcmNsZT4KPC9zdmc+')] opacity-50 dark:opacity-10 rounded-xl"></div>

                    {/* Elementos decorativos artesanales */}
                    <div className="absolute top-0 left-0 w-full h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iOCI+CjxwYXRoIGQ9Ik0wLDQgQzIwLDAsODAsMCwxMDAsNCIgc3Ryb2tlPSIjZDRhZjM3IiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+Cjwvc3ZnPg==')] bg-repeat-x opacity-60"></div>
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iOCI+CjxwYXRoIGQ9Ik0wLDQgQzIwLDgsODAsOCwxMDAsNCIgc3Ryb2tlPSIjZDRhZjM3IiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+Cjwvc3ZnPg==')] bg-repeat-x opacity-60"></div>

                    {/* Título del álbum con estilo artesanal y nostálgico */}
                    <div className="relative mb-10 text-center">
                        <div className="inline-block relative">
                            <h2 className="font-serif text-3xl px-8 py-3 bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100 rounded-lg shadow-sm transform -rotate-1 border-2 border-amber-200 dark:border-amber-700/70">
                                Viviendas
                            </h2>
                            {/* Elementos decorativos de madera */}
                            <div className="absolute -top-3 -left-4 w-8 h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+CjxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzk2NEIwMCIgcng9IjQiIHJ5PSI0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik00LDQgTDI4LDQgTDI4LDI4IEw0LDI4IFoiIHN0cm9rZT0iI2M3OTM1YyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj48L3BhdGg+CjxwYXRoIGQ9Ik04LDggTDI0LDggTDI0LDI0IEw4LDI0IFoiIHN0cm9rZT0iI2M3OTM1YyIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==')] rotate-12"></div>
                            <div className="absolute -bottom-3 -right-4 w-8 h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+CjxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzk2NEIwMCIgcng9IjQiIHJ5PSI0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik00LDQgTDI4LDQgTDI4LDI4IEw0LDI4IFoiIHN0cm9rZT0iI2M3OTM1YyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj48L3BhdGg+CjxwYXRoIGQ9Ik04LDggTDI0LDggTDI0LDI0IEw4LDI0IFoiIHN0cm9rZT0iI2M3OTM1YyIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==')] -rotate-12"></div>

                            {/* Cinta decorativa */}
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSIyNCI+CjxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSIyNCIgZmlsbD0iI2Q5N3E0YSIgcng9IjIiIHJ5PSIyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0xMCwxMiBMNzAsMTIiIHN0cm9rZT0iI2VhYTg3OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSI0IDIiPjwvcGF0aD4KPC9zdmc+')] opacity-80"></div>
                        </div>
                        <p className="text-lg max-w-2xl mx-auto mt-4 italic text-amber-800 dark:text-amber-200 opacity-80 font-serif">
                            &ldquo;Cada hogar cuenta una historia familiar&rdquo;
                        </p>
                    </div>

                    {/* Galería estilo Polaroid */}
                    <div className="polaroid-container relative">
                        <style jsx>{`
                            .polaroid-container {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: center;
                                gap: 0;
                                padding: 1rem;
                                background: rgba(255, 248, 240, 0.5);
                                border-radius: 8px;
                                box-shadow: inset 0 0 20px rgba(0,0,0,0.05);
                            }
                            
                            @media (min-width: 640px) {
                                .polaroid-container {
                                    padding: 2rem;
                                }
                            }
                            
                            .polaroid {
                                background: #fffaf5;
                                padding: 1rem 1rem 2.5rem;
                                box-shadow: 0 6px 15px rgba(0,0,0,0.15);
                                border-radius: 2px;
                                margin: -5px 5px 15px;
                                transition: all 0.35s ease;
                                position: relative;
                                z-index: 1;
                                max-width: 300px;
                                width: calc(100% - 10px);
                                border: 1px solid #f0e0d0;
                            }
                            
                            @media (min-width: 640px) {
                                .polaroid {
                                    width: calc(50% - 30px);
                                    margin: -10px 10px 20px;
                                }
                            }
                            
                            @media (min-width: 768px) {
                                .polaroid {
                                    width: calc(33.333% - 40px);
                                }
                            }
                            
                            @media (min-width: 1024px) {
                                .polaroid {
                                    width: calc(25% - 40px);
                                }
                            }
                            
                            .polaroid:hover {
                                transform: scale(1.05) !important;
                                z-index: 10;
                                box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                            }
                            
                            .polaroid-img-container {
                                overflow: hidden;
                                margin-bottom: 0.5rem;
                                background-color: #f0f0f0;
                                border: 1px solid #e0d0c0;
                            }
                            
                            .polaroid-img {
                                width: 100%;
                                height: auto;
                                aspect-ratio: 1 / 1;
                                object-fit: cover;
                                transition: transform 0.5s ease;
                                filter: sepia(10%);
                            }
                            
                            .polaroid:hover .polaroid-img {
                                transform: scale(1.1);
                                filter: sepia(0%);
                            }
                            
                            .polaroid-text {
                                font-family: 'Caveat', 'Satisfy', 'Kalam', cursive, system-ui;
                                text-align: center;
                                font-size: 1.1rem;
                                color: #5d4037;
                                line-height: 1.2;
                                margin-top: 0.5rem;
                            }
                            
                            .polaroid-date {
                                position: absolute;
                                bottom: 0.5rem;
                                right: 1rem;
                                font-size: 0.7rem;
                                color: #8d6e63;
                                font-family: 'Courier New', monospace;
                            }
                            
                            .polaroid-tape {
                                position: absolute;
                                width: 40px;
                                height: 15px;
                                background-color: rgba(255, 245, 230, 0.7);
                                top: -7px;
                                left: 50%;
                                transform: translateX(-50%) rotate(var(--tape-angle));
                                opacity: 0.8;
                                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                                border: 1px solid rgba(210, 180, 140, 0.3);
                            }
                            
                            .polaroid::after {
                                content: '';
                                position: absolute;
                                bottom: 0.8rem;
                                left: 1rem;
                                right: 1rem;
                                height: 1px;
                                background: linear-gradient(90deg, transparent, rgba(150, 120, 90, 0.2), transparent);
                            }
                            
                            .dark .polaroid {
                                background: #f8f5f0;
                                border-color: #d0c0b0;
                            }
                            
                            .dark .polaroid-text {
                                color: #5d4037;
                            }
                            
                            .dark .polaroid-date {
                                color: #8d6e63;
                            }
                            
                            /* Marcas de agua artesanales */
                            .polaroid::before {
                                content: '';
                                position: absolute;
                                bottom: 0.5rem;
                                left: 0.5rem;
                                width: 24px;
                                height: 24px;
                                background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+CjxwYXRoIGQ9Ik04LDEyIEwxMiw4IEwxNiwxMiBMMTIsMTYgWiIgc3Ryb2tlPSIjYzBhMDgwIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuNSI+PC9wYXRoPgo8L3N2Zz4=');
                                opacity: 0.4;
                                transform: rotate(var(--stamp-angle));
                            }
                        `}</style>

                        {uniqueImages.map((src, index) => {
                            const rotation = getRandomRotation(index);
                            const tapeAngle = ((index * 31) % 20) - 10;
                            const stampAngle = ((index * 17) % 40) - 20;
                            const randomYear = 1980 + (index % 15);
                            const randomMonth = 1 + (index % 12);
                            const randomDay = 1 + (index % 28);
                            const dateStr = `${randomDay.toString().padStart(2, '0')}/${randomMonth.toString().padStart(2, '0')}/${randomYear}`;

                            return (
                                <div
                                    key={index}
                                    className="polaroid"
                                    style={{
                                        transform: `rotate(${rotation}deg)`,
                                        '--tape-angle': `${tapeAngle}deg`,
                                        '--stamp-angle': `${stampAngle}deg`
                                    } as React.CSSProperties}
                                    onClick={() => openModal(src, index)}
                                    tabIndex={0}
                                    onKeyDown={(e) => e.key === 'Enter' && openModal(src, index)}
                                    aria-label={`Ver imagen ${index + 1}`}
                                >
                                    <div className="polaroid-tape"></div>
                                    <div className="polaroid-img-container">
                                        <Image
                                            src={src}
                                            alt={polaroidTexts[index]}
                                            width={300}
                                            height={300}
                                            className="polaroid-img"
                                            priority={index < 4}
                                            loading={index < 4 ? "eager" : "lazy"}
                                        />
                                    </div>
                                    <div className="polaroid-text">{polaroidTexts[index]}</div>
                                    <div className="polaroid-date">{dateStr}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Modal de visualización de imagen */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-8"
                    onClick={closeModal}
                    ref={modalRef}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className="relative max-w-5xl w-full h-auto max-h-[90vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botones de navegación */}
                        <button
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full z-10 transition-all duration-300"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImages(-1);
                            }}
                            aria-label="Imagen anterior"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full z-10 transition-all duration-300"
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImages(1);
                            }}
                            aria-label="Imagen siguiente"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Botón de cierre */}
                        <button
                            className="absolute right-2 top-2 bg-white/20 hover:bg-white/30 p-2 rounded-full z-10 transition-all duration-300"
                            onClick={closeModal}
                            aria-label="Cerrar"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Imagen ampliada */}
                        <div className="relative w-full h-full flex items-center justify-center bg-black/50 rounded-lg overflow-hidden">
                            <Image
                                src={selectedImage}
                                alt="Imagen ampliada"
                                width={1200}
                                height={800}
                                className="max-w-full max-h-[80vh] object-contain"
                                priority
                            />
                        </div>

                        {/* Contador de imágenes */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                            {currentIndex + 1} / {uniqueImages.length}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}