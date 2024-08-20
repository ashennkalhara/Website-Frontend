import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OffersManagement = () => {
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({ title: '', description: '' });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/offers', newOffer);
      setOffers([...offers, response.data]);
      setNewOffer({ title: '', description: '' });
    } catch (error) {
      console.error('Error creating offer:', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await axios.delete(`/api/offers/${id}`);
      setOffers(offers.filter((offer) => offer._id !== id));
    } catch (error) {
      console.error('Error removing offer:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Offers Management</h2>
      <p className="text-gray-600">Create, view, and manage special offers and promotions.</p>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={newOffer.title}
            onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={newOffer.description}
            onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
            className="mt-1 block w-full border rounded-md p-2"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add Offer
        </button>
      </form>

      {offers.length > 0 ? (
        offers.map((offer) => (
          <div key={offer._id} className="p-4 border rounded-md mb-2 bg-white flex items-center">
            {offer.image && (
              <img
                src={offer.image}
                alt={offer.title}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
            )}
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{offer.title}</h3>
              <p className="text-gray-700">{offer.description}</p>
            </div>
            <button
              onClick={() => handleRemove(offer._id)}
              className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No offers available.</p>
      )}
    </div>
  );
};

export default OffersManagement;
