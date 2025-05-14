import React from 'react'

import { CarouselPru } from './carousel-pru'
import Link from 'next/link'
import Image from 'next/image'

export const MainPage = () => {
    return (
        <main className="min-h-screen bg-gray-50 font-lora">


            {/* Contenedor principal */}
            <div className="max-w-screen-xl flex-wrap justify-between mx-auto mt-16 md:mt-24 lg:mt-32 mb-20 px-4 sm:px-6 lg:px-8">
                {/* Sección de Noticias */}
                <section className="mb-24">
                    <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-10 text-gray-900 relative inline-block">
                        Noticias
                        <span className="absolute bottom-[-10px] left-0 w-1/2 h-1 bg-[#FFB81A] rounded-full"></span>
                    </h2>
                    <div className="flex justify-center transform transition-all duration-500 hover:translate-y-[-8px]">
                        <CarouselPru />
                    </div>
                </section>
                {/* Sección de Trámites y Servicios - Rediseñada con iconos originales */}
                <section className="mb-24">
                    <h2 className="font-playfair font-extrabold text-3xl md:text-4xl lg:text-5xl mb-10 md:mb-16 lg:mb-20 text-center text-gray-900 relative">
                        Trámites y Servicios
                        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FFB81A] rounded-full"></span>
                    </h2>

                    {/* Contenedor principal con efecto de elevación */}
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-6 md:p-10 transform transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl">

                        {/* Servicios destacados con iconos originales */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
                            {/* Tarjeta Imprimir Boleta */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-[#FFB81A] group">
                                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center">
                                    <div className="mb-4 md:mb-0 md:mr-6 group-hover:scale-110 transition-all duration-300">
                                        <div className="image-container">
                                            <Image
                                                src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/vnncweww0rltgxs85f9k.jpg"
                                                alt="Imagen impresora ipv original"
                                                className="original-image mx-auto w-16 group-hover:hidden"
                                                width={64}
                                                height={64}
                                            />
                                            <Image
                                                src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/wlhh0wgv16ymup71m3xe.jpg"
                                                alt="Imagen impresora ipv al hacer hover"
                                                className="hover-image mx-auto w-16 hidden group-hover:block"
                                                width={64}
                                                height={64}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">Imprimir Boleta</h3>
                                        <p className="text-gray-600 mb-4">Descargue e imprima su boleta de pago mensual de forma rápida y sencilla.</p>
                                        <Link
                                            href="http://119.8.76.209:8080/Boletas/com.boleta.homeipv"
                                            className="inline-flex items-center px-6 py-3 bg-[#FFB81A] text-gray-900 font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#ffce63]"
                                        >
                                            Imprimir Ahora
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta Inscripción */}
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-[#FFB81A] group">
                                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center">
                                    <div className="mb-4 md:mb-0 md:mr-6 group-hover:scale-110 transition-all duration-300">
                                        <div className="image-container">
                                            <Image
                                                src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/slvuu9ssn5bivlpyhlqb.jpg"
                                                alt="Imagen nota ipv original"
                                                className="original-image mx-auto w-16 group-hover:hidden"
                                                width={64}
                                                height={64}
                                            />
                                            <Image
                                                src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/cbcgbzwg2u7y8tm6ujpe.jpg"
                                                alt="Imagen nota ipv al hacer hover"
                                                className="hover-image mx-auto w-16 hidden group-hover:block"
                                                width={64}
                                                height={64}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Inscripción</h3>
                                        <p className="text-gray-600 mb-4">Inscripción y actualización de datos para los programas de vivienda disponibles.</p>
                                        <Link
                                            href="https://ipvtuc.gob.ar/siempre/public"
                                            className="inline-flex items-center px-6 py-3 bg-[#FFB81A] text-gray-900 font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#ffce63]"
                                        >
                                            Inscribirse
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Enlaces adicionales */}
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <Link
                                href="/tramites/requisitos"
                                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 hover:border-[#FFB81A]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFB81A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                Requisitos
                            </Link>
                            <Link
                                href="/tramites/transferencia"
                                className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 hover:border-[#FFB81A]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#FFB81A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                                Transferencia
                            </Link>
                        </div>
                    </div>
                </section>




                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-gray-900 relative inline-block">
                    Enterate primero
                    <span className="absolute bottom-[-10px] left-0 w-1/2 h-1 bg-[#FFB81A] rounded-full"></span>
                </h2>
                <div className="relative w-full overflow-hidden my-14 rounded-xl shadow-lg">
                    <div className="relative" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/Ehk9g0mKZWI"
                            title="Activarán las obras en Manantial Sur | Entrevista con Hugo Cabral, interventor del IPV"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <section className="mb-24">
                    <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-10 text-gray-900 relative inline-block">
                        Programas Especiales
                        <span className="absolute bottom-[-10px] left-0 w-1/2 h-1 bg-[#FFB81A] rounded-full"></span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Tarjeta PROMAT */}
                        <div className="rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] h-full flex flex-col">
                            <div className="overflow-hidden">
                                <Image
                                    className="w-full h-auto transition-transform duration-700 hover:scale-110"
                                    src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/qtlgv2mx4osmtyp2vvhi.jpg"
                                    alt="Imagen PROMAT IPV Tucumán Instituto Provincial de Vivienda"
                                    width={800}
                                    height={450}
                                />
                            </div>
                            <div className="bg-[#ffce63] pt-5 pb-11 pr-14 relative flex-grow">
                                <h3 className="font-bold text-xl ml-6 md:ml-52 transition-colors duration-300 hover:text-white">PROMAT</h3>
                                <p className="ml-6 md:ml-52 mt-2 text-gray-800">
                                    El programa PROMAT (Provisión de Materiales) es una iniciativa impulsada por el IPV, orientada a apoyar la autoconstrucción asistida y el mejoramiento de viviendas. Su objetivo principal es facilitar a las familias de escasos recursos, que por diversas razones no pueden acceder a otros planes habitacionales, los insumos y el acompañamiento necesario para construir o mejorar sus hogares.
                                </p>
                                <div className="absolute top-0 left-0 bottom-0 w-4 md:w-40 bg-[#FFB81A]"></div>
                            </div>
                        </div>

                        {/* Tarjeta PROMEBA */}
                        <div className="rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] h-full flex flex-col">
                            <div className="overflow-hidden">
                                <Image
                                    className="w-full h-auto transition-transform duration-700 hover:scale-110"
                                    src="https://www.argentina.gob.ar/sites/default/files/2023/07/promeba_destacado.jpg"
                                    alt="Imagen PROMEBA IPV Tucumán Instituto Provincial de Vivienda"
                                    width={800}
                                    height={450}
                                />
                            </div>
                            <div className="bg-[#FFB81A] pt-5 pb-11 pr-14 relative flex-grow">
                                <h3 className="font-bold text-xl ml-6 md:ml-52 transition-colors duration-300 hover:text-white">PROMEBA</h3>
                                <p className="ml-6 md:ml-52 mt-2 text-gray-800">
                                    El programa PROMEBA (Programa de Mejoramiento de Barrios) es una iniciativa de vivienda social diseñada para transformar las condiciones urbanas y mejorar el hábitat en barrios vulnerables, asentamientos informales y villas miseria. En el contexto del Instituto Provincial de Vivienda de Tucumán, este programa busca intervenir de forma integral en los barrios
                                </p>
                                <div className="absolute top-0 left-0 bottom-0 w-4 md:w-40 bg-[#ffce63]"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección de Obras */}
                <section className="mb-24">
                    <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-10 text-gray-900 relative inline-block">
                        Obras
                        <span className="absolute bottom-[-10px] left-0 w-1/2 h-1 bg-[#FFB81A] rounded-full"></span>
                    </h2>

                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <div className="bg-[#FFB81A] py-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-4">
                                <div className="overflow-hidden rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                                    <Image
                                        className="w-full h-auto"
                                        src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/pdiayc2ihedrzpdq3dhx.jpg"
                                        alt="Imagen obras IPV Tucumán Instituto Provincial de Vivienda"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                                    <Image
                                        className="w-full h-auto"
                                        src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/kfx5rtprkxlnawtsp76u.jpg"
                                        alt="Imagen obras IPV Tucumán Instituto Provincial de Vivienda"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                                <div className="overflow-hidden rounded-lg shadow-md transform transition-all duration-300 hover:scale-105">
                                    <Image
                                        className="w-full h-auto"
                                        src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/qlz1vafk9see10db9rme.jpg"
                                        alt="Imagen obras IPV Tucumán Instituto Provincial de Vivienda"
                                        width={400}
                                        height={300}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#ffce63]">
                            <div className="flex px-4 max-w-screen-xl mx-auto justify-end py-8">
                                <Link
                                    href="/obras"
                                    className="inline-flex font-black text-xl items-center px-12 py-4 bg-white hover:bg-[#FFB81A] rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-[#FFB81A] focus:ring-opacity-50"
                                >
                                    ENTRAR
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
