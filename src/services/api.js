import axios from 'axios';

const api = axios.create({
    baseURL: 'https://apmob.herokuapp.com:3000'
});

export default api;
