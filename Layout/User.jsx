import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import BirdApi from "../components/BirdApi";

const User = () => {

    const [birds, setBirds] = useState();

    const bird_url = "https://xeno-canto.org/api/2/recordings?query=cnt:brazil"
    const Api_Bird = () => {
        fetch(bird_url)
        .then(response => response.json())
        .then(data => setBirds(data.recordings))
        .catch(error => console.log(error))
    }


    useEffect(() => {
        console.log(Api_Bird(bird_url));
    }, [])

    return (
    <>
    <NavBar />
    <Outlet />
    <Footer />
    </>)
}

export default User;