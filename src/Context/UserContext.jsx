import {useEffect, useState} from 'react';
import {createContext} from 'react';
import PropTypes from 'prop-types'; // ES6
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signOut,
    signInWithPopup,
} from 'firebase/auth';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Login with google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider);
    };

    // Logout user
    const logoutUser = () => {
        return signOut(auth);
    };

    // Manage current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user ', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logoutUser,
        loginWithGoogle,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;

UserContext.propTypes = {
    children: PropTypes.node,
};
