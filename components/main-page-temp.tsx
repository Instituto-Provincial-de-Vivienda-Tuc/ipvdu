"use client"

import React, { useState } from 'react'

import { CarouselPru } from './carousel-pru'
import Link from 'next/link'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react"; // Importamos el ícono de lupa

const barrios = [
    {
        id: "obra1",
        titulo: "Lomas de tafi",
        descripcion: "Localizada hacia el NO del Aglomerado del Gran San Miguel de Tucumán (GSMT), en una de las áreas vacantes urbanizables más importantes, cuenta con una superficie de 399 has y accesibilidad resuelta, habiéndose previsto su integración a la planta urbana.",
        imagen: "http://www.ipvtuc.gov.ar/wordpress/wp-content/uploads/2015/10/dsc0191xm.jpg",
        estado: "Completado",
        fecha: "2023",
        detalles: [
            {
                titulo: "Descripción",
                contenido: "El proyecto urbanístico Lomas de Tafí se desarrolla en un predio de 400 hectáreas, ubicado en el sector noroeste del Gran San Miguel de Tucumán. Contempla la construcción de 5.000 viviendas, infraestructura completa, equipamiento comunitario y espacios verdes."
            },
            {
                titulo: "Características",
                contenido: "Viviendas de 1, 2 y 3 dormitorios con infraestructura completa: agua potable, cloacas, gas natural, electricidad, alumbrado público, cordón cuneta y pavimento."
            },
            {
                titulo: "Avance",
                contenido: "100% completado. Todas las etapas han sido finalizadas y entregadas a los beneficiarios."
            }
        ]
    },
    {
        id: "obra2",
        titulo: "Manantial Sur",
        descripcion: "Ubicado en la zona sur del Gran San Miguel de Tucumán, este desarrollo urbanístico cuenta con modernas viviendas y completa infraestructura para familias tucumanas.",
        imagen: "http://www.ipvtuc.gov.ar/wordpress/wp-content/uploads/2015/10/dsc0191xm.jpg",
        estado: "En progreso",
        fecha: "2023",
        detalles: [
            {
                titulo: "Descripción",
                contenido: "El proyecto Manantial Sur se desarrolla en la zona sur del Gran San Miguel de Tucumán, con acceso desde la Avenida Aconquija. Contempla la construcción de 3.000 viviendas con infraestructura completa."
            },
            {
                titulo: "Características",
                contenido: "Viviendas de 2 y 3 dormitorios con infraestructura completa: agua potable, cloacas, gas natural, electricidad, alumbrado público, cordón cuneta y pavimento."
            },
            {
                titulo: "Avance",
                contenido: "70% completado. Se han entregado 2.100 viviendas y se continúa con la construcción de las restantes."
            }
        ]
    },
    {
        id: "obra3",
        titulo: "Valle Oeste",
        descripcion: "Desarrollo habitacional en la zona oeste de San Miguel de Tucumán, con viviendas modernas y espacios verdes para el disfrute de las familias.",
        imagen: "http://www.ipvtuc.gov.ar/wordpress/wp-content/uploads/2015/10/dsc0191xm.jpg",
        estado: "Planificación",
        fecha: "2024",
        detalles: []
    },
];

