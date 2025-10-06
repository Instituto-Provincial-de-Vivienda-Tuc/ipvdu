
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="rounded-lg shadow m-4 mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    {/* Columna izquierda */}
                    <div className="mb-6 sm:mb-0 sm:w-1/2">
                        <div className="flex items-center">
                            <a href="/" className="flex items-center">
                                <Image
                                    className="h-8 sm:h-10 md:h-16 w-auto object-contain transition-all duration-300"
                                    src="https://res.cloudinary.com/dncvxpgj1/image/upload/v1758111322/IPV/logo_IPV_Tuc_color_1_avsuek.png"
                                    alt="IPV Logo"
                                    width={190}
                                    height={64}
                                    priority
                                />
                            </a>
                            <a href="https://www.tucuman.gob.ar/" className="ml-4">
                                <Image
                                    className="hidden md:block h-16 w-auto"
                                    src="/logo-tucuman-nuevo.svg"
                                    alt="Gobierno de Tucumán Logo"
                                    width={190}
                                    height={64}
                                />
                            </a>
                        </div>
                        <div className="mt-4 text-sm md:text-base">
                            <p>Idelfonso de las Muñecas 455 – T4000IKI <br />
                                San Miguel de Tucumán – Tucumán – Argentina <br />
                                Telefono +54 381 4212142</p>
                            <p className="mt-3">Horario de Atención 8:00h. a 13:00h.</p>
                        </div>
                    </div>

                    {/* Columna derecha */}
                    <div className="flex flex-col items-start sm:items-end sm:w-1/2 sm:pt-0">
                        <a href="https://minobrastuc.gob.ar/" className="mb-4">
                            <Image
                                src="https://res.cloudinary.com/dncvxpgj1/image/upload/v1758110931/IPV/Ministerio_1Paginas_mtlbte.png"
                                className="hidden md:block h-24 w-96 max-h-[170px]  object-none"
                                alt="Ministerio de Obras Logo"
                                width={270}
                                height={120}
                            />
                        </a>
                        <div className="flex flex-col sm:items-end">
                            <p className="text-lg md:text-2xl mb-1">Call Center</p>
                            <p className="font-bold text-lg md:text-3xl lg:text-4xl">
                                381 4 975755 <br />
                                381 4 978533
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 text-center">
                    © 2025 <a href="#" className="hover:underline">Departamento de Cómputos</a>. Todos los Derechos Reservados.
                </span>
            </div>
        </footer>
    )
}
