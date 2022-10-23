import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }
    
    if(user){
        return children
    }

    return <Navigate to={'/login'} state={location} replace></Navigate>
};

export default PrivateRoute;