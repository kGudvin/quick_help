import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

const AuthUser = ({ children }) => {
    const user = useSelector(state => state.users);
    let location = useLocation();

    if(user){
      return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
}

export default AuthUser;
