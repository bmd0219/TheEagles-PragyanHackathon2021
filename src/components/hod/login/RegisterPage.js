import React from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import RegisterForm from './RegisterForm'
export default function RegisterPage() {
    return (
        <Container fluid className="h100" >
            <Row className="h-100">
                <Col md={6} className="whole h-100">
                    <RegisterForm/>
                </Col>
            </Row>
        </Container>
    )
}
