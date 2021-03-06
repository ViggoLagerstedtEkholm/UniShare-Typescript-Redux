import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { RegisterAccount } from "../Service/AuthenticationService";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState(25);
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const navigate = useNavigate();

    const validate = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        doRegister();
    }

    const doRegister = () => {
        const registerPayload = {
            username: username,
            email: email,
            password: password,
            age: age,
            firstname: firstname,
            lastname: lastname,
        }

        RegisterAccount(registerPayload).then(() => {
            alert('Successfully registered account.');
            navigate('/login');
        }).catch(error => {
            alert(error);
        });
    }

    return (
        <Form onSubmit={validate} className="bg-secondary bg-opacity-10 p-4 rounded">
            <h1>Register</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control id="firstName" type="text" className="user-input-text" placeholder="First name"
                    value={firstname}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Last name</Form.Label>
                <Form.Control id="lastName" type="text" className="user-input-text" placeholder="Last name"
                    value={lastname}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }} />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control id="email" type="text" className="user-input-text" placeholder="Email" value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control id="username" type="text" className="user-input-text" placeholder="Username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Age</Form.Label>
                <Form.Control id="age" type="text" className="user-input-text" placeholder="Age" value={age}
                    onChange={(e) => {
                        const target = e.target as typeof e.target & {
                            age: number;
                        };

                        setAge(target.age);
                    }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control id="password" type="password" className="user-input-text" placeholder="Password" value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Repeat password</Form.Label>
                <Form.Control id="passwordRepeat" type="password" className="user-input-text" placeholder="Repeat password"
                    value={passwordRepeat}
                    onChange={(e) => {
                        setPasswordRepeat(e.target.value);
                    }} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
}
