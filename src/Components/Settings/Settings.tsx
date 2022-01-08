import Sidebar from "./Sidebar";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useState} from "react";
import Account from "./Account";
import Handles from "./Handles";
import Password from "./Password";
import { useNavigate} from "react-router-dom";
import ImageUpload from "./ImageUpload";

function Settings(){
    const [page, setPage] = useState(0);
    const navigation = useNavigate();

    function show(){
        switch(page){
            case 0: return <Account/>
            case 1: return <Handles/>
            case 2: return <Password/>
            case 3: return <ImageUpload/>
            default: return <h1>No such page</h1>
        }
    }

    return(
        <Container>
            <Row>
                <Button className="w-25 bg-transparent border-white mx-3 mb-4" onClick={() => navigation(-1)}>
                    Go back
                </Button>
                <hr/>
            </Row>
            <Row className="vh-100">
                <Col md={4}>
                    <Sidebar setPage={setPage}/>
                </Col>
                <Col md={8}>
                    {show()}
                </Col>
            </Row>
        </Container>

    )
}

export default Settings;