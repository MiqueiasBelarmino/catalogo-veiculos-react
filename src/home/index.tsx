import './style.css'
import {ReactComponent as HomeImage} from '../assets/img/home-image.svg'
import Footer from '../footer';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <>
            <div className='home-container'>
                <div className='home-content'>
                    <div className="home-description">
                        <h1>Encontre os melhores<br/>veículos aqui</h1>
                        <h3>Facilitamos  a compra do seu veículo</h3>
                        <Link to="/catalog" className='home-btn-order'>Catálogo</Link>
                    </div>
                    <div className="home-image">
                        <HomeImage/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;