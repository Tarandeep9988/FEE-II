import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LearningJSX from './components/LearningJSX'
import CardBox from './components/CardBox'
import { TernaryOperators } from './components/TernaryOperators'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardBox />
    </StrictMode>
)

