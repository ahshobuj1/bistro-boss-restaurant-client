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
                path: 'cart',
                element: (
                    <PrivateRoutes>
                        <Cart />
                    </PrivateRoutes>
                ),
            },

            // Admin only path
            {
                path: 'allUsers',
                element: (
                    <AdminRoutes>
                        <AllUsers />
                    </AdminRoutes>
                ),
            },
        ],
    },
]);

export default router;
