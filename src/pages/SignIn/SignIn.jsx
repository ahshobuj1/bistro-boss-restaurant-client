import {Link, useLocation, useNavigate} from 'react-router-dom';
import bgImage from '../../assets/others/authentication.png';
import SignInImg from '../../assets/others/authentication2.png';
import {useForm} from 'react-hook-form';
import useAuth from '../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignIn = () => {
    const {loginUser} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        const { email, password} = data;
      //  console.log(name, photoURL, email, password);

        loginUser(email, password)
            .then(() => {
              //  console.log(res.user);

                Swal.fire({
                    title: 'Success',
                    text: 'Your account has been logged in successfully!',
                    icon: 'success',
                });
               // console.log(location?.state);
                navigate(location?.state ? location?.state : '/');
            })
            .catch((err) => console.log(err.message));
    };

    //console.log('found errors ', errors);

    return (
        <section>
            <div className="hero bg-transparent shadow-2xl">
                <img
                    src={bgImage}
                    alt="background image"
                    className="w-full h-full lg:h-screen"
                />
                <div className="hero-content flex-col lg:flex-row-reverse mx-5 my-24 shadow-2xl rounded-xl">
                    <div className="text-center lg:text-left">
                        <img src={SignInImg} alt="register images" />
                    </div>
                    <div className="card w-full max-w-sm ">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                            message: 'type a valid email',
                                        },
                                    })}
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <p className="text-orange-500">
                                {errors.email?.message}
                            </p>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register('password', {
                                        required: 'Password is required',
                                    })}
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>

                            <div className="form-control">
                                <input
                                    type="submit"
                                    value="Login"
                                    className="btn btn-outline bg-[#D1A054] text-white"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-orange-400">
                                    New here !{' '}
                                    <Link
                                        to="/signup"
                                        className="text-medium text-blue-500">
                                        Please create account.
                                    </Link>
                                </p>
                                <p>Or login with</p>

                                <SocialLogin />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
