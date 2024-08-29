import React from'react';
import { Navigate } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element:<div>找不到此页面</div>
  }
]

export default routes;