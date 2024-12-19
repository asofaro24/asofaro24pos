import React from 'react';
import { Container } from '../ui/Container';
import { GalleryGrid } from '../gallery/GalleryGrid';

export function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nuestras Instalaciones</h2>
          <p className="text-xl text-gray-600">
            Conozca algunos de nuestros casos de éxito y sistemas POS implementados
          </p>
        </div>
        <GalleryGrid />
      </Container>
    </section>
  );
}