import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {
                user ? children : <Navigate to="/login"></Navigate>
            }
        </div>
    );
};

export default Private;