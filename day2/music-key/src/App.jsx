import { useEffect, useRef, useState} from'react';
import style from './App.module.scss';
import Keyboard from "./commponts/keyboard/Keyboard.jsx";
import Control from "./commponts/control/Control.jsx";
import axios from 'axios';
const App = () => {
  const [data, setData] = useState([]);
  const [power, setPower] = useState(true);
  const [banck, setBanck] = useState(false);
  const [title, setTitle] = useState('');
  const [volume, setVolume] = useState(50);

  // 创建播放器对象
  const audioRef = useRef(new Audio());

  // 获取接口
  useEffect(() => {
    axios.get('https://zyxcl.xyz/exam_api/music/list')
      .then(res => {
        setData(res.data.value)
      })
  },[])

  // 修改高亮
  const play = (item) => {
    setData(data.map(v => {
      if (item.id === v.id) {
        return {
          ...v,
          isDown:true
        }
      }
      return v;
    }))
    if (power) {
      setTitle(item.id)
      audioRef.current.src = banck ? item.bankUrl : item.url;
      audioRef.current.onloadeddata = () => {
        audioRef.current.play();
      };
    }
  }
  
  // 键盘事件
  const KeyboardEvent = (item) => {
    setData(data.map(v => {
      if (item.id === v.id) {
        return {
       ...v,
          isDown:false
        }
      }
      return v;
    }))
  }
   
  useEffect(() => {
    if(!power) {
      setTitle('')
    }
  }, [power])

  useEffect(() => {
    audioRef.current.volume = volume / 100;
  }, [volume])


  return (
    <div className={style.App}>
      <Keyboard  data={data}
        play={play}
        KeyboardEvent={KeyboardEvent}
        power={power}
      />
      <Control 
        power={power}
        setPower={setPower}
        banck={banck}
        setBanck={setBanck}
        title={title}
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  );
};

export default App;