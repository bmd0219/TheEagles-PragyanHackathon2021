import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

export default function LoginForm() {
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeemail = e => setEmail(e.target.value);
    const handleChangePassword = e => setPassword(e.target.value);

    const [msg, setmsg] = useState(null);

    const dispatch = useDispatch();

    const submitForm = async e => {
        e.preventDefault();
        const user = { email, password };
        // await dispatch(login(user));
    };

    return (
        <div className="form-box vertical-center">
            <h1>Student Portal</h1>
            <hr />
            <Form method="post">
                {msg ? <Alert variant="danger"> {msg}</Alert> : null}
                <Form.Group>
                    <Form.Control
                        type="email"
                        name="email"
                        onChange={handleChangeemail}
                        placeholder="Enter Your Email Address"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="password"
                        name="pwd"
                        onChange={handleChangePassword}
                        placeholder="Enter Your Password"
                    />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={submitForm}>
                    Login
                </Button>
            </Form>
            <hr />
            <Link to="/student/register">Register Here</Link>
        </div>
    );
}
