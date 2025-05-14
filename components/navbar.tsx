"use client"
//import { useRouter } from "next/navigation"
import { MenuList } from "./menu-list"
import { ItemsMenuMobile } from "./items-menu-mobile"
import Image from 'next/image'

export const Navbar = () => {
    //const router = useRouter()
    return (
        <>
            <nav className="bg-[#FFE3A7] dark:bg-[#FFE3A7]">
                <div className="max-w-screen-xl px-4 py-2 mx-auto flex justify-end">  <ul className="flex mt-0 space-x-3">
                    <li>
                        <a href="https://www.facebook.com/ipvtucuman">
                            <Image className="w-5 h-5 md:w-6 md:h-6" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/abv4pbfsm4ah4fnaayyz.jpg" alt="faecbook ipv" aria-label="icono de facebook" width={24} height={24} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ipvtucuman/">
                            <Image className="h-5 md:h-6" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/php4y95kucyemzk28uhl.jpg" alt="instagram ipv" aria-label="icono de instagram" width={24} height={24} />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/ipvdutuc?lang=es">
                            <Image className="w-5 h-5 md:w-6 md:h-6" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/j6851lz4ykzsxh2rnjdl.jpg" alt="twitter ipv" aria-label="icono de twitter" width={24} height={24} />
                        </a>
                    </li>
                </ul>
                </div>
            </nav>
            <nav className="sticky top-0 z-50 flex items-center justify-between p-3 mx-auto cursor-pointer sm:max-w-4xl md:max-w-screen-xl bg-white shadow-md">
                <div className="flex">
                    <a href="/" className="flex items-center rtl:space-x-reverse">
                        <Image className="ml-4 md:ml-0 h-10 md:w-21 md:h-16" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/t8nsoroaqkup8flv9dfp.jpg" alt="IPV Logo" width={190} height={64} />
                    </a>
                    <a href="https://www.tucuman.gob.ar/">
                        <Image className="hidden w-21 h-16 md:block" src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/z7rkzxdbrsioh3zcct29.jpg" alt="Gobierno de Tucumán Logo" width={190} height={64} />
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
