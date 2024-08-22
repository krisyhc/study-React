
import style from './switch.module.scss';
import classNames from 'classnames';
const Switch = (props) => {

  return (
    <div className={style.switch}>
      <b>{ props.children}</b>
      <p onClick={ () => props.onChange(!props.checked)} >
        <span className={ classNames({ [style.on]:props.checked })}></span>
      </p>
    </div>
  );
};

export default Switch;