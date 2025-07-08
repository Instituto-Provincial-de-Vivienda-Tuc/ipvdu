import React from 'react';
import { OrganigramaItem, areaRecuperoRegularizacionDominialItems } from './AreaRecuperoRegularizacionDominialData';

// Extender el objeto window para incluir nuestra función de registro
declare global {
  interface Window {
    registerRecuperoRegularizacionDominialBoxRef?: (id: string, ref: HTMLDivElement | null) => void;
  }
}

// Componente para un elemento del organigrama (caja)
const OrganigramaBox: React.FC<{
  item: OrganigramaItem;
}> = ({ item }) => {
  // Referencia para el elemento DOM
  const boxRef = React.useRef<HTMLDivElement>(null);

  // Registrar la referencia para las conexiones
  React.useEffect(() => {
    if (boxRef.current && item.id && window.registerRecuperoRegularizacionDominialBoxRef) {
      window.registerRecuperoRegularizacionDominialBoxRef(item.id, boxRef.current);
    }
  }, [item.id]);

  // Determinar la clase CSS basada en el tipo de elemento
  const getBoxClass = () => {
    const baseClass = 'border-2 border-black rounded-md p-2 text-center flex flex-col justify-center items-center h-full';

    // Aplicar colores según el tipo de caja
    if (item.boxClass === 'area-box') {
      return `${baseClass} bg-[#FFDC4A]`;
    } else if (item.boxClass === 'subdir-box') {
      return `${baseClass} bg-[#E0E0E0]`;
    } else if (item.boxClass === 'dept-box') {
      return `${baseClass} bg-[#F5F5F5]`;
    } else if (item.boxClass === 'section-box') {
      return `${baseClass} bg-[#E0F7FA]`;
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
      <div className="font-semibold">{item.title}</div>
      {item.name && <div className="text-sm mt-1">{item.name}</div>}
    </div>
  );
};

// Componente principal del organigrama
const AreaRecuperoRegularizacionDominialOrganigramaTailwind: React.FC = () => {
  // Filtrar elementos por categorías
  const getItemsByIds = (ids: string[]) => {
    return areaRecuperoRegularizacionDominialItems.filter(item => ids.includes(item.id)).map(item => ({
      ...item,
      position: {
        ...item.position,
        x: 0,
        y: 0
      }
    }));
  };

  // Elementos del área principal y subdirección
  const headerItems = getItemsByIds(['area', 'subdir']);

  // Elementos de los departamentos
  const departmentItems = getItemsByIds(['dept1', 'dept2', 'dept3']);

  // Agrupar secciones por departamento
  const deptSections = {
    dept1: getItemsByIds(['sec1', 'sec2']),
    dept2: getItemsByIds(['sec3']),
    dept3: getItemsByIds([]) // Cambiado de [] a getItemsByIds([]) para mantener el tipo correcto
  };

  return (
    <div className="organigrama-container relative w-full p-4">
      {/* Área y Subdirección */}
      <div className="header-section flex flex-col items-center space-y-6 mb-10">
        {headerItems.map(item => (
          <div key={item.id} className="w-full max-w-md h-20">
            <OrganigramaBox item={item} />
          </div>
        ))}
      </div>

      {/* Departamentos */}
      <div className="departments-section flex justify-center space-x-6 mb-10">
        {departmentItems.map(item => (
          <div key={item.id} className="w-full max-w-xs h-24">
            <OrganigramaBox item={item} />
          </div>
        ))}
      </div>

      {/* Secciones agrupadas por departamento */}
      <div className="sections-container flex justify-center space-x-6">
        <div className="dept1-sections w-full max-w-xs flex flex-col space-y-4">
          {deptSections.dept1.length > 0 && (
            <div className="flex justify-center space-x-4">
              {deptSections.dept1.map(item => (
                <div key={item.id} className="w-full h-16">
                  <OrganigramaBox item={item} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dept2-sections w-full max-w-xs flex flex-col space-y-4">
          {deptSections.dept2.length > 0 && (
            <div className="flex justify-center">
              {deptSections.dept2.map(item => (
                <div key={item.id} className="w-full h-16">
                  <OrganigramaBox item={item} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dept3-sections w-full max-w-xs flex flex-col space-y-4">
          {deptSections.dept3.length > 0 && (
            <div className="flex justify-center">
              {deptSections.dept3.map(item => (
                <div key={item.id} className="w-full h-16">
                  <OrganigramaBox item={item} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AreaRecuperoRegularizacionDominialOrganigramaTailwind;