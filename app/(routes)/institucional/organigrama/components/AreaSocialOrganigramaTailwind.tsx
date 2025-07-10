import React from 'react';
import { OrganigramaItem, areaSocialItems } from './OrganigramaData';

declare global {
  interface Window {
    registerOrganigramaBoxRef?: (id: string, ref: HTMLDivElement | null) => void;
  }
}

// Componente para un elemento del organigrama (caja) con mejoras visuales
const OrganigramaBox: React.FC<{
  item: OrganigramaItem;
}> = ({ item }) => {
  const boxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (boxRef.current && item.id && window.registerOrganigramaBoxRef) {
      window.registerOrganigramaBoxRef(item.id, boxRef.current);
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
      case 'dir-box':
        return `${baseClass} bg-gradient-to-br from-purple-100 to-purple-200`;
      case 'dept-box':
        return `${baseClass} bg-gradient-to-br from-white to-gray-100`;
      case 'section-box':
        return `${baseClass} bg-gradient-to-br from-cyan-50 to-cyan-100`;
      default:
        return `${baseClass} bg-white`;
    }
  };

  // Determinar tamaño de fuente responsivo
  const getTitleFontSize = () => {
    const textLength = item.title.length;
    if (textLength > 30) return 'text-xs md:text-sm';
    if (textLength > 20) return 'text-sm md:text-base';
    return 'text-base md:text-lg';
  };

  const getNameFontSize = () => {
    const textLength = item.name?.length || 0;
    if (textLength > 25) return 'text-[10px] md:text-xs';
    if (textLength > 20) return 'text-xs md:text-sm';
    return 'text-sm md:text-base';
  };

  return (
    <div
      ref={boxRef}
      className={getBoxClass()}
      style={{
        minHeight: `${item.position.height}px`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-full px-2 py-2 text-center">
        <div className={`font-bold ${getTitleFontSize()} leading-tight break-words w-full text-gray-800`}>
          {item.title}
        </div>
        <div className={`${getNameFontSize()} leading-tight break-words w-full mt-1 text-gray-600`}>
          {item.name}
        </div>
      </div>
    </div>
  );
};


// Componente principal del organigrama manteniendo la estructura original
const AreaSocialOrganigramaTailwind: React.FC = () => {
  const getItemsByIds = (ids: string[]) => {
    return areaSocialItems.filter(item => ids.includes(item.id)).map(item => ({
      ...item,
      position: {
        ...item.position,
        x: 0,
        y: 0
      }
    }));
  };

  const headerItems = getItemsByIds(['area', 'subdir']);
  const leftColumnIds = ['dir1', 'subdir1', 'dept1', 'dept2', 'sec1', 'sec2', 'sec3', 'sec4'];
  const rightColumnIds = ['dir2', 'subdir2', 'dept3', 'dept4', 'sec5', 'sec6', 'sec7'];
  const leftColumnItems = getItemsByIds(leftColumnIds);
  const rightColumnItems = getItemsByIds(rightColumnIds);

  return (
    <div className="organigrama-container relative w-full p-4 max-w-6xl mx-auto">

      {/* Sección superior - AREA SOCIAL y Sub Dirección AREA SOCIAL */}
      <div className="flex justify-center mb-8 w-full">
        <div className="flex flex-col items-center space-y-4 w-full max-w-[600px]">
          {headerItems.map((item) => (
            <OrganigramaBox key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Contenedor para las dos columnas - Manteniendo estructura original */}
      <div className="flex flex-col md:flex-row justify-between w-full gap-4 md:gap-6">
        {/* Columna izquierda - Responsive */}
        <div className="flex flex-col items-center space-y-4 w-full md:w-[48%]">
          {leftColumnItems.map((item) => (
            <OrganigramaBox key={item.id} item={item} />
          ))}
        </div>

        {/* Columna derecha - Responsive */}
        <div className="flex flex-col items-center space-y-4 w-full md:w-[48%] mt-4 md:mt-0">
          {rightColumnItems.map((item) => (
            <OrganigramaBox key={item.id} item={item} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default AreaSocialOrganigramaTailwind;