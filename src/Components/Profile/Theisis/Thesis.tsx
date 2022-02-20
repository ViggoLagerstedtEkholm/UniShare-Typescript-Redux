import {Card, Col, Row} from "react-bootstrap";

function Thesis(){
    return(
        <Card className="bg-secondary bg-opacity-25 p-4 rounded">
            <Card.Body>
                <Row>
                    <Col>
                        test1
                    </Col>
                    <Col>
                        test2
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Thesis;