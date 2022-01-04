import {Col, Row} from "react-bootstrap";

function Overview(){
    const users = 10;
    const courses = 15;
    const reviews = 255;

    return(
        <Row className="bg-secondary bg-opacity-25 p-4 rounded">
            <Col className="text-center border-end">
                <h2>Users</h2>
                <h2>{users}</h2>
            </Col>

            <Col className="text-center border-end">
                <h2>Courses</h2>
                <h2>{courses}</h2>
            </Col>

            <Col className="text-center">
                <h2>Reviews</h2>
                <h2>{reviews}</h2>
            </Col>
        </Row>
    )
}

export default Overview;