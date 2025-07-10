import React from 'react';
import { OrganigramaItem, areaTecnicaItems } from './AreaTecnicaData';

declare global {
  interface Window {
    registerTecnicaBoxRef?: (id: string, ref: HTMLDivElement | null) => void;
  }
}

// Componente para un elemento del organigrama (caja) con mejoras visuales
const OrganigramaBox: React.FC<{
  item: OrganigramaItem;
}> = ({ item }) => {
  const boxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (boxRef.current && item.id && window.registerTecnicaBoxRef) {
      window.registerTecnicaBoxRef(item.id, boxRef.current);
    }
  }, [item.id]);

  // Determinar la clase CSS según el tipo de caja
  const getBoxClass = () => {
    const baseClass = 'border-2 border-gray-700 rounded-lg p-3 text-center flex flex-col justify-center items-center h-full shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg';

    switch (item.boxClass) {
      case 'area-box':
        return `${baseClass} bg-gradient-to-br from-yellow-400 to-yellow-500`;
      case 'subdir-box':
        return `${baseClass} bg-gradient-to-br from-gray-200 to-gray-300`;
      case 'dept-box':
        return `${baseClass} bg-gradient-to-br from-white to-gray-100`;
      case 'dept-box-special':
        return `${baseClass} bg-gradient-to-br from-white to-gray-100`;
      case 'section-box':
        return `${baseClass} bg-gradient-to-br from-cyan-50 to-cyan-100`;
      case 'section-box-special':
        return `${baseClass} bg-gradient-to-br from-cyan-50 to-cyan-100`;
      default:
        return `${baseClass} bg-white`;
    }
  };

  return (
    <div
      ref={boxRef}
      className={getBoxClass()}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <div className="font-bold text-gray-800">{item.title}</div>
      {item.name && <div className="text-sm mt-1 text-gray-600">{item.name}</div>}
    </div>
  );
};

// Componente principal del organigrama con mejoras responsive
const AreaTecnicaOrganigramaTailwind: React.FC = () => {
  const getItemsByIds = (ids: string[]) => {
    return areaTecnicaItems.filter(item => ids.includes(item.id)).map(item => ({
      ...item,
      position: {
        ...item.position,
        x: 0,
        y: 0
      }
    }));
  };

  const headerItems = getItemsByIds(['area', 'subdir']);
  const departmentItems = getItemsByIds(['dept1', 'dept2', 'dept3', 'dept4']);

  const deptSections = {
    dept1: getItemsByIds(['sec1', 'sec2', 'sec3']),
    dept3: getItemsByIds(['sec4']),
    dept2: getItemsByIds([]),
    dept4: getItemsByIds([])
  };


  // Identificar las secciones específicas para el diseño especial
  const viviendaSection = deptSections.dept1.find(item => item.id === 'sec1');
  const costosSection = deptSections.dept1.find(item => item.id === 'sec2');
  const infraestructuraSection = deptSections.dept1.find(item => item.id === 'sec3');
  const coordObrasSection = deptSections.dept1.find(item => item.id === 'sec4');

  return (
    <div className="organigrama-container relative w-full p-4 max-w-6xl mx-auto">


      {/* Área y Subdirección */}
      <div className="header-section flex flex-col items-center space-y-4 md:space-y-6 mb-6 md:mb-10">
        {headerItems.map(item => (
          <div key={item.id} className="w-full max-w-lg h-20 md:h-24">
            <OrganigramaBox item={item} />
          </div>
        ))}
      </div>

      {/* Departamentos - Layout responsivo */}
      <div className="departments-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-10">
        {departmentItems.map(item => (
          <div key={item.id} className="h-24">
            <OrganigramaBox item={item} />
          </div>
        ))}
      </div>

      {/* Secciones agrupadas por departamento - Layout responsivo */}
      <div className="sections-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Departamento 1 - Diseño especial para secciones */}
        <div className="dept-section md:col-span-2">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Columna izquierda con secciones apiladas */}
            <div className="md:w-60 grid grid-cols-1 gap-4">
              {viviendaSection && (
                <div className="h-24">
                  <OrganigramaBox item={viviendaSection} />
                </div>
              )}

              {costosSection && (
                <div className="h-24">
                  <OrganigramaBox item={costosSection} />
                </div>
              )}

              {infraestructuraSection && (
                <div className="h-24">
                  <OrganigramaBox item={infraestructuraSection} />
                </div>
              )}
            </div>

            {/* Columna derecha con Secc. Coord. de Obras */}
            <div className="flex flex-col justify-center">
              {coordObrasSection && (
                <div className="h-48"> {/* Altura mayor para equilibrar visualmente */}
                  <OrganigramaBox item={coordObrasSection} />
                </div>
              )}
            </div>
          </div>
        </div>


        {/* Departamento 3 */}
        <div className="dept-section">
          {deptSections.dept3.length > 0 ? (
            <div className="flex justify-center">
              {deptSections.dept3.map(item => (
                <div key={item.id} className="w-full max-w-xs h-20">
                  <OrganigramaBox item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-gray-500 italic">
              No hay secciones asignadas actualmente
            </div>
          )}
        </div>


      </div>

    </div>
  );
};

export default AreaTecnicaOrganigramaTailwind;