import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforme su Negocio con Soluciones POS Modernas
            </h1>
            <p className="text-xl mb-8">
              Optimice operaciones, impulse ventas y mejore la experiencia del cliente con nuestros sistemas punto de venta de última generación.
            </p>
            <Button variant="secondary">
              Comenzar <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Sistema POS Moderno"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}