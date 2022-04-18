import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // create user and send email for verified email
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // update user profile
    const [updateProfile, updating, errorProfileUpdate] = useUpdateProfile(auth);

    // navigate to login page if user have account
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }
    // user verify mail 
    const userEmailVerify = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // alert('email sent, verify your email');
            })
    }

    // after register button clicked:
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        userEmailVerify();
        await updateProfile({ displayName: name }); // update and show profile name
        navigate('/home');
    }
    // if user logged in show console user's some detail
    // if (user) {
    //     console.log("user:", user);
    // } 


    return (
        <div style={{ height: "100vh" }} className='container mx-auto form-container'>
            <h2 className='text-center text-success mt-3'>Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="outline-dark w-50 d-block mx-auto mb-2" type="submit">
                    Register
                </Button>
            </Form>
            <p>Already have account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Login</Link></p>
        </div>
    );
};

export default Register;