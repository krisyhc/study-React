import React, { useEffect, useRef, useState} from 'react';
import style from './Search.module.scss';

const Search = (props) => {
  const [ show, setShow ] = useState(false);
  const inRef = useRef();

  useEffect(() => {
    if (show) {
      inRef.current.focus()
    }
  }, [show])

  useEffect(() => {
    if (props.value.length > 0) {
      setShow(true)
    }
  }, [props.value])

  return (
    <div className={style.search}>
      {show?
      <div className={style.inputBar}>
      <input type="text" 
      ref={inRef}
      placeholder='请输入要搜索的歌曲/歌手'
      value={props.value}
      onChange={
        e => {
          props.onChange(e.target.value);
        }
      }
      />
      <span onClick={() => {
        setShow(false)
        props.onCancel()
      }}></span>
    </div>
    :
    <div className={style.bar} onClick={() => setShow(true)}>请输入要搜索的歌曲/歌手</div>
    }
    </div>
  );
};

export default Search;