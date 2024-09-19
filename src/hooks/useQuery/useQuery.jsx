import {useQuery} from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import useAuth from '../useAuth/useAuth';

const useQueryMethod = () => {
    const axiosSecure = useAxiosSecure();
    const {user, loading} = useAuth();

    if (loading) {
        return 'loading';
    }

    const {data: carts = []} = useQuery({
        queryKey: ['carts'],
        queryFn: () => {
            axiosSecure
                .get(`/carts?email=${user?.email}`)
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err.message));
        },
    });

    return carts;
};

export default useQueryMethod;
