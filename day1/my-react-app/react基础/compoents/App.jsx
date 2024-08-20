
import './App.css'
import { Component } from 'react'

class App extends Component {
  state = {
    title: 'Hello World',
    count: 0,
    arr: [1, 2, 3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,3],
    arr1: {
      tab1: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaec",
      ],
      tab2: ["Sorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaec",
      ],
      tab3: ["Yorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaec",
      ],
      tab4: ["Qorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaec",
      ],
    },
    table: ['tab1', 'tab2', 'tab3', 'tab4'],
    activeTab: 'tab1',
  };
  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div className='App'>
        <h1>{this.state.title}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <p>Count: {this.state.count}</p>
        <ul>
          {this.state.arr.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className='table'>
          {/* tab切换 */}
          <div className='tab'>
            {this.state.table.map((tab,index) => (
              <button
                key={index}
                onClick={() => this.handleTabChange(tab)}
                style={{ background: activeTab === tab ? "red" : "" }}
              >
                {tab}
              </button>
            ))}
    
          </div>
          {/* tab内容 */}
          <div className='content'>
            {  this.state.arr1[activeTab].map((item, index) => (
              <div key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App
