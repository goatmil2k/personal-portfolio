import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  //this main.jsx is used for wrapping the App component in various component modes
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
