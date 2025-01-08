import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import Library from './chapter_03/Library.jsx'
import Clock from './chaptor_04/Clock'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Clock />
    <div>아아아</div>
  </StrictMode>,
)