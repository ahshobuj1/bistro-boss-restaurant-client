import useUserQuery from '../../../../hooks/useUserQuery/useUserQuery';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import TableRow from './TableRow/TableRow';

const AllUsers = () => {
    const [users] = useUserQuery();

    return (
        <section>
            <div>
                <SectionTitle
                    heading="manage all users"
                    subHeading="How Many! "
                />
            </div>
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
