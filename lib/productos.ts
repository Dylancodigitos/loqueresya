export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  precioMayorista: number;
  cantidadMinimaMayorista: number;
  categoria: string;
  imagenUrl: string;
  imagenesAdicionales?: string[];
  stock?: number;
}

// Datos en memoria de productos
let productos: Producto[] = [
  

  {
    id: '1',
    nombre: 'Parlante JBL Flip 6',
    descripcion: 'Parlante inalámbrico con potencia de 20W. Conectividad Bluetooth 5.0 y batería de larga duración. Resistente al agua y diseñado para exteriores.',
    precio: 60000,
    precioMayorista: 50000,
    cantidadMinimaMayorista: 3,
    categoria: 'Parlantes',
    imagenUrl: '/imagesproductos/jblflip6.webp',
    imagenesAdicionales: [
      '/imagesproductos/jblflip6.webp',
      '/imagesproductos/flip6/2.jpg',
      '/imagesproductos/flip6/3.webp',
      '/imagesproductos/flip6/4.webp',
    ],
    stock: 1,
  },
  {
    id: '2',
    nombre: 'Parlante XTREME P21 PRO',
    descripcion: 'Parlante portátil con potencia de 20W. Conectividad Bluetooth 5.0 y batería de larga duración. Resistente al agua y diseñado para exteriores.',
    precio: 40000,
    precioMayorista: 35000,
    cantidadMinimaMayorista: 3,
    categoria: 'Parlantes',
    imagenUrl: '/imagesproductos/parlante40.jpeg',
    imagenesAdicionales: [
      '/imagesproductos/parlante40.jpeg',
      '/imagesproductos/xtreme/1.png',
      '/imagesproductos/xtreme/3.png',
    ],
    stock: 3,
  },
  {
    id: '3',
    nombre: 'Auricular JBL TUNE 760NC',
    descripcion: 'Auriculares inalámbricos con cancelación activa de ruido. Sonido potente y claro con graves profundos. Batería de hasta 35 horas de reproducción continua.',
    precio: 28000,
    precioMayorista: 24000,
    cantidadMinimaMayorista: 3,
    categoria: 'Auriculares',
    imagenUrl: '/imagesproductos/760.png',
    imagenesAdicionales: [
      '/imagesproductos/760.png',
      '/imagesproductos/760/1.webp',
      '/imagesproductos/760/2.webp',
      '/imagesproductos/760/3.jpeg',
    ],
    stock: 10,
  },
  {
    id: '4',
    nombre: 'Auricular JBL BudsPro R4',
    descripcion: 'Auriculares inalámbricos con diseño ergonómico y resistente al agua. Sonido de alta calidad con graves potentes. Batería de hasta 28 horas con estuche de carga.',
    precio: 30000,
    precioMayorista: 27000,
    cantidadMinimaMayorista: 3,
    categoria: 'Auriculares',
    imagenUrl: '/imagesproductos/aurijblbuds.jpeg',
    imagenesAdicionales: [
      '/imagesproductos/buds/1.jpeg',
      '/imagesproductos/buds/2.png',
      '/imagesproductos/buds/3.jpeg',
      '/imagesproductos/buds/4.jpeg',
    ],
    stock: 1,
  },
  {
    id: '5',
    nombre: 'PowerBank Magnetico Apple',
    descripcion: 'Batería externa magnética compatible con dispositivos Apple. Capacidad de 5000mAh para cargar tu iPhone o AirPods sobre la marcha. Diseño compacto y elegante.',
    precio: 16000,
    precioMayorista: 13000,
    cantidadMinimaMayorista: 3,
    categoria: 'Tecnologia',
    imagenUrl: '/imagesproductos/powerbank.jpg',
    imagenesAdicionales: [
      '/imagesproductos/powerbank.jpg',
      '/imagesproductos/cargaapple.png',
    ],
    stock: 1,
  },
  {
    id: '6',
    nombre: 'Cargador 20w + Cable Tipo C Apple',
    descripcion: 'Cargador con cable Tipo C 1M para dispositivos Apple. Potencia de 20W para una carga rápida y eficiente. Compatible con iPhone, iPad y AirPods.',
    precio: 10000,
    precioMayorista: 8000,
    cantidadMinimaMayorista: 3,
    categoria: 'Tecnologia',
    imagenUrl: '/imagesproductos/combo3.png',
    imagenesAdicionales: [
      '/imagesproductos/combo3.png',
    ],
    stock: 3,
  },
  {
    id: '7',
    nombre: 'Maquina de Cortar Pelo Inalambrica',
    descripcion: 'Máquina de cortar pelo inalámbrica con batería recargable. Cuchillas de acero inoxidable para un corte preciso. Diseño ergonómico y fácil de usar para cortes en casa.',
    precio: 16000,
    precioMayorista: 13000,
    cantidadMinimaMayorista: 3,
    categoria: 'Salud Y Belleza',
    imagenUrl: '/imagesproductos/maquina16.jpg',
    imagenesAdicionales: [
      '/imagesproductos/maquina16.jpg',
      '/imagesproductos/cortarpelo/2.jpg',
      '/imagesproductos/cortarpelo/3.webp',
    ],
    stock: 10,
  },
  {
    id: '8',
    nombre: 'Planchita de Pelo Keratina Pro',
    descripcion: 'Planchita de pelo con tecnología de keratina para un estilo perfecto. Resistente a la corrosión y diseñada para un ajuste seguro con pernos y tornillos.',
    precio: 15000,
    precioMayorista: 13000,
    cantidadMinimaMayorista: 3,
    categoria: 'Salud Y Belleza',
    imagenUrl: '/imagesproductos/planchita.jpg',
    imagenesAdicionales: [
      '/imagesproductos/planchita.jpg',
    ],
    stock: 10,
  },
  {
    id: '9',
    nombre: 'Combo Plancha de Pelo y Secador',
    descripcion: 'Combo de plancha de pelo y secador con tecnología de keratina. La plancha ofrece un estilo perfecto y el secador proporciona un secado rápido. Resistente a la corrosión y diseñado para un ajuste seguro.',
    precio: 35000,
    precioMayorista: 0,
    cantidadMinimaMayorista: 0,
    categoria: 'Salud Y Belleza',
    imagenUrl: '/imagesproductos/combomujer (2).jpeg',
    imagenesAdicionales: [
      '/imagesproductos/combomujer (2).jpeg',
    ],
    stock: 1,
  },
  {
    id: '10',
    nombre: 'Parlante Charge Mini +3',
    descripcion: 'Parlante portátil con potencia de 5W. Conectividad Bluetooth 5.0 y batería de larga duración 12h. Resistente al agua y diseñado para exteriores.',
    precio: 16000,
    precioMayorista: 13000,
    cantidadMinimaMayorista: 3,
    categoria: 'Parlantes',
    imagenUrl: '/imagesproductos/parlante16.png',
    imagenesAdicionales: [
      '/imagesproductos/parlante16.png',
      '/imagesproductos/charge/1.png',
      '/imagesproductos/charge/2.jpeg',
      '/imagesproductos/charge/3.jpeg',  
    ],
    stock: 10,
  },
  {
    id: '11',
    nombre: 'Auricular con Pantalla Tactil Mixor',
    descripcion: 'Auricular con pantalla táctil y tecnología de cancelación de ruido. Diseño ergonómico y fácil de usar para una experiencia auditiva superior.',
    precio: 20000,
    precioMayorista: 17000,
    cantidadMinimaMayorista: 3,
    categoria: 'Auriculares',
    imagenUrl: '/imagesproductos/auricularpantalla.webp',
    imagenesAdicionales: [
      '/imagesproductos/auricularpantalla.webp',
      '/imagesproductos/mixor/1.jpeg',
      '/imagesproductos/mixor/2.jpeg',
      '/imagesproductos/mixor/3.jpeg',
      '/imagesproductos/mixor/4.png',
    ],
    stock: 10,
  },
  {
    id: '12',
    nombre: 'Proyector Portatil',
    descripcion: 'Proyector portátil con tecnología de proyección de alta calidad. Diseño compacto y fácil de usar para una experiencia de visualización superior.',
    precio: 35000,
    precioMayorista: 31000,
    cantidadMinimaMayorista: 3,
    categoria: 'Tecnologia',
    imagenUrl: '/imagesproductos/proyector.webp',
    imagenesAdicionales: [
      '/imagesproductos/proyector.webp',
      '/imagesproductos/proyector1.png',
    ],
    stock: 10,
  },
  {
    id: '13',
    nombre: 'Licuadora Portatil',
    descripcion: 'Licuadora portátil con tecnología de alta potencia. Diseño compacto y fácil de usar para una experiencia de blending superior.',
    precio: 14000,
    precioMayorista: 13000,
    cantidadMinimaMayorista: 3,
    categoria: 'Hogar',
    imagenUrl: '/imagesproductos/licuadora.webp',
    imagenesAdicionales: [
      '/imagesproductos/licuadora.webp',
    ],
    stock: 9,
  },
  {
    id: '14',
    nombre: 'Purificador de Agua',
    descripcion: 'Purificador de agua con tecnología de filtración avanzada. Diseño compacto y fácil de usar para una experiencia de purificación superior.',
    precio: 16000,
    precioMayorista: 14000,
    cantidadMinimaMayorista: 3,
    categoria: 'Hogar',
    imagenUrl: '/imagesproductos/purificador.jpeg',
    imagenesAdicionales: [
      '/imagesproductos/purificador.jpeg',
      '/imagesproductos/purificador/1.jpeg',
      '/imagesproductos/purificador/2.jpg',
      '/imagesproductos/purificador/3.webp',
    ],
    stock: 10,
  },
  {
    id: '15',
    nombre: 'Ventilador Portatil',
    descripcion: 'Ventilador portátil con tecnología de alto rendimiento. Diseño compacto y fácil de usar para una experiencia de refrigeración superior.',
    precio: 7000,
    precioMayorista: 6000,
    cantidadMinimaMayorista: 3,
    categoria: 'Varios',
    imagenUrl: '/imagesproductos/ventilador.jpg',
    imagenesAdicionales: [
      '/imagesproductos/ventilador.jpg',
    ],
    stock: 10,
  },
  {
    id: '16',
    nombre: 'Termo + Mate Stanley',
    descripcion: 'Termo y mate con tecnología de aislamiento térmico. Diseño moderno y funcional para una experiencia de consumo superior.',
    precio: 24000,
    precioMayorista: 20000,
    cantidadMinimaMayorista: 3,
    categoria: 'Hogar',
    imagenUrl: '/imagesproductos/termo.jpg',
    imagenesAdicionales: [
      '/imagesproductos/termo.jpg',
      '/imagesproductos/termo1.webp',
    ],
    stock: 1,
  },
  {
    id: '17',
    nombre: 'COMBO Maquina de cortar Pelo + Patillera Inalambricas',
    descripcion: 'Combo de máquina de cortar pelo y patillera inalámbricas con batería recargable. Cuchillas de acero inoxidable para un corte preciso. Diseño ergonómico y fácil de usar para cortes en casa.',
    precio: 25000,
    precioMayorista: 20000,
    cantidadMinimaMayorista: 3,
    categoria: 'Salud Y Belleza',
    imagenUrl: '/imagesproductos/combo.jpg',
    imagenesAdicionales: [
      '/imagesproductos/combo.jpg',
    ],
    stock: 1,
  },
  {
    id: '18',
    nombre: 'Joystick PS4 Original',
    descripcion: 'Joystick original para PlayStation 4 con diseño ergonómico y sensibilidad precisa. Ideal para una experiencia de juego superior.',
    precio: 24000,
    precioMayorista: 20000,
    cantidadMinimaMayorista: 3,
    categoria: 'Tecnologia',
    imagenUrl: '/imagesproductos/jostyck.png',
    imagenesAdicionales: [
      '/imagesproductos/jostyck.png',
      '/imagesproductos/play.webp',
    ],
    stock: 3,
  },
  {
    id: '19',
    nombre: 'Pava Electrica Zenith 1500W',
    descripcion: 'Pava eléctrica de la marca Zenith con tecnología de calentamiento rápido. Diseño moderno y funcional para una experiencia de cocción superior.',
    precio: 20000,
    precioMayorista: 19000,
    cantidadMinimaMayorista: 2,
    categoria: 'Hogar',
    imagenUrl: '/imagesproductos/pava.jpg',
    imagenesAdicionales: [
      '/imagesproductos/pava.jpg',
      '/imagesproductos/pavainfo.webp',
    ],
    stock: 2,
  },
  {
    id: '20',
    nombre: 'Cafetera Zenith Aromi 1.2L',
    descripcion: 'Cafetera de la marca Zenith con tecnología de preparación rápida. Diseño moderno y funcional para una experiencia de cocción superior.',
    precio: 30000,
    precioMayorista: 25000,
    cantidadMinimaMayorista: 3,
    categoria: 'Hogar',
    imagenUrl: '/imagesproductos/cafetera.png',
    imagenesAdicionales: [
      '/imagesproductos/cafetera.png',
      '/imagesproductos/cafeinfo.png',
    ],
    stock: 1,
  },
  {
    id: '21',
    nombre: 'Freidora de Aire 3.5L con Pantalla Tactil',
    descripcion: 'Freidora d e aire con tecnología de cocción sin aceite. Diseño moderno y funcional para una experiencia de cocina superior.',
    precio: 70000,
    precioMayorista: 70000,
    cantidadMinimaMayorista: 0,
    categoria: 'Salud Y Belleza',
    imagenUrl: '/imagesproductos/10161-2.jpg',
    imagenesAdicionales: [
      '/imagesproductos/10161-2.jpg',
    ],
    stock: 1,
  },
  {
    id: '22',
    nombre: 'Bicicleta BMX Rodado 20',
    descripcion: 'Bicicleta BMX con rodado de 20 pulgadas. Diseño robusto y funcional para una experiencia de ciclismo superior.',
    precio: 100000,
    precioMayorista: 100000,
    cantidadMinimaMayorista: 0,
    categoria: 'Varios',
    imagenUrl: '/imagesproductos/bici.png',
    imagenesAdicionales: [
      '/imagesproductos/bici.png',
    ],
    stock: 1,
  },
  {
    id: '23',
    nombre: 'Secador de Pelo Profesional 4 en 1',
    descripcion: 'Secador de pelo profesional con 4 funciones diferentes. Diseño ergonómico y material de alta calidad para un cuidado del cabello óptimo.',
    precio: 20000,
    precioMayorista: 16000,
    cantidadMinimaMayorista: 2,
    categoria: 'Salud Y Belleza',
    imagenUrl: '/imagesproductos/secador.png',
    imagenesAdicionales: [
      '/imagesproductos/secador.png',
    ],
    stock: 2,
  },
  {
    id: '24',
    nombre: 'Cepillo Secador y Volumizador',
    descripcion: 'Cepillo secador con tecnología de calor y aire. Diseño ergonómico y material de alta calidad para un cuidado del cabello óptimo.',
    precio: 18000,
    precioMayorista: 15000,
    cantidadMinimaMayorista: 2,
    categoria: 'Salud Y Belleza',
    imagenUrl: '/imagesproductos/peine.png',
    imagenesAdicionales: [
      '/imagesproductos/peine.png',
    ],
    stock: 2,
  },
  {
    id: '25',
    nombre: 'Caloventor Belita 2000w',
    descripcion: 'Caloventor de la marca Belita con tecnología de calentamiento rápido. Diseño moderno y funcional para una experiencia de cocción superior.',
    precio: 26000,
    precioMayorista: 22000,
    cantidadMinimaMayorista: 2,
    categoria: 'Hogar',
    imagenUrl: '/imagesproductos/caloventor.png',
    imagenesAdicionales: [
      '/imagesproductos/caloventor.png',
    ],
    stock: 2,
  },
  {
    id: '26',
    nombre: 'Parlante ONICA 8 Pulgadas',
    descripcion: '',
    precio: 40000,
    precioMayorista: 34000,
    cantidadMinimaMayorista: 2,
    categoria: 'Parlantes',
    imagenUrl: '/imagesproductos/onica8.jpg',
    imagenesAdicionales: [
      '/imagesproductos/onica8.jpg',
      '/imagesproductos/onica81.jpeg',
      '/imagesproductos/onica82.png',
      '/imagesproductos/onica83.jpg',
    ],
    stock: 3,
  },
  
  {
    id: '27',
    nombre: 'Tv Box Android 4K 8GB',
    descripcion: 'Tv Box Android 4K 8GB con tecnología de cocción sin aceite. Diseño moderno y funcional para una experiencia de cocina superior.',
    precio: 26000,
    precioMayorista: 22000,
    cantidadMinimaMayorista: 0,
    categoria: 'Tecnologia',
    imagenUrl: '/imagesproductos/tvbox.jpg',
    imagenesAdicionales: [
      '/imagesproductos/tvbox.jpg',
      '/imagesproductos/tvbox1.jpg',
      '/imagesproductos/tvbox2.png',
    ],
    stock: 1,
  },
  
  {
    id: '28',
    nombre: 'Cargador 20w + Cable Lightning Apple',
    descripcion: 'Cargador de pared con cable Lightning 2M para dispositivos Apple. Potencia de 20W para una carga rápida y eficiente. Compatible con iPhone, iPad y AirPods.',
    precio: 9000,
    precioMayorista: 8000,
    cantidadMinimaMayorista: 3,
    categoria: 'Tecnologia',
    imagenUrl: '/imagesproductos/combo2.webp',
    imagenesAdicionales: [
      '/imagesproductos/combo2.webp',
    ],
  },
  {
    id: '29',
    nombre: 'Parlante JBL GO 3',
    descripcion: 'Parlante de la marca JBL con tecnología de sonido de alta calidad. Diseño moderno y funcional para una experiencia de audio superior.',
    precio: 30000,
    precioMayorista: 24000,
    cantidadMinimaMayorista: 3,
    categoria: 'Parlantes',
    imagenUrl: '/imagesproductos/go3/go3.webp',
    imagenesAdicionales: [
      '/imagesproductos/go3/go3.webp',
      '/imagesproductos/go3/go31.png',
      '/imagesproductos/go3/go32.webp',
      '/imagesproductos/go3/go33.png',
      '/imagesproductos/go3/mayor1.png',
    ],
    stock: 3,
  },
];

export function getProductos(): Producto[] {
  return productos;
}

export function getProductoById(id: string): Producto | undefined {
  return productos.find(p => p.id === id);
}

export function createProducto(producto: Omit<Producto, 'id'>): Producto {
  const id = Date.now().toString();
  const nuevoProducto = { ...producto, id };
  productos.push(nuevoProducto);
  return nuevoProducto;
}

export function updateProducto(id: string, updates: Partial<Omit<Producto, 'id'>>): Producto | undefined {
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) return undefined;
  
  productos[index] = { ...productos[index], ...updates };
  return productos[index];
}

export function deleteProducto(id: string): boolean {
  const index = productos.findIndex(p => p.id === id);
  if (index === -1) return false;
  
  productos.splice(index, 1);
  return true;
}

export const CATEGORIAS = ['Parlantes', 'Auriculares', 'Tecnologia', 'Salud Y Belleza', 'Hogar', 'Varios'];
