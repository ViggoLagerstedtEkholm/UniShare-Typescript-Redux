import { API } from "../Shared/Constants";
import AuthAPI from './AuthAPI';

export interface IProject {
    file: Blob;
    link: string;
    name: string;
    description: string;
}

export async function AddProject(project: IProject) {
    const formData = new FormData();
    formData.append('file', project.file);
    formData.append('link', project.link);
    formData.append('name', project.name);
    formData.append('description', project.description);

    const promise = AuthAPI.post(API + "/Project/upload", formData,  {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export async function UpdateProject(project: IProject) {
    const promise = AuthAPI.post(API + "/Project/update", project);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export async function GetProjects(profileID: string) {
    const promise = AuthAPI.get(API + "/Project/user/" + profileID);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export async function DeleteProject(projectID: string) {
    const promise = AuthAPI.post(API + "/Project/delete/" + projectID);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export async function CheckIfProjectExists(projectID: string) {
    const promise = AuthAPI.get(API + "/Project/" + projectID);
    return promise.then((response) => response).catch(() => Promise.reject());
}