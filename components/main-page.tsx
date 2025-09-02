"use client"

import React, { useState } from 'react'

import { CarouselPru } from './carousel-pru'
import Link from 'next/link'
import Image from 'next/image'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react"; // Importamos el ícono de lupa
const barrios = [
    {
        id: "obra1",
        titulo: "Lomas de tafi",
        descripcion: "Localizada hacia el NO del Aglomerado del Gran San Miguel de Tucumán (GSMT), en una de las áreas vacantes urbanizables más importantes, cuenta con una superficie de 399 has y accesibilidad resuelta, habiéndose previsto su integración a la planta urbana.",
        imagen: "http://www.ipvtuc.gov.ar/wordpress/wp-content/uploads/2015/10/dsc0191xm.jpg",
        estado: "Completado",
        fecha: "2023",
        detalles: [
            {
                id: "datos-generales",
                titulo: "Datos Generales",
                contenido: `En un predio de 400 has. propiedad del IPVDU, que en el año 2000 fue adquirido al Ex Bco. Empresario, el cual lo obtuvo en donación en pago de deudas por la Cia. Azucarera Concepción, al momento de su adquisición las tierras estaban ocupadas por cultivos de caña de azúcar, practica de explotación que provenía de muchos años anteriores, sito en la Localidad de Los Pocitos , Dpto. Tafí Viejo, inmediato hacia el norte de la planta urbana de San Miguel de Tucumán, se ha desarrollado el emprendimiento habitacional Lomas de Tafí, que comprende 5.000 viviendas y una población estimada en 25.000 habitantes, con las respectivas reservas para equipamiento urbano a diferentes escalas. El mismo presentaba características topográficas particulares con la presencia de suaves lomadas, con pendientes generales en sentido NO-SE, con un sector más accidentado en su extremo sudeste, situación que fue condicionante para el desarrollo del proyecto.

El sector donde se inserta la urbanización, se encuentra adecuadamente conectado, a través de la Ruta Provincial Nº 314, vía que lo rodea por su borde este y prolongación de arterias en sentido norte-sur, las calles Castro Barros y las Avdas. Viamonte y Las Américas, ejes estructurantes de la planta urbana servida existente, como así también la presencia de la Avda. Francisco de Aguirre que corre en sentido este-oeste y se constituye en límite sur.

La prolongación de los mencionados viarios hacia el interior del predio definieron los ejes estructurantes primarios, avenidas de 30 y 40 mts que generaron con su traza ocho sectores conteniendo cada uno de ellos a su vez, conjuntos habitacionales de aproximadamente 300 unidades, con la idea de desarrollar el proyecto de manera articulada, logrando así diferenciación entre los distintos sistemas de agrupamiento, con identidad hacia el interior del conjunto general. Sobre los mismos se localizaron los equipamientos a escala de conjunto general, como así también viviendas agrupadas que por sus características de conformación y la particularidad de las manzanas, se diseñaron para enfatizar el carácter de los corredores como bulevares en la búsqueda de recuperar la imagen verde de la ciudad. Dichos corredores contiene los troncales de las redes de infraestructura que abastecerán a los distintos sectores y conjuntos habitacionales.

rotador_lomas_de_tafiEn el encuentro de aquellos corredores que corresponden a la prolongación de las siguientes arterias: Avda. Los Sauces (avenida central de la localidad de Villa Carmela), Avda. Las Américas al norte y la Avda del Parque Sur (inmediata la cruce del Canal Norte), con la ex Diagonal Tafí Viejo-Tucumán, (Ruta Provincial 314) se ha previsto la ejecución de la ampliación hacía ambos márgenes de la ruta como también rotadores sobre ésta a fin de agilizar el ingreso a la urbanización en condiciones de seguridad vial, cuya ejecución se encuentra en pleno avance a través de la Dirección Provincial de Vialidad que licito la obra dentro del Programa Norte Grande con un avance de obra a la fecha del 63%.

La traza de las calles y avenidas, acompañando las curvas de nivel, permitió potenciar las visuales y obtener un variado paisaje urbano, acentuándolo con la combinación de los distintos tipos de viviendas proyectadas especialmente para el emprendimiento, tanto en una como en dos plantas, aportando cambios en la morfología.

Una mención especial merece el tratamiento de los espacios verdes proyectados, ya que los mismos responden a necesidades tanto a escala urbana como de sector o de unidades barriales: se ha previsto un Parque Urbano de 35 has. localizado en el extremo SE del terreno, sector que presenta las condiciones más accidentadas y que por otro lado sirve como adecuada puerta de entrada al emprendimiento, un Parque Norte, con 11 has respetando un monte de rebrote existente, ubicado en el corazón de la propuesta, en el punto de encuentro de dos canales de conducción de agua de lluvia, corredores verdes que acompañan la traza de dichos canales, generando zonas de protección con posibilidad de recibir equipamiento, una franja de 100 mts de ancho, respetando Ordenanzas Municipales, que acompaña la traza de la Ruta Prov. Nº 314, la cual puede ser equipada siempre con consenso municipal y los espacios verdes a escala de Plazas que tienen cobertura barrial. Éstos últimos se localizaron sobre los viarios secundarios junto con los equipamientos a escala de sector, con la intención de generar recorridos, tanto en sentido norte-sur como este-oeste, que enlazando los mismos tengan variedad y se comporten como paseos tanto peatonales como vehiculares.

En relación al Equipamiento Comunitario, se han efectuado las previsiones de las reservas para dar respuesta tanto a las necesidades que genera el total del emprendimiento como las correspondiente a sectores o unidades barriales: Educación, un total de 7 escuelas, Sanidad un Hospital con crecimiento gradual hasta llegar a un Nivel de complejidad V, Culto dos Capillas, Deportes instalaciones cubiertas con una superficie 7000 m2 y al aire libre en parques y corredores verdes, Comercio Básico con una superficie de 10.000m2 ubicados en las unidades barriales y Complementarios con 15.000 m2 localizados sobre los corredores, Servicios Públicos: Sede Administración Municipal, incluyendo actividades cívicas, Correo, Seccional Policial, Destacamento de Bomberos, Servicios Sociales: Guarderías Infantiles y Centros Comunitarios a localizar por sector, Espacios Comunitarios: Cultura (Museo de la Memoria, Centro Multimedia, Anfiteatro al aire libre, Sala Polivalente para 300 personas, Talleres de Ciencias y Artísticos), otros como Espacios para Jóvenes, Estaciones de Servicios, Recreación, Ciclovías, Telecentros, cabinas telefónicas, etc.

A la fecha se entregaron 3600 viviendas: un primer sector de 600 viviendas e infraestructura secundaria, conformado por 5 conjuntos habitacionales, entregado a fines del 2009, localizado en el sector sur de la propuesta e inmediato a barrios ya ejecutados, una segunda etapa también terminada y entregada que comprende a 3.000 unidades habitacionales, localizadas en el sector central y que está conformada por 10 sectores con conjuntos cercanos a las 300 viviendas y una tercera etapa, en construcción en el marco del Programa Federal Plurianual II con 5 sectores con un total de 1400 unidades habitacionales más, localizado en el extremo norte del emprendimiento, de los cuales el sector XIX recientemente fue entregado por el Sr. Gobernador de la Provincia junto al Sr. Interventor del IPVDU en teleconferencia con la Sra. Presidente de la Nación.

Con una inversión de $ 889.692.525,71, cuyo monto estimado al finalizar dicho emprendimiento seria de $ 904.776.266,96. Las Diversas Etapas:
1º ETAPA 600 viviendas e infraestructura secundaria (5 conjuntos habitacionales) – Programa Federal de Construcción de Viviendas. (Ejecutadas y entregadas), con una inversión de $45.637.576,04
2º ETAPA 3000 viviendas e infraestructura secundaria (10 conjuntos habitacionales) – Programa Federal de Construcción de Viviendas. (Ejecutadas y entregadas con una inversión a la fecha de $426.222.755,53)
3º ETAPA 1400 viviendas e infraestructura secundaria (5 conjuntos habitacionales) – Programa Federal Plurianual de Construcción de Viviendas (en ejecución, con una inversión total de 192.528.474,59) donde el sector xix fue recientemente entregado. Dicho núcleo habitacional cuenta con 273 viviendas, de las cuales hay 266 unidades de 2 dormitorios con techo de chapa; 7 unidades para discapacitados motrices de 2 dormitorios con techo de chapa que presentan locales de mayores dimensiones con accesorios y artefactos adecuados dotándolas con las comodidades para tal fin, con una inversión total a Abril de 2012 de $42.972.461, 66.`
            },
            {
                id: "espacios-verdes-forestacion-y-equipamiento-urbano",
                titulo: "Espacios Verdes: Forestación y Equipamiento Urbano",
                contenido: `La concepción de dichos espacios se basó en:

Considerar la particular topografía del lugar, respetando las curvas de nivel originales, conservando la imagen de suaves lomadas.
Proveer principalmente de especies arbóreas autóctonas con la finalidad de recuperar la avifauna del lugar.
Combinar especies según época de floración y caducidad.
Pensar los espacios verdes según las diferentes escalas de uso, pero siempre con la premisa de reflejar las múltiples actividades tanto grupales como individuales, brindando áreas de sombra y claros despejados.
Agrupamiento de actividades complementarias o afines que tengan requerimientos comunes, otorgándoles un espacio propio.
Brindar accesibilidad adecuada a los diferentes sectores, jerarquizando accesos, respetando directrices y potenciando usos.
Elección de materiales duraderos, de bajo costo de mantenimiento.
Ordenar los usos previendo espacios propios para cartelería, papeleros y bancos, de manera tal que no interfieran con las circulaciones.
Evitar saltos o desniveles en las circulaciones, priorizando su adaptabilidad a las condiciones del terreno.
Inclusión de bicisendas, en aquellos lugares donde se pudiera desarrollar un recorrido que vincule puntos de interés.
Forestación
Se pensó la provisión de arbolado teniendo, particularmente en cuenta, la época de floración, porte y tipo de copa a fin de dotar a cada espacio o circulación de aquellas especies que más se adecuen ya sea por la sombra que brindan, por ser de hojas caducas y garantizar sol cuando así se lo requiera, o por su altura que acompaña y protege los ámbitos propuestos.

Así se optó por especies de gran porte sólo en espacios despejados y complementados por otras de menor envergadura. Acompañando las caminerías se pensó en las distancias entre especies y en relación a las veredas y se propusieron distintos tipo de agrupamientos, en forma de bosquecillos o en hilera o doble hilera, según tipo de recorrido o ámbitos a generar. Las especies de hojas perennes que a su vez son las de menor porte fueron las elegidas para acompañar las zonas de bancos. Sin embargo se previó la ubicación de bancos sin protección solar para comprender todos los usos y requerimientos.

Las distintas especies responden a la premisa básica de que fueran autóctonas, propias del pedemonte y la yunga tucumana, contemplando sólo dos excepciones de especies exóticas que por su uso intensivo en la provincia no provocarán un gran impacto en la fauna local. Las especies se dispusieron a lo largo de las caminería pensando en generar recorridos con múltiples coloridos, texturas y perfumes, como así también se dispusieron de modo tal de otorgarle identidad a cada uno de los trayectos a recorrer.

Equipamiento Urbano
En relación a los muebles urbanos pensados para estos grandes espacios verdes, se tuvieron en consideración algunas pautas rectoras a fin que los mismos sean adecuados al uso al que estarán destinados: masivos, por parte de distintos grupos etarios e individuales. Se tomaron en cuenta los siguientes criterios:

Bancos de dimensiones dobles que admitan múltiples usos, que tengan la flexibilidad suficiente para ser usados por varias personas, apoyados en el plano de banco en diferentes direcciones, utilizando el respaldo como tal o como apoyo para sentarse o como superficie para relax en posición extendida. A su vez se ha contemplado la alternativa de hacerlos simples así otorgar mayor dinamismo a las variantes en el equipamiento. Los mismos se han pensado para ser colocados en superficies adicionales a las caminerías principales, a modo de mini plazas o remansos, que tendrán otro tipo de pisos y contendrán además de los bancos descritos otros equipamientos tales como bicicletarios, o espacios lúdicos.
Para ser colocados sueltos en las grandes superficies verdes y destinados al relax, se han propuestos módulos acoplables y que permitan por su forma de encastre ir tomando forma serpenteante y que además acepten cambios de dirección o giros, tomando formas variadas y únicas. A su vez permiten obtener tiras continuas que a lo largo admiten o no respaldos. Dichas tiras acompañarán los cambios de nivel de manera tal que además de su función de banco sirvan de contenedores en estos cambios de niveles existentes en el terreno. De allí que una de las características más destacables sea su flexibilidad.
Están también los individuales a modos de puf urbanos, que sueltos o agrupados aceptan usos varios: como bancos o prestándose a juegos lúdicos, permitiendo saltarlos o treparlos. El agrupamiento busca figuras geométricas y se ubicarán en los remansos o mini plazas generadas inmediatas a las veredas centrales.
A su vez existen como excepción, ya que se encuentra en sólo 2 lugares en toda la extensión verde, bancos circulares, contenedores de un importante espacio que hace las veces de cantero contenedor de especies arbóreas de gran porte.
Por último están los bancos más tradicionales que acompañan el recorrido de las veredas internas de los parques y que responden también a los criterios mencionados anteriormente: flexibilidad en las posibilidades de uso, durabilidad en los materiales propuestos, formas ergonométricas que den respuesta a las exigencias actuales.`
            },
            {
                id: "espacio-verde-norte",
                titulo: "Espacios Verdes: El Parque Norte",
                contenido: `Se encuentra conformado por tres (3) fracciones inmediatas delimitadas por la traza de los corredores principales, que corresponden a avenidas de 30 y 40 mts, ubicadas en un punto central del emprendimiento. Las fracciones, que en su conjunto suman 11 has, han sido objeto de asignaciones de usos particulares, lo que contribuirá a la determinación de actividades y funciones que albergarán, comportándose además de manera integrada complementándose.

Forman parte de lo arriba señalado:

El sector XVI, localizado sobre el borde Oeste, tiene una ubicación beneficiosa, delimitado en dos de sus lados por corredores principales, la Av. América al este y Los Sauces al sur. De forma regular asimilable a un prisma rectangular, contiene en el borde sur una laguna de retención considerada como parte integral de la propuesta, siendo atravesable, pero sin la provisión de equipamientos que condicionen su limpieza, uso y mantenimiento.

Esta fracción, destinada principalmente a actividades y usos infantiles, contempla los siguientes usos:

Sector de juegos, localizados hacia el interior de la fracción en la búsqueda de ofrecer seguridad y protección.
Inclusión de una senda para bicicletas que tendrá un recorrido perimetral, a fin de no obstaculizar actividades.
Zona para actividades deportivas sobre el borde norte, que en un futuro y a partir de iniciativas vecinales y/o estatales podría contener mini canchas de fútbol u otras.
A partir de una caminería principal que atraviesa la fracción en sentido SO-NE, y que estructura el espacio verde, a la misma confluyen las secundarias desde distintos puntos de los bordes, conformándose en los lugares de encuentro espacios de carácter cívico, recreativo, y de estar, entre otros.
Sobre el sector centro-este de la fracción se ha previsto una reserva para la localización futura de equipamiento comercial destinado a gastronomía.
El sector XX, corresponde a la fracción localizada sobre el extremo norte del conjunto general del Parque Norte, presentando una forma triangular y sobre sus bordes este y sur linda con la Av. Viamonte y Av. Los Sauces, respectivamente. Contiene en el borde este una reserva para equipamiento destinada a cultura, a ser provista por el estado. Se prevé:

Explanadas o puntos de reunión y espacios pensados para actividades cívicas.
Espacios complementarios para actividades a realizar por diferentes grupos etarios o según intereses y número.
La caminería principal vinculará puntos de interés y hacia el sur conectará con otro espacio verde de envergadura; las secundarias que nacen en diferentes puntos de los bordes, confluirán con aquella generando espacios de encuentro.
Conducción ordenada del agua de lluvia hacia la laguna de retención localizada al sur, adecuando el terreno de manera natural sin generar obras que impacten negativamente cambiando el carácter de paseo recreativo.
Incorporación de bicisendas.
El sector IX, corresponde a una de las fracciones de mayor tamaño del conjunto del Parque Norte y se localiza sobre el borde sur de la Av Los Sauces, encuentro con Av Viamonte, e inmediata al norte de una reserva destinada a grandes equipamientos. Destinada principalmente a actividades relacionadas con el deporte y la salud, incluye además una reserva para culto, ya transferida oportunamente y cuyo proyecto se encuentra en trámite.

Contará con las siguientes características:

Sector destinado a actividades deportivas del grupo etario de jóvenes: pistas de rollers, sector para prácticas de skaters y pisos para deportes.
Explanadas para expresiones teatrales, de música y otras relacionadas al arte.
Pistas de salud complementarias con circuitos para correr o trotar.`
            },
            {
                id: "espacios-verdes-sur",
                titulo: "Espacios Verdes: El Parque Sur",
                contenido: `El Espacio Verde denominado Parque Sur corresponde a un Parque de escala urbana de 35 has localizado en el extremo SE del emprendimiento, inmediato al oeste de la ex Ruta Provincial Nº 314 y al norte del Bº Policial. Se implanta en uno de los sectores que originalmente presentaba mayores irregularidades topográficas, caracterizando a la urbanización con sus suaves lomadas siendo la primera imagen que se percibe cuando se arriba a la zona.

El Parque ya tiene ejecutadas las calles vehiculares que definen su conformación, siendo éstas curvas, caracterizando su trazado de forma orgánica; fueron proyectadas tomando en cuenta las curvas de nivel y adaptándose al terreno natural. El trazado también tuvo en cuenta los puntos de llegada de las arterias vehiculares más importantes del entorno, a fin de otorgarle accesibilidad y conectividad con los demás sectores que conforman el emprendimiento. La idea fuerza fue lograr que dicho espacio sea atravesable y recorrible sin dificultades y fácilmente vinculable con los equipamientos, y desde los diferentes sectores de vivienda.

Albergará equipamientos destinados a actividades culturales, clubes sociales y deportivos, salones de fiestas y bares y/o restaurantes, equipamientos que vitalizarán su uso y permitirán actividades variadas y abarcativas de las múltiples demandas de la población, entendiendo además que absorberá población del entorno circundante, ya que no existe en las inmediaciones otros espacios destinados a tal fin de similar importancia y envergadura.

El predio tiene forma triangular, a modo de cuña que se inserta en la zona residencial, y presenta:

Estructura de recorrido peatonal
Principal
Un eje primario estructura la red de caminerías internas, vinculando el sector medio del área residencial inmediata hacia el norte, con el extremo SE, lugar donde se localiza una de las rotondas de acceso. Dicho eje contiene a todo lo largo de su desarrollo espacios a modo de “lugares de estar a cielo abierto” ubicados a los lados de dicha caminería.

Complementaria
Cortan al eje principal, atravesándolo a fin de poder vincular los distintos sectores y también conectar con la caminería de borde perimetral, permitiendo llegar así a todas las calles internas del parque. Se busca claridad de recorridos y vinculaciones tales que se minimice la extensión de las circulaciones.

Cruces de caminerías
En los lugares donde se producen los cruces entre las veredas principales y las complementarias, se han propuestos plazas o remansos equipados con bancos, provistos de sombra y dotados de adecuada y suficiente iluminación, de manera tal que puedan ser utilizados por grupos reducidos de personas, en un ámbito contenido. A su vez, no se interrumpe la traza de las veredas internas, permitiendo realizar recorridos continuos por las diferentes áreas del parque.

Puntos de atracción
Se han determinado puntos de atracción conteniendo actividades específicas, tales como áreas de juegos infantiles, pequeñas plazas centrales o laterales como puntos de encuentro, un anfiteatro con una explanada circundad de gradas, áreas destinada a deportes y salud, bares y un edificio destinado a la cultura.

`
            },
            {
                id: "zonificacion-sur",
                titulo: "Zonificación: El Parque Sur",
                contenido: `Dada la envergadura de la superficie que conforma el parque resultó necesario sectorizar al mismo delimitando zonas según actividades, resultando así la determinación de áreas o sectores:

SECTOR 1: Área Cultural
Localizada en el extremo SO del parque, y de forma triangular, cuenta con accesibilidad adecuada y disponibilidad de estacionamiento propio y también en los sectores inmediatos. La propuesta en la traza de caminería tiene como finalidad poder recorrer el área en su totalidad y otorgarle dimensiones en función de las actividades culturales convocantes para grupos numerosos, ya que se dispone la ejecución de un futuro edificio de Cultura en el sector. A su vez el arbolado fue ubicado de tal forma de otorgarle identidad a cada cruce, ya que las distintas especies autóctonas elegidas irán marcando un color y una textura distinta en cada época del año a los distintos recorridos. Esto se repetirá en todo el parque.

SECTOR 2: Área Gastronómica
En uno de los sectores centrales y de borde norte, quedó conformado un espacio de forma irregular en el cual se dispuso el futuro emplazamiento de equipamientos gastronómicos. La traza de las veredas internas determina espacios de reserva para la instalación de bares, restoranes, etc., en un número igual a dos, los que estarán equidistantes al área de juegos infantiles ubicada en el centro del Sector.

SECTOR 3: Área Cívica y Social
Este sector se encuentra en el centro del conjunto, de forma irregular asemejando una cuña alargada, motivo por el que se dispuso la ubicación de un Área Cívica al oeste, lindera con la rotonda de distribución y con una buena accesibilidad, al centro se ubicaron sobre el lado norte una pista de salud y sobre el lado sur canchas de vóley y básquet. El sector se completa con zonas de paseo caracterizadas por la disposición de árboles autóctonos que le dan carácter tanto a los recorridos como a los cruces donde a través del ensanchamiento de caminerías y la disposición de diferentes solados y equipamiento se generaron áreas de descanso y reunión.

SECTOR 4: Área de Reserva Forestal y Deportiva
Este sector se localiza sobre el borde este y acompaña el primer tramo de la ex Ruta Provincial Nº 314, correspondiendo a una de las zonas más extensas y de importantes dimensiones. La misma contiene la vegetación más desarrollada dentro del emprendimiento, sector donde hubo mayor prendimiento de especies arbóreas plantadas al inicio de la gestión de la urbanización. Por los motivos antes señalados, resulta conveniente mantenerla en las condiciones más naturales posibles, preservándola en reserva, libre de un uso intensivo, previendo allí superficies libres significativas para la práctica de deportes varios y paseos a pie y en bicicleta.

SECTORES 5 y 6: Áreas de Paseo Norte y Sur
Estas porciones del parque fueron pensadas como paseo y a su vez la Norte contenedora de la Laguna de Retención que forma parte del sistema de desagües que conducen el agua de lluvias proveniente de las calles que desembocan en el parque de sentido norte-sur. Presenta las pendientes más pronunciadas, motivo por el cual se ha previsto conservarlo sin intervención manteniendo su carácter natural, reforzando la forestación existente con especies que colaboren con la fijación del suelo evitando desmoronamientos. Acompañando el desarrollo de la Avenida del Parque Sur se localiza un área de forma alargada destinada a paseo y recorridos peatonales, actuando como zona de amortiguamiento ante el movimiento vehicular importante proveniente del ingreso cercano. La misma contará con mínimas circulaciones, bancos de borde sur y con abundante provisión de arbolado.`
            }
        ]
    },
    {
        id: "obra2",
        titulo: "100 Viv. Las Talitas",
        imagen: "https://minobrastuc.gob.ar/wp-content/uploads/2025/05/4920681595543858485.jpg",
        estado: "Completado",
        fecha: "2024",
        detalles: []
    },
    {
        id: "obra3",
        titulo: "25 Viv. Manantial Sur",
        imagen: "https://www.eltucumano.com/fotos/notas/2023/01/16/230116201827_97329.jpg",
        estado: "Completado",
        fecha: "2024",
        detalles: []
    },

];


