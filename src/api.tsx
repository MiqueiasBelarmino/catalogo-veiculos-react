import axios from "axios";

const URL = 'https://catalogo-veiculos.herokuapp.com/api';

export function fetchVehicles() {
    return axios(`${URL}/vehicles/`)
}