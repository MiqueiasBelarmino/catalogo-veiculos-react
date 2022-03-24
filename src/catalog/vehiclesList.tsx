import { Vehicle } from "../types";
import VehicleCard from "./vehicleCard";

type Props = {
    vehicles: Vehicle[];
}

function VehiclesList({vehicles}:Props){
    return (
        <div className="catalog-list-container">
            <div className="catalog-list-items">
                {vehicles.map(item => (
                    <VehicleCard key={item.id} vehicle={item}/>
                ))}
            </div>
        </div>
    )
}

export default VehiclesList;