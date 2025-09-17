
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className=" rounded-lg shadow m-4 mt-4">
            <div className="w-full max-w-screen-xl align-top mx-auto  p-4 md:py-8">
                <div className="sm:flex sm:justify-between">
                    <div >
                        <div className="flex">
                            <a href="/" className="flex items-center rtl:space-x-reverse">
                                <Image
                                    className="ml-4 md:ml-0 h-8 sm:h-10 md:h-16 w-auto object-contain transition-all duration-300"
                                    src="https://res.cloudinary.com/dncvxpgj1/image/upload/v1758111322/IPV/logo_IPV_Tuc_color_1_avsuek.png"
                                    alt="IPV Logo"
                                    width={190}
                                    height={64}
                                    priority
                                />
                            </a>
                            <a href="https://www.tucuman.gob.ar/">
                                <Image className="hidden w-21  ml-5 h-16 md:block" src="/logo-tucuman-nuevo.svg" alt="Gobierno de Tucumán Logo" width={190} height={64} />
                            </a>
                        </div>
                        <p className="mt-5">Idelfonso de las Muñecas 455 – T4000IKI <br />
                            San Miguel de Tucumán – Tucumán – Argentina <br />
                            Telefono +54 381 4212142</p>
                        <p className="mt-5">Horario de Atención 8:00h. a 13:00h.

                        </p>
                    </div>
                    <div >
                        <a href="https://minobrastuc.gob.ar/" className=" items-center align-top ">
                            <Image
                                src="https://res.cloudinary.com/dncvxpgj1/image/upload/v1758110931/IPV/Ministerio_1Paginas_mtlbte.png"
                                className="hidden md:block h-15"
                                alt="Ministerio de Obras Logo"
                                width={450}
                                height={120}
                            />
                        </a>
                        <div className="text-4xl md:justify-end flex">
                            <p className="mt-5 pr-7 text-lg md:text-3xl">Call Center</p>
                            <p className="mt-5  font-bold text-lg md:text-5xl">
                                381 4 975755 <br />
                                381 4 978533</p>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" className="hover:underline">Departamento de Cómputos.</a>. Todos los Derechos Reservados.

                </span>
            </div>
        </footer>
    )
}
