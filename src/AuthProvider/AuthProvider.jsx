import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider,signInWithPopup , createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import auth from "../Firebase/firebase";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [loader,setLoader]=useState(true);
    const [user,setUser]=useState(null);

    const createNewUser = (email,password)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser = (email,password)=>{
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(manageUser)=>{
            
            setUser(manageUser);

            

            setLoader(false)
        })
        return unsubscribe;
    },[])

    const signOutUser =()=>{
        setLoader(true);
       return signOut(auth);
    } 
    const googleSignIn = ()=>{
        setLoader(true);
        return signInWithPopup(auth,provider);
    }

    const authInfo = {
        loader,
        user,
        createNewUser,
        signInUser,
        signOutUser,
        googleSignIn
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;