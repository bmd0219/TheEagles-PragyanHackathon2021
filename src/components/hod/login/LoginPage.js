import React from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import LoginForm from './LoginForm'
export default function LoginPage() {
    return (
        <Container fluid className="h100" >
            <Row className="h-100">
                <Col md={6} className="whole h-100">
                    <LoginForm/>
                </Col>
            </Row>
        </Container>
    )
}
