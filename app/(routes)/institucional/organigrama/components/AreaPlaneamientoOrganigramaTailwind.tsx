import React from 'react';
import { OrganigramaItem, areaPlaneamientoItems } from './AreaPlaneamientoData';

declare global {
  interface Window {
    registerPlaneamientoBoxRef?: (id: string, ref: HTMLDivElement | null) => void;
  }
}

// Componente para un elemento del organigrama (caja)
const OrganigramaBox: React.FC<{
  item: OrganigramaItem;
}> = ({ item }) => {
  const boxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (boxRef.current && item.id && window.registerPlaneamientoBoxRef) {
      window.registerPlaneamientoBoxRef(item.id, boxRef.current);
    }
  }, [item.id]);

  const getBoxClass = () => {
    const baseClass = 'border-2 border-gray-700 rounded-lg p-3 text-center flex flex-col justify-center items-center h-full shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg';

    // Aplicar colores según el tipo de caja
    if (item.boxClass === 'area-box') {
      return `${baseClass} bg-gradient-to-br from-yellow-400 to-yellow-500`;
    } else if (item.boxClass === 'subdir-box') {
      return `${baseClass} bg-gradient-to-br from-gray-200 to-gray-300`;
    } else if (item.boxClass === 'dept-box') {
      return `${baseClass} bg-gradient-to-br from-white to-gray-100`;
    } else if (item.boxClass === 'section-box') {
      return `${baseClass} bg-gradient-to-br from-cyan-50 to-cyan-100`;
    }

    return `${baseClass} bg-white`;
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

// Componente principal del organigrama
const AreaPlaneamientoOrganigramaTailwind: React.FC = () => {
  const getItemsByIds = (ids: string[]) => {
    return areaPlaneamientoItems.filter(item => ids.includes(item.id)).map(item => ({
      ...item,
      position: {
        ...item.position,
        x: 0,
        y: 0
      }
    }));
  };

  const headerItems = getItemsByIds(['area', 'subdir']);
  const departmentItems = getItemsByIds(['dept1', 'dept2']);
  const deptSections = {
    dept1: getItemsByIds(['sec1', 'sec2']),
    dept2: getItemsByIds(['sec3', 'sec4'])
  };

  return (
    <div className="organigrama-container relative w-full p-4 max-w-5xl mx-auto">


      {/* Área y Subdirección */}
      <div className="header-section flex flex-col items-center space-y-4 md:space-y-6 mb-6 md:mb-10">
        {headerItems.map(item => (
          <div key={item.id} className="w-full max-w-lg h-20 md:h-24">
            <OrganigramaBox item={item} />
          </div>
        ))}
      </div>

      {/* Departamentos - Layout responsivo */}
      <div className="departments-section flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-6 md:mb-10">
        {departmentItems.map(item => (
          <div key={item.id} className="w-full md:w-1/2 max-w-md h-24">
            <OrganigramaBox item={item} />
          </div>
        ))}
      </div>

      {/* Secciones agrupadas por departamento - Layout responsivo */}
      <div className="sections-container flex flex-col md:flex-row justify-center gap-8 md:gap-10">
        <div className="dept1-sections w-full md:w-1/2">

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {deptSections.dept1.map(item => (
              <div key={item.id} className="w-full sm:w-1/2 h-20">
                <OrganigramaBox item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="dept2-sections w-full md:w-1/2 mt-6 md:mt-0">

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {deptSections.dept2.map(item => (
              <div key={item.id} className="w-full sm:w-1/2 h-20">
                <OrganigramaBox item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default AreaPlaneamientoOrganigramaTailwind;