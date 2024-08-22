import React, { useEffect } from'react';
import style from './keyboard.module.scss';
import classNames from 'classnames';

const keyboard = (props) => {


  useEffect(() => {
    const keydown = e => {
      const item = props.data.find(v => v.keyCode === e.keyCode)
      if (item) {
        props.play(item)
      }
    }
    const KeyboardEvent= e => {
      const item = props.data.find(v => v.keyCode === e.keyCode)
      if (item) {
        props.KeyboardEvent(item)
      }
    }
    document.addEventListener('keydown', keydown)
    document.addEventListener('keyup', KeyboardEvent)
    return () => {
      document.removeEventListener('keydown', keydown)
      document.removeEventListener('keyup', KeyboardEvent)
    }
  },[props.data])



  return (
    <div className={style.keyboard}>
      { props.data.map(item =>
        <div className={classNames(style.key,{
          [style.down]:item.isDown,
          [style.light]:item.isDown && props.power,
        })}
        key={item.id}
        onMouseDown={() => props.play(item)}
        onMouseUp={() => props.KeyboardEvent(item)}
        >{item.keyTrigger}</div>
      )}
    </div>
  );
};

export default keyboard;