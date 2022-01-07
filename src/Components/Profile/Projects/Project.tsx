import {Badge, Card, Col, Image, Row} from "react-bootstrap";
import {ProjectObject} from "./Projects";

interface Props{
    project: ProjectObject
}

function Project(item: Props) {
    const project = item.project;

    return (
        <Card className="bg-secondary bg-opacity-10">
            <Card.Body>
                <Row>
                    <Col xl={4} md={6} sm={12} className="text-center">
                        {project.image ?
                            <Image src={`data:image/jpeg;base64,${project.image}`} width={300} height={300} roundedCircle/> : null
                        }
                    </Col>
                    <Col xl={8} md={6} sm={12}>
                        <h1>
                            {project.name}
                        </h1>
                        <p>
                            {project.description}
                        </p>
                        <p>
                            {project.added}
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