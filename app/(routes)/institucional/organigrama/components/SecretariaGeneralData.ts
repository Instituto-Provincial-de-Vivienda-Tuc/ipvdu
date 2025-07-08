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

// Datos del organigrama de la Secretaría General
export const secretariaGeneralItems: OrganigramaItem[] = [
  // Nivel superior - centrados
  {
    id: 'area',
    title: 'SECRETARIA GENERAL',
    name: '(Vacante)',
    boxClass: 'area-box',
    position: { x: 390, y: 30, width: 220, height: 50 }
  },
  
  // Departamentos
  {
    id: 'dept1',
    title: 'Dpto. Recursos Humanos',
    name: 'Sra. Luz M. Gonzalez',
    boxClass: 'dept-box',
    position: { x: 150, y: 180, width: 195, height: 50 }
  },
  {
    id: 'dept2',
    title: 'Dpto. Despacho',
    name: 'Sra. Maria C. Arias',
    boxClass: 'dept-box',
    position: { x: 550, y: 180, width: 195, height: 50 }
  },
  
  // Secciones
  {
    id: 'sec1',
    title: 'Secc. Mesa de Entradas y Salida',
    name: 'Sr. Miguel Angel Cordoba',
    boxClass: 'section-box',
    position: { x: 250, y: 250, width: 140, height: 40 }
  },
  {
    id: 'sec2',
    title: 'Secc. Archivo',
    name: 'Sr. Segundo E. Olea',
    boxClass: 'section-box',
    position: { x: 450, y: 250, width: 140, height: 40 }
  }
];

// Conexiones entre elementos (no se usarán, pero se mantienen para compatibilidad)
export const secretariaGeneralConnections: OrganigramaConnection[] = [
  // Conexiones verticales
  { from: '500,80', to: '500,100', type: 'vertical' }, // Conexión entre AREA y Sub Dirección
  { from: '150,150', to: '150,180', type: 'vertical' }, // Conexión a Dpto. Recursos Humanos
  { from: '550,150', to: '550,180', type: 'vertical' }, // Conexión a Dpto. Despacho
  
  // Conexiones horizontales
  { from: '', to: '', type: 'horizontal', points: 'M 500 150 L 500 160 L 150 160 L 750 160' },
];