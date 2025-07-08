import React from 'react';
import { OrganigramaItem, areaEconomicoFinancieraItems } from './AreaEconomicoFinancieraData';

// Extender el objeto window para incluir nuestra función de registro
declare global {
  interface Window {
    registerEconomicoFinancieraBoxRef?: (id: string, ref: HTMLDivElement | null) => void;
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
    if (boxRef.current && item.id && window.registerEconomicoFinancieraBoxRef) {
      window.registerEconomicoFinancieraBoxRef(item.id, boxRef.current);
    }
  }, [item.id]);
  
  // Determinar la clase de color según el tipo de caja
  const getBoxColorClass = (boxClass: string) => {
    switch (boxClass) {
      case 'area-box':
        return 'bg-[#FFDC4A]';
      case 'subdir-box':
        return 'bg-[#E0E0E0]';
      case 'dir-box':
        return 'bg-[#D1C4E9]';
      case 'dept-box':
        return 'bg-[#F5F5F5]';
      case 'section-box':
        return 'bg-[#E0F7FA]';
      default:
        return 'bg-gray-100';
    }
  };

  // Determinar el tamaño de fuente basado en la longitud del texto y el ancho del cuadro
  const getTitleFontSize = () => {
    const textLength = item.title.length;
    const boxWidth = item.position.width;

    if (textLength > 30) return 'text-[10px]';
    if (textLength > 20) return 'text-[11px]';
    if (textLength > 15 || boxWidth < 150) return 'text-xs';
    return 'text-sm';
  };

  const getNameFontSize = () => {
    const textLength = item.name.length;
    const boxWidth = item.position.width;

    if (textLength > 25) return 'text-[9px]';
    if (textLength > 20 || boxWidth < 150) return 'text-[10px]';
    return 'text-xs';
  };

  return (
    <div
      ref={boxRef}
      className={`rounded-md border border-gray-400 shadow-sm ${getBoxColorClass(item.boxClass)} overflow-hidden z-10 w-full`}
      style={{
        minHeight: `${item.position.height}px`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-full px-2 py-2 text-center">
        <div className={`font-bold ${getTitleFontSize()} leading-tight break-words w-full`}>
          {item.title}
        </div>
        <div className={`${getNameFontSize()} leading-tight break-words w-full mt-1`}>
          {item.name}
        </div>
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
      {/* Añadir puntos en los extremos para mejor visualización */}
      <circle cx={fromX} cy={fromY} r="3" fill="#666" />
      <circle cx={toX} cy={toY} r="3" fill="#666" />
    </svg>
  );
};

// Componente para renderizar conexiones
const OrganigramaConnections: React.FC = () => {
  // Con el nuevo sistema de posicionamiento basado en flexbox,
  // necesitamos usar referencias para obtener las posiciones reales de los elementos
  const [connections, setConnections] = React.useState<{ fromX: number, fromY: number, toX: number, toY: number }[]>([]);
  const boxRefs = React.useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Efecto para calcular las posiciones de las líneas después de que el DOM se renderice
  React.useEffect(() => {
    // Función para calcular las posiciones
    const calculatePositions = () => {
      const newConnections = [];
      const containerRect = document.querySelector('.organigrama-container')?.getBoundingClientRect() || { top: 0, left: 0 };
      
      // Conexión entre AREA ECONOMICO FINANCIERA y Sub Dirección
      if (boxRefs.current['area'] && boxRefs.current['subdir']) {
        const areaRect = boxRefs.current['area'].getBoundingClientRect();
        const subdirRect = boxRefs.current['subdir'].getBoundingClientRect();

        // Calcular coordenadas relativas al contenedor
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
        
        // Conexiones a las secciones (sec1, sec2, sec3, sec4)
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
        
        // Conexiones a las secciones (sec5, sec6)
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

    // Calcular posiciones iniciales después de un breve retraso para asegurar que el DOM está listo
    const timer = setTimeout(calculatePositions, 500);

    // Recalcular cuando la ventana cambie de tamaño
    window.addEventListener('resize', calculatePositions);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculatePositions);
    };
  }, []);

  // Función para registrar referencias de elementos
  const registerBoxRef = (id: string, ref: HTMLDivElement | null) => {
    boxRefs.current[id] = ref;
  };

  // Exponer la función de registro a través del contexto global
  React.useEffect(() => {
    window.registerEconomicoFinancieraBoxRef = registerBoxRef;
    return () => {
      delete window.registerEconomicoFinancieraBoxRef;
    };
  }, []);

  return (
    <>
      {connections.map((conn, index) => (
        <OrganigramaLine
          key={`conn-${index}`}
          fromX={conn.fromX}
          fromY={conn.fromY}
          toX={conn.toX}
          toY={conn.toY}
        />
      ))}
    </>
  );
};

// Componente principal del organigrama
const AreaEconomicoFinancieraOrganigramaTailwind: React.FC = () => {
  // Filtrar elementos por categorías
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

  // Elementos del área principal y subdirección
  const headerItems = getItemsByIds(['area', 'subdir']);
  
  // Elementos de departamentos
  const departmentIds = ['dept1', 'dept2'];
  const departmentItems = getItemsByIds(departmentIds);
  
  // Elementos de secciones
  const sectionIds = ['sec1', 'sec2', 'sec3', 'sec4', 'sec5', 'sec6'];
  const sectionItems = getItemsByIds(sectionIds);

  // Referencia para el contenedor principal
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative w-full h-[700px] overflow-auto bg-white organigrama-container">
      <div className="flex flex-col w-full h-full p-4">
        {/* Sección superior - AREA ECONOMICO FINANCIERA y Sub Dirección */}
        <div className="flex justify-center mb-8 w-full">
          <div className="flex flex-col items-center space-y-4 w-full max-w-[600px]">
            {headerItems.map((item) => (
              <OrganigramaBox key={item.id} item={item} />
            ))}
          </div>
        </div>
        
        {/* Departamentos */}
        <div className="flex justify-center mb-8 w-full">
          <div className="flex flex-row justify-between w-full max-w-[800px]">
            {departmentItems.map((item) => (
              <div key={item.id} className="w-[48%]">
                <OrganigramaBox item={item} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Secciones */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-[1200px]">
            {sectionItems.map((item) => (
              <div key={item.id}>
                <OrganigramaBox item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Renderizar conexiones del organigrama */}
      <OrganigramaConnections />
    </div>
  );
};

export default AreaEconomicoFinancieraOrganigramaTailwind;