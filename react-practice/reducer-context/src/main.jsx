import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TaskApp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskApp />
  </StrictMode>,
)
