import React, { useState } from 'react';
import SignIn from './Signin';
import SignUp from './Signup';

const AuthPopup = ({ isOpen, onClose, setUser }) => {
  const [currentForm, setCurrentForm] = useState('signin');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-sm p-6">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          &times;
        </button>
        {currentForm === 'signin' ? (
          <SignIn onClose={onClose} setUser={(user) => { setUser(user); onClose(); }} />
        ) : (
          <SignUp onClose={onClose} setUser={(user) => { setUser(user); onClose(); }} />
        )}
        <div className="text-center mt-4">
          {currentForm === 'signin' ? (
            <p>Don't have an account? <button onClick={() => setCurrentForm('signup')} className="text-blue-600 hover:underline">Register</button></p>
          ) : (
            <p>Already have an account? <button onClick={() => setCurrentForm('signin')} className="text-blue-600 hover:underline">Login</button></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPopup;
