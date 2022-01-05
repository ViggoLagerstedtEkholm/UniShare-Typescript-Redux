import {Card, Col, Image, Row} from "react-bootstrap";

interface Props{
    value: string;
    index: number;
}

function Degree({value, index}: Props){
    return(
        <Card className="bg-secondary bg-opacity-10">
            <Card.Body>
                <Card.Title>
                    {index}
                </Card.Title>
                <Row>
                    <Col>
                        <Image src={`https://picsum.photos/id/${index * 30}/300/300`} roundedCircle/>
                    </Col>
                    <Col>
                        {value}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Degree;