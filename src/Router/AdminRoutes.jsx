import {Navigate, useLocation} from 'react-router-dom';
import useAdmin from '../hooks/useAdmin/useAdmin';
import useAuth from '../hooks/useAuth/useAuth';
import PropTypes from 'prop-types'; // ES6

const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-ring loading-lg"></span>;
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={location.pathname} />;
};

export default AdminRoutes;

AdminRoutes.propTypes = {
    children: PropTypes.node,
};
