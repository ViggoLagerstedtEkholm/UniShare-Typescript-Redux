import {Col, Row} from "react-bootstrap";

interface Props{
    users: number | undefined;
    courses: number | undefined;
}

function Overview({ users, courses }:Props){
    return(
        <Row className="bg-secondary bg-opacity-25 p-4 rounded">
            <Col className="text-center border-end">
                <h2>Users</h2>
                <h2>{users}</h2>
            </Col>

            <Col className="text-center">
                <h2>Courses</h2>
                <h2>{courses}</h2>
            </Col>
        </Row>
    )
}

export default Overview;