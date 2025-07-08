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

// Datos del organigrama del Área Técnica
export const areaTecnicaItems: OrganigramaItem[] = [
  // Nivel superior - centrados
  {
    id: 'area',
    title: 'AREA TECNICA',
    name: 'Arq. Frederic Domian',
    boxClass: 'area-box',
    position: { x: 390, y: 30, width: 220, height: 50 }
  },
  {
    id: 'subdir',
    title: 'Sub Dirección AREA TECNICA',
    name: 'Ing. Daniel Garat',
    boxClass: 'subdir-box',
    position: { x: 390, y: 100, width: 220, height: 50 }
  },

  // Departamentos
  {
    id: 'dept1',
    title: 'Dpto. Estudios y Proyectos',
    name: 'Ing. Fernando Alascio',
    boxClass: 'dept-box',
    position: { x: 150, y: 180, width: 195, height: 50 }
  },
  {
    id: 'dept2',
    title: 'Dpto. Investigacion Tecnologica',
    name: 'Arq. Gustavo Zavadivker',
    boxClass: 'dept-box',
    position: { x: 350, y: 180, width: 195, height: 50 }
  },
  {
    id: 'dept3',
    title: 'Dpto. Construcciones',
    name: 'Arq. Karina Fernandez',
    boxClass: 'dept-box',
    position: { x: 550, y: 180, width: 195, height: 50 }
  },
  {
    id: 'dept4',
    title: 'Dpto. Obras por Administracion',
    name: '',
    boxClass: 'dept-box-special',
    position: { x: 750, y: 180, width: 195, height: 50 }
  },
  
  // Secciones del Dpto. Estudios y Proyectos
  {
    id: 'sec1',
    title: 'Secc. Vivienda',
    name: 'Resp. Emilse Pool Mendilaharzu',
    boxClass: 'section-box',
    position: { x: 100, y: 250, width: 140, height: 40 }
  },
  {
    id: 'sec2',
    title: 'Secc. Costos',
    name: 'Resp. Alvaro Olguin',
    boxClass: 'section-box',
    position: { x: 200, y: 250, width: 140, height: 40 }
  },
  {
    id: 'sec3',
    title: 'Secc. Infraestructura',
    name: 'Ing. Guillermo Auad',
    boxClass: 'section-box',
    position: { x: 300, y: 250, width: 140, height: 40 }
  },
  
  // Secciones del Dpto. Construcciones
  {
    id: 'sec4',
    title: 'Secc. Coord. de Obras',
    name: '(Vacante)',
    boxClass: 'section-box-special',
    position: { x: 550, y: 250, width: 140, height: 40 }
  }
];

// Conexiones entre elementos (no se usarán, pero se mantienen para compatibilidad)
export const areaTecnicaConnections: OrganigramaConnection[] = [
  // Conexiones verticales
  { from: '500,80', to: '500,100', type: 'vertical' }, // Conexión entre AREA y Sub Dirección
  { from: '150,150', to: '150,180', type: 'vertical' }, // Conexión a Dpto. Estudios y Proyectos
  { from: '350,150', to: '350,180', type: 'vertical' }, // Conexión a Dpto. Investigacion Tecnologica
  { from: '550,150', to: '550,180', type: 'vertical' }, // Conexión a Dpto. Construcciones
  { from: '750,150', to: '750,180', type: 'vertical' }, // Conexión a Dpto. Obras por Administracion
  
  // Conexiones horizontales
  { from: '', to: '', type: 'horizontal', points: 'M 500 150 L 500 160 L 150 160 L 750 160' },
];