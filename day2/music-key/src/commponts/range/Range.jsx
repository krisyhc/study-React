import React,{ useEffect, useRef, useState} from 'react';
import style from './range.module.scss';


const Range = (props) => {
  const [left,setleft] = useState(0);
  const [ maxLeft, setMaxLeft] = useState(0);
  const isDown = useRef(false);
  const rangeRef = useRef(null);

  const mouseDown = (e) => {
    isDown.current = true;
  }

  useEffect(() => {
    const rangeInfo = rangeRef.current.getBoundingClientRect()
    const maxLeft = rangeInfo.width - 10;
    setMaxLeft(maxLeft);
    const mousemove = (e) => {
      if(isDown.current){
        let left = e.clientX - rangeInfo.left - 5;
       // 优化后的代码
        left > maxLeft && (left = maxLeft);
        left < 0 && (left = 0);

        setleft(left);
        props.onChange(Math.floor( left / maxLeft * 100));
      }
    }
    const mouseup = () => {
      isDown.current = false;
    }
    document.addEventListener('mousemove',mousemove);
    document.addEventListener('mouseup',mouseup);
    
    return () => {
      document.removeEventListener('mousemove',mousemove);
      document.removeEventListener('mouseup',mouseup);
    }
  },[])
   
    // 在组件挂载后，使用 useEffect 来响应 props.value 的变化
  useEffect(() => {
    // 获取 ref 对应的 DOM 元素，使用 getBoundingClientRect() 方法获取其位置和尺寸信息
    const rangeInfo = rangeRef.current.getBoundingClientRect()
    // 根据获取到的 width - 10，计算 maxLeft 的值
    const maxLeft = rangeInfo.width - 10;
    setleft(props.value / 100 * maxLeft)

  },[props.value])

 
 

  return (
    <div className={style.range} ref={rangeRef}>
      <i style={ {left} } onMouseDown={mouseDown}></i>
      <p style={{ width:left }}>
        <span style={{width:maxLeft}}></span>
      </p>
    </div>
  );
};

export default Range;