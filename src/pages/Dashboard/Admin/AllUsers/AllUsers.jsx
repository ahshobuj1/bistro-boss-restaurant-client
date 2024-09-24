import {useQuery} from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure/useAxiosSecure';
import TableRow from './TableRow/TableRow';

const AllUsers = () => {
    const axiosASecure = useAxiosSecure();

    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosASecure(`/users`);
            return res.data;
        },
    });

    return (
        <section>
            <h1 className="text-3xl font-bold mb-5">
                Total Users : {users.length}
            </h1>

            <div className="overflow-x-auto rounded-t-lg">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => (
                            <TableRow key={user._id} user={user} idx={idx} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUsers;
