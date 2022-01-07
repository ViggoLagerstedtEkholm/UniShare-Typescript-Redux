import {Stack} from "react-bootstrap";
import {OverviewContext} from "../Home";
import {useContext} from "react";
import CoursePreview from "./CoursePreview";

function Courses(){
    const courses = useContext(OverviewContext);

    return(
        <Stack>
            {courses?.topCourses.map((value, index) =>{
                return <CoursePreview course={value} index={index}/>
            })}
        </Stack>
    )
}

export default Courses;