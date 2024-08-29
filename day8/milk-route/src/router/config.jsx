import React from "react"
import { Navigate } from "rract-router-dom"
import Auth from "@/components/auth/Auth"
import Home from "../pages/home/Home"
import Goods from "@/pages/home/goods/Goods"
const Login =  React.lazy(() => import("@/pages/login/Login"))
const Detail = React.lazy(() => import("@/pages/detail/Detail"))
const Search = React.lazy(() => import("@/pages/search/Search")) 

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
    title: "首页",
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/goods/zh" />,
      },
      {
        path: "/home/goods/:type",
        element: <Goods />,
      },
    ]
  },
  {
    path: "/detail/:id",
    element: <Detail />,
    title: "详情页面",
    isAuth: true,
  },
  {
    path: "/search",
    element: <Search />,
    tiltle: "搜索页面",
  },
  {
    path: "/login",
    element: <Login />,
    title: "登录"
  },
  {
    path: "*",
    element: <div>找不到此页面</div>,
    title: "404"
  }
]

const TitleCom = (props) => {
  if(props.title) {
    document.title = props.title
  }
  if(props.isAuth) {
    return <Auth>{props.children}</Auth>
  }
  return props.children 
}

const FormatRoutes = (routeConfig) => {
  return routeConfig.map(item => {
    return {
      path: item.path,
      element: (
          <TitleCom title={item.title} isAuth={item.isAuth}>
            {item.element}
          </TitleCom>
      ),
      children: item.children ? FormatRoutes(item.children) : []
    }
  })
}

export default FormatRoutes(routes)