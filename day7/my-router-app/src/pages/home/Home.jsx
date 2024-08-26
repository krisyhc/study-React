import React from 'react'
import style from './Home.module.scss'
import classNames from 'classnames'
import { Outlet, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className={classNames('page', style.home)}>
      <main>
        <Outlet />
      </main>
      <footer>
        <NavLink to="/home/movie">电影</NavLink>
        <NavLink to="/home/cinema">影院</NavLink>
        <NavLink to="/home/mine">我的</NavLink>
      </footer>
    </div>
  )
}

export default Home
