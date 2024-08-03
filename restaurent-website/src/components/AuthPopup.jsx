import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const AuthPopup = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        {isLogin ? (
          <form className="space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-lg">Email</label>
              <input
                type="email"
                id="login-email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-lg">Password</label>
              <input
                type="password"
                id="login-password"
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
            <p className="text-center">
              Don't have an account?{' '}
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </p>
          </form>
        ) : (
          <form className="space-y-4">
            <div>
              <label htmlFor="register-email" className="block text-lg">Email</label>
              <input
                type="email"
                id="register-email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="register-password" className="block text-lg">Password</label>
              <input
                type="password"
                id="register-password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Register
            </button>
            <p className="text-center">
              Already have an account?{' '}
              <button
                type="button"
                className="text-blue-600 hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </p>
          </form>
        )}
        <div className="flex justify-around mt-4">
          <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
            <FaGoogle size={24} />
          </button>
          <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
            <FaFacebook size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPopup;