export function MainPage() {
    const [selectedObra, setSelectedObra] = useState<string | null>(null);
    const [showFullImage, setShowFullImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setShowFullImage(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-lora">
            <div className="max-w-screen-xl flex-wrap justify-between mx-auto mt-16 md:mt-10 lg:mt-26 mb-20 px-4 sm:px-6 lg:px-8">
                {/* Sección de Noticias */}
                <section className="mb-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-6 transform transition-all duration-500">
                        {/* Carrusel de noticias */}
                        <div className="w-full shadow-xl hover:shadow-2xl rounded-xl overflow-hidden">
                            <CarouselPru />
                        </div>
                    </div>
                </section>

                {/* Sección de Obras */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Obras</h2>

                    {/* Buscador */}
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
                            placeholder="Buscar obras..."
                        />
                    </div>

                    {/* Grid de proyectos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {barrios.map((barrio) => (
                            <div
                                key={barrio.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                onClick={() => setSelectedObra(barrio.id)}
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={barrio.imagen}
                                        alt={barrio.titulo}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className="transition-transform duration-500 hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-semibold">
                                        {barrio.estado}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{barrio.titulo}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{barrio.descripcion}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">{barrio.fecha}</span>
                                        <Link href={`/obras/${barrio.id}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                                            Ver más
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sección de Programas */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Programas</h2>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl font-semibold">PROCREAR</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <h3 className="font-bold text-lg mb-2 text-blue-700">LOMAS DE TAFÍ</h3>
                                        <p className="text-gray-700">100% de avance</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <h3 className="font-bold text-lg mb-2 text-blue-700">MANANTIAL SUR</h3>
                                        <p className="text-gray-700">70% de avance</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-xl font-semibold">FONAVI CASA PROPIA</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <h3 className="font-bold text-lg mb-2 text-blue-700">ALDERETES</h3>
                                        <p className="text-gray-700">100% de avance</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <h3 className="font-bold text-lg mb-2 text-blue-700">BELLA VISTA</h3>
                                        <p className="text-gray-700">100% de avance</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <h3 className="font-bold text-lg mb-2 text-blue-700">FAMAILLÁ</h3>
                                        <p className="text-gray-700">100% de avance</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <h3 className="font-bold text-lg mb-2 text-blue-700">MONTEROS</h3>
                                        <p className="text-gray-700">100% de avance</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-xl font-semibold">PROGRAMA FEDERAL</AccordionTrigger>
                            <AccordionContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <h3 className="font-bold text-lg mb-2 text-blue-700">YERBA BUENA</h3>
                                        <p className="text-gray-700">100% de avance</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <h3 className="font-bold text-lg mb-2 text-blue-700">TAFÍ VIEJO</h3>
                                        <p className="text-gray-700">90% de avance</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>

                {/* Sección de Estadísticas */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800">Estadísticas</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
                            <div className="text-gray-600">Viviendas entregadas</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold text-blue-600 mb-2">3,200+</div>
                            <div className="text-gray-600">Viviendas en construcción</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                            <div className="text-gray-600">Proyectos activos</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold text-blue-600 mb-2">20,000+</div>
                            <div className="text-gray-600">Beneficiarios</div>
                        </div>
                    </div>
                </section>

                {/* Modal para imagen ampliada */}
                {showFullImage && selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setShowFullImage(false)}>
                        <div className="relative max-w-4xl max-h-screen p-2">
                            <button
                                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowFullImage(false);
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <Image
                                src={selectedImage}
                                alt="Imagen ampliada"
                                width={1200}
                                height={800}
                                className="max-h-screen w-auto object-contain"
                            />
                        </div>
                    </div>
                )}

                {/* Modal para detalles de obra */}
                {selectedObra && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedObra(null)}>
                        <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                            {barrios.filter(barrio => barrio.id === selectedObra).map((barrio) => (
                                <div key={barrio.id} className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-2xl font-bold text-gray-800">{barrio.titulo}</h2>
                                        <button
                                            className="bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
                                            onClick={() => setSelectedObra(null)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="relative h-64 w-full mb-4 overflow-hidden rounded-lg">
                                        <Image
                                            src={barrio.imagen}
                                            alt={barrio.titulo}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="cursor-pointer"
                                            onClick={() => handleImageClick(barrio.imagen)}
                                        />
                                        <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-semibold">
                                            {barrio.estado}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-6">{barrio.descripcion}</p>

                                    {barrio.detalles.length > 0 && (
                                        <div className="space-y-4">
                                            {barrio.detalles.map((detalle, index) => (
                                                <div key={index} className="border-b pb-4">
                                                    <h3 className="font-bold text-lg mb-2 text-blue-700">{detalle.titulo}</h3>
                                                    <p className="text-gray-700">{detalle.contenido}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="mt-6 flex justify-end">
                                        <Link href={`/obras/${barrio.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                                            Ver página completa
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
