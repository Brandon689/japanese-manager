import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
//import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/themes/soho-dark/theme.css';

import './index.css';
import Root from './routes/root';
import Contact from './routes/contact';
import ErrorPage from './routes/error-page';
import { loader as contactsLoader } from './routes/contact'
import Login from "routes/login-signup.tsx";
import DashboardPage from "routes/file-tree.tsx";
import GridPage from "routes/grid.tsx";
import AnimeDetailPage from "routes/anime-detail"
import Wanakana from "./routes/wanakana";
import FileUploader from "./components/file-upload";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'contacts/:contactId',
                element: <Contact />,
                loader: contactsLoader
            },
            {
                path: 'login',
                element: <Login />,
                loader: contactsLoader
            },
            {
                path: 'dash',
                element: <DashboardPage />,
                loader: contactsLoader
            },
            {
                path: 'grid',
                element: <GridPage />
            },
            {
                path: 'grid/:anime',
                element: <AnimeDetailPage />,
                loader: contactsLoader
            },
            {
                path: 'wanakana',
                element: <Wanakana />,
                loader: contactsLoader
            },
        ],
    },
]);

const reactRouterApp = (
    <React.StrictMode>
        <PrimeReactProvider>
            <RouterProvider router={router}/>
        </PrimeReactProvider>
    </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')!).render(reactRouterApp);
