import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {RouterProvider} from 'react-router-dom';
import router from './Router/Routes.jsx';
import UserContext from './Context/UserContext.jsx';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UserContext>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}>
                    <App />
                </RouterProvider>
            </QueryClientProvider>
        </UserContext>
    </StrictMode>
);
