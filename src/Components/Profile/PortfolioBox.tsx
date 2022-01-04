import {Container, Tab, Tabs} from "react-bootstrap";

function PortfolioBox(){
    return(
        <Container className="bg-secondary bg-opacity-25 p-4 rounded">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Projects">
                   <h1>Projects</h1>
                </Tab>
                <Tab eventKey="profile" title="Thesis">
                    <h1>Thesis</h1>
                </Tab>
                <Tab eventKey="contact" title="Degree">
                    <h1>Degree</h1>
                </Tab>
                <Tab eventKey="ratings" title="Ratings">
                    <h1>Ratings</h1>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                    <h1>Reviews</h1>
                </Tab>
            </Tabs>
        </Container>
    )
}

export default PortfolioBox;