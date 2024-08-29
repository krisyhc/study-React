import React from 'react';
import { useRoutes, NavLink } from'react-router-dom';
import routeConfig from "./router/config"

const App = () => {
  const routes = useRoutes(routeConfig)
  return (
    <div>
      <nav>
        <NavLink to="/home">首页</NavLink>
        <NavLink to="/about">关于我们</NavLink>
      </nav>
      {routes}
    </div>
  );
};

export default App;