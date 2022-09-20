import axios from "axios";

const api = axios.create({
    baseURL: 'https://rochas-server-production.up.railway.app/'
})


export default api