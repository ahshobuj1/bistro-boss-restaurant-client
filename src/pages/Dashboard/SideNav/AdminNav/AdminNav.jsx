import {FaBook, FaHome, FaList, FaUsers} from 'react-icons/fa';
import {ImSpoonKnife} from 'react-icons/im';
import {NavLink} from 'react-router-dom';

const AdminNav = () => {
    return (
        <>
            <li>
                <NavLink to="/dashboard/adminHome">
                    <FaHome></FaHome>
                    Admin Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/addItems">
                    <ImSpoonKnife></ImSpoonKnife> Add Items
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/manageItems">
                    <FaList></FaList> Manage Items
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/manageBookings">
                    <FaBook></FaBook> Manage Bookings
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/allUsers">
                    <FaUsers></FaUsers> All Users
                </NavLink>
            </li>
        </>
    );
};

export default AdminNav;
