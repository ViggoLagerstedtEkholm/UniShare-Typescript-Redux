import { Card } from "react-bootstrap";
import { ICourse } from "../../Service/DegreeService";

interface Props {
    course: ICourse;
}

function CourseInDegree({ course }: Props) {
    return (
        <Card className="bg-secondary bg-opacity-10 my-2">
            <Card.Body>
                <Card.Title>{course.name}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CourseInDegree;