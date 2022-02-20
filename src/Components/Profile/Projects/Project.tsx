import { Badge, Card, Col, Image, Row } from "react-bootstrap";
import { HiMenuAlt4 } from "react-icons/hi";
import { ProjectObject } from "./Projects";

interface Props {
    project: ProjectObject
}

function Project(item: Props) {
    const project = item.project;

    return (
        <Card className="bg-secondary bg-opacity-10">
            <Card.Body>
                <Row className="p-4">
                    <Col xl={4} md={6} sm={12} className="text-center rounded">
                        {project.image ?
                            <Image src={`data:image/jpeg;base64,${project.image}`} width={300} height={300} roundedCircle /> : null
                        }
                    </Col>
                    <Col xl={8} md={6} sm={12} className="p-4">
                        <h1>
                            {project.name}
                        </h1>
                        <h5>
                            {project.description}
                        </h5>
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