import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';
import axios from 'axios';

export const ContextAuth = createContext(null)

const Context = ({ children }) => {

    const [user, setUser] = useState(null)
    const [shortLoading, setShortLoading] = useState(true)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setShortLoading(false);

            // if user exists then asked for JWT token
            // const userEmail = { email: currentUser?.email }
            // if (currentUser) {
            //     axios.post('https://sasha-server-side.vercel.app/jwt', userEmail, { withCredentials: true })

            // }

            // // if user Doesn't exists then remove token
            // if (!currentUser) {
            //     axios.post('https://sasha-server-side.vercel.app/logout', userEmail, { withCredentials: true })
            // }
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const emailPassSignUp = (email, password) => {
        setShortLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const upProfile = (name) => {
        setShortLoading(true)
        return updateProfile(auth.currentUser, { displayName: name })
    }
    const upProfileImg = (name, imgUrl) => {
        setShortLoading(true)
        return updateProfile(auth.currentUser, { displayName: name, photoURL: imgUrl })
    }



    const emailPassSignIn = (email, password) => {
        setShortLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const setLoading = (x) => {
        setShortLoading(x)
    }
    const alu = 'ab';

    const contextValue = {
        emailPassSignUp,
        emailPassSignIn,
        googleSignIn,
        logOut,
        upProfile,
        shortLoading,
        setLoading,
        user,
        alu,
        upProfileImg


    }
    return (
        <ContextAuth.Provider value={contextValue}>
            {children}
        </ContextAuth.Provider>
    );
};

export default Context;