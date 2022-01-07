import {Card, Col, Row, Stack} from "react-bootstrap";
import {Course} from "../Home";

import { FcRating } from "react-icons/fc";
import { MdDateRange } from "react-icons/md";
import { BiBookAlt } from "react-icons/bi";

interface Props{
    course: Course;
    index: number;
}

function CoursePreview(item: Props){
    const values = item.course;
    const index = item.index + 1;

    return(
        <Card className="bg-secondary bg-opacity-25 my-1">
            <Card.Body>
                <Row>
                    <h3>#{index}</h3>
                </Row>
                <Row>
                    <Col xl={9}>
                        <h3>{values.name}</h3>
                        <p>Credits: {values.credits}</p>
                        <p>City: {values.city}</p>
                        <p>Course code: {values.code}</p>
                        <a className="text-white" href={values.link}>{values.link}</a>
                    </Col>
                    <Col xl={3}>
                        <Stack>
                            <p><FcRating/> {values.rating}</p>
                            <p><MdDateRange/> {values.added}</p>
                            <p><BiBookAlt/> University: {values.university}</p>
                            <p>{values.code}</p>
                        </Stack>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default CoursePreview;