import React, { useRef } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        // console.log(email, password);
    }
    if (user) {
        navigate('/home');
    }


    const navigateRegister = () => {
        navigate('/register');
    }
    return (
        <div className='container mx-auto form-container'>
            <h2 className='text-success text-center mt-3' > Login Please</h2 >
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="success w-50 d-block mx-auto mb-2" type="submit">
                    Login
                </Button>
            </Form>
            <p>New User? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Register Now</Link></p>

        </div>
    );
};

export default Login;