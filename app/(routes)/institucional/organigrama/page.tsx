"use client"
import Layout from "../components/layout";
import { CarouselInst } from "../mision/components/carouselInst";
import React, { useState } from 'react';
import AreaSocialOrganigramaTailwind from "./components/AreaSocialOrganigramaTailwind";
import AreaEconomicoFinancieraOrganigramaTailwind from "./components/AreaEconomicoFinancieraOrganigramaTailwind";
import AreaLegalOrganigramaTailwind from "./components/AreaLegalOrganigramaTailwind";
import AreaRecuperoRegularizacionDominialOrganigramaTailwind from "./components/AreaRecuperoRegularizacionDominialOrganigramaTailwind";
import AreaPlaneamientoOrganigramaTailwind from "./components/AreaPlaneamientoOrganigramaTailwind";
import AreaTecnicaOrganigramaTailwind from "./components/AreaTecnicaOrganigramaTailwind";
import SecretariaGeneralOrganigramaTailwind from "./components/SecretariaGeneralOrganigramaTailwind";
import { Info } from "lucide-react";

// Definición de tipos para el organigrama
type Seccion = {
  nombre: string;
  titular?: string;
};

type Departamento = {
  nombre: string;
  titular?: string;
  secciones?: Seccion[];
};

type Subdireccion = {
  nombre: string;
  titular?: string;
};

type Direccion = {
  nombre: string;
  titular?: string;
  subdirecciones?: Subdireccion[];
  departamentos?: Departamento[];
  secciones?: Seccion[];
};

type Area = {
  nombre: string;
  titular?: string;
  subdirecciones?: Subdireccion[];
  direcciones?: Direccion[];
  departamentos?: Departamento[];
  secciones?: Seccion[];
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
  coordinadorAreas: {
    nombre: string;
    titular?: string;
  };
  areas: Area[];
};

