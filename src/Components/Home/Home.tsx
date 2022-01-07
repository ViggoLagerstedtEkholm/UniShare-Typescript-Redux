import React, {createContext, useEffect, useState} from "react";
import {Stack} from "react-bootstrap";
import Overview from "./Overview";
import ShowcaseUser from "../Shared/ShowcaseUser";
import {useAuthContext} from "../Context/AuthContext";
import axios from "axios";
import Courses from "./Courses/Courses";

export interface Course {
    id: number;
    name: string;
    credits: number;
    university: string;
    rating: number;
    city: string;
    country: string;
    added: Date;
    code: string;
    link: string;
    inActiveDegree: boolean;
}

export interface Statistics {
    people: number;
    courses: number;
    topCourses: Course[];
}

export const OverviewContext = createContext<Statistics | null>(null);

function Home() {
    const {isLoggedIn} = useAuthContext();
    const [data, setData] = useState<Statistics | null>(null);

    useEffect(() => {
        axios.get<Statistics>("https://localhost:5001/api/Home/statistics")
            .then((response) => {
                setData(response.data);
            }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <OverviewContext.Provider value={data}>
            <Stack className="gap-4">
                {
                    isLoggedIn ? <ShowcaseUser/> : <h2>Hello! Welcome to UniShare</h2>
                }
                <Overview courses={data?.courses} users={data?.people}/>
                <Courses/>
            </Stack>
        </OverviewContext.Provider>
    );
}

export default Home;
