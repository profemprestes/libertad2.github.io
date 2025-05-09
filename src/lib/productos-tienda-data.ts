import type { Product } from '@/types';

export const tiendaProducts: Product[] = [
  {
    id: 'camiseta-oficial-1',
    name: 'Camiseta Oficial Titular 2024',
    description: 'Luce los colores del Decano con la nueva camiseta oficial. Tecnología de secado rápido y diseño exclusivo.',
    price: 1490,
    imageUrl: '/tienda/camiseta1.jpg',
    imageHint: 'club jersey red white',
    category: 'Indumentaria',
  },
  {
    id: 'camiseta-alternativa-1',
    name: 'Camiseta Alternativa Negra 2024',
    description: 'Elegante diseño alternativo en color negro con detalles en rojo y dorado. Perfecta para toda ocasión.',
    price: 1350,
    imageUrl: '/tienda/camiseta2.jpg', 
    imageHint: 'club jersey black',
    category: 'Indumentaria',
  },
  {
    id: 'short-oficial-1',
    name: 'Short Oficial Negro',
    description: 'Short deportivo negro con escudo bordado del Club Atlético Libertad. Comodidad y estilo para entrenar o alentar.',
    price: 990,
    imageUrl: '/tienda/camiseta4.jpg', // Using an existing image as placeholder for shorts
    imageHint: 'sports shorts black',
    category: 'Indumentaria',
  },
  {
    id: 'sticker-escudo-1',
    name: 'Sticker Escudo Club Libertad',
    description: 'Pegatina de vinilo resistente con el escudo oficial del club. Ideal para tu auto, laptop o termo.',
    price: 190,
    imageUrl: '/tienda/sticker1.jpg',
    imageHint: 'club logo sticker',
    category: 'Accesorios',
  },
  {
    id: 'brazalete-capitan-1',
    name: 'Brazalete de Capitán',
    description: 'Lleva el brazalete de capitán oficial del Club Atlético Libertad. Símbolo de liderazgo y pasión.',
    price: 450,
    imageUrl: '/tienda/brazalete.jpg',
    imageHint: 'captains armband',
    category: 'Accesorios',
  },
  {
    id: 'camiseta-entrenamiento-1',
    name: 'Camiseta de Entrenamiento Gris',
    description: 'Camiseta ligera y transpirable para tus entrenamientos, con el escudo del club.',
    price: 1100,
    imageUrl: '/tienda/camiseta3.jpg', 
    imageHint: 'training jersey gray',
    category: 'Indumentaria',
  },
];
