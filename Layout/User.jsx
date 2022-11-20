import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
//import BirdApi from "../components/BirdsDetails";

const User = () => {

    return (
    <body className="main">
    <NavBar />
    <Outlet />
    <Footer />
    </body>)
}

export default User;