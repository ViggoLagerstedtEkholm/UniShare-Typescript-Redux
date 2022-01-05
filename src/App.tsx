import Home from "./Components/Home/Home";
import Login from "./Components/Authentication/Login";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import {Register} from "./Components/Authentication/Register";
import {Container} from "react-bootstrap";
import NavigationBarTop from "./Components/Nav/NavigationBarTop";
import Profile from "./Components/Profile/Profile";
import Overview from "./Components/Friends/Overview";
import NotFound from "./Components/Shared/NotFound";

function App() {
  return (
      <Container fluid className="p-0">
          <NavigationBarTop/>
          <Container className="pt-4 vh-100">
              <Router>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/register" element={<Register/>}/>
                      <Route path="/profile/:id" element={<Profile/>}/>
                      <Route path="/friends" element={<Overview/>}/>
                      <Route path="*" element={<NotFound/>}/>

                  </Routes>
              </Router>
          </Container>
      </Container>
  );
}

export default App;
