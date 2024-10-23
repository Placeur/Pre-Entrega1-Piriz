import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'


function NavBar() {
    return (
        <ul className="nav-links">
            <li>
                <a href="#"><Inicio></a>
            </li>
            <li>
                <a href="#"><Productos></a>
            </li>
            <li>
                <a href="#"><Servicios></a>
            </li>
        </ul>
    )
}
export default NavBar;