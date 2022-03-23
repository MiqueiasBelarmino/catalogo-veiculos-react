import './style.css'
import { ReactComponent as GitHubIcon} from '../assets/img/github.svg'

function Footer(){
    return (
        <footer className='home-footer'>
            Aprendendo Spring + React
            <div className="footer-icons">
                <div className="footer-icons-container">
                    <GitHubIcon/>
                    <a href="https://github.com/MiqueiasBelarmino/catalogo-veiculos-spring" target='_new' className='footer-link'>/catalogo-veiculos-spring</a>
                </div>
                <div className="footer-icons-container">
                    <GitHubIcon/>
                    <a href="https://github.com/MiqueiasBelarmino/catalogo-veiculos-react" target='_new' className='footer-link'>/catalogo-veiculos-react</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;