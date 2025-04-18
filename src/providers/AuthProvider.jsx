import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../pages/firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Create User With Email & Password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // Login With Email & Password
    const loginWithPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout User
    const logOut = () => {
        return signOut(auth);
    }

    // observerving user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('observing current user:', currentUser);
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    // Pass user info
    const authInfo = {
        user,
        createUser,
        loginWithPassword,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;