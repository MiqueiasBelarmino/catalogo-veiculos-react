import { useState, useRef } from 'react';
import './style.css'

function FormVehicle(){

    const [name, setName] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState("");
    const [year, setYear] = useState("");
    const [photo, setPhoto] = useState("");
    
    const handleSubmit = (event:any) =>{
        event.preventDefault();
        console.log(photo);
    }

    return (
        <div className="form-vehicle-container">
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <div className="input-area">
                            <input 
                                type="text" name='name' value={name}
                                onChange={(e) => setName(e.target.value)} placeholder="Nome" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="input-area">
                            <input 
                                type="text" name='model' value={model} 
                                onChange={(e) => setModel(e.target.value)} placeholder="Modelo" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="input-area">
                            <select name="brand" id="">
                                <option value="Audi">Audi</option>
                                <option value="Bmw">Bmw</option>
                                <option value="Chevrolet">Chevrolet</option>
                                <option value="Ford">Ford</option>
                                <option value="Honda">Honda</option>
                                <option value="Hyundai">Hyundai</option>
                            </select>
                        </div>
                    </div>
                    <div className="field">
                        <div className="input-area">
                            <input type="text" name='price' value={price} 
                            onChange={(e) => setPrice(e.target.value)} placeholder="Preço" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="input-area">
                            <input type="number" name='year' value={year} 
                            onChange={(e) => setYear(e.target.value)} placeholder="Ano" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="input-area">
                            <input type="file" name='photo' value={photo}
                                onChange={(e) => setPhoto(e.target.value)} placeholder="" />
                        </div>
                    </div>
                    <input type="submit" value="Salvar" />
                </form>
            </div>
        </div>
    )
}

export default FormVehicle;