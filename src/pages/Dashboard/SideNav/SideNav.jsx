import {BsCalendar2DateFill} from 'react-icons/bs';
import {
    FaCalendar,
    FaCcAmazonPay,
    FaHome,
    FaShoppingBag,
    FaShoppingCart,
} from 'react-icons/fa';
import {IoMdMenu} from 'react-icons/io';
import {MdContactMail} from 'react-icons/md';
import {TbMessageStar} from 'react-icons/tb';
import {NavLink} from 'react-router-dom';

const SideNav = () => {
    return (
        <ul className="menu bg-[#D1A054] min-h-screen w-60 p-5 uppercase text-black">
            <li>
                <NavLink to="/dashboard/home">
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
                <NavLink to="/dashboard/payment">
                    <FaCcAmazonPay></FaCcAmazonPay> Payment History
                </NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/cart">
                    <FaShoppingCart></FaShoppingCart>My cart
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

            <div className="divider"></div>

            <li>
                <NavLink to="/">
                    <FaHome></FaHome>Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/menu">
                    <IoMdMenu></IoMdMenu> menu
                </NavLink>
            </li>
            <li>
                <NavLink to="/shop/salads">
                    <FaShoppingBag></FaShoppingBag> Shop
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact">
                    <MdContactMail></MdContactMail> Contact
                </NavLink>
            </li>
        </ul>
    );
};

export default SideNav;
