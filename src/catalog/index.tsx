import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchVehicles } from '../api';
import { Vehicle } from '../types';
import CatalogHeader from './catalogHeader';
import './style.css'
import VehiclesList from './vehiclesList';

function Catalog(){

    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    console.log(vehicles);
    useEffect(()=>{
        fetchVehicles()
        .then(response => setVehicles(response.data))
        .catch(error => console.log(error))
    },[])

    return (
        <div>
            <CatalogHeader total={vehicles.length}/>
            <VehiclesList vehicles={vehicles}/>
        </div>
    )
}

export default Catalog;