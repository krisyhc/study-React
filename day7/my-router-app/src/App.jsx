import React from 'react';
import { useRoutes } from "react-router-dom";
import routeConfig from './router/config'
const App = () => {
  const routes = useRoutes(routeConfig)

  return routes;
};

export default App;