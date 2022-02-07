import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import style from './authuser.module.css'

const AuthUser = ({ children }) => {
    const user = useSelector(state => state.users);
    let location = useLocation();

    if(user){
      return <Navigate to="/" state={{ from: location }} replace />;
    }
    return (
      <div className={`${style.page}`}>
        <div className={`${style.form}`}>
      {children}
      </div>
      </div>
      );
}

export default AuthUser;
