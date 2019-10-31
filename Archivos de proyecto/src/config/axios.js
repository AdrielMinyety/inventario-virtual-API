import axios from 'axios';

const clientesAxios = axios.create({
    baseURL: 'https://my-json-server.typicode.com/AdrielMinyety/inventario-virtual-API/'
})

export default clientesAxios;