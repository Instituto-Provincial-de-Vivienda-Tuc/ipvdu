"use client"
import Layout from "../components/layout";
import { CarouselInst } from "../mision/components/carouselInst";
import { useState } from 'react';

// Definición de tipos para el organigrama
type Departamento = {
  nombre: string;
  titular?: string;
};

type Subdireccion = {
  nombre: string;
  titular?: string;
};

type Area = {
  nombre: string;
  titular?: string;
  subdireccion?: Subdireccion;
  departamentos?: Departamento[];
};

type OrganigramaData = {
  intervencion: {
    nombre: string;
    titular?: string;
  };
  subintervencion: {
    nombre: string;
    titular?: string;
  };
  areas: Area[];
};

// Componente para las tarjetas con efecto flip
const FlipCard = ({ frontContent, backContent = "Información no disponible", color = "#FFB81A" }: { frontContent: string; backContent?: string; color?: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-card w-full h-full"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => {
        // Solo activar hover en dispositivos desktop
        if (window.innerWidth >= 768) setIsFlipped(true);
      }}
      onMouseLeave={() => {
        // Solo desactivar hover en dispositivos desktop
        if (window.innerWidth >= 768) setIsFlipped(false);
      }}
    >
      <div className={`flip-card-inner w-full h-full transition-transform duration-500 transform-gpu ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="flip-card-front w-full h-full text-gray-900 font-bold p-4 flex items-center justify-center rounded-lg shadow-md absolute backface-hidden"
          style={{ backgroundColor: color }}>
          <div className="text-center">{frontContent}</div>
        </div>
        <div className="flip-card-back w-full h-full bg-white text-gray-900 p-4 flex items-center justify-center rounded-lg shadow-md absolute backface-hidden rotate-y-180">
          <div className="text-center">{backContent}</div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  // Datos del organigrama actualizado con la nueva estructura
  const organigramaData: OrganigramaData = {
    intervencion: {
      nombre: "INTERVENCIÓN",
      titular: "Interventor"
    },
    subintervencion: {
      nombre: "SUB INTERVENCIÓN",
      titular: "Sub Interventor"
    },
    areas: [
      {
        nombre: "ÁREA SOCIAL",
        titular: "Director/a Social",
        subdireccion: { nombre: "SUB DIRECCIÓN", titular: "Subdirector/a" },
        departamentos: [
          { nombre: "ADJUDICACIONES" },
          { nombre: "PROMOCIÓN" },
          { nombre: "PROGRAMAS ESPECIALES" },
          { nombre: "INVESTIGACIÓN SOCIAL" }
        ]
      },
      {
        nombre: "ÁREA ECONÓMICO FINANCIERA",
        titular: "Director/a Económico Financiero",
        subdireccion: { nombre: "SUB DIRECCIÓN", titular: "Subdirector/a" },
        departamentos: [
          { nombre: "CONTADURÍA" },
          { nombre: "PLANIFICACIÓN ECONÓMICO FINANCIERA" },
          { nombre: "RECURSOS FINANCIEROS" }
        ]
      },
      {
        nombre: "ÁREA LEGAL",
        titular: "Director/a Legal",
        subdireccion: { nombre: "SUB DIRECCIÓN", titular: "Subdirector/a" },
        departamentos: [
          { nombre: "ASESORAMIENTO" },
          { nombre: "JUDICIAL" }
        ]
      },
      {
        nombre: "ÁREA RECUPERO Y REGULARIZACIÓN DOMINAL",
        titular: "Director/a de Recupero",
        subdireccion: { nombre: "SUB DIRECCIÓN", titular: "Subdirector/a" },
        departamentos: [
          { nombre: "REGULARIZACIÓN DOMINAL" },
          { nombre: "RECURSOS FINANCIEROS" }
        ]
      },
      {
        nombre: "ÁREA PLANEAMIENTO",
        titular: "Director/a de Planeamiento",
        subdireccion: { nombre: "SUB DIRECCIÓN", titular: "Subdirector/a" },
        departamentos: [
          { nombre: "DESARROLLO URBANO" },
          { nombre: "ESTUDIOS Y PROYECTOS" },
          { nombre: "CATASTRO" },
          { nombre: "INVESTIGACIÓN TECNOLÓGICA" }
        ]
      },
      {
        nombre: "ÁREA TÉCNICA",
        titular: "Director/a Técnico",
        subdireccion: { nombre: "SUB DIRECCIÓN", titular: "Subdirector/a" },
        departamentos: [
          { nombre: "CONSTRUCCIONES" },
          { nombre: "OBRAS POR ADMINISTRACIÓN" },
          { nombre: "CÓMPUTOS" }
        ]
      },
      {
        nombre: "SECRETARÍA",
        titular: "Secretario/a",
        subdireccion: { nombre: "SUB DIRECCIÓN", titular: "Subdirector/a" },
        departamentos: [
          { nombre: "RECURSOS HUMANOS" },
          { nombre: "DESPACHO" },
          { nombre: "RELACIONES INSTITUCIONALES" },
          { nombre: "CONTROL DE GESTIÓN" }
        ]
      }
    ]
  };

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
            <div className="organigrama-container relative">
              {/* Mapa de colores */}
              <div className="color-map-container absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md z-10">
                <h4 className="text-sm font-bold mb-2">Referencias:</h4>
                <ul className="space-y-2">
                  {colorMap.map((item, index) => (
                    <li key={`color-${index}`} className="flex items-center text-xs">
                      <div
                        className="w-4 h-4 mr-2 rounded-sm"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span>{item.nivel}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Título del Organigrama */}
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-[#FFB81A]">Organigrama</h3>
              </div>

              {/* Nivel 1 - Intervención */}
              <div className="nivel-1 flex justify-center mb-4">
                <div className="w-48 h-16">
                  <FlipCard
                    frontContent={organigramaData.intervencion.nombre}
                    backContent={organigramaData.intervencion.titular}
                  />
                </div>
              </div>

              {/* Resto del organigrama */}
              <div className="conector-vertical mx-auto w-0.5 h-8 border-l-2 border-dashed border-gray-400"></div>

              {/* Nivel 1.5 - Sub Intervención */}
              <div className="nivel-1-5 flex justify-center mb-4">
                <div className="w-48 h-16">
                  <FlipCard
                    frontContent={organigramaData.subintervencion.nombre}
                    backContent={organigramaData.subintervencion.titular}
                  />
                </div>
              </div>

              {/* Línea conectora horizontal punteada */}
              <div className="conector-horizontal mx-auto w-[90%] h-0.5 border-t-2 border-dashed border-gray-400 mb-4"></div>

              {/* Nivel 2 - Áreas */}
              <div className="nivel-2 flex flex-wrap justify-center gap-2 mb-4">
                {organigramaData.areas.map((area, index) => (
                  <div key={`area-${index}`} className="area-container flex flex-col items-center">
                    <div className="w-40 h-16 mb-2">
                      <FlipCard
                        frontContent={area.nombre}
                        backContent={area.titular}
                      />
                    </div>

                    {/* Línea conectora vertical punteada */}
                    <div className="conector-vertical w-0.5 h-6 border-l-2 border-dashed border-gray-400"></div>

                    {/* Nivel 3 - Subdirección */}
                    {area.subdireccion && (
                      <div className="w-36 h-14 mb-2">
                        <FlipCard
                          frontContent={area.subdireccion.nombre}
                          backContent={area.subdireccion.titular}
                          color="#E0E0E0"
                        />
                      </div>
                    )}

                    {/* Línea conectora vertical punteada */}
                    <div className="conector-vertical w-0.5 h-6 border-l-2 border-dashed border-gray-400"></div>

                    {/* Nivel 4 - Departamentos */}
                    <div className="departamentos-container flex flex-col items-center gap-2">
                      {area.departamentos && area.departamentos.map((departamento, depIndex) => (
                        <div key={`departamento-${index}-${depIndex}`} className="w-32 h-12">
                          <FlipCard
                            frontContent={departamento.nombre}
                            backContent={departamento.titular}
                            color="#F5F5F5"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500 mb-4">Haga clic en las tarjetas para ver los titulares (en dispositivos móviles) o pase el cursor sobre ellas (en escritorio)</p>
            </div>
          </div>
        </div>
      </div>
      <CarouselInst />

      {/* Estilos adicionales para el organigrama */}
      <style jsx global>{`
        .flip-card {
          perspective: 1000px;
          cursor: pointer;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.5s;
          transform-style: preserve-3d;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        .nivel-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          width: 100%;
          gap: 10px;
        }
        
        @media (min-width: 768px) {
          .nivel-2 {
            grid-template-columns: repeat(7, 1fr);
          }
        }
        
        @media (max-width: 767px) {
          .nivel-2 {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .area-container {
            margin-bottom: 2rem;
          }
        }
        
        /* Ajustes para que se parezca a la imagen de referencia */
        .organigrama-container {
          background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/images/fondo-organigrama.jpg');
          background-size: cover;
          background-position: center;
          padding: 2rem;
          border-radius: 0.5rem;
        }
      `}</style>
    </>
  );
}

// Definición de colores para el mapa de referencias
const colorMap = [
  { nivel: "Presidencia", color: "#FFB81A" },
  { nivel: "Áreas y Secretarías", color: "#FFB81A" },
  { nivel: "Subdirecciones", color: "#E0E0E0" },
  { nivel: "Departamentos", color: "#F5F5F5" }
];
