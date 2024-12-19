import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Gallery } from './components/sections/Gallery';
import { Shop } from './components/sections/Shop';
import { Pricing } from './components/sections/Pricing';
import { Contact } from './components/sections/Contact';
import { Container } from './components/ui/Container';
import { CartDrawer } from './components/shop/CartDrawer';
import { COMPANY } from './constants/company';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <Features />
      <Shop />
      <Gallery />
      <Pricing />
      <Contact />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <footer className="bg-gray-800 text-white py-8">
        <Container>
          <p className="text-center">{COMPANY.copyright}</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;