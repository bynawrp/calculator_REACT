import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CalculateProvider } from './context/CalcContext.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculateProvider>
     <App />
    </CalculateProvider>
  </StrictMode>,
)
