import axios from "axios";
import {API} from "../Shared/Constants";
import {STORED_VALUES} from "../Shared/useLocalStorage";

const instance = axios.create({
    baseURL: API,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem(STORED_VALUES.TOKEN) as string);

        if (token) {
            config.headers["Authorization"] = 'Bearer ' + token; //Attach token to header.
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export interface RefreshToken {
    token: string;
    refreshToken: string;
    success: boolean;
    errors?: any;
}

instance.interceptors.response.use((res) => {
        return res;
    },
    async (err) => {

        const originalConfig = err.config;
        const refreshToken = JSON.parse(localStorage.getItem(STORED_VALUES.REFRESH_TOKEN) as string);
        const token = JSON.parse(localStorage.getItem(STORED_VALUES.TOKEN) as string);

        if (originalConfig.url !== "/api/Authentication/login" && err.response) {
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;

                try {
                    const response = await instance.post<RefreshToken>("https://localhost:5001/api/Authentication/RefreshToken", {
                        token: token,
                        refreshToken: refreshToken
                    });

                    const data = response.data;
                    if (data.success) {
                        localStorage.setItem(STORED_VALUES.TOKEN, JSON.stringify(data.token));
                        localStorage.setItem(STORED_VALUES.REFRESH_TOKEN, JSON.stringify(data.refreshToken));
                    }

                    return instance(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }

        return Promise.reject(err);
    }
);

export default instance;