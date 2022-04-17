import React from 'react';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import { SiGmail } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';



const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorMsg;
    if (errorGoogle || errorGithub) {
        errorMsg = <p>Error: {errorGoogle?.message} {errorGithub?.message}</p>

    }
    if (loadingGoogle || loadingGithub) {
        return <p>Loading...</p>;
    }

    if (userGoogle || userGithub) {
        navigate("/home");
    }
    return (
        <div>
            <h4>You Can Login with others Account</h4>
            {errorMsg}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-success mx-auto d-flex justify-content-center align-items-center my-2 w-50'>
                    {/* <img style={{ height: '20px' }} src={google} alt="" /> */}
                    <div className='d-flex justify-content-center align-items-center'>
                        <span className='px-2'><SiGmail></SiGmail></span>
                        <span>Login with Gmail</span>
                    </div>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-success mx-auto d-flex justify-content-center align-items-center w-50'>
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