'use client';
import type { Product, CartItem } from '@/types';
import React, { createContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { tiendaProducts } from '@/lib/productos-tienda-data'; 

interface CartContextType {
  cartItems: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const getProductDetails = (productId: string): Product | undefined => {
  return tiendaProducts.find(p => p.id === productId);
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('clubLibertadCart');
      if (storedCart) {
        try {
          const parsedStoredCart: { productId: string; quantity: number }[] = JSON.parse(storedCart);
          const hydratedCartItems: CartItem[] = parsedStoredCart
            .map(item => {
              const productDetails = getProductDetails(item.productId);
              if (productDetails) {
                return { ...productDetails, quantity: item.quantity };
              }
              return null;
            })
            .filter((item): item is CartItem => item !== null);
          setCartItems(hydratedCartItems);
        } catch (error) {
          console.error("Error parsing cart from localStorage:", error);
          localStorage.removeItem('clubLibertadCart'); // Clear corrupted data
        }
      }
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      const storableCart = cartItems.map(item => ({ productId: item.id, quantity: item.quantity }));
      localStorage.setItem('clubLibertadCart', JSON.stringify(storableCart));
    }
  }, [cartItems, isInitialized]);

  const addItem = useCallback((product: Product, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item => (item.id === productId ? { ...item, quantity } : item))
      );
    }
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const getTotalItems = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);
  
  if (!isInitialized) {
    // You can return a loader here if preferred, or null
    return null; 
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getCartTotal,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
