import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaHeart } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:3000/gallery/images');
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (loading) {
    return <p className="text-center text-gray-600">Loading images...</p>;
  }

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-5 max-w-[600px]">  {/* Adjusted container width */}
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Gallery</h2>
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={`http://localhost:3000${image.filePath}`}
                  alt={`Gallery ${index}`}
                  className="w-[800px] h-[600px] object-cover"  // Adjust the width and height here
                />
                <div className="absolute bottom-2 right-2">
                  <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
                    <FaHeart />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Gallery;
