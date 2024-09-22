import {FaHome, FaShoppingBag} from 'react-icons/fa';
import {IoMdMenu} from 'react-icons/io';
import {MdContactMail} from 'react-icons/md';
import {NavLink} from 'react-router-dom';

const CommonNav = () => {
    return (
        <>
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
        </>
    );
};

export default CommonNav;
