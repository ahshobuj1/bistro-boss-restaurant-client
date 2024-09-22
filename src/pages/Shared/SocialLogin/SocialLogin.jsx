import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth/useAuth';
import {useLocation, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {loginWithGoogle} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'Your account has been logged in successfully!',
                    icon: 'success',
                });
                navigate(location ? location?.state : '/');
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="flex gap-6 justify-center text-3xl py-5">
            <button onClick={handleGoogleLogin}>
                <FaGoogle />
            </button>
            <FaGithub />
            <FaFacebook />
        </div>
    );
};

export default SocialLogin;
