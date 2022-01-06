import {Badge, Card, Col, Image, Row} from "react-bootstrap";

interface Props {
    value: string;
    index: number;
}

function Project({value, index}: Props) {
    return (
        <Card className="bg-secondary bg-opacity-10">
            <Card.Body>
                <Card.Title>
                    {index}
                </Card.Title>
                <Row>
                    <Col xl={4} md={6} sm={12} className="text-center">
                        <Image src={`https://picsum.photos/id/${index * 20}/300/300`} className="text-center"/>
                    </Col>
                    <Col xl={8} md={6} sm={12}>
                        <h1>Name</h1>
                        {value}
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                        <p>
                            Date
                        </p>
                        <Badge>
                            C#
                        </Badge>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Project;