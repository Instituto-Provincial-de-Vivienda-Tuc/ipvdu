
import Image from 'next/image'

export const Mantenimiento = () => {
    return (
        <section >
            <div className="min-h-screen flex flex-col justify-center items-center">
                <Image 
                    src="https://www.svgrepo.com/show/426192/cogs-settings.svg" 
                    alt="Logo" 
                    className="mb-8" 
                    width={160} 
                    height={160} 
                />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-4">Este sitio se encuentra en produccion</h1>
                <p className="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">Estamos trabajando para mejorar esta seccion de la pagina!</p>
                <div className="flex space-x-4">
                    <a href="/contacto" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded dark:bg-gray-700 dark:hover:bg-gray-600">Contactarse</a>
                    <a href="/" className="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white">Volver al inicio</a>
                </div>
            </div>
        </section>
    )
}
