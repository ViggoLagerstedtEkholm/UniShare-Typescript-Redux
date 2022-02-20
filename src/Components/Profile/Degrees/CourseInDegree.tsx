import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import { ICourse } from "../../Service/DegreeService";
import {useNavigate} from "react-router-dom";

// @ts-ignore
import CourseDefault from '../../../Images/CourseDefault.png';

interface Props {
    course: ICourse;
}

function CourseInDegree({ course }: Props) {
    const navigate = useNavigate();

    return (
        <Card className="bg-secondary bg-opacity-10 mx-2 my-2">
            <Card.Body>
                <Container>
            
                    <Row>
                        <h4 className="text-center">{course.name}</h4>
                    </Row>

                    <Row>
                        <Button onClick={() => navigate('/course/' + course.id)} className="mx-2 my-2">
                            Go to course page
                        </Button>
                    </Row>

                    <hr />

                    <Row>
                        <Col>
                            <p><b>University</b></p>
                            <p>{course.university}</p>
                        </Col>

                        <Col>
                            <p><b>City</b></p>
                            <p>{course.city}</p>
                        </Col>

                        <Col>
                            <p><b>Country</b></p>
                            <p>{course.country}</p>
                        </Col>

                        <Col>
                            <p><b>Code</b></p>
                            <p>{course.code}</p>
                        </Col>

                        <Col>
                            <p><b>Credits</b></p>
                            <p>{course.credits.toString()}</p>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            <Card.Footer>
                <p>{course.added.toString()}</p>
            </Card.Footer>
        </Card>
    )
}

export default CourseInDegree;