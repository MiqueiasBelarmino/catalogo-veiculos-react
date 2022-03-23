import './style.css'
import {ReactComponent as Logo} from '../assets/img/logo.svg'

function Navbar(){
    return (
        <nav className="main-navbar">
            <Logo/>
            <a href="dashboard" className="logo-text">Catálogo Veículos</a>
        </nav>
    )
}

export default Navbar;