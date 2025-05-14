import Image from 'next/image'

export const Tramites = () => {
    return (
        <div className="container flex justify-center space-x-20">
            <a
                href="http://119.8.76.209:8080/Boletas/com.boleta.homeipv"
                className="group text-center"
            >
                <div className="image-container">
                    <Image
                        src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/vnncweww0rltgxs85f9k.jpg"
                        alt="Imagen impresora ipv original"
                        className="original-image mx-auto w-16 mb-3 group-hover:hidden"
                        width={64}
                        height={64}
                    />
                    <Image
                        src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/wlhh0wgv16ymup71m3xe.jpg"
                        alt="Imagen impresora ipv al hacer hover"
                        className="hover-image mx-auto w-16 mb-3 hidden group-hover:block"
                        width={64}
                        height={64}
                    />
                    <h3 className="font-extrabold text-2xl mb-3 text-center">
                        Imprimir Boleta
                    </h3>
                    <p className="hidden md:block">
                        Descargue e Imprima
                        <br />
                        su Boleta mensual
                    </p>
                </div>
            </a>
            <a
                href="https://ipvtuc.gob.ar/inscripcion/registracion.php"
                className="group text-center"
            >
                <div className="image-container">
                    <Image
                        src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/slvuu9ssn5bivlpyhlqb.jpg"
                        alt="Imagen nota ipv original"
                        className="original-image mx-auto w-16 mb-3 group-hover:hidden"
                        width={64}
                        height={64}
                    />
                    <Image
                        src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/cbcgbzwg2u7y8tm6ujpe.jpg"
                        alt="Imagen nota ipv al hacer hover"
                        className="hover-image mx-auto w-16 mb-3 hidden group-hover:block"
                        width={64}
                        height={64}
                    />
                    <h3 className="font-extrabold text-2xl mb-3 text-center">
                        Inscripción
                    </h3>
                    <p className="hidden md:block">
                        Inscripción y Actualización
                        <br />
                        de Datos
                    </p>
                </div>
            </a>
        </div>
    );
};
