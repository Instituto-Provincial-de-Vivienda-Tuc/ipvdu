
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
                        Transferencia de una vivienda
                    </h2>
                </div>

                {/* Tarjeta de requisitos */}
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 mb-16 transform transition-all duration-500 hover:shadow-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 relative inline-block">
                        Requisitos:
                        <span className="absolute bottom-[-6px] left-0 w-1/3 h-1 bg-[#FFB81A] rounded-full"></span>
                    </h3>

                    <ul className="space-y-6 text-left mb-12">
                        {/* Requisito 1 */}
                        <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                            <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300">
                                <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </div>
                            <span className="text-lg text-gray-700 pt-1 group-hover:text-gray-900 transition-colors duration-300">
                                La vivienda a transferir debe cumplir con el plazo de tres años de ocupación obligatoria por
                                parte del adjudicatario.
                            </span>
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
                            <span className="text-lg text-gray-700 pt-1 group-hover:text-gray-900 transition-colors duration-300">
                                La presentación de la transferencia deberá ser dentro de los 60 días corridos a partir de
                                efectuada la compra de la vivienda.
                            </span>
                        </li>
                    </ul>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 relative inline-block">
                        Documentación a presentar:
                        <span className="absolute bottom-[-6px] left-0 w-1/3 h-1 bg-[#FFB81A] rounded-full"></span>
                    </h3>

                    <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#FFB81A]">
                        <ul className="space-y-6 text-left">

                            <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300 mt-1">
                                    <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    Nota dirigida a la Sra. Interventora del Instituto de la Vivienda – Arq. NORA BELLONI, solicitando autorización de TRANSFERENCIA Y CANCELACIÓN O CAMBIO DE TITULAR. Para cancelación presentar fotocopia de BOLETA DE PAGO ESPECIAL.
                                </span>
                            </li>

                            <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300 mt-1">
                                    <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    Acta de Tenencia Precaria, Boleto de Compra Venta o Escritura otorgada por el IPV y DU a los adjudicatarios originales.
                                </span>
                            </li>

                            {/* Documento 3 */}
                            <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300 mt-1">
                                    <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    Boleto de Compra Venta y/o Escritura entre las partes (con Certificación de Firmas, sellado en la D.G.R de la Provincia). FOTOCOPIA AUTENTICADA POR ESCRIBANIA.
                                </span>
                            </li>

                            {/* Documento 4 */}
                            <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300 mt-1">
                                    <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    Arancel por Transferencia de Vivienda ($6.450) – por Transferencia de Lotes ($3.150) CUENTA N° 360000200980735 (IPV y DU) – BANCO MACRO. ORIGINAL.
                                </span>
                            </li>

                            {/* Documento 5 */}
                            <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300 mt-1">
                                    <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    TRANSFERENCIA A CBU: 2850600130002009807355 ALIAS: CENTRO.COMETA.SIGNO-
                                </span>
                            </li>

                            {/* Documento 6 */}
                            <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300 mt-1">
                                    <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    Acta de Matrimonio (ACTUALIZADA) – Fotocopia DNI (adquirente/s) (AUTENTICADOS POR ESCRIBANIA O POLICIA) – Acta de Nacimiento de los hijos (ACTUALIZADAS).
                                </span>
                            </li>

                            {/* Documento 7 */}
                            <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300 mt-1">
                                    <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    Certificado de Convivencia de la Policía.
                                </span>
                            </li>

                            {/* Documento 8 */}
                            <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300 mt-1">
                                    <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    Certificado de Trabajo (ORIGINAL), Último Recibo de Sueldo (AUTENTICADO)- Últimos tres pagos MONOTRIBUTO.
                                </span>
                            </li>

                            {/* Documento 9 */}
                            <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300 mt-1">
                                    <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    Para el caso de trabajadores independientes, certificación de ingresos ante C.P.N, avalada por el Colegio de Graduados en Ciencias Económicas.
                                </span>
                            </li>

                            {/* Documento 10 */}
                            <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300 mt-1">
                                    <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    Libre deuda de Expensas.
                                </span>
                            </li>

                            {/* Documento 11 */}
                            <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300 mt-1">
                                    <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    Informe del REGISTRO INMOBILIARIO de No poseer Vivienda.
                                </span>
                            </li>

                            {/* Documento 12 */}
                            <li className="flex items-start space-x-3 rtl:space-x-reverse group">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#FFB81A]/10 rounded-full flex items-center justify-center group-hover:bg-[#FFB81A]/20 transition-all duration-300 mt-1">
                                    <svg className="w-4 h-4 text-[#FFB81A]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <span className="text-lg text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                    La Documentación antes mencionada debe presentarse en ORIGINALES FOTOCOPIAS.
                                </span>
                            </li>
                        </ul>

                        {/* Nota importante */}
                        <div className="mt-8 bg-[#FFB81A]/10 p-6 rounded-lg border-l-4 border-[#FFB81A]">
                            <p className="text-lg font-bold text-gray-900">IMPORTANTE:</p>
                            <p className="text-lg text-gray-800 mt-2">
                                LA PRESENTACIÓN DE LA TRANSFERENCIA DEBERÁ SER DENTRO DE LOS 30 DÍAS (CORRIDOS) A PARTIR DE EFECTUADA LA COMPRA DE LA VIVIENDA.
                            </p>
                        </div>
                    </div>
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
                        Volver
                    </a>
                </div>
            </div>
        </div>
    );
}
