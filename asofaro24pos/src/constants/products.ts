import { Printer, Monitor, Scan, Battery, Server, Keyboard } from 'lucide-react';

export interface Product {
  id: string;
  category: 'printer' | 'display' | 'scanner' | 'ups' | 'computer' | 'accessories';
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  specifications: string[];
}

export const products: Product[] = [
  {
    id: 'printer-1',
    category: 'printer',
    name: 'Impresora Térmica XP-80',
    description: 'Impresora térmica de alta velocidad para punto de venta',
    price: 200000,
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=500&q=60',
    stock: 15,
    specifications: [
      'Velocidad de impresión: 250mm/s',
      'Conexión USB y Ethernet',
      'Compatible con ESC/POS',
      'Cortador automático'
    ]
  },
  {
    id: 'display-1',
    category: 'display',
    name: 'Monitor Touch 15" PCT',
    description: 'Pantalla táctil capacitiva de 15 pulgadas',
    price: 1200000,
    image: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?auto=format&fit=crop&w=500&q=60',
    stock: 8,
    specifications: [
      'Resolución: 1024x768',
      'Panel táctil capacitivo',
      'Ángulo de visión: 178°',
      'Entradas: VGA, HDMI'
    ]
  },
  {
    id: 'scanner-1',
    category: 'scanner',
    name: 'Lector Código Barras 1D/2D',
    description: 'Scanner omnidireccional para códigos 1D y 2D',
    price: 380000,
    image: 'https://images.unsplash.com/photo-1617997455403-41f36e9a9306?auto=format&fit=crop&w=500&q=60',
    stock: 20,
    specifications: [
      'Lectura omnidireccional',
      'Conexión USB',
      'Soporte códigos QR',
      'Base incluida'
    ]
  }
] as const;

export const categoryIcons = {
  printer: Printer,
  display: Monitor,
  scanner: Scan,
  ups: Battery,
  computer: Server,
  accessories: Keyboard
} as const;