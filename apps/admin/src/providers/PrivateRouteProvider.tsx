import React from 'react';
import { Navigate } from 'react-router-dom';
import { AUTH_ROUTES } from '@prime-fresh/authentication';

interface PrivateRouteProps {
  element: React.ReactElement;
  roles: string[];
}

export const PrivateRouteProvider: React.FC<PrivateRouteProps> = ({ element, roles }) => {
  const token = localStorage.getItem('access_token'); 
  const userRole = localStorage.getItem('role'); 

  if (!token) {
    return <Navigate to={AUTH_ROUTES.SIGN_IN} replace />;
  }

  if (!roles.includes(userRole || '')) {
    return <Navigate to={AUTH_ROUTES.SIGN_IN} replace />; 
  }

  return element;
};


