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

// Datos del organigrama del Área Social
export const areaSocialItems: OrganigramaItem[] = [
  // Nivel superior - centrados
  {
    id: 'area',
    title: 'AREA SOCIAL',
    name: '(Vacante)',
    boxClass: 'area-box',
    position: { x: 390, y: 30, width: 220, height: 50 }
  },
  {
    id: 'subdir',
    title: 'Sub Dirección AREA SOCIAL',
    name: '(Vacante)',
    boxClass: 'subdir-box',
    position: { x: 390, y: 100, width: 220, height: 50 }
  },

  // Direcciones
  {
    id: 'dir1',
    title: 'Dir. Adjudicaciones',
    name: 'Lic. Silvia Pastoriza',
    category: 'Cat. 24',
    type: 'int',
    boxClass: 'dir-box',
    position: { x: 250, y: 180, width: 400, height: 50 }
  },
  {
    id: 'dir2',
    title: 'Dir. Programas Especiales',
    name: 'Lic. Monica Aguero',
    category: 'Cat. 24',
    type: 'int',
    boxClass: 'dir-box',
    position: { x: 750, y: 180, width: 400, height: 50 }
  },

  // Subdirecciones
  {
    id: 'subdir1',
    title: 'SubDir. Adjudicaciones',
    name: 'Lic. Minerva Gomez',
    category: 'Cat. 23',
    type: 'tit',
    boxClass: 'subdir-box',
    position: { x: 250, y: 250, width: 400, height: 50 }
  },
  {
    id: 'subdir2',
    title: 'SubDir. Prog. Especiales',
    name: 'Arq. Javier Villafañe',
    category: 'Cat. 23',
    type: 'int',
    boxClass: 'subdir-box',
    position: { x: 750, y: 250, width: 400, height: 50 }
  },

  // Departamentos
  {
    id: 'dept1',
    title: 'Dpto. Adjudicaciones',
    name: 'Lic. Carolina Villeco',
    category: 'Cat. 22',
    type: 'int',
    boxClass: 'dept-box',
    position: { x: 100, y: 340, width: 195, height: 50 }
  },
  {
    id: 'dept2',
    title: 'Dpto. Promoción Social',
    name: 'Resp. Cynthia Brito',
    category: 'Cat. 22',
    type: 'int',
    boxClass: 'dept-box',
    position: { x: 300, y: 340, width: 195, height: 50 }
  },
  {
    id: 'dept3',
    title: 'Dpto. Programas Especiales',
    name: 'Lic. Victoria Robles',
    category: 'Cat. 22',
    type: 'int',
    boxClass: 'dept-box',
    position: { x: 600, y: 340, width: 195, height: 50 }
  },
  {
    id: 'dept4',
    title: 'Dpto. Investigación Social',
    name: 'Resp. Lic. Ana Budeguer',
    category: 'Cat. 22',
    type: 'int',
    boxClass: 'dept-box',
    position: { x: 800, y: 340, width: 195, height: 50 }
  },

  // Secciones nivel 1
  {
    id: 'sec1',
    title: 'Secc. Inscripciones',
    name: 'Sr. Pedro Chaile',
    category: 'Cat. 21',
    type: 'tit',
    boxClass: 'section-box',
    position: { x: 100, y: 430, width: 140, height: 40 }
  },
  {
    id: 'sec2',
    title: 'Secc. Transferencias',
    name: 'Resp. Sr. Jose Pereyra',
    category: 'Cat. 21',
    type: 'int',
    boxClass: 'section-box',
    position: { x: 250, y: 430, width: 140, height: 40 }
  },
  {
    id: 'sec3',
    title: 'Organización Comunitaria',
    name: '(Vacante)',
    category: 'Cat. 21',
    boxClass: 'section-box',
    position: { x: 400, y: 430, width: 140, height: 40 }
  },
  {
    id: 'sec4',
    title: 'Seguimiento',
    name: '(Vacante)',
    category: 'Cat. 21',
    boxClass: 'section-box',
    position: { x: 550, y: 430, width: 140, height: 40 }
  },
  {
    id: 'sec5',
    title: 'Coord. Prog. Soc. No Tradicionales',
    name: 'Sr. Sergio Barros',
    category: 'Cat. 21',
    boxClass: 'section-box',
    position: { x: 700, y: 430, width: 140, height: 40 }
  },

  {
    id: 'sec6',
    title: 'Evaluacion Operatorias',
    name: '(Vacante)',
    category: 'Cat. 21',
    boxClass: 'section-box',
    position: { x: 700, y: 430, width: 140, height: 40 }
  },
  {
    id: 'sec7',
    title: 'Estudio Realidad Habitacional',
    name: '(Vacante)',
    category: 'Cat. 21',
    boxClass: 'section-box',
    position: { x: 850, y: 430, width: 140, height: 40 }
  },
];

// Conexiones entre elementos
export const areaSocialConnections: OrganigramaConnection[] = [
  // Conexiones verticales
  { from: '500,80', to: '500,100', type: 'vertical' }, // Conexión entre AREA SOCIAL y Sub Dirección AREA SOCIAL
  { from: '300,160', to: '300,180', type: 'vertical' },
  { from: '720,160', to: '720,180', type: 'vertical' },
  { from: '300,230', to: '300,250', type: 'vertical' },
  { from: '720,230', to: '720,250', type: 'vertical' },
  { from: '165,310', to: '165,340', type: 'vertical' },
  { from: '335,310', to: '335,340', type: 'vertical' },
  { from: '605,310', to: '605,340', type: 'vertical' },
  { from: '775,310', to: '775,340', type: 'vertical' },
  { from: '150,390', to: '150,430', type: 'vertical' },
  { from: '280,390', to: '280,430', type: 'vertical' },
  { from: '410,390', to: '410,430', type: 'vertical' },
  { from: '540,390', to: '540,430', type: 'vertical' },
  { from: '670,390', to: '670,430', type: 'vertical' },
  { from: '720,470', to: '720,500', type: 'vertical' },
  { from: '840,470', to: '840,500', type: 'vertical' },

  // Conexiones horizontales
  { from: '', to: '', type: 'horizontal', points: 'M 560 150 L 560 160 L 300 160 L 720 160' },
  { from: '', to: '', type: 'horizontal', points: 'M 300 300 L 300 310 L 165 310 L 335 310' },
  { from: '', to: '', type: 'horizontal', points: 'M 720 300 L 720 310 L 605 310 L 775 310' },
  { from: '', to: '', type: 'horizontal', points: 'M 165 390 L 165 400 L 80 400 L 280 400' },
  { from: '', to: '', type: 'horizontal', points: 'M 335 390 L 335 400 L 280 400 L 410 400' },
  { from: '', to: '', type: 'horizontal', points: 'M 775 390 L 775 400 L 670 400 L 850 400' },
  { from: '', to: '', type: 'horizontal', points: 'M 775 390 L 775 470 L 720 470 L 850 470' },
];