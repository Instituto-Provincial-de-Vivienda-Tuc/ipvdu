"use client"
//import { useRouter } from "next/navigation"
import { MenuList } from "./menu-list"
import { ItemsMenuMobile } from "./items-menu-mobile"
import Image from 'next/image'

export const Navbar = () => {
    //const router = useRouter()
    return (
        <>
            <nav className="bg-[#fdb91a]">
                <div className="max-w-screen-xl px-4 py-1 sm:py-3 mx-auto flex justify-center sm:justify-end">
                    <ul className="flex items-center space-x-5 sm:space-x-3">
                        <li>
                            <a href="https://www.facebook.com/ipvtucuman" className="flex items-center justify-center w-8 h-8 sm:w-auto sm:h-auto">
                                <Image className="w-6 h-6 md:w-6 md:h-6" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/abv4pbfsm4ah4fnaayyz.jpg" alt="facebook ipv" aria-label="icono de facebook" width={24} height={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/ipvtucuman/" className="flex items-center justify-center w-8 h-8 sm:w-auto sm:h-auto">
                                <Image className="w-6 h-6 md:w-6 md:h-6" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/php4y95kucyemzk28uhl.jpg" alt="instagram ipv" aria-label="icono de instagram" width={24} height={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/ipvdutuc?lang=es" className="flex items-center justify-center w-8 h-8 sm:w-auto sm:h-auto">
                                <Image className="w-6 h-6 md:w-6 md:h-6" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/j6851lz4ykzsxh2rnjdl.jpg" alt="twitter ipv" aria-label="icono de twitter" width={24} height={24} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="sticky top-0 z-50 flex items-center justify-between p-3 mx-auto cursor-pointer sm:max-w-4xl md:max-w-screen-xl bg-white shadow-md">
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
                        <Image className="h-8 sm:w-21 sm:ml-5 sm:h-16 md:block" src="/logo-tucuman-nuevo.svg" alt="Gobierno de Tucumán Logo" width={190} height={64} />
                    </a>
                </div>
                <div className="items-center justify-between hidden lg:flex">
                    <MenuList />
                </div>
                <div className="flex lg:hidden">
                    <ItemsMenuMobile />
                </div>
            </nav>
        </>
    )
}
