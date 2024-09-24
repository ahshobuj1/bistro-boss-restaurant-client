import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
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

    return axiosSecure;
};

export default useAxiosSecure;
