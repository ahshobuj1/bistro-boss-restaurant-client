import {Link, useNavigate} from 'react-router-dom';
import bgImage from '../../assets/others/authentication.png';
import SignUpImg from '../../assets/others/authentication2.png';
import {useForm} from 'react-hook-form';
import useAuth from '../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import {updateProfile} from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
import useAxiosPublic from '../../hooks/useAxiosPublic/useAxiosPublic';

const SignUp = () => {
    const {createUser} = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        const {name, photoURL, email, password} = data;

        createUser(email, password)
            .then((res) => {
                console.log(res.user);

                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photoURL,
                })
                    .then(() => {
                        // save user data in database
                        const userInfo = {name, photoURL, email};

                        axiosPublic.post('/users', userInfo).then((res) => {
                            console.log(res.data);
                            if (res.data.insertedId) {
                                Swal.fire({
                                    title: 'Success',
                                    text: 'Your account has been created successfully!',
                                    icon: 'success',
                                });
                                navigate('/');
                            }
                        });
                    })
                    .catch((err) => console.log(err.message));
            })
            .catch((err) => console.log(err.message));
    };

    // console.log('found errors ', errors);

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
                        <img src={SignUpImg} alt="register images" />
                    </div>
                    <div className="card w-full max-w-sm ">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    {...register('name', {
                                        required: 'Name is required',
                                        maxLength: {
                                            value: 20,
                                            message: 'Max length is 20',
                                        },
                                    })}
                                    type="text"
                                    placeholder="Type your name"
                                    className="input input-bordered"
                                />
                            </div>
                            <p className="text-orange-500">
                                {errors.name?.message}
                            </p>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input
                                    {...register('photoURL')}
                                    type="text"
                                    placeholder="PhotoURL"
                                    className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                            message: 'Type a valid email',
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
                                        minLength: {
                                            value: 8,
                                            message:
                                                'password min length must be 8 characters',
                                        },
                                        pattern: {
                                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                            message:
                                                'At least one upper case, one lower case, one digit and one special characters',
                                        },
                                    })}
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                            </div>
                            <p className="text-orange-500">
                                {errors.password?.message}
                            </p>

                            <div className="form-control">
                                <input
                                    type="submit"
                                    value="SignUp"
                                    className="btn btn-outline bg-[#D1A054] text-white"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-orange-400">
                                    Already have an account !{' '}
                                    <Link
                                        to="/signin"
                                        className="text-medium text-blue-500">
                                        Login please
                                    </Link>
                                </p>
                                <p>Or sign up with</p>

                                <SocialLogin />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
