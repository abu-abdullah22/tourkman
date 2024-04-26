import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null) ;
const auth = getAuth(app) ;
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   



    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password) ;
    }


    //signin
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }


    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
  


    //signout
    const logOut = () => {
        setUser(null)
        return signOut(auth);

    }

    // update profile 
    const updateUser = (name, image) => {
       return updateProfile(auth.currentUser, {
            displayName: name,
             photoURL: image,
        })
        
    }


    //observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])



    const auhtInfo = { createUser, user, logOut, signIn,  setUser, loading, updateUser, googleLogin, githubLogin}
    return (
        <AuthContext.Provider value={auhtInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children : PropTypes.node
}