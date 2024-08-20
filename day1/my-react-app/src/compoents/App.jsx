import './App.scss';
import { Component } from 'react';



class App extends Component {
   state = {
    title: '来，说说你在做什么？想什么',
    arrimg:[
      '../public/face1.gif',
      '../public/face2.gif',
      '../public/face3.gif',
      '../public/face4.gif',
      '../public/face5.gif',
      '../public/face6.gif',
      '../public/face7.gif',
      '../public/face8.gif',
    ],
    arrlist:[
      {
        img:'../public/face1.gif',
        name:'永不上线',
        text:'新增广告删除功能。',
        time:'8月19日 20:50',
      },
      {
        img:'../public/face2.gif',
        name:'永不上线',
        text:'新增广告删除功能。',
        time:'8月19日 20:50',
      },
      {
        img:'../public/face3.gif',
        name:'永不上线',
        text:'新增广告删除功能。',
        time:'8月19日 20:50',
      },
    ],
    form: {
      name: '',
      text: '',
      time: new Date().toLocaleString(),
      img: '',
    },
    selectedImg:0,


  }
  // 处理输入变化
  changeForm = (key, val) => {
    const newForm = {...this.state.form };
    newForm[key] = val;
       // 计算输入框中内容的长度
    const remainingLength = 140 - val.length; 

    // 使用setState更新组件的状态
    this.setState({ 
        // 更新form状态为新的表单对象
        form: newForm, 
        // 更新remainingLength状态为计算后的值
        remainingLength });

  }
   // 处理用户选择头像
   selectImage = (index) => {
    this.setState({
      selectedImg: index
    });
  };
//   处理发布
  handlePost = () => {
    const { form,selectedImg} = this.state;
    if (form.name.trim() === '' || form.text.trim() === '') {
      alert('请输入用户名和内容');
      return;
    }
       // 创建一个新的表单对象，通过解构赋值的形式复制已有表单对象的值
    const newForm = {
    ...form,
      // 将选中的图片赋值给新表单对象的img属性
      img: this.state.arrimg[selectedImg]
    };
    // 通过setState更新组件状态，prevState表示组件的前一个状态
    this.setState(prevState => ({
     // 数组解构赋值，创建一个新的数组。newForm作为第一个元素，prevState.arrlist作为第二个元素井以后的元素
      arrlist: [newForm,...prevState.arrlist]
    }));

    this.setState({ form: { name: '', text: '', time: new Date().toLocaleString(), img: '' },selectedImg:0});
  }
   // 删除列表项的方法
     /**
    * 删除列表项的函数
    * @param {number} index - 要删除的列表项的索引
    */
   deleteListItem = (index) => {
    // 使用 filter() 方法创建一个新的数组，该数组不包含旧数组中索引为 index 的项
    const updatedList = this.state.arrlist.filter((item, idx) => idx!== index);
    // 通过 setState() 方法更新组件的状态，将新的数组设置为 arr1 属性的值
    this.setState({ arrlist: updatedList });
  }



  render() {
    const { form,selectedImg} = this.state;
    return (
      <div className= 'App'>
        <div className='header'>
          <h3>{this.state.title}</h3>
          <div className="user">
            <input type="text"  className='username' value={form.name.trim()} onChange={e => this.changeForm('name',e.target.value)}/>
            <div className="userimg">
              {this.state.arrimg.map((item, index) => 
                <img key={index} src={item} alt=""
                 onClick={() =>this.selectImage(index)}
                 className={selectedImg === index ? 'active' : ''}
                />
              )}
            </div>
          </div>
          <textarea className='textarea' placeholder='请输入内容' value={form.text.trim()} onChange={e => this.changeForm('text',e.target.value)}/>
          <div className="header-foot">
            {
              this.state.remainingLength < 0? <span className='red'>字数超过<i>{Math.abs(this.state.remainingLength)}</i>字</span> 
              : <span className='green'>还可以输入<i>{this.state.remainingLength}</i>字</span>
            }
            <button onClick={this.handlePost} >发布</button>
          </div>
        </div>
        <div className="content">
          <div className="content-title">
            <p>大家再说</p>
          </div>
          <div className="content-main">
            {this.state.arrlist.map((item,index)=>
            <div key={index} className='list'>
              <img src={item.img} alt=''/>
              <div className="list-text">
                <div className='text'>
                  <span>{item.name}:</span>
                  <p>{item.text}</p>
                </div>
                <div className='time'>
                  <span>{item.time}</span>
                  <span className='delet'
                   onClick={() => this.deleteListItem(index)} // 点击时调用deleteListItem
                  >删除</span>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}


export default App;