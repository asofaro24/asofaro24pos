import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../constants/products';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.product.id === product.id);

        if (existingItem) {
          const newQuantity = Math.min(existingItem.quantity + 1, product.stock);
          set({
            items: currentItems.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: newQuantity }
                : item
            )
          });
        } else {
          set({ items: [...currentItems, { product, quantity: 1 }] });
        }
      },
      removeItem: (productId) => {
        set({
          items: get().items.filter(item => item.product.id !== productId)
        });
      },
      updateQuantity: (productId, quantity) => {
        set({
          items: get().items.map(item =>
            item.product.id === productId
              ? { ...item, quantity: Math.min(quantity, item.product.stock) }
              : item
          )
        });
      },
      clearCart: () => set({ items: [] }),
      get total() {
        return get().items.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        );
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);