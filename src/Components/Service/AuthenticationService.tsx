import {API} from "../Shared/Constants";
import axios from "axios";
import AuthAPI from './AuthAPI';

interface ILoginPayload {
    email: string,
    password: string
}

export async function LoginToAccount (credentials: ILoginPayload){
    const promise = axios.post(API + "/Authentication/Login", credentials);
    return promise.then(response => response).catch(() => Promise.reject("Could not login!"));
}

interface IRegisterPayload {
    username: string,
    email: string,
    password: string,
    age: number,
    firstname: string,
    lastname: string,
}

export async function RegisterAccount (credentials: IRegisterPayload){
    const promise = axios.post(API + "/Authentication/Register", credentials);
    return promise.then(() => null).catch((error) => Promise.reject(error.response.data));
}

/*
export const VerifyEmail = (credentials) =>{
    const promise = axios.post(API + "/Authentication/Verify", credentials);
    return promise.then(() => null).catch((error) => Promise.reject(error.response.data));
}
*/


/*
export const DeleteUser = () =>{
    const promise = AuthAPI.post(API + "/Authentication/Delete/Account");
    return promise.then(() => null).catch((error) => Promise.reject(error.response.data));
}
*/