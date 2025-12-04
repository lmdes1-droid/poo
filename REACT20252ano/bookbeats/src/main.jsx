import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageLogin from './pages/PageLogin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PageLogin />
  </StrictMode>,
)
