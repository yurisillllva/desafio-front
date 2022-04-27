import axios from "axios";

//http://localhost:3000/products

//Base URL > https://localhost:3000/

//products  (Todos os produtos)

//products/1  (Para trazer um especifíco)

const api = axios.create({
    baseURL: 'https://localhost:3000/'
})

export default api;