import React, { useState, useEffect } from 'react';
import  style from './App.module.scss';

const App = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('App标题');
  const [list, setList] = useState([ 1, 2, 3, 4, 5]);

  const handleCountChange = () => {
    setCount((prevcount) => prevcount + 1);
  };

  useEffect(() => {
    console.log('count changed to', count);
  });
 //delete
  const remove = (item) => {
    setList(list.filter((i) => i!== item));
  };
  // add
  const add = () => {
    setList([...list, Math.random()])
  }
  return (
    <div className={style.App}>
      <h1>{ title }</h1>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <hr />
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <p>count: {count}</p>
      <button onClick={handleCountChange}>Increment</button>
      <hr />
      <div>
        <h2>list</h2>
        <p>count: {list.length}</p>
        <button onClick={() => add()}>add</button>
        {list.map((item) => <p key={item}>{item}
          <button onClick= { () => remove(item)}>delet</button>
        </p>)}
      </div>
    </div>
  );
};
export default App;