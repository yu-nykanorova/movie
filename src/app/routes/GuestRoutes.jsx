<<<<<<< HEAD
import { Navigate, Outlet } from "react-router-dom";

const GuestRoutes = ({loggedIn}) => {
    return loggedIn ? <Navigate to="/" replace /> : <Outlet />;
};

=======
import { Navigate, Outlet } from "react-router-dom";

const GuestRoutes = ({loggedIn}) => {
    return loggedIn ? <Navigate to="/" replace /> : <Outlet />;
};

>>>>>>> ea9b5e5fc51b3d5bf85c1cb30654ebff3ccf8fa2
export default GuestRoutes;