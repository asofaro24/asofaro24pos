interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  description: string;
  location: string;
  date: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad',
    thumbnail: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=300&q=80',
    title: 'Restaurante La Fogata',
    description: 'Implementación completa de sistema POS con 3 terminales',
    location: 'Bogotá, Colombia',
    date: '2024-02-15'
  },
  {
    id: '2',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=300&q=80',
    title: 'Supermercado El Vecino',
    description: 'Sistema POS multitienda con control de inventario',
    location: 'Medellín, Colombia',
    date: '2024-01-20'
  },
  {
    id: '3',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&q=80',
    title: 'Farmacia Salud Total',
    description: 'POS especializado para farmacia con control de medicamentos',
    location: 'Cali, Colombia',
    date: '2024-03-01'
  }
] as const;