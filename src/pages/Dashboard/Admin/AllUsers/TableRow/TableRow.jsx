import {FaTrash, FaUsers} from 'react-icons/fa';
import PropTypes from 'prop-types'; // ES6
import useAxiosSecure from '../../../../../hooks/useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';
import useUserQuery from '../../../../../hooks/useUserQuery/useUserQuery';

const TableRow = ({user, idx}) => {
    const {email, name, photoURL} = user;
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useUserQuery();

    const handleAdMakeAdmin = (email) => {
        console.log(email);
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to make the user (${email}) Admin!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Admin him!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users?email=${email}`).then((res) => {
                    console.log(res);
                    if (res.data.modifiedCount > 0) {
                        Swal.fire({
                            title: 'success!',
                            text: `(${email}) User Admin Now.`,
                            icon: 'success',
                        });

                        refetch();
                    }
                });
            }
        });
    };

    const handleDeleteUser = (email) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users?email=${email}`).then((res) => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success',
                        });

                        refetch();
                    }
                });
            }
        });
    };

    return (
        <tr>
            <th>{idx + 1}</th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={photoURL} alt="user image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name} </div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td>
                {user?.role === 'admin' ? (
                    'Admin'
                ) : (
                    <button
                        onClick={() => handleAdMakeAdmin(email)}
                        className="btn btn-ghost btn-sm bg-[#D1A054] text-xl text-white">
                        <FaUsers></FaUsers>
                    </button>
                )}
            </td>
            <th>
                <button
                    onClick={() => handleDeleteUser(email)}
                    className="btn btn-ghost btn-sm bg-red-500 text-xl text-white">
                    <FaTrash></FaTrash>
                </button>
            </th>
        </tr>
    );
};

export default TableRow;

TableRow.propTypes = {
    user: PropTypes.object,
    idx: PropTypes.number,
};
