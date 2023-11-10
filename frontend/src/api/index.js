import axios from "axios";

const Api = axios.create({
    baseURL: 'http://223.194.131.109:8000',
    timeout: 30000,
    params: {},
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    withCredentials: true,
});

export default Api;