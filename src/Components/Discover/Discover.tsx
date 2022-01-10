import {Container, Tab, Tabs} from "react-bootstrap";
import CoursesSearch from "./Courses/CoursesSearch";
import PeopleSearch from "./PeopleSearch/PeopleSearch";

function Discover() {
    return (
        <Container className="bg-transparent">
            <h1 className="text-center">Discover</h1>
                <Container className="bg-secondary bg-opacity-10 p-4 rounded">
                    <Tabs defaultActiveKey="courses" id="uncontrolled-tab-example" className="mb-3 text-white justify-content-evenly">
                        <Tab eventKey="courses" title="Courses">
                            <h2 className="bg-secondary bg-opacity-10 p-3">Courses</h2>
                            <CoursesSearch/>
                        </Tab>
                        <Tab eventKey="people" title="People">
                            <h2 className="bg-secondary bg-opacity-10 p-3">People</h2>
                            <PeopleSearch/>
                        </Tab>
                    </Tabs>
                </Container>
        </Container>
    )
}

export default Discover;