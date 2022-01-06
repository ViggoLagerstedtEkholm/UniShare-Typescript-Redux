import {Button, Col, Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";

function Handles(){
    const [github, setGithub] = useState("");
    const [linkedIn, setLinkedIn] = useState("");

    return(
        <Container className="bg-secondary bg-opacity-10 p-4 rounded">
            <Form>
                <Row>
                    <h1>Handles</h1>
                    <Col sm={6}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Github</Form.Label>
                            <Form.Control type="text"
                                          id="github"
                                          placeholder="Github"
                                          value={github}
                                          onChange={(e) => {
                                              setGithub(e.target.value);
                                          }}/>
                        </Form.Group>

                    </Col>
                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>LinkedIn</Form.Label>
                            <Form.Control type="text"
                                          id="linkedIn"
                                          placeholder="LinkedIn"
                                          value={linkedIn}
                                          onChange={(e) => {
                                              setLinkedIn(e.target.value);
                                          }}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="bg-secondary bg-opacity-10 p-3">
                    <Button>
                        Update
                    </Button>
                </Row>
            </Form>
        </Container>
    )
}

export default Handles;