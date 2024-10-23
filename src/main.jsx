import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import NavBar from './components/Navbar'

function App() {
  return (
    <div className='App'>

    </div>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App> 
  </StrictMode>,
)
