import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import {Container,Row,Col,Image,Button} from 'react-bootstrap';
import {Input} from 'reactstrap'
export default function StartPage() {
    const [state,setstate]=useState('');
    let history =  useHistory()
    const change = (e)=>{
        setstate(e.target.value)
    }
    const proceed =()=>{
        if(state==="Student")
        history.push('/student/login')
        if(state==="Head of Department")
        history.push('/hod/login')
        if(state==="Admin")
        history.push('/admin/login')
    }
    return (
        <Container fluid className="h100" >
            <Row className="h-100">
                <Col md={6} className="whole h-100">
                <div className="form-box vertical-center">
                    <h2>LOGIN</h2>
                    <hr/>
                    <Input type="select" onChange={change}>
                        <option>Choose</option>
                        <option>Student</option>
                        <option>Head of Department</option>
                        <option>Admin</option>
                    </Input>
                    <br/>
                    <Button variant="primary" onClick={proceed}>Proceed</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
