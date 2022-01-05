import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function NotFound(){
    const navigate = useNavigate();

    return(
        <Container>
            <h2>404, Not found</h2>
            <Button onClick={() => navigate('/')}>
                Home
            </Button>
        </Container>
    )
}

export default NotFound;