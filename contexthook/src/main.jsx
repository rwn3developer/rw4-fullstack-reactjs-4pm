import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Counter } from './context/CounterContext.jsx'



createRoot(document.getElementById('root')).render(
  <Counter>
    <App />
  </Counter>
)
