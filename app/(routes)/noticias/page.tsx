"use client"
import { CategoryBoard } from "./components/category-component"
import { ListaNoticias } from "./components/todas-noticias"
import Image from 'next/image'

export default function Page() {

    return (

        <>
            <Image 
                className="w-full mx-auto" 
                src="https://ipvtuc.gob.ar/web/wp-content/uploads/2024/02/pagina-WEB-noticias.png" 
                alt="Imagen de encabezado de noticias IPV" 
                width={1920}
                height={600}
            />
            <div className="max-w-screen-xl flex-wrap items-end justify-between mx-auto mt-20 mb-20 p-4">
                <h1 className="hidden md:block font-extrabold text-5xl mb-20" >Categorías</h1>

                <div className="flex">
                    <CategoryBoard />
                    <ListaNoticias />
                </div>
            </div>
        </>
    )
}
