import React from 'react';
import { OrganigramaItem, areaEconomicoFinancieraItems } from './AreaEconomicoFinancieraData';

declare global {
  interface Window {
    registerEconomicoFinancieraBoxRef?: (id: string, ref: HTMLDivElement | null) => void;
  }
}

// Componente para un elemento del organigrama (caja) con mejoras visuales
const OrganigramaBox: React.FC<{
  item: OrganigramaItem;
}> = ({ item }) => {
  const boxRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (boxRef.current && item.id && window.registerEconomicoFinancieraBoxRef) {
      window.registerEconomicoFinancieraBoxRef(item.id, boxRef.current);
    }
  }, [item.id]);

  // Determinar la clase CSS según el tipo de caja
  const getBoxClass = () => {
    const baseClass = 'border-2 border-gray-700 rounded-lg p-3 text-center flex flex-col justify-center items-center shadow-md transition-all duration-200 hover:scale-[1.02] hover:shadow-lg w-full h-full';

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

  // Determinar tamaño de fuente para responsividad
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
        {item.name && (
          <div className={`${getNameFontSize()} leading-tight break-words w-full mt-1 text-gray-600`}>
            {item.name}
          </div>
        )}
      </div>
    </div>
  );
};

// Componente para líneas de conexión verticales
const OrganigramaLine: React.FC<{
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
}> = ({ fromX, fromY, toX, toY }) => {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ overflow: 'visible' }}
    >
      <line
        x1={fromX}
        y1={fromY}
        x2={toX}
        y2={toY}
        stroke="#666"
        strokeWidth="1.5"
      />
      <circle cx={fromX} cy={fromY} r="3" fill="#666" />
      <circle cx={toX} cy={toY} r="3" fill="#666" />
    </svg>
  );
};

// Componente para renderizar conexiones
const OrganigramaConnections: React.FC = () => {
  const [connections, setConnections] = React.useState<{ fromX: number, fromY: number, toX: number, toY: number }[]>([]);
  const boxRefs = React.useRef<{ [key: string]: HTMLDivElement | null }>({});

  React.useEffect(() => {
    const calculatePositions = () => {
      const newConnections = [];
      const containerRect = document.querySelector('.organigrama-container')?.getBoundingClientRect() || { top: 0, left: 0 };

      // Conexión entre AREA ECONOMICO FINANCIERA y Sub Dirección
      if (boxRefs.current['area'] && boxRefs.current['subdir']) {
        const areaRect = boxRefs.current['area'].getBoundingClientRect();
        const subdirRect = boxRefs.current['subdir'].getBoundingClientRect();

        const fromX = areaRect.left - containerRect.left + areaRect.width / 2;
        const fromY = areaRect.top - containerRect.top + areaRect.height;
        const toX = subdirRect.left - containerRect.left + subdirRect.width / 2;
        const toY = subdirRect.top - containerRect.top;

        newConnections.push({ fromX, fromY, toX, toY });
      }

      // Conexión entre Sub Dirección y los departamentos
      if (boxRefs.current['subdir'] && boxRefs.current['dept1'] && boxRefs.current['dept2']) {
        const subdirRect = boxRefs.current['subdir'].getBoundingClientRect();
        const dept1Rect = boxRefs.current['dept1'].getBoundingClientRect();
        const dept2Rect = boxRefs.current['dept2'].getBoundingClientRect();

        // Conexión a Dpto. Contaduría
        newConnections.push({
          fromX: subdirRect.left - containerRect.left + subdirRect.width / 2,
          fromY: subdirRect.top - containerRect.top + subdirRect.height,
          toX: dept1Rect.left - containerRect.left + dept1Rect.width / 2,
          toY: dept1Rect.top - containerRect.top
        });

        // Conexión a Planif. Econ. Financiera
        newConnections.push({
          fromX: subdirRect.left - containerRect.left + subdirRect.width / 2,
          fromY: subdirRect.top - containerRect.top + subdirRect.height,
          toX: dept2Rect.left - containerRect.left + dept2Rect.width / 2,
          toY: dept2Rect.top - containerRect.top
        });
      }

      // Conexiones entre departamentos y secciones
      if (boxRefs.current['dept1']) {
        const dept1Rect = boxRefs.current['dept1'].getBoundingClientRect();

        for (let i = 1; i <= 4; i++) {
          const secId = `sec${i}`;
          if (boxRefs.current[secId]) {
            const secRect = boxRefs.current[secId].getBoundingClientRect();
            newConnections.push({
              fromX: dept1Rect.left - containerRect.left + dept1Rect.width / 2,
              fromY: dept1Rect.top - containerRect.top + dept1Rect.height,
              toX: secRect.left - containerRect.left + secRect.width / 2,
              toY: secRect.top - containerRect.top
            });
          }
        }
      }

      if (boxRefs.current['dept2']) {
        const dept2Rect = boxRefs.current['dept2'].getBoundingClientRect();

        for (let i = 5; i <= 6; i++) {
          const secId = `sec${i}`;
          if (boxRefs.current[secId]) {
            const secRect = boxRefs.current[secId].getBoundingClientRect();
            newConnections.push({
              fromX: dept2Rect.left - containerRect.left + dept2Rect.width / 2,
              fromY: dept2Rect.top - containerRect.top + dept2Rect.height,
              toX: secRect.left - containerRect.left + secRect.width / 2,
              toY: secRect.top - containerRect.top
            });
          }
        }
      }

      setConnections(newConnections);
    };

    const timer = setTimeout(calculatePositions, 500);
    window.addEventListener('resize', calculatePositions);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculatePositions);
    };
  }, []);

  const registerBoxRef = (id: string, ref: HTMLDivElement | null) => {
    boxRefs.current[id] = ref;
  };

  React.useEffect(() => {
    window.registerEconomicoFinancieraBoxRef = registerBoxRef;
    return () => {
      delete window.registerEconomicoFinancieraBoxRef;
    };
  }, []);

  return (
    <div className="hidden md:block"> {/* Ocultar conexiones en móvil */}
      {connections.map((conn, index) => (
        <OrganigramaLine
          key={`conn-${index}`}
          fromX={conn.fromX}
          fromY={conn.fromY}
          toX={conn.toX}
          toY={conn.toY}
        />
      ))}
    </div>
  );
};

