import useAuth from '../../../../hooks/useAuth/useAuth';

const AdminHome = () => {
    const {user} = useAuth();

    return (
        <div>
            <h2 className="text3xl">Hi {user?.displayName}, Welcome Back</h2>
        </div>
    );
};

export default AdminHome;
