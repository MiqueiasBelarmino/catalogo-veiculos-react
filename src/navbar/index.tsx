import './style.css'
import {ReactComponent as Logo} from '../assets/img/logo.svg'

function Navbar(){
    return (
        <nav className="main-navbar">
            <Logo/>
            <a href="home" className="logo-text">VeHero</a>
        </nav>
    )
}

export default Navbar;