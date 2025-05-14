"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Layout() {
    const pathname = usePathname();

    return (
        <>
            <div className="relative w-full overflow-hidden">
                <Image 
                    className="w-full mx-auto object-cover transition-transform duration-700 hover:scale-105" 
                    src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/qrisgjgquw49wxcvqkgv.jpg" 
                    alt="Imagen encabezado institucional"
                    width={1920}
                    height={1080}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <nav className="bg-white shadow-sm sticky top-0 z-10 transition-all duration-300">
                <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
                    <div className="w-full md:w-auto" id="navbar-default">
                        <h2 className="hidden md:block mb-8 font-bold text-5xl md:text-7xl text-gray-900 relative">
                            Institucional
                            <span className="absolute bottom-[-10px] left-0 w-1/3 h-1 bg-[#FFB81A] rounded-full"></span>
                        </h2>
                        <ul className="text-xl font-bold flex flex-col md:flex-row p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li className="mb-2 md:mb-0 transform transition-transform duration-300 hover:translate-y-[-2px]">
                                <Link 
                                    href="/institucional/mision" 
                                    scroll={false} 
                                    className={`block py-2 px-3 rounded-md transition-all duration-300 relative ${
                                        pathname === '/institucional/mision' 
                                            ? 'text-[#FFB81A]' 
                                            : 'text-gray-700 hover:text-[#FFB81A]'
                                    }`}
                                >
                                    Misión
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FFB81A] transform transition-transform duration-300 ${
                                        pathname === '/institucional/mision' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                                    }`}></span>
                                </Link>
                            </li>
                            <li className="mb-2 md:mb-0 transform transition-transform duration-300 hover:translate-y-[-2px]">
                                <Link 
                                    href="/institucional/autoridades" 
                                    scroll={false} 
                                    className={`block py-2 px-3 rounded-md transition-all duration-300 relative ${
                                        pathname === '/institucional/autoridades' 
                                            ? 'text-[#FFB81A]' 
                                            : 'text-gray-700 hover:text-[#FFB81A]'
                                    }`}
                                >
                                    Autoridades
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FFB81A] transform transition-transform duration-300 ${
                                        pathname === '/institucional/autoridades' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                                    }`}></span>
                                </Link>
                            </li>
                            <li className="transform transition-transform duration-300 hover:translate-y-[-2px]">
                                <Link 
                                    href="/institucional/organigrama" 
                                    scroll={false} 
                                    className={`block py-2 px-3 rounded-md transition-all duration-300 relative ${
                                        pathname === '/institucional/organigrama' 
                                            ? 'text-[#FFB81A]' 
                                            : 'text-gray-700 hover:text-[#FFB81A]'
                                    }`}
                                >
                                    Organigrama
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FFB81A] transform transition-transform duration-300 ${
                                        pathname === '/institucional/organigrama' ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                                    }`}></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
