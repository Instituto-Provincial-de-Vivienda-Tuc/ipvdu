import React from 'react';
import { OrganigramaItem, secretariaGeneralItems } from './SecretariaGeneralData';

declare global {
  interface Window {
    registerSecretariaGeneralBoxRef?: (id: string, ref: HTMLDivElement | null) => void;
  }
}

// Componente para un elemento del organigrama (caja) con mejoras visuales
const OrganigramaBox: React.FC<{
  item: OrganigramaItem;
}> = ({ item }) => {
  const boxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (boxRef.current && item.id && window.registerSecretariaGeneralBoxRef) {
      window.registerSecretariaGeneralBoxRef(item.id, boxRef.current);
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
      case 'section-box':
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
const SecretariaGeneralOrganigramaTailwind: React.FC = () => {
  const getItemsByIds = (ids: string[]) => {
    return secretariaGeneralItems.filter(item => ids.includes(item.id)).map(item => ({
      ...item,
      position: {
        ...item.position,
        x: 0,
        y: 0
      }
    }));
  };

  const headerItems = getItemsByIds(['area']);
  const departmentItems = getItemsByIds(['dept1', 'dept2']);

  const deptSections = {
    dept1: getItemsByIds(['sec1']),
    dept2: getItemsByIds(['sec2'])
  };


  return (
    <div className="organigrama-container relative w-full p-4 max-w-4xl mx-auto">


      {/* Área */}
      <div className="header-section flex flex-col items-center space-y-4 md:space-y-6 mb-6 md:mb-10">
        {headerItems.map(item => (
          <div key={item.id} className="w-full max-w-lg h-20 md:h-24">
            <OrganigramaBox item={item} />
          </div>
        ))}
      </div>

      {/* Departamentos - Layout responsivo */}
      <div className="departments-section grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10">
        {departmentItems.map(item => (
          <div key={item.id} className="h-24">
            <OrganigramaBox item={item} />
          </div>
        ))}
      </div>

      {/* Secciones agrupadas por departamento - Layout responsivo */}
      <div className="sections-container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Departamento 1 - Secretaría General */}
        <div className="dept-section">
          <div className="flex justify-center">
            {deptSections.dept1.map(item => (
              <div key={item.id} className="w-full max-w-md h-24">
                <OrganigramaBox item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Departamento 2 - Comunicación y Prensa */}
        <div className="dept-section">
          <div className="flex justify-center">
            {deptSections.dept2.map(item => (
              <div key={item.id} className="w-full max-w-md h-24">
                <OrganigramaBox item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default SecretariaGeneralOrganigramaTailwind;