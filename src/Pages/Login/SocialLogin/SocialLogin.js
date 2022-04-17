import React from 'react';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import { SiGmail } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';



const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    if (error) {
        return (<div>
            <p>Error: {error.message}</p>
        </div>);
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        navigate("/home");
    }
    return (
        <div>
            <h4>You Can Login with others Account</h4>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-success mx-auto d-flex justify-content-center align-items-center my-2 w-50'>
                    {/* <img style={{ height: '20px' }} src={google} alt="" /> */}
                    <div className='d-flex justify-content-center align-items-center'>
                        <span className='px-2'><SiGmail></SiGmail></span>
                        <span>Login with Gmail</span>
                    </div>
                </button>
                <button className='btn btn-success mx-auto d-flex justify-content-center align-items-center w-50'>
                    <div>
                        <span className='px-2'><SiGithub></SiGithub></span>
                        <span>Login with Github</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;