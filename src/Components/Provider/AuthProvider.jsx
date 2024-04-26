import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../../firebse.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const auth = getAuth(app)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logOut = () => {
        return signOut(auth)
    }


    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('currentUser : ', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            console.log('unsubscribe')
            unsubscribe()
        }
    } ,[])


    

    const authInfo = {
        createUser,
        loginUser,
        logOut,
        user,
        loading,
        setLoading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;