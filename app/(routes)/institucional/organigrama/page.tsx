import Layout from "../components/layout";
import { CarouselInst } from "../mision/components/carouselInst";
import Image from 'next/image';

export default function Page() {
    return (
        <>
            <Layout />
            <div className="max-w-screen-xl mb-16 flex flex-wrap items-end justify-between mx-auto p-4">
                <div className="w-full">
                    <h2 className="md:mt-10 mb-12 font-bold text-5xl md:text-7xl text-gray-900 relative inline-block">
                        Organigrama
                        <span className="absolute bottom-[-10px] left-0 w-1/3 h-1 bg-[#FFB81A] rounded-full"></span>
                    </h2>
                    
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-500 hover:shadow-xl transform hover:translate-y-[-5px]">
                        <div className="overflow-hidden rounded-lg">
                            <Image 
                                className="mx-auto md:mb-3 mb-8 transition-transform duration-700 hover:scale-105" 
                                src="https://ipvtuc.gob.ar/web/wp-content/uploads/2024/02/organigrama.jpg" 
                                alt="Organigrama IPV Instituto Provincial de la Vivienda Tucumán"
                                width={1200}
                                height={800}
                            />
                        </div>
                        
                        <div className="text-center mt-6">
                            <a 
                                href="https://ipvtuc.gob.ar/web/wp-content/uploads/2024/02/organigrama.jpg" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center px-6 py-3 bg-[#FFB81A] text-gray-900 font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#ffce63]"
                            >
                                Ver imagen completa
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <CarouselInst />
        </>
    );
}
