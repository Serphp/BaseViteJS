import { Outlet } from "react-router-dom";

const User = () => {
    return (
    <>
    <h1> Nav bar</h1>

    <Outlet />

    <h2> footer </h2>
    </>)
}

export default User;