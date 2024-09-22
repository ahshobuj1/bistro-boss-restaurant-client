import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth/useAuth';
import {useLocation, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic/useAxiosPublic';

const SocialLogin = () => {
    const {loginWithGoogle} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((res) => {
                //save user data to database
                const userInfo = {
                    name: res.user.displayName,
                    email: res.user.email,
                    photoURL: res.user.photoURL,
                };

                axiosPublic
                    .post('/users', userInfo)
                    .then(() => {
                        console.log('under public axios ', userInfo);
                        Swal.fire({
                            title: 'Success',
                            text: 'Your account has been logged in successfully!',
                            icon: 'success',
                        });
                        navigate(location ? location?.state : '/');
                    })
                    .catch((err) => console.log(err.message));
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
