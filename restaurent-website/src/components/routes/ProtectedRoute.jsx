import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, ...rest }) => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const isAdmin = user?.isAdmin;

  return isAdmin ? React.cloneElement(element, { ...rest }) : <Navigate to="/staffLogin" />;
};

export default ProtectedRoute;
