import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CurrencyConvertor from './CurrencyConvertor'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CurrencyConvertor />
  </StrictMode>,
)
