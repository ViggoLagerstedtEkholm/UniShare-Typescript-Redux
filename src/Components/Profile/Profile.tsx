import {useParams} from "react-router-dom";
import {Container, Stack} from "react-bootstrap";
import PortfolioBox from "./PortfolioBox";
import Details from "./Details";
import {createContext, useEffect, useState} from "react";
import axios from "axios";
import Loading from "../Shared/Loading";
import NotFound from "../Shared/NotFound";

export interface Profile {
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

export const ProfileContext = createContext<Profile | null>(null);

function Profile(){
    const {id} = useParams();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [missing, setMissing] = useState(false);

    useEffect(() =>{
        axios.get<Profile>("https://localhost:5001/api/Profile/" + id)
            .then((response) => {
                setProfile(response.data);
            }).catch(() => {
                setMissing(true);
            }).finally(() => {
                setIsLoaded(true);
            })

        if(id){
            axios.post("https://localhost:5001/api/Profile/append/" + id).then(r => console.log(r));
        }
    }, [])

    if(missing){
        return <NotFound/>
    }

    if(!isLoaded){
        return (
            <Container className="d-flex flex-row justify-content-center align-items-center h-100">
                <Loading/>
            </Container>
        )
    }

    return(
        <ProfileContext.Provider value={profile}>
            <Container>
                <Stack className="gap-4">
                    <Details/>
                    <PortfolioBox/>
                </Stack>
            </Container>
        </ProfileContext.Provider>
    )
}

export default Profile;