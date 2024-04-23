import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({loggedIn}) => {
    return loggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;