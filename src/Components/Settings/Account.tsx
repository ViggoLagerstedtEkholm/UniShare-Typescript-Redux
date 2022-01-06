import {Button, Col, Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";

function Account() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(15);

    return (
        <Container className="bg-secondary bg-opacity-10 p-4 rounded">
            <Form>
                <Row>
                    <h1>General settings</h1>

                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text"
                                          id="firstname"
                                          placeholder="Firstname"
                                          value={firstname}
                                          onChange={(e) => {
                                              setFirstname(e.target.value);
                                          }}/>
                        </Form.Group>

                    </Col>
                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control type="text"
                                          id="lastname"
                                          placeholder="Lastname"
                                          value={lastname}
                                          onChange={(e) => {
                                              setLastname(e.target.value);
                                          }}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text"
                                      id="email"
                                      placeholder="Email"
                                      value={email}
                                      onChange={(e) => {
                                          setEmail(e.target.value);
                                      }}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number"
                                      id="age"
                                      placeholder="Age"
                                      value={age}
                                      onChange={(e) => {
                                          setAge(parseInt(e.target.value));
                                      }}/>
                    </Form.Group>
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

export default Account;