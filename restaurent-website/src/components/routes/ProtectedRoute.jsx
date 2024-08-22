import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const staffToken = localStorage.getItem('staffToken');

  if (!staffToken) {
    // If no token is found, redirect to the staff login page
    return <Navigate to="/staffLogin" replace />;
  }

  // If the token is found, render the protected component
  return React.createElement(element);
};

export default ProtectedRoute;
