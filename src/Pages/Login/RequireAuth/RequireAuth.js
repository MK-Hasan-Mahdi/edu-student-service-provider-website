import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    // user will not null (effective for after loading page not redirect to login page)
    if (loading) {
        return <Loading></Loading>
    }
    // user not logged in it will redirect to login page
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    // if user logged in it will go smoothly
    return children;
};

export default RequireAuth;