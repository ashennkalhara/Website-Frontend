// src/components/Gallery.jsx
import React from 'react';
import { FaHeart } from 'react-icons/fa';

import food1 from '../assets/img/food1.jpg';
import food2 from '../assets/img/food2.jpg';
import food3 from '../assets/img/food3.jpg';
import food4 from '../assets/img/food4.jpg';
import food5 from '../assets/img/food5.jpg';
import food6 from '../assets/img/food6.jpg';
import food7 from '../assets/img/food7.jpg';
import food8 from '../assets/img/food8.jpg';
import food9 from '../assets/img/food9.jpg';

const Gallery = () => {
  const images = [
    { src: food1, alt: 'Food 1' },
    { src: food2, alt: 'Food 2' },
    { src: food3, alt: 'Food 3' },
    { src: food4, alt: 'Food 4' },
    { src: food5, alt: 'Food 5' },
    { src: food6, alt: 'Food 6' },
    { src: food7, alt: 'Food 7' },
    { src: food8, alt: 'Food 8' },
    { src: food9, alt: 'Food 9' },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 max-h-60"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="text-white text-lg p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors duration-300">
                  <FaHeart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
