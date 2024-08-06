import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import axios from 'axios';

const SignIn = ({ onClose, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', { email, password });
      setUser(response.data.user);
      onClose();
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-lg">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-lg">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </form>
      <div className="flex justify-around mt-4">
        <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
          <FaGoogle size={24} />
        </button>
        <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
          <FaFacebook size={24} />
        </button>
      </div>
    </div>
  );
};

export default SignIn;