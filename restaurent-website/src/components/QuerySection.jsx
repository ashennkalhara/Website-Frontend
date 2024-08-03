import React, { useState } from 'react';

const QuerySection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold text-black mb-8 animate__animated animate__fadeIn animate__delay-1s">Have a Query? Contact Us!</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 animate__animated animate__bounce"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuerySection;
