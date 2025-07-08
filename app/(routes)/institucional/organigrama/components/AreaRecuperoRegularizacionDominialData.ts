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

// Datos del organigrama del Área de Recupero y Regularización Dominial
export const areaRecuperoRegularizacionDominialItems: OrganigramaItem[] = [
  // Nivel superior - centrados
  {
    id: 'area',
    title: 'AREA RECUPERO Y REGULARIZACION DOMINIAL',
    name: 'Abog. Lic. Trab. Social Graciela Ortiz',
    boxClass: 'area-box',
    position: { x: 390, y: 30, width: 220, height: 50 }
  },
  {
    id: 'subdir',
    title: 'Sub Dirección AREA REC. Y REG. DOMINAL',
    name: '(Vacante)',
    boxClass: 'subdir-box',
    position: { x: 390, y: 100, width: 220, height: 50 }
  },

  // Departamentos
  {
    id: 'dept1',
    title: 'Dpto. Recursos Financieros',
    name: 'CPN Flavia Corvalan',
    boxClass: 'dept-box',
    position: { x: 200, y: 180, width: 195, height: 50 }
  },
  {
    id: 'dept2',
    title: 'Dpto. Regularizacion Dominial',
    name: 'Esc. Mara Alderete',
    boxClass: 'dept-box',
    position: { x: 400, y: 180, width: 195, height: 50 }
  },
  {
    id: 'dept3',
    title: 'Dpto. Recupero de Vivienda',
    name: 'Esc. Gabriela Leas',
    boxClass: 'dept-box',
    position: { x: 600, y: 180, width: 195, height: 50 }
  },
  
  // Secciones del Dpto. Recursos Financieros
  {
    id: 'sec1',
    title: 'Secc. Ingresos',
    name: 'Sr. Fabricio Cansino',
    boxClass: 'section-box',
    position: { x: 150, y: 250, width: 140, height: 40 }
  },
  {
    id: 'sec2',
    title: 'Secc. Control de Pagos',
    name: 'Sr. Maximiliano Avila',
    boxClass: 'section-box',
    position: { x: 250, y: 250, width: 140, height: 40 }
  },
  
  // Secciones del Dpto. Regularizacion Dominial
  {
    id: 'sec3',
    title: 'Secc. Escribania',
    name: '(Vacante)',
    boxClass: 'section-box',
    position: { x: 400, y: 250, width: 140, height: 40 }
  }
];

// Conexiones entre elementos (no se usarán, pero se mantienen para compatibilidad)
export const areaRecuperoRegularizacionDominialConnections: OrganigramaConnection[] = [
  // Conexiones verticales
  { from: '500,80', to: '500,100', type: 'vertical' }, // Conexión entre AREA y Sub Dirección
  { from: '200,150', to: '200,180', type: 'vertical' }, // Conexión a Dpto. Recursos Financieros
  { from: '400,150', to: '400,180', type: 'vertical' }, // Conexión a Dpto. Regularizacion Dominial
  { from: '600,150', to: '600,180', type: 'vertical' }, // Conexión a Dpto. Recupero de Vivienda
  
  // Conexiones horizontales
  { from: '', to: '', type: 'horizontal', points: 'M 500 150 L 500 160 L 200 160 L 600 160' },
];