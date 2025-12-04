import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CardPerfil from './components/CardPerfil.jsx'
import BotaoVazado from './components/BotaoVazado.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardPerfil/>
    <BotaoVazado/>
  </StrictMode>,
)
