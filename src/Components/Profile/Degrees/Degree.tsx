import {Card} from "react-bootstrap";
import {RootObject} from "./Degrees";
import CourseInDegree from "./CourseInDegree";

interface Props{
    RootObj: RootObject;
}

function Degree({RootObj}: Props){
    const degree = RootObj.degree;
    const courses = RootObj.courses;

    return(
        <Card className="bg-secondary bg-opacity-10">
            <Card.Body>
                <Card.Title>
                    {degree.name}
                </Card.Title>

                {
                    courses.map((value, index) =>{
                        return <CourseInDegree course={value} key={index}/>
                    })
                }
            </Card.Body>
        </Card>
    )
}

export default Degree;