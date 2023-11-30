// import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ContextAuth } from '../Context/Context';
import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://koro-server-side.vercel.app',
    // withCredentials: true
});

const useAxiosSecure = () => {
    // const navigate = useNavigate();
    // const { logOut } = useContext(ContextAuth)

    // axiosSecure.interceptors.response.use(function (response) {
    //     return response;
    // },
    //     async (error) => {
    //         const status = error.response.status;
    //         // console.log('status error in the interceptor', status);
    //         // for 401 or 403 logout the user and move the user to the login
    //         if (status === 401 || status === 403) {
    //             await logOut();
    //             navigate('/signin');
    //         }
    //         return Promise.reject(error);
    //     })


    return axiosSecure;
};

export default useAxiosSecure;