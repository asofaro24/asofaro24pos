import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { CartItem } from './CartItem';
import { formatPrice } from '../../utils/format';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, total } = useCart();

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } z-50`}
    >
      <div className="h-full flex flex-col">
        <div className="px-4 py-6 border-b flex items-center justify-between">
          <div className="flex items-center">
            <ShoppingCart className="h-6 w-6 mr-2" />
            <h2 className="text-xl font-semibold">Carrito</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <ShoppingCart className="h-12 w-12 mb-4" />
              <p>Tu carrito está vacío</p>
            </div>
          ) : (
            items.map(item => (
              <CartItem
                key={item.product.id}
                productId={item.product.id}
                quantity={item.quantity}
              />
            ))
          )}
        </div>
        {items.length > 0 && (
          <div className="border-t px-4 py-6">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-xl">{formatPrice(total)}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}