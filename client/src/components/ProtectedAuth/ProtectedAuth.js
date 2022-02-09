import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';

const Protectedauth = ({ children }) => {
    const user = useSelector( state => state.oneUser);
    let location = useLocation();

    if(!user){
      return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return children;
}

export default Protectedauth;
