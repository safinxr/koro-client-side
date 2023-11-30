import React, { useContext } from 'react';
import { PulseLoader } from 'react-spinners';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextAuth } from '../Context/Context'

const SignUpInRoute = ({ children }) => {
    const location = useLocation()
    const { user, shortLoading } = useContext(ContextAuth)

    if (shortLoading) {
        return <div className='h-[80vh] flex justify-center items-center'>
            <PulseLoader color="#231F20" size={20} />
        </div>
    }
    if (user) {
        return <Navigate state={location.pathname} to='/'></Navigate>
        
    }
    else {
        return children
    }
};

export default SignUpInRoute;