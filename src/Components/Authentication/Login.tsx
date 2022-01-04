import React, {FormEvent, useState} from 'react';
import {LogIn} from "../Service/AuthenticationService";
import {Button, Form} from "react-bootstrap";

export const Login: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const validate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        doLogin();
    }

    const doLogin = () => {
        const loginPayload = {
            email: email,
            password: password
        }

        LogIn(loginPayload).then(() => {
            alert('logged in.');
        }).catch(() => {
        });
    }

    return (
        <Form onSubmit={e => validate(e)} className="bg-secondary bg-opacity-10 p-4 rounded">
            <h1>Login</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                              id="email"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => {
                                  setEmail(e.target.value);
                              }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                              id="password"
                              placeholder="Password"
                              value={password}
                              onChange={(e) => {
                                  setPassword(e.target.value);
                              }}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
}

export default Login;
