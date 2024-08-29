import React,{ useEffect} from 'react';
import { useSelector, useDispatch } from'react-redux'

const About = () => {
 const dispatch = useDispatch ()
 const list = useSelector(s => s.list)



 return (
  <div>
    <h1>About</h1>
    <button
      onClick={() => {
       dispatch({
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