import { Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Movie from "../pages/home/movie/Movie";
import Cinema from "../pages/home/cinema/Cinema";
import Mine from "../pages/home/mine/Mine";
import Login from "../pages/login/Login";
import Detail from "../pages/detail/Detail";

export default [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/movie" />,
      },
      {
        path: "/home/movie",
        element: <Movie />,
      },
      {
        path: "/home/cinema",
        element: <Cinema />,
      },
      {
        path: "/home/mine",
        element: <Mine />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "*",
    element: <div>找不到此页面</div>,
  },
];