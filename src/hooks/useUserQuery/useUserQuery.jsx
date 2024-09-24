import {useQuery} from '@tanstack/react-query';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

const useUserQuery = () => {
    const axiosASecure = useAxiosSecure();

    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosASecure.get(`/users`);
            return res.data;
        },
    });

    return [users, refetch];
};

export default useUserQuery;
