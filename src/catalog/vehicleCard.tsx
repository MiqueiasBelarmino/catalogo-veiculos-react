import { Vehicle } from '../types';

type Props = {
    vehicle: Vehicle;
}

function currencyFormatter(price: number){
    const formatter = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
    return formatter.format(price);
}

function VehicleCard({vehicle}: Props){
    return (
        <div className="card catalog-card-container">
            <img src={vehicle.photo} alt="" />
            <div className="card-body">
                <h3 className="card-title catalog-card-title">{vehicle.brand} {vehicle.name}</h3>
                <div className="catalog-card-description">
                    <p>{vehicle.year} • 18.000km • São Paulo</p>
                </div>
                <h3 className="catalog-card-price">{currencyFormatter(vehicle.price)}</h3>
            </div>
        </div>
    )
}

export default VehicleCard;