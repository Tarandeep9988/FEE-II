import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CardBox from './components/CardBox'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardBox />
  </StrictMode>,
)
