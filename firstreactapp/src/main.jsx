import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import List from './List.jsx'
import Karthick from './Karthick.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Karthick />
    {/* <List/> */}
  </StrictMode>,
)
