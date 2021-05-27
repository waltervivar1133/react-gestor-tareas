import axios from 'axios';


const clientesAxios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
});

export default clientesAxios;