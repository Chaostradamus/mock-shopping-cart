import { useState } from 'react';
import CartContext from '../context/CartContext';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      return existingItem
        ? prev.map(item => 
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...prev, { ...product, quantity }];
    });
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;