import {Container} from "react-bootstrap";
import DiscoverNav from "../Nav/DiscoverNav";
import CoursesSearch from "./Courses/CoursesSearch";
import {useState} from "react";
import PeopleSearch from "./PeopleSearch/PeopleSearch";

export enum Page {
    Courses = "Courses",
    People = "People"
}

function Discover() {
    const [pageIndex, setPageIndex] = useState<Page>(Page.Courses);

    function showPage() {
        switch (pageIndex) {
            case Page.Courses:
                return <CoursesSearch/>
            case Page.People:
                return <PeopleSearch/>
        }
    }

    return (
        <Container>
            <DiscoverNav setPageIndex={setPageIndex}/>
            <hr/>
            {showPage()}
        </Container>
    )
}

export default Discover;