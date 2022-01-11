import {Spinner, Stack} from "react-bootstrap";
import Degree from "./Degree";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {ProfileContext} from "../Profile";

export interface IDegree {
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

export interface RootObject {
    degree: IDegree;
    courses: ICourse[];
    totalCredits: number;
}

function Degrees(){
    const profile = useContext(ProfileContext);
    const [data, setData] = useState<RootObject[] | null>(null);

    useEffect(() =>{
        if(profile?.username)
            axios.get<RootObject[]>('https://localhost:5001/api/Degree/user/' + profile?.username)
                .then(response => setData(response.data))
                .catch(error => console.log(error));
    }, [])

    return(
        <Stack className="gap-2">
            {!data && <Spinner animation="grow" variant="light" className="m-auto my-3"/>}

            {
                data?.map((value, index) =>{
                   return <Degree RootObj={value} key={index}/>
                })
            }
        </Stack>
    )
}

export default Degrees;