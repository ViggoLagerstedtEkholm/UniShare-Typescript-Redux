import {Stack} from "react-bootstrap";
import Degree from "./Degree";

function Degrees(){
    const data = ['data1', 'data2', 'data3', 'data4'];

    return(
        <Stack className="gap-2">
            {data.map((value, index) => {
                return <Degree index={index} value={value}/>
            })}
        </Stack>
    )
}

export default Degrees;