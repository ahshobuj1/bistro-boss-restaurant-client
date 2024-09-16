import App from '../App';

import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import Menu from '../pages/MyMenu/Menu/Menu';
import Shop from '../pages/MyShop/Shop/Shop';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';

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
]);

export default router;
