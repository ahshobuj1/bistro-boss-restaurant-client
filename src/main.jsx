import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {RouterProvider} from 'react-router-dom';
import router from './Router/Routes.jsx';
import UserContext from './Context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UserContext>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </UserContext>
    </StrictMode>
);
