import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home';
import Catalog from './catalog';

function RouterComponent(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' caseSensitive={false} element={<Home/>}/>
                <Route path='/catalog' caseSensitive={false} element={<Catalog/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterComponent;