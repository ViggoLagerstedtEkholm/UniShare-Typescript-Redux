import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {Course} from "./CoursesSearch";
import {FcRating} from "react-icons/fc";
import {Highlight} from "../../Shared/Highlight";

// @ts-ignore
import CourseDefault from '../../../Images/CourseDefault.png';

interface Props {
    course: Course;
    search: string;
}

function CourseSearchPreviewItem(props: Props) {
    const course = props.course;
    const search = props.search;
    const navigation = useNavigate();

    return (
        <Card className="bg-secondary bg-opacity-10 mx-2 my-2">
            <Card.Body>
                <Container>
                    <Row className="mb-4">
                        <Col className="text-center">
                            <Image src={CourseDefault} width={100} height={100}
                                   roundedCircle
                                   fluid
                            />
                        </Col>
                    </Row>

                    <Row>
                        <h4 className="text-center">{Highlight(course.name, search)}</h4>
                    </Row>

                    <Row>
                        <Button onClick={() => navigation('/course/' + course.id)} className="mx-2 my-2">
                            Go to course page
                        </Button>

                        {course.inActiveDegree ? <Button className="btn-danger mx-2 my-2">
                            Remove from degree
                        </Button> : <Button className="btn-success mx-2 my-2">
                            Add
                        </Button>
                        }
                    </Row>

                    <hr/>

                    <Row>
                        <Col>
                            <p><b>University</b></p>
                            <p>{Highlight(course.university, search)}</p>
                        </Col>

                        <Col>
                            <p><b>City</b></p>
                            <p>{Highlight(course.city, search)}</p>
                        </Col>

                        <Col>
                            <p><b>Country</b></p>
                            <p>{Highlight(course.country, search)}</p>
                        </Col>

                        <Col>
                            <p><b>Code</b></p>
                            <p>{Highlight(course.code, search)}</p>
                        </Col>

                        <Col>
                            <p><b>Credits</b></p>
                            <p>{Highlight(course.credits.toString(), search)}</p>
                        </Col>

                        <Col>
                            <h4><FcRating/> {course.rating}</h4>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
            <Card.Footer>
                <p>{Highlight(course.added.toString(), search)}</p>
            </Card.Footer>
        </Card>
    )
}

export default CourseSearchPreviewItem;