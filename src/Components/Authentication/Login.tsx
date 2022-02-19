import React, {FormEvent, useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import jwtDecode from "jwt-decode";
import useLocalStorage, {STORED_VALUES} from "../Shared/useLocalStorage";

import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../AppStateProvider";
import {Token} from "../../App";
import {LoginToAccount} from "../Service/AuthenticationService";

export const Login = () => {
    const { authDispatch } = useContext(AuthContext);
    const [email, setEmail] = useState("user@example.com");
    const [password, setPassword] = useState("Abc!123XyzGhz");

    const [,setToken] = useLocalStorage(STORED_VALUES.TOKEN, '');
    const [,setRefreshToken] = useLocalStorage(STORED_VALUES.REFRESH_TOKEN, '');

    const navigation = useNavigate();

    const validate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        doLogin();
    }

    const doLogin = () => {
        const loginPayload = {
            email: email,
            password: password
        }

        LoginToAccount(loginPayload).then(response => {
            const res = response.data;
            const user = jwtDecode<Token>(res.token);

            const LOGIN_ACTION = {
                type: 'LOGIN_ACTION',
                username: user.Username,
                id: user.jti
            }

            setToken(res.token);
            setRefreshToken(res.refreshToken);

            authDispatch(LOGIN_ACTION);
            navigation('/profile/' + user.Username);
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
