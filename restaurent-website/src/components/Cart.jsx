// src/components/Cart.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cart, removeFromCart, isCartVisible, toggleCartVisibility, calculateTotal } = useContext(CartContext);

  return (
    <div
      className={`fixed top-20 right-5 bg-white p-5 shadow-lg rounded-lg w-64 transition-transform duration-300 ${isCartVisible ? 'translate-x-0' : 'translate-x-full'}`}
    >
      <button
        className="absolute top-2 right-2 text-red-500"
        onClick={toggleCartVisibility}
      >
        X
      </button>
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span>{item.title}</span>
              <button
                className="text-red-500"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold">Total:</span>
            <span>{`LKR ${calculateTotal()}`}</span>
          </div>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => alert('Payment functionality not implemented')}
          >
            Pay Now
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
