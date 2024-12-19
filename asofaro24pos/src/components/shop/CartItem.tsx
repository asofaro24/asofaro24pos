import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../utils/format';

interface CartItemProps {
  productId: string;
  quantity: number;
}

export function CartItem({ productId, quantity }: CartItemProps) {
  const { items, updateQuantity, removeItem } = useCart();
  const item = items.find(item => item.product.id === productId);

  if (!item) return null;

  return (
    <div className="flex items-center py-4 border-b">
      <img
        src={item.product.image}
        alt={item.product.name}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="ml-4 flex-1">
        <h4 className="font-semibold">{item.product.name}</h4>
        <p className="text-gray-600">{formatPrice(item.product.price)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(productId, quantity - 1)}
          disabled={quantity <= 1}
          className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{quantity}</span>
        <button
          onClick={() => updateQuantity(productId, quantity + 1)}
          disabled={quantity >= item.product.stock}
          className="p-1 rounded-full hover:bg-gray-100 disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />
        </button>
        <button
          onClick={() => removeItem(productId)}
          className="p-1 rounded-full hover:bg-gray-100 text-red-500 ml-2"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}