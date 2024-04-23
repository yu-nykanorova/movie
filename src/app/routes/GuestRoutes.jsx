import { Navigate, Outlet } from "react-router-dom";

const GuestRoutes = ({loggedIn}) => {
    return loggedIn ? <Navigate to="/" replace /> : <Outlet />;
};

export default GuestRoutes;