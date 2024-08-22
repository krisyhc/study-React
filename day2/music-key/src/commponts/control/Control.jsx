
import style from './control.module.scss';
import Switch from '../switch/Switch.jsx';
import Range from '../range/Range.jsx';

const control = (props) => {
  return (
    <div className={style.control}>
      <Switch checked={props.power} onChange={props.setPower}>Power</Switch >
      <p className={style.text}>{props.title}</p>
      <Range value={props.volume} onChange={props.setVolume} />
      <Switch checked={props.banck} onChange={props.setBanck}>Banck</Switch>
    </div>
  );
};

export default control;