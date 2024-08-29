import React , { useEffect, useState } from 'react';
import store from "../store"


const Home = () => {
  const [title, setTitle] = useState(store.getState().title)
  useEffect(() => {
    // 监听store中的数据改变
    const clearSub = store.subscribe(() => {
      console.log('store的数据改变了', store.getState().title)
      setTitle(store.getState().title)
    })

    return () => {
      // 组件销毁时清除监听
      console.log('home组件销毁')
      clearSub()
    }
  }, [])



  return (
    <div>
      <h1>Home</h1>
      <h2>标题：{title}</h2>
      <button
        onClick={() => {
          store.dispatch({ 
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