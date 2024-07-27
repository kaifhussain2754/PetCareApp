import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './contect/AuthContext'; // Ensure correct path

const PrivateRoute = ({ element, ...rest }) => {
  const { authToken } = useAuth();
  
  // Redirect to login if not authenticated, otherwise render the component
  return authToken ? element : <Navigate to="/" replace />;
};

export default PrivateRoute;
