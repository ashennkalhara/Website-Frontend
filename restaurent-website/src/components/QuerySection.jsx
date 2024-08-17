// components/QuerySection.jsx
import React, { useState } from 'react';

const QuerySection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/queries/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to save the query');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold text-black mb-8">Have a Query? Contact Us!</h2>
        {success && <p className="text-green-500">Your query has been submitted successfully!</p>}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuerySection;
