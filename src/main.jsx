import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Tasksprovider } from './contextApi/TasksContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tasksprovider>
      <App />
    </Tasksprovider>
  </StrictMode>,
)
