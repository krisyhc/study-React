import React from 'react';
import {
  Routes,//路由外层组层组件
  Route,//路由配置组件
  Navigate,//重定向
  Link,//跳转
  NavLink,//跳转页面，有高亮
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Detail from './pages/detail/Detail.jsx';
const App = () => {
  return (
    <div className='app'>
      <nav>
        <NavLink to='/home'>首页</NavLink>
        <NavLink to='/login'>登录</NavLink>
        <NavLink to='/detail'>详情</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/detail" element={<Detail/>}></Route>
        <Route path="*" element={<div>找不到此页面</div>}></Route>
      </Routes>
    </div>
  );
};

export default App;