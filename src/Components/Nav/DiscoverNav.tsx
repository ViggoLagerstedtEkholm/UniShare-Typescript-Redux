import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Dispatch, SetStateAction} from "react";
import {Page} from "../Discover/Discover";

interface Props{
    setPageIndex: Dispatch<SetStateAction<Page>>;
}

function DiscoverNav(props: Props){
    const setPage = props.setPageIndex;
    
    return(
        <Container>
            <h1 className="text-center">Discover</h1>
            <Navbar expand="lg" className="justify-content-center bg-secondary bg-opacity-10 rounded">
                <Container>
                    <Navbar.Collapse className="justify-content-evenly gap-4">
                        <Nav.Item className="text-white bg-secondary rounded w-100">
                            <Button onClick={() => setPage(Page.Courses)} className="w-100">
                                Courses
                            </Button>
                        </Nav.Item>
                        <Nav.Item className="text-white bg-secondary rounded w-100">
                            <Button onClick={() => setPage(Page.People)} className="w-100">
                                People
                            </Button>
                        </Nav.Item>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    )
}

export default DiscoverNav;