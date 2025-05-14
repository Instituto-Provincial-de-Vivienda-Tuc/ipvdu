import Layout from "../components/layout";
import { CarouselInst } from "./components/carouselInst";

export default function Page() {
    return (
        <>
            <Layout />
            <div className="max-w-screen-xl flex flex-wrap items-end justify-between mx-auto p-4">
                <div className="w-full md:flex pt-8 mb-14">
                    <div className="px-5 md:px-0 bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
                        <h2 className="md:mt-10 mb-8 font-bold text-5xl md:text-7xl text-gray-900 relative inline-block">
                            Misión
                            <span className="absolute bottom-[-10px] left-0 w-1/3 h-1 bg-[#FFB81A] rounded-full"></span>
                        </h2>
                        <p className="font-medium text-xl whitespace-pre-wrap text-gray-700 leading-relaxed">
                            El Instituto Provincial de Vivienda y Desarrollo Urbano esta facultado para elaborar la politica,
                            programación y ejecución de viviendas, ordenamiento y desarrollo de los centros urbanos,
                            conforme a las atribuciones otorgadas por la Ley Nº 3.619.

                            Instrumentar y armonizar los recursos disponibles y potenciales, así económicas como tecnológicas
                            a fin de que:

                            • Las familias, especialmente las de menores recursos, radicadas en el territorio de la provincia, se
                            alojen dignamente.

                            • Las familias encuentren en la vivienda, ya sea urbana o rural, un medio eficaz para el cumplimiento y
                            ejercicio de sus funciones.

                            • La vivienda por su emplazamiento y equipamiento contribuya al bienestar de la comunidad.

                            • Se logre a través del planeamiento físico. el mejor y mas racional uso de la tierra.

                            • Se propenda a la formación, estabilidad y permanencia social del grupo familiar, integrándolo a la
                            comunidad mediante la promoción y educación relacionada con la vivienda.

                            • Se procure la mejor amortización del sector vivienda con el resto de los sectores económicos y
                            sociales para que aquel que actúe como factor de desarrollo integral de la provincia.
                        </p>
                    </div>
                    <div className="md:ml-10 lg:ml-16 font-bold px-5 md:px-8 mb-14 md:mb-0 bg-gradient-to-br from-[#FFB81A]/10 to-[#FFB81A]/30 rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
                        <div className="transform transition-transform duration-300 hover:scale-105">
                            <p className="text-2xl md:text-3xl mb-2 text-gray-800">Total de viviendas</p>
                            <p className="text-5xl md:text-7xl mb-8 text-gray-900">650</p>
                        </div>
                        <div className="transform transition-transform duration-300 hover:scale-105">
                            <p className="text-2xl md:text-3xl mb-2 text-gray-800">Entregadas</p>
                            <p className="text-5xl md:text-7xl mb-8 text-gray-900">34,160</p>
                        </div>
                        <div className="transform transition-transform duration-300 hover:scale-105">
                            <p className="text-2xl md:text-3xl mb-2 text-gray-800">Total de viviendas</p>
                            <p className="text-5xl md:text-7xl mb-8 text-gray-900">2001</p>
                        </div>
                        <div className="transform transition-transform duration-300 hover:scale-105">
                            <p className="text-2xl md:text-3xl mb-2 text-gray-800">Entregadas</p>
                            <p className="text-5xl md:text-7xl text-gray-900">40</p>
                        </div>
                    </div>
                </div>
            </div>
            <CarouselInst />
        </>
    );
}