// Componente Modal para mostrar el organigrama detallado
const Modal = ({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl max-h-[95vh] overflow-auto border-2 border-black">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

// Componente para las tarjetas con efecto flip
const FlipCard = ({ frontContent, backContent = "Información no disponible", color = "#FFB81A" }: { frontContent: string; backContent?: string; color?: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Verificar si esta tarjeta tiene un organigrama detallado disponible
  const hasDetailedOrganigram = frontContent === "ÁREA SOCIAL" || frontContent === "ÁREA ECONÓMICO FINANCIERA" || frontContent === "ÁREA LEGAL" || frontContent === "ÁREA RECUPERO Y REGULARIZACIÓN DOMINIAL" || frontContent === "ÁREA PLANEAMIENTO" || frontContent === "ÁREA TÉCNICA" || frontContent === "SECRETARÍA GENERAL";

  // Efecto para manejar la detección del cliente y tamaño de pantalla
  React.useEffect(() => {
    setIsClient(true);
    const checkIfDesktop = () => setIsDesktop(window.innerWidth >= 768);

    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);

    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  const handleClick = () => {
    // Si tiene organigrama detallado y estamos en desktop, abrir modal
    if (hasDetailedOrganigram && isDesktop) {
      setIsModalOpen(true);
    } else {
      // De lo contrario, voltear la tarjeta (comportamiento original)
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <>
      <div
        className={`flip-card w-full h-full ${hasDetailedOrganigram ? 'cursor-pointer' : ''}`}
        onClick={handleClick}
        onMouseEnter={() => {
          // Solo activar hover en dispositivos desktop
          if (isDesktop) setIsFlipped(true);
        }}
        onMouseLeave={() => {
          // Solo desactivar hover en dispositivos desktop
          if (isDesktop) setIsFlipped(false);
        }}
      >
        <div className={`flip-card-inner w-full h-full transition-transform duration-500 transform-gpu ${isFlipped ? 'rotate-y-180' : ''}`}>
          <div className="flip-card-front w-full h-full text-gray-900 font-bold p-4 flex items-center justify-center rounded-lg shadow-md absolute backface-hidden"
            style={{ backgroundColor: color }}>
            <div className="text-center">
              {frontContent}
              {isClient && hasDetailedOrganigram && isDesktop && (
                <div className="mt-1 text-xs text-gray-700">(Clic para ver detalle)</div>
              )}
            </div>
          </div>
          <div className="flip-card-back w-full h-full bg-white text-gray-900 p-4 flex items-center justify-center rounded-lg shadow-md absolute backface-hidden rotate-y-180">
            <div className="text-center">
              {backContent}
              {isClient && hasDetailedOrganigram && isDesktop && (
                <div className="mt-2 text-xs text-blue-600 underline cursor-pointer" onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                  setIsFlipped(false);
                }}>Ver organigrama detallado</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal para mostrar el organigrama detallado */}
      {isClient && hasDetailedOrganigram && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={`Organigrama detallado: ${frontContent}`}
        >
          {frontContent === "ÁREA SOCIAL" && <AreaSocialOrganigramaTailwind />}
          {frontContent === "ÁREA ECONÓMICO FINANCIERA" && <AreaEconomicoFinancieraOrganigramaTailwind />}
          {frontContent === "ÁREA LEGAL" && <AreaLegalOrganigramaTailwind />}
          {frontContent === "ÁREA RECUPERO Y REGULARIZACIÓN DOMINIAL" && <AreaRecuperoRegularizacionDominialOrganigramaTailwind />}
          {frontContent === "ÁREA PLANEAMIENTO" && <AreaPlaneamientoOrganigramaTailwind />}
          {frontContent === "ÁREA TÉCNICA" && <AreaTecnicaOrganigramaTailwind />}
          {frontContent === "SECRETARÍA GENERAL" && <SecretariaGeneralOrganigramaTailwind />}
        </Modal>
      )}
    </>
  );
};

export default function Page() {
  // Datos del organigrama actualizado según el PDF
  const organigramaData: OrganigramaData = {
    intervencion: {
      nombre: "INTERVENCIÓN",
      titular: "Arq. Hugo Cabral"
    },
    subintervencion: {
      nombre: "SUB INTERVENCIÓN",
      titular: "Dr. Eloy del Pino"
    },
    coordinadorAreas: {
      nombre: "COORDINADOR DE ÁREAS",
      titular: "Vacante"
    },
    areas: [
      {
        nombre: "ÁREA SOCIAL",
        titular: "Vacante",

      },
      {
        nombre: "ÁREA ECONÓMICO FINANCIERA",
        titular: "C.P.N. Julieta Juarez",
      },

      {
        nombre: "ÁREA LEGAL",
        titular: "Dr. Guillermo Curia",
      },
      {
        nombre: "ÁREA RECUPERO Y REGULARIZACIÓN DOMINIAL",
        titular: "Abog. Lic. Trab. Social Graciela Ortiz",

      },
      {
        nombre: "ÁREA PLANEAMIENTO",
        titular: "Arq. Augusto Paz",

      },
      {
        nombre: "ÁREA TÉCNICA",

      },
      {
        nombre: "SECRETARÍA GENERAL",
        titular: "Sr. Miguel Santucho",

      },
      {
        nombre: "CÓMPUTOS",
        titular: "Sr. Federico Conrad",
      },
      {
        nombre: "C.O.A.",
        titular: "Sra. Maria Elena Aparicio",
      },
      {
        nombre: "Dpto. Prensa y Difusion",
        titular: "Lic. Marina Albornoz",
      },
      {
        nombre: "Dpto. Relaciones Institucionales",
        titular: "Vacante",
      },
      {
        nombre: "U.G.R.L.",
        titular: "Sr. Miguel Amenta",
      },
      {
        nombre: "Dpto. Control de Gestion",
        titular: "Sr. Juan De Cristobal",
      },
      {
        nombre: "Secretaria Privada Intervención y Sub-Intervención",
      },

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
              <div className="color-map-container absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md z-10">
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
              <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm p-4 md:p-6 max-w-xs md:max-w-sm rounded-2xl shadow-lg border border-gray-200 z-10">
                <div className="flex items-center mb-3">
                  <Info className="w-5 h-5 text-blue-500 mr-2" />
                  <h4 className="text-sm md:text-base font-semibold text-gray-800">Cómo Funciona</h4>
                </div>
                <ul className="space-y-2 text-xs md:text-sm text-gray-700 leading-snug">
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <span>Haga clic en las tarjetas para ver los titulares en dispositivos móviles.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-1">•</span>
                    <span>Pase el cursor sobre las tarjetas para ver los titulares en escritorio.</span>
                  </li>
                </ul>
              </div>

              {/* Título del Organigrama */}
              <div className="text-center mb-8 mt-4">

                <p className="text-sm text-gray-500 mt-2">Resolución N°0373 </p>
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

              <div className="conector-vertical mx-auto w-0.5 h-8 border-l-2 border-dashed border-gray-400"></div>

              {/* Nivel 2 - Coordinador de Áreas */}
              <div className="nivel-2 flex justify-center mb-4">
                <div className="w-48 h-16">
                  <FlipCard
                    frontContent={organigramaData.coordinadorAreas.nombre}
                    backContent={organigramaData.coordinadorAreas.titular}
                  />
                </div>
              </div>

              {/* Línea conectora horizontal punteada */}
              <div className="conector-horizontal mx-auto w-[90%] h-0.5 border-t-2 border-dashed border-gray-400 mb-4"></div>

              {/* Nivel 3 - Áreas */}
              <div className="nivel-areas grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {organigramaData.areas.map((area, index) => (
                  <div key={`area-${index}`} className="area-container flex flex-col items-center">
                    <div className="w-full h-16 mb-2">
                      <FlipCard
                        frontContent={area.nombre}
                        backContent={area.titular}
                      />
                    </div>

                    {/* Subdirecciones */}
                    {area.subdirecciones && area.subdirecciones.map((subdir, subIndex) => (
                      <div key={`subdir-${index}-${subIndex}`} className="w-full">
                        {/* Línea conectora vertical punteada */}
                        <div className="conector-vertical w-0.5 h-6 border-l-2 border-dashed border-gray-400 mx-auto"></div>

                        <div className="w-full h-14 mb-2">
                          <FlipCard
                            frontContent={subdir.nombre}
                            backContent={subdir.titular}
                            color="#E0E0E0"
                          />
                        </div>
                      </div>
                    ))}

                    {/* Direcciones */}
                    {area.direcciones && area.direcciones.map((direccion, dirIndex) => (
                      <div key={`direccion-${index}-${dirIndex}`} className="w-full">
                        {/* Línea conectora vertical punteada */}
                        <div className="conector-vertical w-0.5 h-6 border-l-2 border-dashed border-gray-400 mx-auto"></div>

                        <div className="w-full h-14 mb-2">
                          <FlipCard
                            frontContent={direccion.nombre}
                            backContent={direccion.titular}
                            color="#D1C4E9"
                          />
                        </div>

                        {/* Subdirecciones de la dirección */}
                        {direccion.subdirecciones && direccion.subdirecciones.map((subdir, subdirIndex) => (
                          <div key={`subdir-dir-${index}-${dirIndex}-${subdirIndex}`} className="w-full">
                            {/* Línea conectora vertical punteada */}
                            <div className="conector-vertical w-0.5 h-4 border-l-2 border-dashed border-gray-400 mx-auto"></div>

                            <div className="w-full h-12 mb-2 ml-4">
                              <FlipCard
                                frontContent={subdir.nombre}
                                backContent={subdir.titular}
                                color="#E0E0E0"
                              />
                            </div>
                          </div>
                        ))}

                        {/* Departamentos de la dirección */}
                        {direccion.departamentos && direccion.departamentos.map((departamento, depDirIndex) => (
                          <div key={`departamento-dir-${index}-${dirIndex}-${depDirIndex}`} className="departamento-item ml-4">
                            {/* Línea conectora vertical punteada */}
                            <div className="conector-vertical w-0.5 h-4 border-l-2 border-dashed border-gray-400 mx-auto"></div>

                            <div className="w-full h-12 mb-2">
                              <FlipCard
                                frontContent={departamento.nombre}
                                backContent={departamento.titular}
                                color="#F5F5F5"
                              />
                            </div>

                            {/* Secciones del departamento de la dirección */}
                            {departamento.secciones && (
                              <div className="secciones-container ml-4">
                                {/* Línea conectora vertical punteada */}
                                <div className="conector-vertical w-0.5 h-4 border-l-2 border-dashed border-gray-400 mx-auto"></div>

                                <div className="secciones-inner grid grid-cols-1 gap-1">
                                  {departamento.secciones.map((seccion, secDirIndex) => (
                                    <div key={`seccion-dir-${index}-${dirIndex}-${depDirIndex}-${secDirIndex}`} className="w-full h-10">
                                      <FlipCard
                                        frontContent={seccion.nombre}
                                        backContent={seccion.titular}
                                        color="#E0F7FA"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}

                        {/* Secciones directas de la dirección */}
                        {direccion.secciones && (
                          <div className="secciones-container ml-4">
                            {/* Línea conectora vertical punteada */}
                            <div className="conector-vertical w-0.5 h-4 border-l-2 border-dashed border-gray-400 mx-auto"></div>

                            <div className="secciones-inner grid grid-cols-1 gap-1">
                              {direccion.secciones.map((seccion, secDirIndex) => (
                                <div key={`seccion-dir-direct-${index}-${dirIndex}-${secDirIndex}`} className="w-full h-10">
                                  <FlipCard
                                    frontContent={seccion.nombre}
                                    backContent={seccion.titular}
                                    color="#E0F7FA"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Departamentos */}
                    <div className="w-full">
                      {/* Línea conectora vertical punteada */}
                      {(area.subdirecciones || area.direcciones || area.departamentos || area.secciones) && (
                        <div className="conector-vertical w-0.5 h-6 border-l-2 border-dashed border-gray-400 mx-auto"></div>
                      )}

                      <div className="departamentos-container w-full grid grid-cols-1 gap-2">
                        {area.departamentos && area.departamentos.map((departamento, depIndex) => (
                          <div key={`departamento-${index}-${depIndex}`} className="departamento-item">
                            <div className="w-full h-12 mb-2">
                              <FlipCard
                                frontContent={departamento.nombre}
                                backContent={departamento.titular}
                                color="#F5F5F5"
                              />
                            </div>

                            {/* Secciones */}
                            {departamento.secciones && (
                              <div className="secciones-container ml-4">
                                {/* Línea conectora vertical punteada */}
                                <div className="conector-vertical w-0.5 h-4 border-l-2 border-dashed border-gray-400 mx-auto"></div>

                                <div className="secciones-inner grid grid-cols-1 gap-1">
                                  {departamento.secciones.map((seccion, secIndex) => (
                                    <div key={`seccion-${index}-${depIndex}-${secIndex}`} className="w-full h-10">
                                      <FlipCard
                                        frontContent={seccion.nombre}
                                        backContent={seccion.titular}
                                        color="#E0F7FA"
                                      />
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}

                        {/* Secciones directas del área (sin departamento) */}
                        {area.secciones && (
                          <div className="secciones-container">
                            <div className="secciones-inner grid grid-cols-1 gap-1">
                              {area.secciones.map((seccion, secIndex) => (
                                <div key={`seccion-area-direct-${index}-${secIndex}`} className="w-full h-10">
                                  <FlipCard
                                    frontContent={seccion.nombre}
                                    backContent={seccion.titular}
                                    color="#E0F7FA"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-8">

              <p className="text-xs text-gray-400">Actualizado el 06/06/2022 (Expte. 576/440-2003)</p>
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
        
        .nivel-areas {
          width: 100%;
          gap: 10px;
        }
        
        .area-container {
          margin-bottom: 1rem;
        }
        
        .secciones-container {
          position: relative;
        }
        
        .secciones-container::before {
          content: "";
          position: absolute;
          top: -8px;
          left: 0;
          width: 15px;
          height: 2px;
          background: #999;
        }
        
        /* Ajustes para que se parezca a la imagen de referencia */
        .organigrama-container {
          background-image: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/images/fondo-organigrama.jpg');
          background-size: cover;
          background-position: center;
          padding: 2rem;
          border-radius: 0.5rem;
        }

        /* Estilos para el modal y organigrama detallado */
        .organigrama-detallado {
          max-width: 100%;
          overflow-x: auto;
          padding: 1.5rem;
          background-color: #f9f9f9;
          border-radius: 0.5rem;
        }
        
        .area-social-organigrama {
          width: 100%;
          height: auto;
          min-width: 1000px;
          min-height: 700px;
        }
        
        /* Animación para el modal */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .fixed {
          animation: fadeIn 0.3s ease-in-out;
        }

        @media (max-width: 767px) {
          .color-map-container {
            position: relative;
            top: auto;
            left: auto;
            margin-bottom: 1rem;
          }
          
          .secciones-container {
            margin-left: 10px;
          }
          
          .organigrama-detallado {
            padding: 0.5rem;
          }
          
          .area-social-organigrama {
            min-width: 100%;
            min-height: 400px;
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </>
  );
}

// Definición de colores para el mapa de referencias
const colorMap = [
  { nivel: "Intervención/Subintervención", color: "#FFB81A" },
  { nivel: "Coordinación", color: "#FFB81A" },
  { nivel: "Áreas", color: "#FFDC4A" },
  { nivel: "Direcciones", color: "#D1C4E9" },
  { nivel: "Subdirecciones", color: "#E0E0E0" },
  { nivel: "Departamentos", color: "#F5F5F5" },
  { nivel: "Secciones", color: "#E0F7FA" }
];