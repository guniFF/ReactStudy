import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import Library from './chapter_03/Library.jsx'
// import Clock from './chaptor_04/Clock'
import CommentList from './chaptet_05/CommentList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CommentList />
  </StrictMode>,
)