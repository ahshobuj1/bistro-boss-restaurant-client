import {useQuery} from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure/useAxiosSecure';
import {FaDollarSign, FaUsers} from 'react-icons/fa';
import {MdProductionQuantityLimits} from 'react-icons/md';
import {LiaCarSideSolid} from 'react-icons/lia';

const AdminHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: adminStats = {}} = useQuery({
        queryKey: ['admin-stats', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        },
    });

    return (
        <div className="bg-slate-100 p-3">
            <h2 className="text-2xl mb-5 italic">
                Hi {user?.displayName}, Welcome Back
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="stats shadow w-56 mx-auto ">
                    <div className="stat bg-gradient-to-r from-cyan-200 to-blue-100 ">
                        <div className="stat-value text-2xl text-center">
                            ${adminStats.revenue}
                        </div>
                        <div className="stat-value text-2xl text-center">
                            Revenue
                        </div>
                        <div className="stat-figure text-secondary text-2xl">
                            <FaDollarSign />
                        </div>
                    </div>
                </div>
                <div className="stats shadow w-56 mx-auto">
                    <div className="stat bg-gradient-to-r from-pink-400 to-slate-50">
                        <div className="stat-value text-2xl text-center">
                            {adminStats.users}
                        </div>
                        <div className="stat-value text-2xl text-center">
                            Customers
                        </div>
                        <div className="stat-figure text-secondary text-2xl">
                            <FaUsers />
                        </div>
                    </div>
                </div>
                <div className="stats shadow w-56 mx-auto">
                    <div className="stat bg-gradient-to-r from-pink-200 to-indigo-300">
                        <div className="stat-value text-2xl text-center">
                            {adminStats.products}
                        </div>
                        <div className="stat-value text-2xl text-center">
                            Products
                        </div>
                        <div className="stat-figure text-secondary text-2xl">
                            <MdProductionQuantityLimits />
                        </div>
                    </div>
                </div>

                <div className="stats shadow w-56 mx-auto">
                    <div className="stat bg-gradient-to-r from-sky-200 to-violet-300">
                        <div className="stat-value text-2xl text-center">
                            {adminStats.orders}
                        </div>
                        <div className="stat-value text-2xl text-center">
                            Orders
                        </div>
                        <div className="stat-figure text-secondary text-2xl">
                            <LiaCarSideSolid />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
