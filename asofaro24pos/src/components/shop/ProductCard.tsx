import React from 'react';
import { ShoppingCart } from 'lucide-react';
import type { Product } from '../../constants/products';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/format';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart(state => state.addItem);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-square relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            {formatPrice(product.price)}
          </span>
          <button
            onClick={() => addItem(product)}
            disabled={product.stock === 0}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            {product.stock === 0 ? 'Agotado' : 'Agregar'}
          </button>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          Stock: {product.stock} unidades
        </div>
      </div>
    </div>
  );
}