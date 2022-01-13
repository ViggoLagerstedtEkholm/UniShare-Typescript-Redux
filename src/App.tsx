import Home from "./Components/Home/Home";
import Login from "./Components/Authentication/Login";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Register} from "./Components/Authentication/Register";
import {Container} from "react-bootstrap";
import NavigationBarTop from "./Components/Nav/NavigationBarTop";
import Profile from "./Components/Profile/Profile";
import Overview from "./Components/Friends/Overview";
import NotFound from "./Components/Shared/NotFound";
import Settings from "./Components/Settings/Settings";
import Discover from "./Components/Discover/Discover";
import Course from "./Components/Course/Course";
import ScrollTop from "./Components/Nav/ScrollTop";
import {AuthContext} from "./AppStateProvider";
import useLocalStorage, {STORED_VALUES} from "./Components/Shared/useLocalStorage";
import {useContext, useEffect} from "react";
import jwtDecode from "jwt-decode";
import RequireAuth from "./Components/Shared/RequireAuth";

export interface Token {
    Id: string;
    Username: string;
    email: string;
    exp: number;
    iat: number;
    jti: string;
    nbf: number;
    role: string;
    sub: string;
}

function App() {
    const [token] = useLocalStorage(STORED_VALUES.TOKEN, '');
    const {authState, authDispatch} = useContext(AuthContext);

    useEffect(() => {
        if (token && !authState.isAuth) {
            const user = jwtDecode<Token>(token);

            const LOGIN_ACTION = {
                type: 'LOGIN_ACTION',
                username: user.Username,
                id: user.jti
            }

            authDispatch(LOGIN_ACTION);
        }
    }, [])

    return (
        <Router>
            <Container fluid className="p-0">
                <NavigationBarTop/>
                <Container className="pt-4 vh-100">
                    <ScrollTop/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/profile/:id" element={<Profile/>}/>
                        <Route path="/friends" element={<Overview/>}/>
                        <Route path="/settings" element={
                            <RequireAuth>
                                <Settings/>
                            </RequireAuth>
                        }/>
                        <Route path="/discover" element={<Discover/>}/>
                        <Route path="/course/:id" element={<Course/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Container>
            </Container>
        </Router>
    );
}

export default App;
