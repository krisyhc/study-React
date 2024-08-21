import { Component } from 'react';
import  style from './App.module.scss';

class App extends Component {
   state = {
    date: new Date().toString().slice(0,15)
   }
  


  render() {
    console.log(this.state.date)
    return (
      <div className= {style.App}>
        <div className={style.date}>
            <span>{this.state.date}</span>
        </div>
        <div className={style.title}>
            <span>6task</span>
        </div>
      </div>
    );
  }
}


export default App;