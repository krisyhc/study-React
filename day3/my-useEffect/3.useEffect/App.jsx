import  { useState, useEffect } from 'react';
import './index.module.scss';


const Child = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount(prev => {
  //       console.log('组件更新', prev)
  //       if (prev + 1 >= 50) {
  //         clearInterval(timer);
  //       }
  //       return prev + 1;
  //     })
  //   },1000)

  //   return () => {
  //     console.log('组件销毁清除定时器')
  //     clearInterval(timer);
  //   }
  // },[])

  useEffect(() => {
    const keydown = e => {
      console.log('键盘按下',e.key)
    }
    window.addEventListener('keydown', keydown);
    return () => {
      window.removeEventListener('keydown', keydown);
    }
  })

  return (
    <div>
      <h1>Child</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
}



const App = () => {
 const [title, setTitle] = useState("App标题")
 const [ banners, setBsnners] = useState([])

 const getBsnners = async () => {
  const res = await fetch('https://zyxcl.xyz/music/api/banner')
  .then(res => res.json())
  console.log(res)
  setBsnners(res.banners)
 }

 useEffect(() => {
  getBsnners()
 },[])

  return (
    <div className="App">
      <h1>{title}</h1>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <hr />
      <Child />
      <div>
        <h2>banners</h2>
        {banners.map((item) => <p key={item}>{item.imageUrl}</p>)}
      </div>
    </div>
  );
};

export default App;
