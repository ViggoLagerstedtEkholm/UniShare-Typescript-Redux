import {useParams} from "react-router-dom";
import {Container, Stack} from "react-bootstrap";
import PortfolioBox from "./PortfolioBox";
import Details from "./Details";
import {createContext, useEffect, useState} from "react";
import Loading from "../Shared/Loading";
import NotFound from "../Shared/NotFound";
import CommentSearch from "../Comments/CommentSearch";
import { AppendVisit, FetchProfile, FetchUser, IProfile } from "../Service/UserService";

export const ProfileContext = createContext<IProfile | null>(null);

function Profile(){
    const {id} = useParams();
    const [profile, setProfile] = useState<IProfile | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [missing, setMissing] = useState(false);

    useEffect(() =>{
        if(id){
            FetchProfile(id)    
            .then((response) => {
                setProfile(response);
            }).catch(() => {
                setMissing(true);
            }).finally(() => {
                setIsLoaded(true);
            })
    
            AppendVisit(id);
        }
    }, [id])

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
                    {id && <CommentSearch username={id}/>}
                </Stack>
            </Container>
        </ProfileContext.Provider>
    )
}

export default Profile;