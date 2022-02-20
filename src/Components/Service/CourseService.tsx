import axios from "axios";
import { API } from "../Shared/Constants";
import AuthAPI from './AuthAPI';

export async function CheckIfCourseExists(courseID: number) {
    const promise = axios.get(API + "/Course/" + courseID);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export async function UpdateCourse(request: number) {
    const promise = AuthAPI.post(API + "/Course/update", request);
    return promise.catch(error => Promise.reject(error));
}

export async function GetStatistics(courseID: number) {
    const promise = AuthAPI.get(API + "/Course/statistics/" + courseID);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export async function GetGraphData(courseID: number) {
    const promise = AuthAPI.get(API + "/Course/graph/" + courseID);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export async function SetRating(courseID: number, rating: number) {
    const promise = AuthAPI.post(API + "/Course/set/rating", { Id: courseID, Score: rating });
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export async function GetRating(courseID: number) {
    const promise = AuthAPI.get(API + "/Course/get/rating/" + courseID);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}

export async function ToggleCourseToDegree(courseID: number) {
    const promise = AuthAPI.post(API + "/Degree/toggle/" + courseID);
    return promise.then((response) => response.data).catch(() => Promise.reject());
}