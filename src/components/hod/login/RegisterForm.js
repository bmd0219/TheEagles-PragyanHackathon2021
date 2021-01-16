import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import {register} from '../../../redux/hod/login/loginActions'

export default function LoginForm() {
    let history = useHistory();
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [date, setDate] = useState(null);
    const [month, setMonth] = useState(null);
    const [year, setYear] = useState(null);

    const handleChangeemail = e => setEmail(e.target.value);
    const handleChangePassword = e => setPassword(e.target.value);
    const handleChangeName = e => setName(e.target.value);
    const handleChangeDepartment = e => setDepartment(e.target.value);
    const handleChangeAddress = e => setAddress(e.target.value);
    const handleChangeDate = e => setDate(e.target.value);
    const handleChangeMonth = e => setMonth(e.target.value);
    const handleChangeYear = e => setYear(e.target.value);

    const [msg, setmsg] = useState(null);

    const dispatch = useDispatch();

    const submitForm = async e => {
        e.preventDefault();
        const user = { email, name, department, password, date, month, year, address };
        await dispatch(register(user));
    };

    return (
        <div className="form-box vertical-center">
            <h1>HOD Portal</h1>
            <hr />
            <Form method="post">
                {msg ? <Alert variant="danger"> {msg}</Alert> : null}
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="name"
                        onChange={handleChangeName}
                        placeholder="Enter Your Name"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="department"
                        onChange={handleChangeDepartment}
                        placeholder="Enter Your Department"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="address"
                        onChange={handleChangeAddress}
                        placeholder="Enter Your Address"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="number"
                        name="date"
                        onChange={handleChangeDate}
                        placeholder="Enter the Date of you DOB"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="number"
                        name="month"
                        onChange={handleChangeMonth}
                        placeholder="Enter the Month of you DOB"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="number"
                        name="year"
                        onChange={handleChangeYear}
                        placeholder="Enter the Year of you DOB"
                    />
                </Form.Group>
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
            <Link to="/hod/login">Login Here</Link>
        </div>
    );
}
