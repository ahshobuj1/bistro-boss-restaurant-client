import {Link} from 'react-router-dom';
import errorGif from '../../assets/others/profile.png';
const ErrorPage = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-5">
            <h2 className="text-3xl">Page not found!</h2>
            <img src={errorGif} alt="error gif" />

            <Link to="/" className="btn btn-neutral px-10">
                Back To The Home
            </Link>
        </div>
    );
};

export default ErrorPage;
