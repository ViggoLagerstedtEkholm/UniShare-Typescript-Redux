import {Container, Tab, Tabs} from "react-bootstrap";
import Projects from "./Projects/Projects";
import Degrees from "./Degrees/Degrees";
import FilterBox from "../Search/Filter/Main/FilterBox";
import Thesis from "./Thesis";

function PortfolioBox(){
    return(
        <Container className="bg-secondary bg-opacity-25 p-4 rounded">
            <Tabs defaultActiveKey="projects" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="projects" title="Projects">
                    <h2 className="bg-secondary bg-opacity-10 p-3">Projects</h2>
                    <Projects/>
                </Tab>
                <Tab eventKey="thesis" title="Thesis">
                    <h2 className="bg-secondary bg-opacity-10 p-3">Thesis</h2>
                    <Thesis/>
                </Tab>
                <Tab eventKey="degrees" title="Degree">
                    <h2 className="bg-secondary bg-opacity-10 p-3">Degrees</h2>
                    <Degrees/>
                </Tab>
                <Tab eventKey="ratings" title="Ratings">
                    <h2 className="bg-secondary bg-opacity-10 p-3">Ratings</h2>
                    <FilterBox/>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                    <h2 className="bg-secondary bg-opacity-10 p-3">Reviews</h2>
                    <FilterBox/>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default PortfolioBox;