import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // OBRIGATÓRIO: Este arquivo deve ter as 3 linhas do @tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)