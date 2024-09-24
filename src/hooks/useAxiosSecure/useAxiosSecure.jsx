import axios from 'axios';
import useAuth from '../useAuth/useAuth';
import {useNavigate} from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
    const {logoutUser} = useAuth();
    const navigate = useNavigate();

    axiosSecure.interceptors.request.use(
        (config) => {
            // Do something before request is sent
            const token = localStorage.getItem('access-token');
            config.headers.authentication = `Bearer ${token}`;
            return config;
        },
        (error) => {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    // Intercepts for 401 and 403
    axiosSecure.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            console.log('error in the interceptors', error.response.status);
            const status = error.response.status;
            if ((status === 401) | (status === 403)) {
                // console.log('logout the user');
                // Logout unauthorized user
                await logoutUser();
                navigate('/signin');
            }
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;
