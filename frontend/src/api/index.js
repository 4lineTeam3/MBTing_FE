import axios from "axios";

const Api = axios.create({
    baseURL: 'http://192.168.0.41:8000',
    timeout: 30000,
    params: {},
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    withCredentials: true,
});

export default Api;