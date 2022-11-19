import { createBrowserRouter } from "react-router-dom"
import App from "../src/App"
import About from "../pages/About"
import User from "../Layout/User"

export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <User />,
        children: [
        {
            index: true,
            element: <App />
        },
        {
            path: "about",
            element: <About />
        }]
    },
  ])