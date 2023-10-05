import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../component/auth';

function PrivateRoute({ element, ...rest }) {
  const { authenticated } = useAuth(); 

  return (
    <Route
      {...rest}
      element={authenticated ? element : <Navigate to="/login" />}
    />
  );
}

export default PrivateRoute;
