// src/contexts/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem.id !== item.id));
  };

  const toggleCartVisibility = () => {
    setCartVisible(!isCartVisible);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace(/[^0-9.-]+/g, '')), 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isCartVisible, toggleCartVisibility, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
};
