import React from 'react';
import { Terminal, ShoppingCart } from 'lucide-react';
import { Container } from '../ui/Container';
import { COMPANY } from '../../constants/company';
import { useCart } from '../../hooks/useCart';

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const items = useCart(state => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white sticky top-0 z-40">
      <Container>
        <nav className="py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Terminal className="h-8 w-8 mr-2" />
            <span className="text-2xl font-bold">{COMPANY.name}</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-blue-200">Características</a>
            <a href="#shop" className="hover:text-blue-200">Equipos</a>
            <a href="#gallery" className="hover:text-blue-200">Galería</a>
            <a href="#pricing" className="hover:text-blue-200">Precios</a>
            <a href="#contact" className="hover:text-blue-200">Contacto</a>
          </div>
          <button
            onClick={onCartClick}
            className="relative p-2 hover:bg-blue-700 rounded-full transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </nav>
      </Container>
    </header>
  );
}