// Componente principal del organigrama con mejoras responsive
const AreaEconomicoFinancieraOrganigramaTailwind: React.FC = () => {
  const getItemsByIds = (ids: string[]) => {
    return areaEconomicoFinancieraItems.filter(item => ids.includes(item.id)).map(item => ({
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
  const sectionItems = getItemsByIds(['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6']);

  // Agrupar secciones por departamento para mejor organización
  const sectionsByDepartment = {
    dept1: sectionItems.slice(0, 4),
    dept2: sectionItems.slice(4)
  };

  return (
    <div className="organigrama-container relative w-full p-4 max-w-5xl mx-auto">


      {/* Sección superior - AREA ECONOMICO FINANCIERA y Sub Dirección */}
      <div className="header-section flex flex-col items-center space-y-4 md:space-y-6 mb-6 md:mb-10">
        {headerItems.map((item) => (
          <div key={item.id} className="w-full max-w-lg h-20 md:h-24">
            <OrganigramaBox item={item} />
          </div>
        ))}
      </div>

      {/* Departamentos - Layout responsivo */}
      <div className="departments-section flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-6 md:mb-10">
        {departmentItems.map((item) => (
          <div key={item.id} className="w-full md:w-1/2 max-w-md h-24">
            <OrganigramaBox item={item} />
          </div>
        ))}
      </div>

      {/* Secciones agrupadas por departamento - Layout responsivo */}
      <div className="sections-container">
        {/* Secciones para Departamento 1 */}
        <div className="dept1-sections mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {sectionsByDepartment.dept1.map((item) => (
              <div key={item.id} className="h-20">
                <OrganigramaBox item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Secciones para Departamento 2 */}
        <div className="dept2-sections">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sectionsByDepartment.dept2.map((item) => (
              <div key={item.id} className="h-20">
                <OrganigramaBox item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Renderizar conexiones del organigrama (solo en desktop) */}
      <OrganigramaConnections />
    </div>
  );
};

export default AreaEconomicoFinancieraOrganigramaTailwind;