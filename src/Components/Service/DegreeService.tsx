import AuthAPI from './AuthAPI';
import { API } from "../Shared/Constants";
import axios from 'axios';

export interface IDegree {
    name: string;
    fieldOfStudy: string;
    startDate: string;
    endDate: string;
    country: string;
    city: string;
    university: string;
}

export async function UploadDegree(degree: IDegree) {
    const degreeData = new FormData();
    degreeData.append('Name', degree.name);
    degreeData.append('Field', degree.fieldOfStudy);
    degreeData.append('StartDate', degree.startDate);
    degreeData.append('EndDate', degree.endDate);
    degreeData.append('Country', degree.country);
    degreeData.append('City', degree.city);
    degreeData.append('University', degree.university);

    const promise = AuthAPI.post(API + "/Degree/upload", degreeData);
    return promise.then((response) => console.log(response)).catch((error) => Promise.reject(error));
}

export async function DeleteDegree(ID: string) {
    const promise = AuthAPI.post(API + "/Degree/delete/" + ID);
    return promise.then(() => null).catch(() => Promise.reject());
}

export async function UpdateDegree(degree: IDegree) {
    const promise = AuthAPI.post(API + "/Degree/update", degree);
    return promise.then(() => null).catch(() => Promise.reject());
}

export interface IDegreeResponse {
    id: number;
    name: string;
    field: string;
    startDate: Date;
    endDate: Date;
    city: string;
    university: string;
    country: string;
    activeDegreeUser?: any;
    user?: any;
    courses?: any;
}

export interface ICourse {
    id: number;
    name: string;
    credits: number;
    added: Date;
    country: string;
    city: string;
    university: string;
    description: string;
    code: string;
    link: string;
    degrees?: any;
    ratings?: any;
    reviews?: any;
}

export interface IDegrees{
    degree: IDegreeResponse;
    courses: ICourse[];
    totalCredits: number;
}

export async function GetDegrees(username: string): Promise<IDegrees[] | never> {
    const promise = axios.get(API + "/Degree/user/" + username);
    return promise.then(response => response.data).catch(() => Promise.reject());
}

export async function CheckIfDegreeExist(degreeID: string): Promise<boolean | never> {
    const promise = AuthAPI.get(API + "/Degree/" + degreeID);
    return promise.then(response => response.data).catch(() => Promise.reject());
}

export async function RemoveCourseFromDegree(courseID: string) {
    const promise = AuthAPI.post(API + "/Degree/toggle/" + courseID);
    return promise.then(() => null).catch(() => Promise.reject());
}