import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('authToken');

  if (!token) {
    return navigate('/login');
  }

  return children;
};

export default ProtectedRoute;
