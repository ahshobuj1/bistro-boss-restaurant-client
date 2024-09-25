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
import useAxiosPublic from '../hooks/useAxiosPublic/useAxiosPublic';

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Login with google
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // Logout user
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Manage current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user ', currentUser);
            setUser(currentUser);

            if (currentUser) {
                const userEmail = {email: currentUser?.email};
                axiosPublic
                    .post('/jwt', userEmail)
                    .then((res) => {
                        if (res.data.token) {
                            localStorage.setItem(
                                'access-token',
                                res.data.token
                            );

                            setLoading(false);
                        }
                    })
                    .catch((err) => console.log(err.message));
            } else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [axiosPublic]);

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
