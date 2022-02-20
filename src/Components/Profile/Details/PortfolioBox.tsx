import {Container, Tab, Tabs} from "react-bootstrap";
import Projects from "../Projects/Projects";
import Degrees from "../Degrees/Degrees";
import AddProject from "../Projects/Add";
import AddDegree from "../Degrees/Add";

function PortfolioBox(){
    return(
        <Container className="bg-secondary bg-opacity-25 p-4 rounded">
            <Tabs defaultActiveKey="projects" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="projects" title="Projects">
                    <h2 className="bg-secondary bg-opacity-10 p-3">Projects</h2>
                    <AddProject/>
                    <Projects/>
                </Tab>
                <Tab eventKey="degrees" title="Degree">
                    <h2 className="bg-secondary bg-opacity-10 p-3">Degrees</h2>
                    <AddDegree/>
                    <Degrees/>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default PortfolioBox;