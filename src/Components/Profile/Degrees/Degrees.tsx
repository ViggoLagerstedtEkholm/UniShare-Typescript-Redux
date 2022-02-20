import {Spinner, Stack} from "react-bootstrap";
import Degree from "./Degree";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {ProfileContext} from "../Profile";
import { GetDegrees, IDegrees } from "../../Service/DegreeService";

function Degrees(){
    const profile = useContext(ProfileContext);
    const [data, setData] = useState<IDegrees[] | null>(null);

    useEffect(() =>{
        if(profile?.username){
            GetDegrees(profile?.username)
            .then((response) => setData(response))
            .catch((error) => console.log(error));
        }
          
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