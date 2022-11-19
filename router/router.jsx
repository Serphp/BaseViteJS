import { createBrowserRouter } from "react-router-dom"
import App from "../src/App"
import About from "../pages/About"
import User from "../Layout/User"
import Home from "../pages/Home"

export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <User />,
        children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "about",
            element: <About />
        }]
    },
  ])