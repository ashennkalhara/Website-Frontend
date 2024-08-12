import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const isAdmin = user?.isAdmin;

  return isAdmin ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
