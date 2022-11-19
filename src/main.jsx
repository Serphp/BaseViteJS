import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from "react-router-dom";
import ConProvider from '../context/ConProvider'
import { router } from '../router/router'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ConProvider>
        <RouterProvider router={router} />
        </ConProvider>
    </React.StrictMode>
);
