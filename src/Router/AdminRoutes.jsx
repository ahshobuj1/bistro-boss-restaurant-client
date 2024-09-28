import {Navigate, useLocation} from 'react-router-dom';
import useAdmin from '../hooks/useAdmin/useAdmin';
import useAuth from '../hooks/useAuth/useAuth';
import PropTypes from 'prop-types'; // ES6

const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
            <div className="flex w-52 mx-auto my-6 flex-col gap-4">
                <p>Please wait for while...</p>
                <div className="flex items-center gap-4">
                    <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-4 w-20"></div>
                        <div className="skeleton h-4 w-28"></div>
                    </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
            </div>
        );
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
