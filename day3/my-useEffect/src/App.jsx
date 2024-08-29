import React from 'react';
import style from './App.module.scss';
import Search from './commpoents/search/Search';
import DefauList from './commpoents/defaultlist/DefauList';
import Suggest from './commpoents/suggest/Suggest';
import Result from './commpoents/result/Result';

const App = () => {
  const [listType, setListType] = useState('0');//0 0代表默认列表 1代表搜索建议，2代表搜索结果
  const [searchValue, setSearchValue] = useState('');//搜索内容
  return (
    <div className={style.App}>
      <Search 
      value={searchValue}
      />
      <DefauList />
      <Suggest />
      <Result />
    </div>
  );
};

export default App;