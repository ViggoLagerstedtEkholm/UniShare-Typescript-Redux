import {Col, Row} from "react-bootstrap";
import Received from "./Received";
import Friends from "./Friends";
import Sent from "./Sent";

function Overview(){
    return(
        <Row className="text-center h-100">
            <Col className="bg-secondary bg-opacity-25 p-4 rounded mx-1 h-100">
                <Received/>
            </Col>

            <Col className="bg-secondary bg-opacity-25 p-4 rounded mx-1">
                <Friends/>
            </Col>

            <Col className="bg-secondary bg-opacity-25 p-4 rounded mx-1">
                <Sent/>
            </Col>
        </Row>
    )
}

export default Overview;