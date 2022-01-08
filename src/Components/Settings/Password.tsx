import {Button, Col, Container, Form, Row} from "react-bootstrap";
import React, {useState} from "react";

function Password(){
    const [currentPass, setCurrentPass] = useState("");
    const [newPass, setNewPass] = useState("");

    return(
        <Container className="bg-secondary bg-opacity-10 p-4 rounded">
            <Form>
                <Row>
                    <h1>Change password</h1>

                    <Col sm={6}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control type="text"
                                          id="current"
                                          placeholder="current Password"
                                          value={currentPass}
                                          onChange={(e) => {
                                              setCurrentPass(e.target.value);
                                          }}/>
                        </Form.Group>

                    </Col>
                    <Col sm={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control type="text"
                                          id="new"
                                          placeholder="New Password"
                                          value={newPass}
                                          onChange={(e) => {
                                              setNewPass(e.target.value);
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

export default Password;