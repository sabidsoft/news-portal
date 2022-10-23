import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const register = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        // setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    const login = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const googleSignIn = (googleProvider) => {
        // setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        // setLoading(true)
        return signOut(auth)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const authInfo = { user, loading, register, updateUserProfile, verifyEmail, login, googleSignIn, logout }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;