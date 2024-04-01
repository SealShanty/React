import React, { Component, StrictMode } from "react";
import ReactDOM from 'react-dom/client'
import "./styles.css";

import StateExample from "./components/SpongeState";
import NavigationBar from "./components/NavigationBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BouncingDVDLogo from "./components/Bouncy";

const router = createBrowserRouter([
    {
        element: <NavigationBar />,
        children: [
            {
                path: "/",
                element: <BouncingDVDLogo/>
            },
            {
                path: "/about",
                element: <h1>Nothing to see here.. yet :pp</h1>
            },
            {
                path: "/spongee",
                element: <StateExample />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <body>
            <RouterProvider router={router} />
        </body>
    </React.StrictMode>
);