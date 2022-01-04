import {useParams} from "react-router-dom";
import {Container, Stack} from "react-bootstrap";
import PortfolioBox from "./PortfolioBox";
import Details from "./Details";

function Profile(){
    const {id} = useParams();

    return(
        <Container>
            <Stack className="gap-4">
                <Details id={id}/>
                <PortfolioBox/>
            </Stack>
        </Container>
    )
}

export default Profile;