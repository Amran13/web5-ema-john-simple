import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    // console.log(loading)
    const location = useLocation()
    console.log(location)
    if (loading) {
        return <div className='text-center'><span className="loading loading-bars loading-lg"></span></div>
    }
    return (
        <div>
            {
                user ? children : <Navigate state={location.pathname} to="/login"></Navigate>
            }
        </div>
    );
};

export default Private;