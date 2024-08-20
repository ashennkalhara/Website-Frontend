import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:3001/gallery/images');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setImages(data);
        } else {
          throw new Error('API response is not an array of images');
        }
      } catch (error) {
        console.error('Error fetching images:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Loading images...</p>;
  }

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Gallery</h2>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={`http://localhost:3001${image.filePath}`}
                  alt={`Gallery ${index}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2">
                  <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
                    <FaHeart />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
