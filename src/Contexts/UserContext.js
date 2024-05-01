import React, { createContext,  useEffect,  useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from "../firebase/firebase.config"

import UserAbout from './UserAbout';
export const AuthContext = createContext();
const auth = getAuth(app);


const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

    const [loading, setLoading] =useState(true)

    const ProviderLogin = (Provider) =>{
        setLoading(true);
        return signInWithPopup (auth, Provider);

    }


    const createUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn =(email,password)=> {
        
        setLoading(true);
         return signInWithEmailAndPassword(auth, email,password);
    }


    const UserAbout = (profile) =>{
        return UserAbout(auth.currentUser,profile)
    }
    const verifyEmail =() =>{
    return sendEmailVerification(auth.currentUser);
    }

    const logOut =() =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=> {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            if(currentUser ===null || currentUser.emailVerified){
            
            setUser(currentUser);
            }
            setLoading(false)
        });
        return ()=> {
            unSubcribe();
        }
    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        UserAbout,
        setLoading,
        ProviderLogin ,
        verifyEmail,
    }

    return (
        <AuthContext.Provider value={authInfo}>
{children}

        </AuthContext.Provider>
      
    );
};

export default UserContext;