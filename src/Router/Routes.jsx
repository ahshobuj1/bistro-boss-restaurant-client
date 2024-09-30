import App from '../App';

import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import Menu from '../pages/MyMenu/Menu/Menu';
import Shop from '../pages/MyShop/Shop/Shop';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import Dashboard from '../pages/Dashboard/Dashboard/Dashboard';
import Cart from '../pages/Dashboard/Users/Cart/Cart';
import AllUsers from '../pages/Dashboard/Admin/AllUsers/AllUsers';
import AdminRoutes from './AdminRoutes';
import PrivateRoutes from './PrivateRoutes';
import AddItems from '../pages/Dashboard/Admin/AddItems/AddItems';
import ManageItems from '../pages/Dashboard/Admin/ManageItems/ManageItems';
import UpdateItem from '../pages/Dashboard/Admin/UpdateItem/UpdateItem';
import StripePayment from '../pages/Dashboard/Users/PaymentMethodStripe/StripePayment';
import PaymentHistory from '../pages/Dashboard/Users/PaymentHistory/PaymentHistory';
import UserHome from '../pages/Dashboard/Users/UserHome/UserHome';
import AdminHome from '../pages/Dashboard/Admin/AdminHome/AdminHome';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/menu',
                element: <Menu />,
            },
            {
                path: '/shop/:category',
                element: <Shop />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/signin',
                element: <SignIn />,
            },
        ],
    },
    {
        path: 'dashboard',
        element: (
            <PrivateRoutes>
                <Dashboard />
            </PrivateRoutes>
        ),
        children: [
            // Users path
            {
                path: 'userHome',
                element: (
                    <PrivateRoutes>
                        <UserHome />
                    </PrivateRoutes>
                ),
            },
            {
                path: 'paymentHistory',
                element: (
                    <PrivateRoutes>
                        <PaymentHistory />
                    </PrivateRoutes>
                ),
            },
            {
                path: 'cart',
                element: (
                    <PrivateRoutes>
                        <Cart />
                    </PrivateRoutes>
                ),
            },

            // Admin only path
            {
                path: 'adminHome',
                element: (
                    <AdminRoutes>
                        <AdminHome />
                    </AdminRoutes>
                ),
            },

            {
                path: 'allUsers',
                element: (
                    <AdminRoutes>
                        <AllUsers />
                    </AdminRoutes>
                ),
            },
            {
                path: 'addItems',
                element: (
                    <AdminRoutes>
                        <AddItems />
                    </AdminRoutes>
                ),
            },
            {
                path: 'manageItems',
                element: (
                    <AdminRoutes>
                        <ManageItems />
                    </AdminRoutes>
                ),
            },
            {
                path: 'updateItem/:id',
                element: (
                    <AdminRoutes>
                        <UpdateItem />
                    </AdminRoutes>
                ),
                loader: ({params}) =>
                    fetch(`http://localhost:5000/menu/${params.id}`),
            },
            {
                path: 'payment',
                element: <StripePayment />,
            },
        ],
    },
]);

export default router;
