
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className=" rounded-lg shadow m-4 mt-4">
            <div className="w-full max-w-screen-xl align-top mx-auto  p-4 md:py-8">
                <div className="sm:flex sm:justify-between">
                    <div >
                        <a href="#" className="items-center align-top">
                            <Image
                                src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/y3m4bwyjdnmirx4swdre.jpg"
                                className="hidden md:block h-15"
                                alt="IPV Logo"
                                width={450}
                                height={120}
                            />
                        </a>
                        <p className="mt-5">Idelfonso de las Muñecas 455 – T4000IKI <br />
                            San Miguel de Tucumán – Tucumán – Argentina <br />
                            Telefono +54 381 4212142</p>
                        <p className="mt-5">Horario de Atención 8:00h. a 13:00h.

                        </p>
                    </div>
                    <div >
                        <a href="https://minobrastuc.gob.ar/" className=" items-center align-top  ">
                            <Image
                                src="https://res.cloudinary.com/djlsm2fwz/image/upload/IPV/statics%20pictures/mjxqnlyyozbilgftecxk.jpg"
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
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Departamento de Cómputos.</a>. Todos los Derechos Reservados.

                </span>
            </div>
        </footer>
    )
}
