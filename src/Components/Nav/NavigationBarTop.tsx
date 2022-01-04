import {Container, Nav, Navbar} from "react-bootstrap";

function NavigationBarTop(){
    const loggedInd = true;

    function renderLoggedIn(){
        return(
            <>
                <Nav.Link href="/" className="text-white">Home</Nav.Link>
                <Nav.Link href="/#/profile" className="text-white">Profile</Nav.Link>
                <Nav.Link href="/#/friends" className="text-white">Friends</Nav.Link>
            </>
        )
    }

    function renderNotLoggedIn(){
        return (
            <>
                <Nav.Link href="/" className="text-white">Home</Nav.Link>
                <Nav.Link href="/#/login" className="text-white">Login</Nav.Link>
                <Nav.Link href="/#/register" className="text-white">Register</Nav.Link>
            </>
        )
    }

    return(
        <Navbar expand="lg" className="bg-secondary bg-opacity-10">
            <Container>
                <Navbar.Brand href="/" className="text-white">UniShare</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-white">
                        {loggedInd ? renderLoggedIn() : renderNotLoggedIn()}
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Text className="text-white">
                    Welcome, Viggo Lagerstedt Ekholm
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default NavigationBarTop;