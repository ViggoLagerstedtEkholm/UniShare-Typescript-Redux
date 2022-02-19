import axios from "axios";
import { API } from "../Shared/Constants";
import AuthAPI from './AuthAPI';

export interface IProfile {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    description: string;
    image?: any;
    age: number;
    email: string;
    visits: number;
    lastOnline: Date;
    joined: Date;
    gitHub?: any;
    linkedIn?: any;
}

export async function FetchUser(username: string): Promise<IProfile | never> {
    const promise = axios.get(API + "/user/" + username);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export async function FetchProfile(username: string): Promise<IProfile | never>  {
    const promise = axios.get(API + "/Profile/" + username);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export async function FetchImage(username: string) {
    const promise = axios.get(API + "/Profile/image/get/" + username);
    return promise.then((response) => response).catch(() => Promise.reject());
}

export async function UploadImage(image: any) {
    const promise = AuthAPI.post(API + "/Profile/image/upload", image,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    return promise.then((response) => response).catch(() => Promise.reject());
}

export async function AppendVisit(profileID: string) {
    const promise = axios.post(API + "/Profile/append/" + profileID);
    return promise.catch(() => Promise.reject());
}

export async function CanSeeEdits(username: string, user: any) {
    let canSeeProfileEdits = false;
    if (user !== null) {
        const currentLoggedInUsername = user.Username;
        if (currentLoggedInUsername === username) {
            canSeeProfileEdits = true;
        }
    }
    return canSeeProfileEdits;
}

export async function CanRemoveCommentProfile(authorId: string, user: any) {
    let canSeeProfileEdits = false;
    if (user !== null) {
        const userId = user.Id;
        if (userId === authorId) {
            canSeeProfileEdits = true;
        }
    }
    return canSeeProfileEdits;
}
