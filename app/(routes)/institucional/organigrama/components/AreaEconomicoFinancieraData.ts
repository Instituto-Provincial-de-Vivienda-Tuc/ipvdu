// Definición de tipos para los elementos del organigrama
export type OrganigramaItem = {
  id: string;
  title: string;
  name: string;
  category?: string;
  type?: 'int' | 'tit';
  boxClass: string;
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
};

export type OrganigramaConnection = {
  from: string;
  to: string;
  type: 'vertical' | 'horizontal';
  points?: string;
};

// Datos del organigrama del Área Económico Financiera
export const areaEconomicoFinancieraItems: OrganigramaItem[] = [
  // Nivel superior - centrados
  {
    id: 'area',
    title: 'AREA ECONOMICO FINANCIERA',
    name: 'C.P.N. Julieta Juarez',
    boxClass: 'area-box',
    position: { x: 390, y: 30, width: 220, height: 50 }
  },
  {
    id: 'subdir',
    title: 'Sub Dirección AREA ECONOMICO FINANCIERA',
    name: 'C.P.N. Gabriela Leguizamón',
    boxClass: 'subdir-box',
    position: { x: 390, y: 100, width: 220, height: 50 }
  },

  // Departamentos
  {
    id: 'dept1',
    title: 'Dpto. Contaduría',
    name: 'Resp. Andrea Rodriguez',
    boxClass: 'dept-box',
    position: { x: 250, y: 180, width: 195, height: 50 }
  },
  {
    id: 'dept2',
    title: 'Planif. Econ. Financiera',
    name: 'Ing. María Jose Jurado',
    boxClass: 'dept-box',
    position: { x: 550, y: 180, width: 195, height: 50 }
  },

  // Secciones
  {
    id: 'sec1',
    title: 'Secc. Presup. y Contabilidad',
    name: 'CPN Victoria Albornoz',
    boxClass: 'section-box',
    position: { x: 100, y: 250, width: 140, height: 40 }
  },
  {
    id: 'sec2',
    title: 'Secc. Liquidaciones',
    name: 'CPN Graciela Orquera',
    boxClass: 'section-box',
    position: { x: 250, y: 250, width: 140, height: 40 }
  },
  {
    id: 'sec3',
    title: 'Secc. Tesorería',
    name: 'Sr. Pablo Durba',
    boxClass: 'section-box',
    position: { x: 400, y: 250, width: 140, height: 40 }
  },
  {
    id: 'sec4',
    title: 'Secc. Compras',
    name: 'Sr. Luis Ansardi',
    boxClass: 'section-box',
    position: { x: 550, y: 250, width: 140, height: 40 }
  },
  {
    id: 'sec5',
    title: 'Secc. Intendencia',
    name: 'Sr. Alfredo Ansardi',
    boxClass: 'section-box',
    position: { x: 700, y: 250, width: 140, height: 40 }
  },
  {
    id: 'sec6',
    title: 'Secc. Automotores',
    name: 'Sr. Christian Acosta',
    boxClass: 'section-box',
    position: { x: 850, y: 250, width: 140, height: 40 }
  },
];

// Conexiones entre elementos
export const areaEconomicoFinancieraConnections: OrganigramaConnection[] = [
  // Conexiones verticales
  { from: '500,80', to: '500,100', type: 'vertical' }, // Conexión entre AREA ECONOMICO FINANCIERA y Sub Dirección
  { from: '300,150', to: '300,180', type: 'vertical' }, // Conexión a Dpto. Contaduría
  { from: '600,150', to: '600,180', type: 'vertical' }, // Conexión a Planif. Econ. Financiera
  { from: '300,230', to: '300,250', type: 'vertical' }, // Conexión a secciones
  
  // Conexiones horizontales
  { from: '', to: '', type: 'horizontal', points: 'M 500 150 L 500 160 L 300 160 L 600 160' },
  { from: '', to: '', type: 'horizontal', points: 'M 300 230 L 300 240 L 100 240 L 850 240' },
];