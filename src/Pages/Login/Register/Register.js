import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    return (
        <div className='container mx-auto form-container'>
            <h2>Register</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Button variant="success w-50 d-block mx-auto mb-2" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Login</Link></p>
        </div>
    );
};

export default Register;