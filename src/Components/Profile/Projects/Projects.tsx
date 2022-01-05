import Project from "./Project";
import {Stack} from "react-bootstrap";

function Projects(){
    const data = ['data1', 'data2', 'data3', 'data4'];

    return(
        <Stack className="gap-2">
            {data.map((value, index) => {
                return <Project index={index} value={value}/>
            })}
        </Stack>
    )
}

export default Projects;