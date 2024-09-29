import {useQuery} from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import useAuth from '../useAuth/useAuth';

const useCartQuery = () => {
    const axiosSecure = useAxiosSecure();
    const {user, loading} = useAuth();

    const {data: carts = [], refetch} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        },
    });

    return [carts, refetch];
};

export default useCartQuery;
