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

// Datos del organigrama del Área de Planeamiento
export const areaPlaneamientoItems: OrganigramaItem[] = [
  // Nivel superior - centrados
  {
    id: 'area',
    title: 'AREA PLANEAMIENTO',
    name: 'Arq. Augusto Paz',
    boxClass: 'area-box',
    position: { x: 390, y: 30, width: 220, height: 50 }
  },
  {
    id: 'subdir',
    title: 'Sub Dirección AREA PLANEAMIENTO',
    name: 'Arq. Hector Marcaida',
    boxClass: 'subdir-box',
    position: { x: 390, y: 100, width: 220, height: 50 }
  },

  // Departamentos
  {
    id: 'dept1',
    title: 'Dpto. Desarrollo Urbano y Rural',
    name: 'Resp. Eduardo Sanjuan',
    boxClass: 'dept-box',
    position: { x: 200, y: 180, width: 195, height: 50 }
  },
  {
    id: 'dept2',
    title: 'Dpto. Catastro',
    name: 'Resp. Fernando Espeche',
    boxClass: 'dept-box',
    position: { x: 600, y: 180, width: 195, height: 50 }
  },
  
  // Secciones del Dpto. Desarrollo Urbano y Rural
  {
    id: 'sec1',
    title: 'Secc. Ordenamiento Territorial',
    name: '(Vacante)',
    boxClass: 'section-box',
    position: { x: 150, y: 250, width: 140, height: 40 }
  },
  {
    id: 'sec2',
    title: 'Secc. Banco de Tierras',
    name: '(Vacante)',
    boxClass: 'section-box',
    position: { x: 250, y: 250, width: 140, height: 40 }
  },
  
  // Secciones del Dpto. Catastro
  {
    id: 'sec3',
    title: 'Secc. Topografía',
    name: '(Vacante)',
    boxClass: 'section-box',
    position: { x: 400, y: 250, width: 140, height: 40 }
  },
  {
    id: 'sec4',
    title: 'Secc. Agrimensura',
    name: '(Vacante)',
    boxClass: 'section-box',
    position: { x: 550, y: 250, width: 140, height: 40 }
  }
];

// Conexiones entre elementos (no se usarán, pero se mantienen para compatibilidad)
export const areaPlaneamientoConnections: OrganigramaConnection[] = [
  // Conexiones verticales
  { from: '500,80', to: '500,100', type: 'vertical' }, // Conexión entre AREA y Sub Dirección
  { from: '200,150', to: '200,180', type: 'vertical' }, // Conexión a Dpto. Desarrollo Urbano y Rural
  { from: '600,150', to: '600,180', type: 'vertical' }, // Conexión a Dpto. Catastro
  
  // Conexiones horizontales
  { from: '', to: '', type: 'horizontal', points: 'M 500 150 L 500 160 L 200 160 L 600 160' },
];