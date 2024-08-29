import React from 'react';
import { Navigate } from "react-router-dom"


const Auth = (props) => {
  const token = localStorage.getItem("token")
  if (!token) {
    return <Navigate to="/login" />
  }else{
    return props.children
  }
};

export default Auth;