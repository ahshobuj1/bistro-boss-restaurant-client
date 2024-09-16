import {useContext} from 'react';
import {AuthContext} from '../../Context/UserContext';

const useAuth = () => {
    const authInfo = useContext(AuthContext);

    return authInfo;
};

export default useAuth;
