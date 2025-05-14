
"use client"
import Image from "next/image";

export default function Page() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Banner principal */}
            <div className="relative w-full overflow-hidden">
                <Image 
                    className="w-full mx-auto" 
                    src="https://ipvtuc.gob.ar/web/wp-content/uploads/2024/02/pagina-WEB-foto-encabezado-institucional-1024x397.png" 
                    alt="Imagen encabezado IPV Tucumán" 
                    width={1024}
                    height={397}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Contenido principal */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Encabezados */}
                <div className="mb-12">
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl text-gray-900 mb-8 relative inline-block">
                        Trámites
                        <span className="absolute bottom-[-10px] left-0 w-1/2 h-1 bg-[#FFB81A] rounded-full"></span>
                    </h1>
                    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-800 mt-16 mb-12 max-w-4xl">
                        Requisitos Socio-Económicos para poder empadronarse
                    </h2>
                </div>

                {/* Tarjeta de requisitos */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-16 transform transition-all duration-500 hover:shadow-2xl">
                    <ul className="space-y-6 text-left">
                        {/* Requisito 1 */}
                        <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300">
                                <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </div>
                            <span className="text-lg text-gray-700 pt-1 group-hover:text-gray-900 transition-colors duration-300">Matrimonio legalmente constituido con o sin hijos.</span>
                        </li>
                        
                        {/* Requisito 2 */}
                        <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300">
                                <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </div>
                            <span className="text-lg text-gray-700 pt-1 group-hover:text-gray-900 transition-colors duration-300">Unión de hecho necesariamente con descendencia y debida acreditación de la misma.</span>
                        </li>
                        
                        {/* Requisito 3 */}
                        <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300">
                                <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </div>
                            <span className="text-lg text-gray-700 pt-1 group-hover:text-gray-900 transition-colors duration-300">Titular solo/a con descendencia o a cargo de menores, acreditado con guarda legal.</span>
                        </li>
                        
                        {/* Requisito 4 */}
                        <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300">
                                <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </div>
                            <span className="text-lg text-gray-700 pt-1 group-hover:text-gray-900 transition-colors duration-300">Titular mayor de edad con hermanos huérfanos y/o discapacitados con tenencia, tutoría o curatela.</span>
                        </li>
                        
                        {/* Requisito 5 */}
                        <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300">
                                <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </div>
                            <span className="text-lg text-gray-700 pt-1 group-hover:text-gray-900 transition-colors duration-300">Constancia de convivencia emitida por el Registro del Estado y Capacidad de las Personas, al momento de la inscripción.</span>
                        </li>
                        
                        {/* Requisito 6 */}
                        <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300">
                                <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </div>
                            <span className="text-lg text-gray-700 pt-1 group-hover:text-gray-900 transition-colors duration-300">Titular soltero con padres a cargo debidamente acreditado.</span>
                        </li>
                        
                        {/* Requisito 7 */}
                        <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300">
                                <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </div>
                            <span className="text-lg text-gray-700 pt-1 group-hover:text-gray-900 transition-colors duration-300">Titular divorciado con hijos a cargo.</span>
                        </li>
                        
                        {/* Requisito 8 */}
                        <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300">
                                <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </div>
                            <div className="pt-1">
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Poseer ingresos mensuales permanentes aportados por el/los titulares:</span>
                                <ul className="mt-4 ml-6 space-y-2 list-disc text-gray-600">
                                    <li className="group-hover:text-gray-800 transition-colors duration-300">Trabajadores con relación de dependencia, privados y públicos, del estado nacional, provincial o municipal.</li>
                                    <li className="group-hover:text-gray-800 transition-colors duration-300">Trabajadores autónomos o monotributistas con acreditación de inscripción de AFIP, con tres meses o más de antigüedad.</li>
                                </ul>
                            </div>
                        </li>
                        
                        {/* Requisito 9 */}
                        <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300">
                                <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </div>
                            <span className="text-lg text-gray-700 pt-1 group-hover:text-gray-900 transition-colors duration-300">La postulación será válida para proyectos que se ejecuten en la localidad de inscripción y alrededores.</span>
                        </li>
                        
                        {/* Requisito 10 */}
                        <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300">
                                <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </div>
                            <div className="pt-1">
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">Prohibiciones: según Resolución FO.NA.VI. Nº 132, en función a la Ley Nº 21.581:</span>
                                <ul className="mt-4 ml-6 space-y-2 list-disc text-gray-600">
                                    <li className="group-hover:text-gray-800 transition-colors duration-300">No poseer bienes inmuebles en todo el ámbito del territorio argentino, tanto el titular como los miembros del grupo familiar.</li>
                                    <li className="group-hover:text-gray-800 transition-colors duration-300">No ser adjudicatario de vivienda otorgada por el Estado, el/los titulares ni los miembros del grupo conviviente.</li>
                                    <li className="group-hover:text-gray-800 transition-colors duration-300">No tener causas pendientes con la justicia, sean penales o correccionales.</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                
                {/* Botón de volver */}
                <div className="flex justify-center mt-8">
                    <a 
                        href="/" 
                        className="inline-flex items-center px-8 py-3 bg-[#FFB81A] text-gray-900 font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#ffce63]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                        Volver a Inicio
                    </a>
                </div>
            </div>
        </div>
    )
}
