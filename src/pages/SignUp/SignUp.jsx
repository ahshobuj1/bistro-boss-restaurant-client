import {Link} from 'react-router-dom';
import bgImage from '../../assets/others/authentication.png';
import SignUpImg from '../../assets/others/authentication2.png';
import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa';
import {useForm} from 'react-hook-form';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const {name, photoURL, email, password} = data;
    };

    console.log('found errors ', errors);

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
                                                'At least one upper case, one lower case, one digit and special characters',
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
                                <div className="flex gap-6 justify-center text-3xl py-5">
                                    <FaGoogle />
                                    <FaGithub />
                                    <FaFacebook />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
