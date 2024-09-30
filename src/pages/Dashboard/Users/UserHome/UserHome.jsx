import useAuth from '../../../../hooks/useAuth/useAuth';

const UserHome = () => {
    const {user} = useAuth();

    return (
        <div>
            <h2 className="text-3xl">
                Hi {user?.displayName}, Welcome Back To The UserHome
            </h2>
        </div>
    );
};

export default UserHome;
