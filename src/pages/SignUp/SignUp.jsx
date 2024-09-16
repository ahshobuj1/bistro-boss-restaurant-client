import {Link} from 'react-router-dom';
import bgImage from '../../assets/others/authentication.png';
import SignUpImg from '../../assets/others/authentication2.png';
import {FaFacebook, FaGithub, FaGoogle} from 'react-icons/fa';

const SignUp = () => {
    return (
        <section>
            <div className="hero bg-transparent shadow-2xl">
                <img src={bgImage} alt="" className="w-full h-full" />
                <div className="hero-content flex-col lg:flex-row-reverse mx-5 my-24 shadow-2xl rounded-xl">
                    <div className="text-center lg:text-left">
                        <img src={SignUpImg} alt="register images" />
                    </div>
                    <div className="card w-full max-w-sm ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Type your name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="PhotoURL"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
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
                                    value="SignUp"
                                    className="btn btn-outline bg-[#D1A054] text-white"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-orange-400">
                                    Already have an account !{' '}
                                    <Link className="text-medium text-blue-500">
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
