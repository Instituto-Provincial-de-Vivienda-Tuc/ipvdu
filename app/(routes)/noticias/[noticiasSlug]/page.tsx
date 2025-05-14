"use client";

import { useGetNoticiaBySlug } from "@/api/getNoticiaBySlug";
import { NoticiaType } from "@/types/noticia";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import { NoticiaGallery } from "./components/gallery";
import { useState, useEffect } from "react";
import DefaultPlayer from "next-video/player";
import { SkeletonBigSchema } from "@/components/skeletonBigSchema";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { CategoryBoard } from "../components/category-component";
import { FormatDate } from "@/components/FormatDate";

export default function Page() {
    const params = useParams();
    const { noticiasSlug } = params;
    const { result, loading }: ResponseType = useGetNoticiaBySlug(noticiasSlug);

    const [showGallery, setShowGallery] = useState(true);

    // Scroll al inicio cuando se carga la página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleShowGallery = () => setShowGallery(true);
    const handleShowVideos = () => setShowGallery(false);

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Banner de encabezado con efecto de sombra suave */}


            {/* Contenedor principal con mejor espaciado */}
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                {loading && <SkeletonBigSchema grid={5} />}

                {/* Botón de regreso a noticias mejorado */}
                <Link
                    href="/noticias"
                    className="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300 mb-6 mt-8 py-2 px-4 rounded-md hover:bg-gray-100 group"
                >
                    <ArrowLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                    <span className="font-medium">Volver a noticias</span>
                </Link>
            </div>

            {result != null &&
                result.map((noticia: NoticiaType) => {
                    const {
                        titulo,
                        fecha,
                        imagenPrincipal,
                        contenido,
                        category,
                        descripcion,
                        videos,
                    } = noticia;

                    return (
                        <article key={noticiasSlug.toString()} className="animate-fadeIn">
                            {/* Sección de cabecera de noticia */}
                            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                                <h1 className="mb-8 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                                    {titulo}
                                </h1>

                                {/* Card principal con sombra y bordes mejorados */}
                                <div className="max-w-full rounded-xl shadow-lg overflow-hidden bg-white border border-gray-100 transition-all duration-300 hover:shadow-xl">
                                    <div className="md:flex">
                                        {/* Imagen principal con efecto hover */}
                                        <div className="md:w-2/3 overflow-hidden">
                                            <Image
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${result !== null && imagenPrincipal.url}`}
                                                alt={titulo}
                                                width={800}
                                                height={500}
                                            />
                                        </div>

                                        {/* Información lateral */}
                                        <div className="md:w-1/3 p-6 flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-center mb-4">
                                                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                                                        Noticia principal
                                                    </span>
                                                    <time className="ml-3 text-sm font-light text-gray-500">
                                                        <FormatDate dateString={fecha} />
                                                    </time>
                                                </div>

                                                <div className="flex mb-4 space-x-3">
                                                    <Image
                                                        className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 hover:scale-110"
                                                        src="https://res.cloudinary.com/dncvxpgj1/image/upload/w_200/v1714390010/IPV/ayblnmi0v8xb8dfidajz.png"
                                                        alt="Ícono de fotos"
                                                        width={24}
                                                        height={24}
                                                    />
                                                    <Image
                                                        className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 hover:scale-110"
                                                        src="https://res.cloudinary.com/dncvxpgj1/image/upload/w_200/v1714390010/IPV/cudtnnibjvxzi1nppoed.png"
                                                        alt="Ícono de videos"
                                                        width={24}
                                                        height={24}
                                                    />
                                                </div>

                                                <h2 className="mb-4 text-2xl md:text-3xl font-bold text-gray-800">
                                                    {category.name}
                                                </h2>

                                                <p className="text-base md:text-lg whitespace-pre-wrap text-gray-700 leading-relaxed">
                                                    {descripcion}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sección de contenido principal */}
                            <section className="w-full">
                                <div className="bg-gradient-to-r from-[#FFB81A] to-[#FFC44D] py-16 shadow-md">
                                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 md:flex justify-between">
                                        {/* Contenido principal */}
                                        <div className="md:w-2/3 pr-0 md:pr-12">
                                            <p className="font-medium text-lg md:text-xl whitespace-pre-wrap leading-relaxed text-gray-800 mb-16">
                                                {contenido}
                                            </p>

                                            {/* Sección de galería con título mejorado */}
                                            <h2 className="mt-16 mb-8 text-4xl md:text-5xl font-bold text-gray-900 relative inline-block">
                                                Galería
                                                <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-gray-900 rounded-full"></span>
                                            </h2>

                                            {/* Tabs de navegación mejorados */}
                                            <div className="flex font-bold text-xl">
                                                <button
                                                    className={`mr-12 cursor-pointer relative focus:outline-none transition-colors duration-300 ${showGallery ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                                                        }`}
                                                    id="botonFotos"
                                                    onClick={handleShowGallery}
                                                    aria-pressed={showGallery}
                                                >
                                                    Fotografías
                                                    <span
                                                        className={`absolute left-0 bottom-[-4px] h-[3px] w-full bg-gray-900 rounded-full transform transition-transform duration-300 ${showGallery ? "scale-x-100" : "scale-x-0"
                                                            }`}
                                                    />
                                                </button>
                                                <button
                                                    className={`cursor-pointer relative focus:outline-none transition-colors duration-300 ${!showGallery ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                                                        }`}
                                                    id="botonVideos"
                                                    onClick={handleShowVideos}
                                                    aria-pressed={!showGallery}
                                                >
                                                    Videos
                                                    <span
                                                        className={`absolute left-0 bottom-[-4px] h-[3px] w-full bg-gray-900 rounded-full transform transition-transform duration-300 ${!showGallery ? "scale-x-100" : "scale-x-0"
                                                            }`}
                                                    />
                                                </button>
                                            </div>
                                        </div>

                                        {/* Estadísticas con diseño mejorado */}
                                        <div className="hidden md:block md:w-1/3 text-black bg-gray-900/10 p-8 rounded-lg backdrop-blur-sm">
                                            <div className="transform transition-transform duration-300 hover:scale-105">
                                                <CategoryBoard />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* Contenedor de galería/videos con transiciones suaves */}
                                <div className="container mx-auto px-4 py-4 transition-opacity duration-500">
                                    {showGallery ? (
                                        <div className="animate-fadeIn">
                                            <NoticiaGallery />
                                        </div>
                                    ) : (
                                        <div className="mt-8 max-w-4xl mx-auto animate-fadeIn">
                                            {videos && videos.length > 0 ? (
                                                <div className="grid gap-8">
                                                    {videos.map((video) => (
                                                        <div key={video.id} className="rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl">
                                                            <DefaultPlayer
                                                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${video.url}`}
                                                                controls
                                                                loop
                                                                className="w-full"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="text-center py-20 bg-gray-100 rounded-xl shadow-inner">
                                                    <h2 className="font-bold text-3xl text-gray-600">
                                                        Aún no se han cargado videos en esta noticia...
                                                    </h2>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </section>
                        </article>
                    );
                })}
        </main>
    );
}