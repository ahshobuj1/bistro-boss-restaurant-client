import {Link, NavLink} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import useCartQuery from '../../../hooks/useCartQuery/useCartQuery';
import useAdmin from '../../../hooks/useAdmin/useAdmin';

const Navbar = () => {
    const {user, logoutUser} = useAuth();
    const [carts] = useCartQuery();
    const [isAdmin] = useAdmin();

    const totalPrice = carts.reduce(
        (prevTotal, cart) => prevTotal + cart.price,
        0
    );

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to logout this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Logout!',
        }).then((result) => {
            if (result.isConfirmed) {
                logoutUser()
                    .then(() => {
                        Swal.fire({
                            title: 'Logged out!',
                            text: 'Your account has been logged out.',
                            icon: 'success',
                        });
                    })
                    .catch((err) => console.log(err.message));
            }
        });
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/menu">MENU</NavLink>
            </li>
            <li>
                <NavLink to="/shop/salads">SHOP</NavLink>
            </li>

            {/* Nested ternary Operator */}
            <li>
                <NavLink
                    to={
                        user
                            ? isAdmin
                                ? '/dashboard/adminHome'
                                : '/dashboard/userHome'
                            : '/dashboard'
                    }>
                    DASHBOARD
                </NavLink>
            </li>

            {/* * Explanation of Nested Ternary 

            {user && isAdmin && (
                <li>
                    <NavLink to="/dashboard/adminHome">DASHBOARD</NavLink>
                </li>
            )}

            {user && !isAdmin && (
                <li>
                    <NavLink to="/dashboard/userHome">DASHBOARD</NavLink>
                </li>
            )} */}

            <li>
                <NavLink to="/contact">CONTACT US</NavLink>
            </li>
        </>
    );

    return (
        <nav>
            <div className="navbar max-w-screen-xl fixed text-white bg-[#05050596] z-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-end hidden lg:flex w-full">
                    <ul className="menu menu-horizontal px-1">{navLinks}</ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end text-black">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="badge badge-sm indicator-item">
                                    {carts.length}
                                </span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">
                                    {carts.length} Items
                                </span>
                                <span className="text-info">
                                    Subtotal: $ {totalPrice}
                                </span>
                                <div className="card-actions">
                                    <Link to="/dashboard/cart">
                                        <button className="btn btn-sm px-12 btn-secondary w-full ">
                                            View cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        {user ? (
                            <>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="user profile image"
                                            src={
                                                user
                                                    ? user.photoURL
                                                    : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                                            }
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                                    <li>
                                        <a className="justify-between text-xs">
                                            {user?.email && user?.email}
                                            <span className="badge card-normal text-xs">
                                                New
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>Settings</a>
                                    </li>
                                    <li>
                                        <a onClick={handleLogout}>Logout</a>
                                    </li>
                                </ul>
                            </>
                        ) : (
                            <li>
                                <NavLink
                                    to="/signin"
                                    className="btn btn-sm btn-neutral">
                                    Login
                                </NavLink>
                            </li>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
