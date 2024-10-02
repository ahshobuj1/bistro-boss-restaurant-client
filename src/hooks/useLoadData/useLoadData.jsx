import {useQuery} from '@tanstack/react-query';
import useAxiosPublic from '../useAxiosPublic/useAxiosPublic';

const useLoadData = () => {
    const axiosPublic = useAxiosPublic();

    const {
        data: menuItems = [],
        isPending: loadingItems,
        refetch,
    } = useQuery({
        queryKey: ['menuItems'],
        queryFn: async () => {
            const res = await axiosPublic.get(
                'https://bistro-boss-restaurant-server-livid.vercel.app/menu'
            );
            return res.data;
        },
    });

    return [menuItems, loadingItems, refetch];
};

export default useLoadData;
