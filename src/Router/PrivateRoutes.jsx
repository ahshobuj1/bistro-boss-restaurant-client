import {Navigate, useLocation} from 'react-router-dom';
import useAuth from '../hooks/useAuth/useAuth';
import PropTypes from 'prop-types'; // ES6

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if (loading) {
        return 'checking connection...';
    }

    if (user) {
        return children;
    }
    return <Navigate to="/signin" state={location.pathname} />;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node,
};
