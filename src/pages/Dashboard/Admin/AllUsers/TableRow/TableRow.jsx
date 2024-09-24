import {FaTrash, FaUsers} from 'react-icons/fa';
import PropTypes from 'prop-types'; // ES6

const TableRow = ({user, idx}) => {
    const {email, name, photoURL} = user;

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
                <button className="btn btn-ghost btn-sm bg-[#D1A054] text-xl text-white">
                    {user?.role === 'admin' ? 'admin' : <FaUsers></FaUsers>}
                </button>
            </td>
            <th>
                <button className="btn btn-ghost btn-sm bg-red-500 text-xl text-white">
                    <FaTrash></FaTrash>
                </button>
            </th>
        </tr>
    );
};

export default TableRow;

TableRow.propTypes = {
    user: PropTypes.func,
    idx: PropTypes.number,
};
