import Project from "./Project";
import {Stack} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {ProfileContext} from "../Profile";
import axios from "axios";
import Loading from "../../Shared/Loading";

export interface ProjectObject {
    id:          number;
    name:        string;
    description: string;
    link:        string;
    image:       string;
    added:       Date;
    userId:      string;
    user:        null;
}

function Projects(){
    const [projects, setProjects] = useState<ProjectObject[] | []>([]);
    const profile = useContext(ProfileContext);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() =>{
        axios.get<ProjectObject[]>("https://localhost:5001/api/Project/user/" + profile?.username)
            .then((response) => {
                setProjects(response.data);
            }).catch(error => {
                console.log(error);
            }).finally(() =>{
                setIsLoaded(true);
            })
    }, [])

    return(
        <Stack className="gap-2">
            {isLoaded ? projects.map((value) => {
                return <Project project={value}/>
            }) : <Loading/>}
        </Stack>
    )
}

export default Projects;