"use client"

import React from 'react'

import { CarouselPru } from './carousel-pru'
import Link from 'next/link'
import Image from 'next/image'

export const MainPage = () => {

    return (
        <div className="min-h-screen bg-gray-50 font-lora">


            {/* Contenedor principal */}

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


                {/* Sección de Trámites y Servicios - Rediseñada con iconos originales */}
                <section id="tramites-servicios" className="w-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-5 transform transition-all duration-500 hover:shadow-2xl mb-24">


                    {/* Servicios destacados con iconos originales - Ahora en horizontal */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {/* Tarjeta Imprimir Boleta */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-[#FFB81A] group">
                            <div className="p-4 flex items-center">
                                <div className="mr-4 group-hover:scale-110 transition-all duration-300">
                                    <div className="image-container">
                                        <Image
                                            src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/vnncweww0rltgxs85f9k.jpg"
                                            alt="Imagen impresora ipv original"
                                            className="original-image w-12 group-hover:hidden"
                                            width={48}
                                            height={48}
                                        />
                                        <Image
                                            src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/wlhh0wgv16ymup71m3xe.jpg"
                                            alt="Imagen impresora ipv al hacer hover"
                                            className="hover-image w-12 hidden group-hover:block"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-playfair text-lg font-bold text-gray-900 mb-1">Imprimir Boleta</h3>
                                    <div className="flex justify-between items-center">
                                        <Link
                                            href="http://119.8.76.209:8080/Boletas/com.boleta.homeipv"
                                            className="inline-flex items-center px-3 py-1 bg-[#FFB81A] text-gray-900 font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#ffce63] text-sm"
                                        >
                                            Imprimir
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta Inscripción */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-[#FFB81A] group">
                            <div className="p-4 flex items-center">
                                <div className="mr-4 group-hover:scale-110 transition-all duration-300">
                                    <div className="image-container">
                                        <Image
                                            src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/slvuu9ssn5bivlpyhlqb.jpg"
                                            alt="Imagen nota ipv original"
                                            className="original-image w-12 group-hover:hidden"
                                            width={48}
                                            height={48}
                                        />
                                        <Image
                                            src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/cbcgbzwg2u7y8tm6ujpe.jpg"
                                            alt="Imagen nota ipv al hacer hover"
                                            className="hover-image w-12 hidden group-hover:block"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Inscripción</h3>
                                    <div className="flex justify-between items-center">
                                        <Link
                                            href="https://ipvtuc.gob.ar/siempre/public"
                                            className="inline-flex items-center px-3 py-1 bg-[#FFB81A] text-gray-900 font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#ffce63] text-sm"
                                        >
                                            Inscribirse
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta Link de pago */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-[#FFB81A] group">
                            <div className="p-4 flex items-center">
                                <div className="mr-4 group-hover:scale-110 transition-all duration-300">
                                    <div className="image-container">
                                        <Image
                                            src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/slvuu9ssn5bivlpyhlqb.jpg"
                                            alt="Imagen nota ipv original"
                                            className="original-image w-12 group-hover:hidden"
                                            width={48}
                                            height={48}
                                        />
                                        <Image
                                            src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/cbcgbzwg2u7y8tm6ujpe.jpg"
                                            alt="Imagen nota ipv al hacer hover"
                                            className="hover-image w-12 hidden group-hover:block"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Link de pago</h3>
                                    <div className="flex justify-between items-center">
                                        <Link
                                            href="https://ipvtuc.gob.ar/siempre/public"
                                            className="inline-flex items-center px-3 py-1 bg-[#FFB81A] text-gray-900 font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#ffce63] text-sm"
                                        >
                                            Ir al enlace
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enlaces adicionales - Mantenidos en vertical */}
                    <div className="space-y-1 md:space-y-0 md:flex justify-around mt-6">
                        <Link
                            href="/tramites/requisitos"
                            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 hover:border-[#FFB81A] text-sm w-64 justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#FFB81A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Requisitos
                        </Link>
                        <Link
                            href="/tramites/transferencia"
                            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 hover:border-[#FFB81A] text-sm w-64 justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#FFB81A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            Transferencia
                        </Link>
                        <Link
                            href="https://www.boletinoficial.gob.ar/"
                            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 hover:border-[#FFB81A] text-sm w-64 justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#FFB81A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Boletin oficial
                        </Link>
                        <Link
                            href="https://guiadetramites.tucuman.gob.ar/tematica/950/vivienda.html"
                            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 hover:border-[#FFB81A] text-sm w-64 justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#FFB81A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Guia de tramites
                        </Link>
                    </div>
                </section>
                {/* Sección de Obras */}

                <section className="mb-16 sm:mb-20 md:mb-24 px-2 sm:px-4 md:px-6 lg:px-0">
                    <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-gray-900 relative inline-block">
                        Obras
                        <span className="absolute bottom-[-6px] sm:bottom-[-8px] md:bottom-[-10px] left-0 w-1/3 sm:w-1/2 h-0.5 sm:h-1 bg-[#FFB81A] rounded-full"></span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold text-[#e29911] mb-2">5,000+</div>
                            <div className="text-black">Viviendas entregadas</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold text-[#e29911] mb-2">3,200+</div>
                            <div className="text-black">Viviendas en construcción</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold text-[#e29911] mb-2">15+</div>
                            <div className="text-black">Proyectos activos</div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-4xl font-bold text-[#e29911] mb-2">20,000+</div>
                            <div className="text-black">Beneficiarios</div>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <div className="bg-[#FFB81A] py-6 sm:py-8 md:py-10">
                            <div className="px-2 sm:px-4 md:px-6">
                                <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 md:p-6">
                                    <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">Barrios, proyectos y obras en Desarrollo</h3>

                                    {/* Categorías de obras */}
                                    <div className="w-full mb-6">
                                        <div>

                                            <div>
                                                <div className="p-2 sm:p-4 text-gray-700">
                                                    <div className="space-y-6">
                                                        {/* PROCREAR TUCUMÁN */}
                                                        <div className="bg-gray-50 p-4 rounded-lg">
                                                            <h4 className="font-bold text-lg mb-3 text-center bg-blue-600 text-white py-2 rounded">PROCREAR TUCUMÁN con Ministerio de Obras y Servicios Públicos</h4>
                                                            <div className="text-center mb-3">
                                                                <p className="font-semibold">1.656 unidades habitacionales 1.400 lotes con servicios</p>
                                                                <p className="font-semibold">Primera Etapa: 572 viviendas - 15%</p>
                                                            </div>
                                                        </div>

                                                        {/* FONAVI RECONSTRUIR */}
                                                        <div className="bg-gray-50 p-4 rounded-lg">
                                                            <h4 className="font-bold text-lg mb-3 text-center bg-blue-600 text-white py-2 rounded">FONAVI RECONSTRUIR</h4>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between items-center p-2 bg-green-200 rounded">
                                                                        <span className="font-medium">100 Las Talitas</span>
                                                                        <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Terminada</span>
                                                                    </div>
                                                                    <h6 className="font-bold text-lg mb-3 text-center bg-blue-600 text-white py-2 rounded">2500 Manantial Sur</h6>
                                                                    <div className="flex justify-between items-center p-2 bg-green-200 rounded">
                                                                        <span className="font-medium">109 Manantial Sur - GECOMPE + CODESA</span>
                                                                        <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Terminada</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center p-2 bg-green-200 rounded">
                                                                        <span className="font-medium">54 Manantial Sur - Mateo Construcciones</span>
                                                                        <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Terminada</span>
                                                                    </div>
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">87 Manantial Sur - Panamericana</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">85%</span>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* FONAVI CASA PROPIA */}
                                                        <div className="bg-gray-50 p-4 rounded-lg">
                                                            <h4 className="font-bold text-lg mb-3 text-center bg-blue-600 text-white py-2 rounded">FONAVI CASA PROPIA</h4>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">80 Burruyacu</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">60%</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">132 Río Seco</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">56%</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">35 La Cocha</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">40%</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">76 Los Villagra</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">43%</span>
                                                                    </div>
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">135 San Miguel de Tucumán</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">28%</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">182 Bella vista</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">6%</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">24 Monteros</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">4%</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">32 San miguel de Tucumán</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">1%</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                <div className="flex justify-between items-center p-2 bg-purple-200 rounded">
                                                                    <span className="font-medium">54 García Fernández</span>
                                                                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">A comenzar próximamente</span>
                                                                </div>
                                                                <div className="flex justify-between items-center p-2 bg-purple-200 rounded">
                                                                    <span className="font-medium">31 Soldado Maldonado</span>
                                                                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">A comenzar próximamente</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* PROMAT CON FONAVI */}
                                                        <div className="bg-gray-50 p-4 rounded-lg">
                                                            <h4 className="font-bold text-lg mb-3 text-center bg-blue-600 text-white py-2 rounded">PROMAT CON FONAVI</h4>
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-center p-2 bg-blue-200 rounded">
                                                                    <span className="font-medium">309 Soluciones habitacionales distribuidas en 49 comunas y 3 municipios</span>
                                                                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">En ejecución</span>
                                                                </div>
                                                                <div className="flex justify-between items-center p-2 bg-purple-200 rounded">
                                                                    <span className="font-medium">137 Soluciones habitacionales distribuidas en 5 comunas y 4 municipios</span>
                                                                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">A comenzar próximamente</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* VIVIENDAS RURALES */}
                                                        <div className="bg-gray-50 p-4 rounded-lg">
                                                            <h4 className="font-bold text-lg mb-3 text-center bg-blue-600 text-white py-2 rounded">VIVIENDAS RURALES MINISTERIO DEL INTERIOR/IPV</h4>
                                                            <p className="text-center font-semibold mb-3">142 VIVIENDAS RURALES</p>
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between items-center p-2 bg-green-200 rounded">
                                                                        <span className="font-medium">20 VIVIENDAS TAPIA</span>
                                                                        <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Terminada</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center p-2 bg-green-200 rounded">
                                                                        <span className="font-medium">24 VIVIENDAS AMAICHA</span>
                                                                        <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Terminada</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">20 VIVIENDAS LOS PUESTOS</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">95% a reiniciar</span>
                                                                    </div>
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">20 VIVIENDAS COLALAO</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">96% a reiniciar</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">21 VIVIENDAS GASTONA</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">97% a reiniciar</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">20 VIVIENDAS AGUA DULCE</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">94% a reiniciar</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                        <span className="font-medium">17 VIVIENDAS TACO RALO</span>
                                                                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">83% a reiniciar</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* LOTES CON SERVICIO IPV */}
                                                        <div className="bg-gray-50 p-4 rounded-lg">
                                                            <h4 className="font-bold text-lg mb-3 text-center bg-blue-600 text-white py-2 rounded">LOTES CON SERVICIO IPV</h4>
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-center p-2 bg-yellow-200 rounded">
                                                                    <span className="font-medium">64 Aguilares</span>
                                                                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-sm">1%</span>
                                                                </div>
                                                                <div className="flex justify-between items-center p-2 bg-purple-200 rounded">
                                                                    <span className="font-medium">131 Arcadia</span>
                                                                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">A comenzar próximamente</span>
                                                                </div>
                                                                <div className="flex justify-between items-center p-2 bg-purple-200 rounded">
                                                                    <span className="font-medium">31 Teniente Berdina</span>
                                                                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">A comenzar próximamente</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* REGULARIZACIÓN DOMINIAL */}
                                                        <div className="bg-gray-50 p-4 rounded-lg">
                                                            <h4 className="font-bold text-lg mb-3 text-center bg-blue-600 text-white py-2 rounded">REGULARIZACIÓN DOMINIAL</h4>
                                                            <div className="space-y-2">
                                                                <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                    <span className="font-medium">ESCRITURAS ENTREGADAS 2025</span>
                                                                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">899</span>
                                                                </div>
                                                                <div className="flex justify-between items-center p-2 bg-orange-200 rounded">
                                                                    <span className="font-medium">ESTIMATIVO HASTA DICIEMBRE DEL 2025</span>
                                                                    <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm">1.400</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
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
            </div>
        </div>
    )
}
