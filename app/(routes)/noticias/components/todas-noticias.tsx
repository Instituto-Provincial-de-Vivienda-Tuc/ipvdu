import { useGetProductField } from "@/api/getProductField"
import { SkeletonBigSchema } from "@/components/skeletonBigSchema"
import { NoticiaType } from "@/types/noticia"
import { ResponseType } from "@/types/response"
import Image from 'next/image'
import { FormatDate } from "@/components/FormatDate"

export const ListaNoticias = () => {
    const { result, loading }: ResponseType = useGetProductField()
    return (
        <div className="md:flex md:flex-col-reverse">
            {loading && (
                <SkeletonBigSchema grid={5} />
            )}
            {result != null && result.map((noticia: NoticiaType) => {
                const { titulo, slug, subtitulo, fecha, imagenPrincipal } = noticia;
                return (
                    <div className="overflow-hidden mb-5" key={slug}>
                        <div className="md:flex md:flex-row-reverse">
                            <div className="max-w-xs md:h-56 h-auto ml-9 mb-5 md:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <Image 
                                    className="rounded-t-lg" 
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${result !== null && !loading && (imagenPrincipal.url)}`} 
                                    alt={`Imagen de noticia: ${titulo}`}
                                    width={400}
                                    height={224}
                                />
                            </div>
                            <div className=" max-w-xs md:max-w-5xl md:p-4 ml-9 md:ml-0">
                                <h5 className="text-xl  font-black mb-2"> {result !== null && !loading && (titulo)}</h5>
                                <p className="text-gray-700 mb-4">
                                    {result !== null && !loading && (subtitulo)}
                                </p>
                                <p className="text-sm text-gray-500"> 
                                    {result !== null && !loading && <FormatDate dateString={fecha} />}
                                </p>
                                <div className="flex md:block place-content-around">
                                    <a href={`/noticias/${slug}`} className="inline-flex font-black items-center px-3 py-2 mt-8 bg-[#FFB81A]  hover:bg-[#ff891a]">
                                        Visitar Noticia
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    )
}
