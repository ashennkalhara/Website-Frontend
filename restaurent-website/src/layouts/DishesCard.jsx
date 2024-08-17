import React, { useContext } from 'react';
import Button from '../layouts/Button';
import { CartContext } from '../contexts/CartContext';

const DishesCard = ({ img, title, price }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const item = { id: Date.now(), title, price }; // Ensure a unique ID
    addToCart(item);
  };

  return (
    <div className="w-full p-5 bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img className="w-full h-40 object-cover rounded-t-lg" src={img} alt={title} />
      <div className="p-4 space-y-4">
        <h3 className="font-semibold text-xl text-gray-800 text-center">{title}</h3>
        <p className="text-lg text-center text-gray-600">{price}</p>
        <div className="flex justify-center mt-4">
          <Button title="Add to Cart" onClick={handleAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default DishesCard;