export const MainPage = () => {
    const [selectedObra, setSelectedObra] = useState<string | null>(null);
    const [showFullImage, setShowFullImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageClick = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setShowFullImage(true);
    };
    return (
        <main className="min-h-screen bg-gray-50 font-lora">


            {/* Contenedor principal */}

            <div className="max-w-screen-xl flex-wrap justify-between mx-auto mt-16 md:mt-10 lg:mt-26 mb-20 px-4 sm:px-6 lg:px-8">
                {/* Sección de Noticias */}
                <section className="mb-10">

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-6 transform transition-all duration-500">
                        {/* Carrusel de noticias */}
                        <div className="w-full shadow-xl hover:shadow-2xl rounded-xl overflow-hidden">
                            <CarouselPru />
                        </div>
                    </div>
                </section>


                {/* Sección de Trámites y Servicios - Rediseñada con iconos originales */}
                <section id="tramites-servicios" className="w-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-5 transform transition-all duration-500 hover:shadow-2xl mb-24">


                    {/* Servicios destacados con iconos originales - Ahora en horizontal */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {/* Tarjeta Imprimir Boleta */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-[#FFB81A] group">
                            <div className="p-4 flex items-center">
                                <div className="mr-4 group-hover:scale-110 transition-all duration-300">
                                    <div className="image-container">
                                        <Image
                                            src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/vnncweww0rltgxs85f9k.jpg"
                                            alt="Imagen impresora ipv original"
                                            className="original-image w-12 group-hover:hidden"
                                            width={48}
                                            height={48}
                                        />
                                        <Image
                                            src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/wlhh0wgv16ymup71m3xe.jpg"
                                            alt="Imagen impresora ipv al hacer hover"
                                            className="hover-image w-12 hidden group-hover:block"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-playfair text-lg font-bold text-gray-900 mb-1">Imprimir Boleta</h3>
                                    <div className="flex justify-between items-center">
                                        <Link
                                            href="http://119.8.76.209:8080/Boletas/com.boleta.homeipv"
                                            className="inline-flex items-center px-3 py-1 bg-[#FFB81A] text-gray-900 font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#ffce63] text-sm"
                                        >
                                            Imprimir
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta Inscripción */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-[#FFB81A] group">
                            <div className="p-4 flex items-center">
                                <div className="mr-4 group-hover:scale-110 transition-all duration-300">
                                    <div className="image-container">
                                        <Image
                                            src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/slvuu9ssn5bivlpyhlqb.jpg"
                                            alt="Imagen nota ipv original"
                                            className="original-image w-12 group-hover:hidden"
                                            width={48}
                                            height={48}
                                        />
                                        <Image
                                            src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/cbcgbzwg2u7y8tm6ujpe.jpg"
                                            alt="Imagen nota ipv al hacer hover"
                                            className="hover-image w-12 hidden group-hover:block"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Inscripción</h3>
                                    <div className="flex justify-between items-center">
                                        <Link
                                            href="https://ipvtuc.gob.ar/siempre/public"
                                            className="inline-flex items-center px-3 py-1 bg-[#FFB81A] text-gray-900 font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#ffce63] text-sm"
                                        >
                                            Inscribirse
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tarjeta Link de pago */}
                        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-[#FFB81A] group">
                            <div className="p-4 flex items-center">
                                <div className="mr-4 group-hover:scale-110 transition-all duration-300">
                                    <div className="image-container">
                                        <Image
                                            src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/slvuu9ssn5bivlpyhlqb.jpg"
                                            alt="Imagen nota ipv original"
                                            className="original-image w-12 group-hover:hidden"
                                            width={48}
                                            height={48}
                                        />
                                        <Image
                                            src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics pictures/cbcgbzwg2u7y8tm6ujpe.jpg"
                                            alt="Imagen nota ipv al hacer hover"
                                            className="hover-image w-12 hidden group-hover:block"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">Link de pago</h3>
                                    <div className="flex justify-between items-center">
                                        <Link
                                            href="https://ipvtuc.gob.ar/siempre/public"
                                            className="inline-flex items-center px-3 py-1 bg-[#FFB81A] text-gray-900 font-bold rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:bg-[#ffce63] text-sm"
                                        >
                                            Ir al enlace
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enlaces adicionales - Mantenidos en vertical */}
                    <div className="space-y-1 md:space-y-0 md:flex justify-around mt-6">
                        <Link
                            href="/tramites/requisitos"
                            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 hover:border-[#FFB81A] text-sm w-64 justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#FFB81A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Requisitos
                        </Link>
                        <Link
                            href="/tramites/transferencia"
                            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 hover:border-[#FFB81A] text-sm w-64 justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#FFB81A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            Transferencia
                        </Link>
                        <Link
                            href="https://www.boletinoficial.gob.ar/"
                            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 hover:border-[#FFB81A] text-sm w-64 justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#FFB81A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Boletin oficial
                        </Link>
                        <Link
                            href="https://guiadetramites.tucuman.gob.ar/tematica/950/vivienda.html"
                            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-gray-50 hover:border-[#FFB81A] text-sm w-64 justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#FFB81A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Guia de tramites
                        </Link>
                    </div>
                </section>
                {/* Sección de Obras */}
                <section className="mb-24">
                    <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-10 text-gray-900 relative inline-block">
                        Obras
                        <span className="absolute bottom-[-10px] left-0 w-1/2 h-1 bg-[#FFB81A] rounded-full"></span>
                    </h2>
                    {showFullImage && (
                        <div
                            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                            onClick={() => setShowFullImage(false)}
                        >
                            <div className="relative w-full max-w-6xl h-auto">
                                <Image
                                    src={selectedImage || ""}
                                    alt="Imagen ampliada"
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    style={{ objectFit: "contain" }}
                                />
                                <button
                                    className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowFullImage(false);
                                    }}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <div className="bg-[#FFB81A] py-10">
                            <div className="">
                                <div className="bg-white rounded-lg shadow-md p-6">
                                    <h3 className="text-xl font-semibold mb-6 text-center">Barrios, proyectos y obras en Desarrollo</h3>

                                    {/* Categorías de obras */}
                                    <Accordion type="single" collapsible className="w-full mb-6">
                                        <AccordionItem value="barrios">
                                            <AccordionTrigger className="text-left font-medium text-lg">
                                                <div className="flex items-center">
                                                    <span className="inline-block w-3 h-3 rounded-full mr-3 bg-green-500"></span>
                                                    <span>Barrios</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <Accordion type="single" collapsible className="w-full pl-4 mt-2">
                                                    {barrios.map((obra) => (
                                                        <AccordionItem key={obra.id} value={obra.id}>
                                                            <AccordionTrigger
                                                                onClick={() => setSelectedObra(selectedObra === obra.id ? null : obra.id)}
                                                                className="text-left font-medium"
                                                            >
                                                                <div className="flex items-center">
                                                                    <span className={`inline-block w-3 h-3 rounded-full mr-3 ${obra.estado === "Completado" ? "bg-green-500" :
                                                                        obra.estado === "En progreso" ? "bg-yellow-500" : "bg-blue-500"
                                                                        }`}></span>
                                                                    <span>{obra.titulo}</span>
                                                                    <span className="ml-3 text-sm text-gray-500">({obra.fecha})</span>
                                                                </div>
                                                            </AccordionTrigger>
                                                            <AccordionContent>
                                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                                                                    <div
                                                                        className="relative h-[200px] rounded-md overflow-hidden group cursor-pointer"
                                                                        onClick={() => handleImageClick(obra.imagen)}
                                                                    >
                                                                        <Image
                                                                            src={obra.imagen}
                                                                            alt={obra.titulo}
                                                                            fill
                                                                            style={{ objectFit: "cover" }}
                                                                        />
                                                                        {/* Overlay con lupa en hover para imágenes del acordeón */}
                                                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                                                                                <Search className="w-6 h-6 text-white" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="md:col-span-2">
                                                                        <h4 className="font-semibold mb-2">{obra.titulo}</h4>
                                                                        <p className="text-gray-700 mb-3">{obra.descripcion}</p>
                                                                        <div className="flex items-center mb-4">
                                                                            <span className="font-medium mr-2">Estado:</span>
                                                                            <span className={`px-2 py-1 rounded-full text-xs ${obra.estado === "Completado" ? "bg-green-100 text-green-800" :
                                                                                obra.estado === "En progreso" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"
                                                                                }`}>
                                                                                {obra.estado}
                                                                            </span>
                                                                        </div>

                                                                        {/* Sub-acordeón para detalles de la obra */}
                                                                        {obra.detalles && obra.detalles.length > 0 && (
                                                                            <div className="mt-4 border-t pt-4">
                                                                                <h5 className="font-semibold mb-3">Información Detallada</h5>
                                                                                <Accordion type="multiple" className="w-full">
                                                                                    {obra.detalles.map((detalle) => (
                                                                                        <AccordionItem key={detalle.id} value={detalle.id}>
                                                                                            <AccordionTrigger className="text-left text-sm font-medium py-2">
                                                                                                {detalle.titulo}
                                                                                            </AccordionTrigger>
                                                                                            <AccordionContent>
                                                                                                <div className="text-sm text-gray-700 whitespace-pre-line p-2 bg-gray-50 rounded-md">
                                                                                                    {detalle.contenido}
                                                                                                </div>
                                                                                            </AccordionContent>
                                                                                        </AccordionItem>
                                                                                    ))}
                                                                                </Accordion>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    ))}
                                                </Accordion>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="programas">
                                            <AccordionTrigger className="text-left font-medium text-lg">
                                                <div className="flex items-center">
                                                    <span className="inline-block w-3 h-3 rounded-full mr-3 bg-blue-500"></span>
                                                    <span>Programas</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="p-4 text-gray-700">
                                                    <ul className="space-y-4">
                                                        <li className="border-l-4 border-blue-500 pl-3 py-2 bg-blue-50 rounded-r-md">
                                                            <h4 className="font-bold">PROGRAMA RECONSTRUIR</h4>
                                                            <p>TERMINACION DE 2 VIVIENDAS EN VILLA BENJAMIN ARAOZ - PROVINCIA DE TUCUMAN</p>
                                                            <div className="mt-2 flex items-center">
                                                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '42.50%' }}></div>
                                                                </div>
                                                                <span className="ml-2 text-sm font-medium">42.50%</span>
                                                            </div>
                                                        </li>
                                                        <li className="border-l-4 border-blue-500 pl-3 py-2 bg-blue-50 rounded-r-md">
                                                            <h4 className="font-bold">PROGRAMA CASA PROPIA – CONSTRUIR FUTURO</h4>
                                                            <p>80 VIVIENDAS EN BURRUYACU - DEPARTAMENTO BURRUYACU - PROVINCIA DE TUCUMAN</p>
                                                            <div className="mt-2 flex items-center">
                                                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '59.387%' }}></div>
                                                                </div>
                                                                <span className="ml-2 text-sm font-medium">59.387%</span>
                                                            </div>
                                                        </li>
                                                        <li className="border-l-4 border-blue-500 pl-3 py-2 bg-blue-50 rounded-r-md">
                                                            <h4 className="font-bold">PROGRAMA CASA PROPIA – CONSTRUIR FUTURO</h4>
                                                            <p>132 VIVIENDAS EN RIO SECO - DEPARTAMENTO MONTEROS - PROVINCIA DE TUCUMAN</p>
                                                            <div className="mt-2 flex items-center">
                                                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '55.90%' }}></div>
                                                                </div>
                                                                <span className="ml-2 text-sm font-medium">55.90%</span>
                                                            </div>
                                                        </li>
                                                        <li className="border-l-4 border-blue-500 pl-3 py-2 bg-blue-50 rounded-r-md">
                                                            <h4 className="font-bold">PROGRAMA CASA PROPIA – CONSTRUIR FUTURO</h4>
                                                            <p>35 VIVIENDAS EN LA COCHA - DEPARTAMENTO LA COCHA - PROVINCIA DE TUCUMAN</p>
                                                            <div className="mt-2 flex items-center">
                                                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '39.47%' }}></div>
                                                                </div>
                                                                <span className="ml-2 text-sm font-medium">39.47%</span>
                                                            </div>
                                                        </li>
                                                        <li className="border-l-4 border-blue-500 pl-3 py-2 bg-blue-50 rounded-r-md">
                                                            <h4 className="font-bold">PROGRAMA CASA PROPIA – CONSTRUIR FUTURO</h4>
                                                            <p>76 VIVIENDAS EN LOS VILLAGRAS - DEPARTAMENTO CRUZ ALTA - PROVINCIA DE TUCUMAN</p>
                                                            <div className="mt-2 flex items-center">
                                                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '43.33%' }}></div>
                                                                </div>
                                                                <span className="ml-2 text-sm font-medium">43.33%</span>
                                                            </div>
                                                        </li>
                                                        <li className="border-l-4 border-blue-500 pl-3 py-2 bg-blue-50 rounded-r-md">
                                                            <h4 className="font-bold">PROGRAMA CASA PROPIA – CONSTRUIR FUTURO</h4>
                                                            <p>182 VIVIENDAS EN BELLA VISTA - DEPARTAMENTO LEALES - PROVINCIA DE TUCUMAN</p>
                                                            <div className="mt-2 flex items-center">
                                                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '6.31%' }}></div>
                                                                </div>
                                                                <span className="ml-2 text-sm font-medium">6.31%</span>
                                                            </div>
                                                        </li>
                                                        <li className="border-l-4 border-blue-500 pl-3 py-2 bg-blue-50 rounded-r-md">
                                                            <h4 className="font-bold">PROGRAMA CASA PROPIA – CONSTRUIR FUTURO</h4>
                                                            <p>178 VIVIENDAS EN SIMOCA - DEPARTAMENTO SIMOCA - PROVINCIA DE TUCUMAN</p>
                                                            <div className="mt-2 flex items-center">
                                                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '0.01%' }}></div>
                                                                </div>
                                                                <span className="ml-2 text-sm font-medium">0.01% (REINICIO AGOSTO 2025)</span>
                                                            </div>
                                                        </li>
                                                        <li className="border-l-4 border-blue-500 pl-3 py-2 bg-blue-50 rounded-r-md">
                                                            <h4 className="font-bold">PROGRAMA PROVINCIAL</h4>
                                                            <p>24 VIVIENDAS E INFRAESTRUCTURA EN MONTEROS- DPTO. MONTEROS- PCIA. DE TUCUMAN</p>
                                                            <div className="mt-2 flex items-center">
                                                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '4.398%' }}></div>
                                                                </div>
                                                                <span className="ml-2 text-sm font-medium">4.398%</span>
                                                            </div>
                                                        </li>
                                                        <li className="border-l-4 border-blue-500 pl-3 py-2 bg-blue-50 rounded-r-md">
                                                            <h4 className="font-bold">SUBPROGRAMA CASA ACTIVA</h4>
                                                            <p>CONSTRUCCION DE 32 VIVIENDAS MAS EQUIPAMIENTO EN ESPACIOS COMUNES, CENTRO DE DIA Y PILETA EN SAN MIGUEL DE TUCUMAN</p>
                                                            <div className="mt-2 flex items-center">
                                                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '0.01%' }}></div>
                                                                </div>
                                                                <span className="ml-2 text-sm font-medium">0.01% (REINICIO AGOSTO DE 2025)</span>
                                                            </div>
                                                        </li>
                                                        <li className="border-l-4 border-blue-500 pl-3 py-2 bg-blue-50 rounded-r-md">
                                                            <h4 className="font-bold">PROGRAMA PROVINCIAL</h4>
                                                            <p>64 LOTES CON SERVICIOS DE INFRAESTRUCTURA EN AGUILARES - DPTO. RIO CHICO - PROV. TUCUMAN</p>
                                                            <div className="mt-2 flex items-center">
                                                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
                                                                </div>
                                                                <span className="ml-2 text-sm font-medium">INICIO AGOSTO 2025</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>

                                        <AccordionItem value="reactivacion">
                                            <AccordionTrigger className="text-left font-medium text-lg">
                                                <div className="flex items-center">
                                                    <span className="inline-block w-3 h-3 rounded-full mr-3 bg-yellow-500"></span>
                                                    <span>Reactivación de obras de vivienda e infraestructura 2025</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="p-4 text-gray-700">
                                                    <div className="flex">
                                                        {/* Columna de inversión total (vertical) */}
                                                        <div className="flex flex-col justify-start items-center w-1/6 border-r border-gray-300 pr-2">
                                                            <span className="text-gray-600 text-sm rotate-0 md:rotate-0 whitespace-nowrap">INVERSIÓN TOTAL</span>
                                                            <span className="text-3xl md:text-4xl font-bold mt-2">47.000.000</span>
                                                            <span className="text-[10px] text-gray-500 text-center">MONTOS EN MILLONES DE PESOS</span>
                                                        </div>
                                                        {/* Columna principal de datos */}
                                                        <div className="flex flex-col w-5/6 pl-2">
                                                            {/* FONAVI */}
                                                            <div className="border-b border-gray-300 mb-4 pb-2">
                                                                <div className="flex justify-between items-center mb-2">
                                                                    <div className="flex flex-col items-start w-1/6 border-r border-gray-300 pr-2">
                                                                        <span className="text-gray-600 text-sm font-medium">RECONSTRUIR</span>
                                                                    </div>
                                                                    <div className="flex flex-col w-5/6 pl-2">
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-pink-200 flex justify-center items-center mr-2">100</div>
                                                                                <span>LAS TALITAS</span>
                                                                            </div>
                                                                            <div className="text-5xl font-bold">222</div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-green-200 flex justify-center items-center mr-2">46</div>
                                                                                <span>MANANTIAL SUR</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-pink-200 flex justify-center items-center mr-2">29</div>
                                                                                <span>MANANTIAL SUR</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-pink-200 flex justify-center items-center mr-2">20</div>
                                                                                <span>MANANTIAL SUR</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-pink-200 flex justify-center items-center mr-2">25</div>
                                                                                <span>MANANTIAL SUR</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-green-200 flex justify-center items-center mr-2">2</div>
                                                                                <span>BENJAMÍN ARÁOZ</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* FONAVI - Segunda sección */}
                                                            <div className="border-b border-gray-300 mb-4 pb-2">
                                                                <div className="flex justify-between items-center mb-2">
                                                                    <div className="flex flex-col items-start w-1/6 border-r border-gray-300 pr-2 invisible">
                                                                        <span className="text-gray-600 text-sm">FONAVI</span>
                                                                    </div>
                                                                    <div className="flex flex-col w-5/6 pl-2">
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-green-200 flex justify-center items-center mr-2">80</div>
                                                                                <span>BURRUYACÚ</span>
                                                                            </div>
                                                                            <div className="text-5xl font-bold">505</div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-green-200 flex justify-center items-center mr-2">132</div>
                                                                                <span>RÍO SECO</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-green-200 flex justify-center items-center mr-2">35</div>
                                                                                <span>LA COCHA</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-green-200 flex justify-center items-center mr-2">76</div>
                                                                                <span>LOS VILLAGRA</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-green-200 flex justify-center items-center mr-2">182</div>
                                                                                <span>BELLA VISTA</span>
                                                                                <span className="ml-2 text-xs text-gray-500">PROYECTA PREB</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* FONDUA */}
                                                            <div className="border-b border-gray-300 mb-4 pb-2">
                                                                <div className="flex justify-between items-center mb-2">
                                                                    <div className="flex flex-col items-start w-1/6 border-r border-gray-300 pr-2">
                                                                        <span className="text-gray-600 text-sm font-medium">CASA PROPIA</span>
                                                                    </div>
                                                                    <div className="flex flex-col w-5/6 pl-2">
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-green-200 flex justify-center items-center mr-2">178</div>
                                                                                <span>SIMOCA</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-yellow-200 flex justify-center items-center mr-2">54</div>
                                                                                <span>GARCÍA FERNANDEZ</span>
                                                                            </div>
                                                                            <div className="text-5xl font-bold">454</div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-green-200 flex justify-center items-center mr-2">32</div>
                                                                                <span>SAN MIGUEL DE TUCUMÁN</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-yellow-200 flex justify-center items-center mr-2">31</div>
                                                                                <span>SOLDADO MALDONADO</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-yellow-200 flex justify-center items-center mr-2">135</div>
                                                                                <span>SAN MIGUEL DE TUCUMÁN</span>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex justify-between items-center mb-2">
                                                                            <div className="flex items-center">
                                                                                <div className="w-8 h-8 bg-green-200 flex justify-center items-center mr-2">24</div>
                                                                                <span>MONTEROS</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Secciones adicionales */}
                                                            <div className="border-b border-gray-300 mb-4 pb-2">
                                                                <div className="flex justify-between items-center mb-2">
                                                                    <div className="flex flex-col items-start w-1/6 invisible">
                                                                        <span className="text-gray-600 text-sm">ESPACIO</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center w-5/6 pl-2">
                                                                        <div className="flex-1">PROMAT CON FONAVI</div>
                                                                        <div className="text-5xl font-bold">383</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="border-b border-gray-300 mb-4 pb-2">
                                                                <div className="flex justify-between items-center mb-2">
                                                                    <div className="flex flex-col items-start w-1/6 invisible">
                                                                        <span className="text-gray-600 text-sm">ESPACIO</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center w-5/6 pl-2">
                                                                        <div className="flex-1">RURALES FONDOS MINISTERIO DE INTERIOR</div>
                                                                        <div className="text-5xl font-bold">142</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="border-b border-gray-300 mb-4 pb-2">
                                                                <div className="flex justify-between items-center mb-2">
                                                                    <div className="flex flex-col items-start w-1/6 invisible">
                                                                        <span className="text-gray-600 text-sm">ESPACIO</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center w-5/6 pl-2">
                                                                        <div className="flex-1">IPVDU EN EJECUCIÓN AGOSTO 2025</div>
                                                                        <div className="flex items-center">
                                                                            <span className="text-sm mr-2">SUBTOTAL</span>
                                                                            <div className="text-5xl font-bold">1706</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="border-b border-gray-300 mb-4 pb-2">
                                                                <div className="flex justify-between items-center mb-2">
                                                                    <div className="flex flex-col items-start w-1/6 invisible">
                                                                        <span className="text-gray-600 text-sm">ESPACIO</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center w-5/6 pl-2">
                                                                        <div className="flex-1">PROCREAR</div>
                                                                        <div className="text-5xl font-bold">3056</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="border-b border-gray-300 mb-4 pb-2">
                                                                <div className="flex justify-between items-center mb-2">
                                                                    <div className="flex flex-col items-start w-1/6 invisible">
                                                                        <span className="text-gray-600 text-sm">ESPACIO</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center w-5/6 pl-2">
                                                                        <div className="flex-1">TOTAL VIVIENDAS</div>
                                                                        <div className="text-5xl font-bold">4762</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="mb-4">
                                                                <div className="flex justify-between items-center mb-2">
                                                                    <div className="flex flex-col items-start w-1/6 invisible">
                                                                        <span className="text-gray-600 text-sm">ESPACIO</span>
                                                                    </div>
                                                                    <div className="flex justify-between items-center w-5/6 pl-2">
                                                                        <div className="flex-1">IPVDU</div>
                                                                        <div className="flex flex-col items-end">
                                                                            <div className="text-5xl font-bold">4970</div>
                                                                            <div className="text-xs text-gray-500">SOLUCIONES HABITACIONALES</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-gray-900 relative inline-block">
                    Enterate primero
                    <span className="absolute bottom-[-10px] left-0 w-1/2 h-1 bg-[#FFB81A] rounded-full"></span>
                </h2>
                <div className="relative w-full overflow-hidden my-14 rounded-xl shadow-lg">
                    <div className="relative" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/Ehk9g0mKZWI"
                            title="Activarán las obras en Manantial Sur | Entrevista con Hugo Cabral, interventor del IPV"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>


                <section className="mb-24">
                    <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-10 text-gray-900 relative inline-block">
                        Programas Especiales
                        <span className="absolute bottom-[-10px] left-0 w-1/2 h-1 bg-[#FFB81A] rounded-full"></span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Tarjeta PROMAT */}
                        <div className="rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] h-full flex flex-col">
                            <div className="overflow-hidden">
                                <Image
                                    className="w-full h-auto transition-transform duration-700 hover:scale-110"
                                    src="https://res.cloudinary.com/djlsm2fwz/image/upload/f_webp/IPV/statics%20pictures/qtlgv2mx4osmtyp2vvhi.jpg"
                                    alt="Imagen PROMAT IPV Tucumán Instituto Provincial de Vivienda"
                                    width={800}
                                    height={450}
                                />
                            </div>
                            <div className="bg-[#ffce63] pt-5 pb-11 pr-14 relative flex-grow">
                                <h3 className="font-bold text-xl ml-6 md:ml-52 transition-colors duration-300 hover:text-white">PROMAT</h3>
                                <p className="ml-6 md:ml-52 mt-2 text-gray-800">
                                    El programa PROMAT (Provisión de Materiales) es una iniciativa impulsada por el IPV, orientada a apoyar la autoconstrucción asistida y el mejoramiento de viviendas. Su objetivo principal es facilitar a las familias de escasos recursos, que por diversas razones no pueden acceder a otros planes habitacionales, los insumos y el acompañamiento necesario para construir o mejorar sus hogares.
                                </p>
                                <div className="absolute top-0 left-0 bottom-0 w-4 md:w-40 bg-[#FFB81A]"></div>
                            </div>
                        </div>

                        {/* Tarjeta PROMEBA */}
                        <div className="rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] h-full flex flex-col">
                            <div className="overflow-hidden">
                                <Image
                                    className="w-full h-auto transition-transform duration-700 hover:scale-110"
                                    src="https://www.argentina.gob.ar/sites/default/files/2023/07/promeba_destacado.jpg"
                                    alt="Imagen PROMEBA IPV Tucumán Instituto Provincial de Vivienda"
                                    width={800}
                                    height={450}
                                />
                            </div>
                            <div className="bg-[#FFB81A] pt-5 pb-11 pr-14 relative flex-grow">
                                <h3 className="font-bold text-xl ml-6 md:ml-52 transition-colors duration-300 hover:text-white">PROMEBA</h3>
                                <p className="ml-6 md:ml-52 mt-2 text-gray-800">
                                    El programa PROMEBA (Programa de Mejoramiento de Barrios) es una iniciativa de vivienda social diseñada para transformar las condiciones urbanas y mejorar el hábitat en barrios vulnerables, asentamientos informales y villas miseria. En el contexto del Instituto Provincial de Vivienda de Tucumán, este programa busca intervenir de forma integral en los barrios
                                </p>
                                <div className="absolute top-0 left-0 bottom-0 w-4 md:w-40 bg-[#ffce63]"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
