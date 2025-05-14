"use client"

import * as React from "react";
import { useState, useEffect } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// Definimos las imágenes en un array para mejor manejo
const images = [
    {
        src: "https://res.cloudinary.com/dncvxpgj1/image/upload/v1715180644/IPV/qmxv1kkj7t2iceisbflt.png",
        alt: "Slider institucional IPV 1"
    },
    {
        src: "https://res.cloudinary.com/dncvxpgj1/image/upload/v1715180645/IPV/bdbg7nl5vggntdwn1pnt.png",
        alt: "Slider institucional IPV 2"
    },
    {
        src: "https://res.cloudinary.com/dncvxpgj1/image/upload/v1715180644/IPV/qmxv1kkj7t2iceisbflt.png",
        alt: "Slider institucional IPV 1"
    },
    {
        src: "https://res.cloudinary.com/dncvxpgj1/image/upload/v1715180645/IPV/bdbg7nl5vggntdwn1pnt.png",
        alt: "Slider institucional IPV 2"
    },
    // Puedes agregar más imágenes aquí
];

export function CarouselInst() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    // Función para abrir la imagen en modal
    const openImage = (src: string) => {
        setSelectedImage(src);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-w-screen-xl mx-auto px-4 mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 relative inline-block">
                    Galería Institucional
                    <span className="absolute bottom-[-8px] left-0 w-1/3 h-1 bg-[#FFB81A] rounded-full"></span>
                </h2>

                <div className="relative">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        orientation="horizontal"
                        className="w-full"
                    >
                        <CarouselContent className="h-auto">
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:translate-y-[-5px]">
                                            <CardContent className="p-0">
                                                <div
                                                    className="overflow-hidden cursor-pointer"
                                                    onClick={() => openImage(image.src)}
                                                >
                                                    <Image
                                                        src={image.src}
                                                        width={800}
                                                        height={500}
                                                        className="w-full h-auto transition-transform duration-700 hover:scale-110"
                                                        alt={image.alt}
                                                    />
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10">
                            <CarouselPrevious className="bg-[#FFB81A] text-white hover:bg-[#ffce63] hover:text-white" />
                        </div>
                        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-6 z-10">
                            <CarouselNext className="bg-[#FFB81A] text-white hover:bg-[#ffce63] hover:text-white" />
                        </div>
                    </Carousel>
                </div>
            </div>

            {/* Modal para mostrar la imagen en tamaño completo */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-4xl w-full">
                        <button
                            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10"
                            onClick={closeModal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="overflow-hidden rounded-lg">
                            <Image
                                src={selectedImage}
                                width={1200}
                                height={800}
                                className="w-full h-auto"
                                alt="Imagen ampliada"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
