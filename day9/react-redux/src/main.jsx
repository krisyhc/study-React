import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {HashRouter, BrowserRouter } from 'react-router-dom'
import store from './store'
import { Provider } from'react-redux'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
