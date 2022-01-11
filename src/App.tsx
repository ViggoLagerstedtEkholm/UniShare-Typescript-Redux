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
import {createContext, Dispatch, useReducer} from "react";
import {AuthReducer, initialState, State} from "./Components/Context/AuthReducer";
import {Action} from "redux";
import ScrollTop from "./Components/Nav/ScrollTop";

interface DispatchState {
    state: State;
    dispatch: Dispatch<Action>;
}

export const AuthContext = createContext<DispatchState>({
    state: initialState,
    dispatch: () => null,
});

function App() {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const value = {state, dispatch};

    return (
        <AuthContext.Provider value={value as DispatchState}>
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
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/discover" element={<Discover/>}/>
                            <Route path="/course/:id" element={<Course/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </Container>
                </Container>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;
