import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const OffersSection = () => {
  const [offers, setOffers] = useState([]);
  const [expandedOfferId, setExpandedOfferId] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get('/api/offers');
        setOffers(response.data);
      } catch (error) {
        console.error('Error fetching offers:', error);
      }
    };
    fetchOffers();
  }, []);

  const handleLearnMore = (id) => {
    setExpandedOfferId(expandedOfferId === id ? null : id);
  };

  return (
    <section className="p-8 mt-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-black-600 mb-8 text-center">Special Offers</h2>
        {offers.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <motion.div
                key={offer._id}
                className="p-6 border border-orange-300 rounded-lg shadow-lg bg-white transition-transform duration-300"
                style={{ maxWidth: '100%' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {offer.image && (
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                    style={{ maxWidth: '100%' }}
                  />
                )}
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{offer.title}</h3>
                <p
                  className={`text-gray-700 mb-4 ${
                    expandedOfferId === offer._id ? 'block' : 'truncate'
                  }`}
                >
                  {offer.description}
                </p>
                <button
                  onClick={() => handleLearnMore(offer._id)}
                  className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
                >
                  {expandedOfferId === offer._id ? 'Show Less' : 'Learn More'}
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-900 text-center">No offers available at the moment.</p>
        )}
      </div>
    </section>
  );
};

export default OffersSection;
