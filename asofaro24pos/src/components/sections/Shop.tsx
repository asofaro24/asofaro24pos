import React from 'react';
import { Container } from '../ui/Container';
import { ProductGrid } from '../shop/ProductGrid';

export function Shop() {
  return (
    <section id="shop" className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Equipos y Suministros</h2>
          <p className="text-xl text-gray-600">
            Encuentre todo lo necesario para su sistema POS
          </p>
        </div>
        <ProductGrid />
      </Container>
    </section>
  );
}