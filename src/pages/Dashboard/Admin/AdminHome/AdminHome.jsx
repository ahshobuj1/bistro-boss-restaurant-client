import {useQuery} from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure/useAxiosSecure';
import {FaDollarSign, FaUsers} from 'react-icons/fa';
import {MdProductionQuantityLimits} from 'react-icons/md';
import {LiaCarSideSolid} from 'react-icons/lia';

import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    PieChart,
    Pie,
    Sector,
    ResponsiveContainer,
    Legend,
} from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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

    const {data: orderData = []} = useQuery({
        queryKey: ['admin-order', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        },
    });

    // Custom Shape Bar Chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${
            x + width / 2
        },${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
            y + height
        } ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        // eslint-disable-next-line react/prop-types
        const {fill, x, y, width, height} = props;

        return (
            <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
        );
    };

    // Pie Chart with customize label
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = orderData?.map((order) => {
        return {name: order.category, value: order.revenue};
    });

    return (
        <div className="bg-slate-100 p-3">
            <h2 className="text-2xl mb-5 italic">
                Hi {user?.displayName}, Welcome Back
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto lg:overflow-x-hidden">
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

            <div className="py-6 lg:flex gap-6 ">
                <div className="lg:w-1/2 overflow-x-auto lg:overflow-x-hidden lg:pt-20">
                    <BarChart
                        width={500}
                        height={300}
                        data={orderData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar
                            dataKey="count"
                            fill="#8884d8"
                            shape={<TriangleBar />}
                            label={{position: 'top'}}>
                            {orderData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={colors[index % 6]}
                                />
                            ))}
                        </Bar>
                        <Legend></Legend>
                    </BarChart>
                </div>

                <div className="lg:w-1/2 mx-auto text-center overflow-x-auto">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value">
                            {pieChartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
