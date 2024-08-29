import React,{ useEffect, useState} from 'react';
import store from "../store";

const About = () => {
 const [ list , setList ] = useState(store.getState().list)

 useEffect(() => {
  const unsubscribe = store.subscribe(() => {
    setList(store.getState().list)
  })
  return () => {
    unsubscribe()
  }
 },[])
 
 return (
  <div>
    <h1>About</h1>
    <button
      onClick={() => {
        store.dispatch({
          type: "addList",
          payload:Math.random()
        })
      }}
    >
      添加</button>
    <ul>
      {
      list.map((item, index) => {
        return <li key={index}>{item}</li>
      })
      }
    </ul>
   
  </div>
 )
};

export default About;