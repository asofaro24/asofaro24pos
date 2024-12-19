import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Business with Modern POS Solutions
            </h1>
            <p className="text-xl mb-8">
              Streamline operations, boost sales, and enhance customer experience with our cutting-edge point of sale systems.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold flex items-center hover:bg-blue-50 transition-colors">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Modern POS System"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}