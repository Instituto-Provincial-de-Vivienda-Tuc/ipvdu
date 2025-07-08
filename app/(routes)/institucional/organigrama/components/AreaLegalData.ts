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

// Datos del organigrama del Área Legal
export const areaLegalItems: OrganigramaItem[] = [
  // Nivel superior - centrados
  {
    id: 'area',
    title: 'AREA LEGAL',
    name: 'Dr. Guillermo Curia',
    boxClass: 'area-box',
    position: { x: 390, y: 30, width: 220, height: 50 }
  },
  {
    id: 'subdir',
    title: 'Sub Dirección AREA LEGAL',
    name: 'Dra. Ana Delaporte',
    boxClass: 'subdir-box',
    position: { x: 390, y: 100, width: 220, height: 50 }
  },

  // Departamentos
  {
    id: 'dept1',
    title: 'Dpto. Asesoramiento',
    name: 'Dr. Hugo Luaces',
    boxClass: 'dept-box',
    position: { x: 200, y: 180, width: 195, height: 50 }
  },
  {
    id: 'dept2',
    title: 'Dpto. Obras',
    name: '(Vacante)',
    boxClass: 'dept-box',
    position: { x: 400, y: 180, width: 195, height: 50 }
  },
  {
    id: 'dept3',
    title: 'Dpto. Judicial',
    name: 'Dr. Fernando Martoni',
    boxClass: 'dept-box',
    position: { x: 600, y: 180, width: 195, height: 50 }
  },
];

// Conexiones entre elementos
export const areaLegalConnections: OrganigramaConnection[] = [
  // Conexiones verticales
  { from: '500,80', to: '500,100', type: 'vertical' }, // Conexión entre AREA LEGAL y Sub Dirección
  { from: '200,150', to: '200,180', type: 'vertical' }, // Conexión a Dpto. Asesoramiento
  { from: '400,150', to: '400,180', type: 'vertical' }, // Conexión a Dpto. Obras
  { from: '600,150', to: '600,180', type: 'vertical' }, // Conexión a Dpto. Judicial
  
  // Conexiones horizontales
  { from: '', to: '', type: 'horizontal', points: 'M 500 150 L 500 160 L 200 160 L 600 160' },
];