import React, {FormEvent, useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import {AuthContext} from "../../App";
import jwtDecode from "jwt-decode";
import {useNavigate} from "react-router-dom";
import useLocalStorage, {STORED_VALUES} from "../Shared/useLocalStorage";

export interface LoginResponse {
    token: string;
    refreshToken: string;
    success: boolean;
    errors?: any;
}

interface Token {
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

export const Login: React.FC = () => {
    const { dispatch } = useContext(AuthContext);
    const [email, setEmail] = useState("user@example.com");
    const [password, setPassword] = useState("Abc!123XyzGhz");

    const [setToken] = useLocalStorage(STORED_VALUES.TOKEN, '');
    const [setRefreshToken] = useLocalStorage(STORED_VALUES.REFRESH_TOKEN, '');

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

        axios.post<LoginResponse>('https://localhost:5001/api/Authentication/Login', loginPayload)
            .then(response => {
                const res = response.data;
                const user = jwtDecode<Token>(res.token);

                const LOGIN_ACTION = {
                    type: 'LOGIN_ACTION',
                    username: user.Username,
                    id: user.jti
                }

                setToken(res.token);
                setRefreshToken(res.refreshToken);

                dispatch(LOGIN_ACTION);
                navigation('/profile/' + user.Username);
            })
            .catch(error => {
                console.log(error);
            })
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
