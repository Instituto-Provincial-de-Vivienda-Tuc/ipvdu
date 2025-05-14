"use client"
import { useGetCategoryName } from "@/api/getCategoryName"
import { ResponseType } from "@/types/response"
import { FiltersControlsCategory } from "./filters-controls-category"
import { SkeletonSchema } from "@/components/skeletonSchema"
import { FaInfoCircle } from 'react-icons/fa' // Importamos el icono de información

export const CategoryBoard = () => {
    const { result, loading }: ResponseType = useGetCategoryName()
    const entregas = result !== null && !loading && (result[0].name);
    const institucionales = result !== null && !loading && (result[1].name);
    const actosPublicos = result !== null && !loading && (result[2].name);
    return (
        <div className="md:block hidden p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="flex items-center mb-4 border-b pb-3">
                <FaInfoCircle className="text-[#FFB81A] text-2xl mr-3" />
                <h3 className="text-lg font-semibold text-gray-800" >Información de interés</h3>
            </div>
            {loading && (
                <SkeletonSchema grid={3} />
            )}

            <div className="mb-6">
                <h4 className="font-extrabold mb-3 text-black-700 border-l-4 border-[#FFB81A] pl-2">{entregas}</h4>
                <div className="pl-3">
                    <FiltersControlsCategory category="entregas" />
                </div>
            </div>

            {result !== null && !loading && (
                <div className="mb-6">
                    <h4 className="font-extrabold mb-3 text-black-700 border-l-4 border-[#FFB81A] pl-2">{institucionales}</h4>
                    <ul className="pl-3">
                        <FiltersControlsCategory category="institucionales" />
                    </ul>
                </div>
            )}

            {result !== null && !loading && (
                <div className="mb-3">
                    <h4 className="font-extrabold mb-3 text-black-700 border-l-4 border-[#FFB81A] pl-2">{actosPublicos}</h4>
                    <ul className="pl-3">
                        <FiltersControlsCategory category="actosPublicos" />
                    </ul>
                </div>
            )}
        </div>
    )
}
