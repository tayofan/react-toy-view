import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { saveToken, setHeadersToken } from "./token";

const instance = axios.create({
    baseURL: `http://localhost:8080`,
    timeout: 10000
});

instance.interceptors.request.use(
    
    (config) => {
        return setHeadersToken(config);
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }

);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const e = error;
        if(e.response.status === 400) {
            saveToken(e.response.headers.authorization,e.response.headers.refreshtoken);

            setHeadersToken(e.config)
            const response = await axios.request(e.config);
            return response;
        }
        console.log('axios_interceptors_error');
        localStorage.clear();
        return window.location.href = '/loginPage';
    }
);

export default instance;