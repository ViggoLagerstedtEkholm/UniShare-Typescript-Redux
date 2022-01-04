import axios from "axios";
import {API} from "../Shared/Constants";

const instance = axios.create({
    baseURL: API,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = 'Bearer ' + "ACCESS TOKEN"; //Attach token to header.

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use((res) => {return res;},
    async (err) => {

        //TODO

        return Promise.reject(err);
    }
);

export default instance;