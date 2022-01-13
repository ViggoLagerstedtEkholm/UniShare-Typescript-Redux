import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {useContext} from "react";
import {LOGOUT_ACTION} from "../Shared/AuthReducer";
import useLocalStorage, {STORED_VALUES} from "../Shared/useLocalStorage";
import {AuthContext} from "../../AppStateProvider";

function NavigationBarTop() {
    const {authState, authDispatch} = useContext(AuthContext);
    const [,setToken] = useLocalStorage(STORED_VALUES.TOKEN, '');
    const [,setRefreshToken] = useLocalStorage(STORED_VALUES.REFRESH_TOKEN, '');

    function renderLoggedIn() {
        return (
            <>
                <Nav.Link href="/" className="text-white">Home</Nav.Link>
                <Nav.Link href={"/#/profile/" + authState.username} className="text-white">Profile</Nav.Link>
                <Nav.Link href="/#/friends/" className="text-white">Friends</Nav.Link>
                <Nav.Link href="/#/discover" className="text-white">Discover</Nav.Link>
            </>
        )
    }

    function renderNotLoggedIn() {
        return (
            <>
                <Nav.Link href="/" className="text-white">Home</Nav.Link>
                <Nav.Link href="/#/login" className="text-white">Login</Nav.Link>
                <Nav.Link href="/#/register" className="text-white">Register</Nav.Link>
                <Nav.Link href="/#/discover" className="text-white">Discover</Nav.Link>
            </>
        )
    }

    function onLogout() {
        setToken('');
        setRefreshToken('');
        authDispatch({type: 'LOGOUT_ACTION'});
    }

    return (
        <Navbar expand="lg" className="bg-secondary bg-opacity-10">
            <Container>
                <Navbar.Brand href="/" className="text-white">UniShare</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-white">
                        {authState.isAuth ? renderLoggedIn() : renderNotLoggedIn()}
                    </Nav>
                </Navbar.Collapse>

                {authState.isAuth && <>
                    <Navbar.Text className="text-white">
                        {authState.username}
                    </Navbar.Text>
                    <Navbar.Text>
                        <Button href="/#/discover" className="text-white bg-transparent border-white mx-4"
                                onClick={onLogout}>Logout</Button>
                    </Navbar.Text>
                </>
                }
            </Container>
        </Navbar>
    )
}

export default NavigationBarTop;