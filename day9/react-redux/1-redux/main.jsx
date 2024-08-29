import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {HashRouter, BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <App />
  </BrowserRouter>
)
