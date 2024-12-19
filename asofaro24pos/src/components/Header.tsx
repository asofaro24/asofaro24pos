import React from 'react';
import { Terminal, ShoppingCart, Clock, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Terminal className="h-8 w-8 mr-2" />
          <span className="text-2xl font-bold">POS Master</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-blue-200">Features</a>
          <a href="#benefits" className="hover:text-blue-200">Benefits</a>
          <a href="#pricing" className="hover:text-blue-200">Pricing</a>
          <a href="#contact" className="hover:text-blue-200">Contact</a>
        </div>
      </nav>
    </header>
  );
}