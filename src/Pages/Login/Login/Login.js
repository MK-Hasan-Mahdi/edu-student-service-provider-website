import React, { useRef } from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    // for redirect location
    let from = location.state?.from?.pathname || "/";
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleLogin = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        // console.log(email, password);
    }
    // give error message if email or password don't match
    let errorMsg;
    if (error) {
        errorMsg = <p className='text-danger'>Error: {error?.message}</p>
    }
    // redirect user 
    if (user) {
        navigate(from, { replace: true });
    }

    // reset password

    const handleResetPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email);
        toast("email sent");
    }

    // navigate new user to register
    const navigateRegister = () => {
        navigate('/register');
    }
    return (
        <div style={{ height: "100vh" }} className='container mx-auto form-container'>
            <h2 className='text-success text-center mt-3' > Login Please</h2 >
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="success w-50 d-block mx-auto mb-2" type="submit">
                    Login
                </Button>
                {errorMsg}
            </Form>
            <button onClick={handleResetPassword} className="btn btn-link text-decoration-none">Forgot Password?</button>
            <p>New User? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Register Now</Link></p>

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;