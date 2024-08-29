import React , { useEffect, useState } from 'react';
import store from "../store"
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch()
  const title = useSelector(s => s.title)


  return (
    <div>
      <h1>Home</h1>
      <h2>标题：{title}</h2>
      <button
        onClick={() => {
          dispatch({ 
            type: "changeTitle",
            payload: Math.random().toString(36)
          })
        }}
      >
        修改标题</button>
    </div>
  );
};

export default Home;