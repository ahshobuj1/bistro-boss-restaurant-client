import {BsCalendar2DateFill} from 'react-icons/bs';
import {
    FaCalendar,
    FaCcAmazonPay,
    FaHome,
    FaShoppingCart,
} from 'react-icons/fa';
import {TbMessageStar} from 'react-icons/tb';
import {NavLink} from 'react-router-dom';
import useCartQuery from '../../../../hooks/useCartQuery/useCartQuery';

const UserNav = () => {
    const [carts] = useCartQuery();

    return (
        <>
            <li>
                <NavLink to="/dashboard/userHome">
                    <FaHome></FaHome>
                    User Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/reservation">
                    <FaCalendar></FaCalendar> Reservation
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/paymentHistory">
                    <FaCcAmazonPay></FaCcAmazonPay> Payment History
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/cart">
                    <FaShoppingCart></FaShoppingCart>My cart ({carts.length})
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/review">
                    <TbMessageStar></TbMessageStar> add review
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/bookings">
                    <BsCalendar2DateFill></BsCalendar2DateFill> My Bookings
                </NavLink>
            </li>
        </>
    );
};

export default UserNav;
