import { Card } from "react-bootstrap";
import { IDegrees } from "../../Service/DegreeService";
import CourseInDegree from "./CourseInDegree";

interface Props {
    RootObj: IDegrees;
}

function Degree({ RootObj }: Props) {
    const degree = RootObj.degree;
    const courses = RootObj.courses;

    return (
        <Card className="bg-secondary bg-opacity-10">
            <Card.Body>
                <Card.Title>
                    {degree.name}
                </Card.Title>

                <Card.Subtitle className="my-4">
                <p className="font-monospace">Field: {degree.field}</p>
                <p className="font-monospace">Country: {degree.country}</p>
                <p className="font-monospace">City: {degree.city}</p>
                <p className="font-monospace">Start date: {degree.startDate}</p>
                <p className="font-monospace">End date: {degree.endDate}</p>
                <p className="font-monospace">University: {degree.university}</p>
                </Card.Subtitle>
                {
                    courses.map((value, index) => {
                        return <CourseInDegree course={value} key={index} />
                    })
                }
            </Card.Body>
        </Card>
    )
}

export default Degree;