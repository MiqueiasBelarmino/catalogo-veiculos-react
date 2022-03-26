import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Catalog from './Catalog';
import FormVehicle from './FormVehicle';

function RouterComponent(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' caseSensitive={false} element={<Home/>}/>
                <Route path='/catalog' caseSensitive={false} element={<Catalog/>}/>
                <Route path='/add-vehicle' caseSensitive={false} element={<FormVehicle/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent;